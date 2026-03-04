/* ========================================
   ULTIMATE CLOUD - SHARED JAVASCRIPT
   ======================================== */

// ==================== CONFIGURATION ====================
const CLOUD_CONFIG = {
    VERSION: '2.0.0',
    STORAGE_LIMIT: 1024 * 1024 * 1024, // 1GB
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
    API_URL: window.location.origin + '/private-cloud/api/',
    THEMES: {
        dark: {
            bg: '#0a0f1e',
            card: '#1e293b',
            text: '#ffffff'
        },
        light: {
            bg: '#f8fafc',
            card: '#ffffff',
            text: '#0f172a'
        }
    }
};

// ==================== UTILITY FUNCTIONS ====================

// Generate unique ID
function generateId() {
    return Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Truncate filename
function truncateFilename(name, max = 30) {
    if (name.length <= max) return name;
    const ext = name.split('.').pop();
    const nameWithoutExt = name.substring(0, name.lastIndexOf('.'));
    return nameWithoutExt.substring(0, max - 3 - ext.length) + '...' + ext;
}

// Get file icon based on type
function getFileIcon(type) {
    if (type?.includes('pdf')) return 'fa-file-pdf';
    if (type?.includes('image')) return 'fa-file-image';
    if (type?.includes('word')) return 'fa-file-word';
    if (type?.includes('excel')) return 'fa-file-excel';
    if (type?.includes('powerpoint')) return 'fa-file-powerpoint';
    if (type?.includes('zip') || type?.includes('rar')) return 'fa-file-archive';
    if (type?.includes('audio')) return 'fa-file-audio';
    if (type?.includes('video')) return 'fa-file-video';
    if (type?.includes('text')) return 'fa-file-alt';
    return 'fa-file';
}

// Get file color class
function getFileColor(type) {
    if (type?.includes('pdf')) return 'pdf';
    if (type?.includes('image')) return 'image';
    if (type?.includes('word')) return 'word';
    if (type?.includes('excel')) return 'excel';
    return 'default';
}

// Format date relative to now
function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    
    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 }
    ];
    
    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count > 0) {
            return count + ' ' + interval.label + (count > 1 ? 's' : '') + ' ago';
        }
    }
    
    return 'just now';
}

// ==================== STORAGE MANAGEMENT ====================

// Save to localStorage
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Storage save failed:', e);
        return false;
    }
}

// Load from localStorage
function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        console.error('Storage load failed:', e);
        return defaultValue;
    }
}

// Calculate total storage used
function calculateStorageUsed(files) {
    return files.reduce((sum, file) => sum + (file.size || 0), 0);
}

// Update storage display
function updateStorageDisplay(files, elements) {
    const used = calculateStorageUsed(files);
    const percent = (used / CLOUD_CONFIG.STORAGE_LIMIT) * 100;
    const usedMB = (used / (1024 * 1024)).toFixed(1);
    const limitMB = (CLOUD_CONFIG.STORAGE_LIMIT / (1024 * 1024)).toFixed(0);
    
    if (elements.bar) {
        elements.bar.style.width = percent + '%';
    }
    
    if (elements.text) {
        elements.text.textContent = `${usedMB} MB / ${limitMB} MB`;
    }
    
    return { used, percent };
}

// ==================== NOTIFICATION SYSTEM ====================

// Show toast notification
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) {
        // Create container if not exists
        const newContainer = document.createElement('div');
        newContainer.id = 'toastContainer';
        newContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
        `;
        document.body.appendChild(newContainer);
    }
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        background: ${type === 'success' ? '#10b981' : 
                     type === 'error' ? '#ef4444' : 
                     type === 'warning' ? '#f59e0b' : '#8b5cf6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        margin-bottom: 0.5rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        animation: slideIn 0.3s ease;
        min-width: 250px;
    `;
    
    const icon = type === 'success' ? 'fa-check-circle' :
                 type === 'error' ? 'fa-exclamation-circle' :
                 type === 'warning' ? 'fa-exclamation-triangle' :
                 'fa-info-circle';
    
    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    document.getElementById('toastContainer').appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s reverse';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ==================== FILE VALIDATION ====================

// Validate file before upload
function validateFile(file) {
    if (file.size > CLOUD_CONFIG.MAX_FILE_SIZE) {
        showToast(`${file.name} exceeds 10MB limit`, 'warning');
        return false;
    }
    
    if (!CLOUD_CONFIG.ALLOWED_TYPES.includes(file.type)) {
        showToast(`${file.name} is not a supported file type`, 'warning');
        return false;
    }
    
    return true;
}

// ==================== THEME MANAGEMENT ====================

// Toggle theme
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('cloudTheme', newTheme);
    
    // Update theme color meta
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
        'content',
        newTheme === 'dark' ? '#0a0f1e' : '#f8fafc'
    );
    
    showToast(`Switched to ${newTheme} theme`, 'info');
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('cloudTheme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
}

// ==================== FILE OPERATIONS ====================

// Preview file
function previewFile(file) {
    if (!file) return;
    
    if (file.type?.includes('pdf')) {
        const win = window.open('', '_blank');
        win.document.write(`
            <html>
                <head><title>${file.name}</title></head>
                <body style="margin:0">
                    <embed src="${file.data}" type="application/pdf" width="100%" height="100%">
                </body>
            </html>
        `);
    } else if (file.type?.includes('image')) {
        const win = window.open('', '_blank');
        win.document.write(`
            <html>
                <head><title>${file.name}</title></head>
                <body style="margin:0; display:flex; align-items:center; justify-content:center;">
                    <img src="${file.data}" style="max-width:100%; max-height:100vh;">
                </body>
            </html>
        `);
    } else {
        showToast('Preview not available for this file type', 'warning');
    }
}

// Download file
function downloadFile(file) {
    if (!file) return;
    
    const link = document.createElement('a');
    link.href = file.data;
    link.download = file.name;
    link.click();
    
    showToast(`Downloading ${file.name}`, 'success');
}

// Delete file
function deleteFile(id, files, updateCallback) {
    if (!confirm('Move this file to trash?')) return;
    
    const file = files.find(f => f.id === id);
    if (!file) return;
    
    // Get trash
    const trash = loadFromStorage('trashFiles', []);
    trash.push({
        ...file,
        deletedAt: new Date().toISOString()
    });
    saveToStorage('trashFiles', trash);
    
    // Remove from files
    const newFiles = files.filter(f => f.id !== id);
    saveToStorage('cloudFiles', newFiles);
    
    showToast('File moved to trash', 'warning');
    
    if (updateCallback) updateCallback(newFiles);
}

// ==================== SEARCH ====================

// Search files
function searchFiles(files, query) {
    if (!query) return files;
    
    query = query.toLowerCase();
    return files.filter(file => 
        file.name.toLowerCase().includes(query) ||
        (file.type && file.type.toLowerCase().includes(query)) ||
        (file.folder && file.folder.toLowerCase().includes(query))
    );
}

// ==================== FILTER ====================

// Filter files by type
function filterByType(files, type) {
    if (type === 'all') return files;
    
    return files.filter(file => {
        if (type === 'pdf') return file.type?.includes('pdf');
        if (type === 'image') return file.type?.includes('image');
        if (type === 'document') return file.type?.includes('word') || file.name?.match(/\.(doc|docx|txt)$/);
        if (type === 'spreadsheet') return file.type?.includes('excel') || file.name?.match(/\.(xls|xlsx)$/);
        return true;
    });
}

// ==================== SORT ====================

// Sort files
function sortFiles(files, by = 'date', order = 'desc') {
    return [...files].sort((a, b) => {
        let comparison = 0;
        
        switch(by) {
            case 'name':
                comparison = a.name.localeCompare(b.name);
                break;
            case 'size':
                comparison = (a.size || 0) - (b.size || 0);
                break;
            case 'date':
            default:
                comparison = new Date(b.uploadDate || 0) - new Date(a.uploadDate || 0);
        }
        
        return order === 'desc' ? comparison : -comparison;
    });
}

// ==================== EXPORT ====================

// Export files data
function exportData(files) {
    const data = {
        exported: new Date().toISOString(),
        version: CLOUD_CONFIG.VERSION,
        files: files.map(f => ({
            name: f.name,
            type: f.type,
            size: f.size,
            uploadDate: f.uploadDate,
            folder: f.folder
        }))
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cloud-export-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    showToast('Data exported successfully', 'success');
}

// ==================== INITIALIZATION ====================

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    
    // Add global styles for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(style);
});

// Export utilities
window.cloudUtils = {
    generateId,
    formatFileSize,
    truncateFilename,
    getFileIcon,
    getFileColor,
    timeAgo,
    saveToStorage,
    loadFromStorage,
    calculateStorageUsed,
    updateStorageDisplay,
    showToast,
    validateFile,
    toggleTheme,
    loadTheme,
    previewFile,
    downloadFile,
    deleteFile,
    searchFiles,
    filterByType,
    sortFiles,
    exportData
};
