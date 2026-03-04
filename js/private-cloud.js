/* ========================================
   ADVANCED PRIVATE CLOUD SYSTEM
   Complete rewrite with proper functionality
   ======================================== */

// Configuration
const CONFIG = {
    PASSCODE: '1234', // CHANGE THIS!
    DB_NAME: 'SanjaiCloudDB',
    DB_VERSION: 2,
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: ['application/pdf', 'image/jpeg', 'image/png', 'image/gif'],
    STORAGE_LIMIT: 100 * 1024 * 1024, // 100MB
    ENCRYPTION_KEY: 'sanjai-secure-key-2026'
};

// Global variables
let db = null;
let files = [];
let totalStorage = 0;
let currentUser = {
    name: 'Sanjai Gopal',
    avatar: 'S',
    email: 'sanjai.sparkmail@gmail.com'
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const authSection = document.getElementById('authSection');
    const dashboard = document.getElementById('dashboard');
    
    // Check for existing session
    const session = localStorage.getItem('cloudSession');
    if (session) {
        try {
            const sessionData = JSON.parse(session);
            if (sessionData.expiry > Date.now()) {
                authSection.style.display = 'none';
                dashboard.style.display = 'block';
                initDB().then(() => {
                    loadFiles();
                    updateStorageDisplay();
                });
            } else {
                localStorage.removeItem('cloudSession');
            }
        } catch (e) {
            localStorage.removeItem('cloudSession');
        }
    }
    
    // Setup event listeners
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Passcode input enter key
    const passcodeInput = document.getElementById('passcode');
    if (passcodeInput) {
        passcodeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') authenticate();
        });
    }
    
    // File input
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelect);
    }
    
    // Upload area drag & drop
    const uploadArea = document.getElementById('uploadArea');
    if (uploadArea) {
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });
        
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });
        
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            handleDrop(e);
        });
    }
}

// Initialize IndexedDB
async function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(CONFIG.DB_NAME, CONFIG.DB_VERSION);
        
        request.onerror = () => {
            showNotification('Failed to open database', 'error');
            reject(request.error);
        };
        
        request.onsuccess = (event) => {
            db = event.target.result;
            resolve(db);
        };
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            
            if (!db.objectStoreNames.contains('files')) {
                const store = db.createObjectStore('files', { keyPath: 'id' });
                store.createIndex('name', 'name', { unique: false });
                store.createIndex('type', 'type', { unique: false });
                store.createIndex('uploadDate', 'uploadDate', { unique: false });
                store.createIndex('folder', 'folder', { unique: false });
            }
        };
    });
}

// Authentication
async function authenticate() {
    const passcode = document.getElementById('passcode').value;
    
    if (!passcode) {
        showNotification('Please enter passcode', 'warning');
        return;
    }
    
    // Show loading
    const authBtn = document.querySelector('.auth-btn');
    const originalText = authBtn.innerHTML;
    authBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
    authBtn.disabled = true;
    
    // Simulate authentication delay
    setTimeout(async () => {
        if (passcode === CONFIG.PASSCODE) {
            // Create session
            const session = {
                user: currentUser,
                expiry: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
            };
            localStorage.setItem('cloudSession', JSON.stringify(session));
            
            // Show dashboard
            document.getElementById('authSection').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            
            await initDB();
            await loadFiles();
            updateStorageDisplay();
            
            showNotification('Access granted! Welcome to your private cloud.', 'success');
        } else {
            // Shake animation
            document.querySelector('.auth-card').style.animation = 'shake 0.5s';
            setTimeout(() => {
                document.querySelector('.auth-card').style.animation = '';
            }, 500);
            
            showNotification('Invalid passcode. Please try again.', 'error');
            document.getElementById('passcode').value = '';
        }
        
        authBtn.innerHTML = originalText;
        authBtn.disabled = false;
    }, 1000);
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('cloudSession');
        
        document.getElementById('authSection').style.display = 'block';
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('passcode').value = '';
        
        if (db) {
            db.close();
            db = null;
        }
        
        files = [];
        showNotification('Logged out successfully', 'info');
    }
}

// Load files from database
async function loadFiles() {
    if (!db) await initDB();
    
    try {
        const transaction = db.transaction(['files'], 'readonly');
        const store = transaction.objectStore('files');
        const request = store.getAll();
        
        request.onsuccess = () => {
            files = request.result || [];
            renderFiles();
            calculateStorage();
        };
        
        request.onerror = () => {
            showNotification('Error loading files', 'error');
        };
    } catch (error) {
        console.error('Error loading files:', error);
        showNotification('Error loading files', 'error');
    }
}

// Calculate total storage
function calculateStorage() {
    totalStorage = files.reduce((sum, file) => sum + (file.size || 0), 0);
    updateStorageDisplay();
}

// Update storage display
function updateStorageDisplay() {
    const usedMB = (totalStorage / (1024 * 1024)).toFixed(1);
    const limitMB = CONFIG.STORAGE_LIMIT / (1024 * 1024);
    const percentage = (totalStorage / CONFIG.STORAGE_LIMIT) * 100;
    
    const storageBar = document.getElementById('storageUsed');
    const storageText = document.getElementById('storageText');
    
    if (storageBar) {
        storageBar.style.width = Math.min(percentage, 100) + '%';
    }
    
    if (storageText) {
        storageText.textContent = `${usedMB} MB / ${limitMB} MB`;
    }
}

// Render files grid
function renderFiles() {
    const filesGrid = document.getElementById('filesGrid');
    if (!filesGrid) return;
    
    if (files.length === 0) {
        filesGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-cloud-upload-alt"></i>
                <h3>No files yet</h3>
                <p>Upload your certificates and files to get started</p>
                <button class="upload-btn" onclick="triggerUpload()">
                    <i class="fas fa-plus"></i> Upload Now
                </button>
            </div>
        `;
        return;
    }
    
    // Sort by date (newest first)
    const sortedFiles = [...files].sort((a, b) => 
        new Date(b.uploadDate) - new Date(a.uploadDate)
    );
    
    filesGrid.innerHTML = sortedFiles.map(file => {
        const icon = getFileIcon(file.type);
        const size = formatFileSize(file.size);
        const date = new Date(file.uploadDate).toLocaleDateString();
        
        return `
            <div class="file-card" data-id="${file.id}">
                <div class="file-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="file-info">
                    <h4 title="${file.name}">${truncateFileName(file.name)}</h4>
                    <div class="file-meta">
                        <span><i class="fas fa-weight-hanging"></i> ${size}</span>
                        <span><i class="far fa-calendar"></i> ${date}</span>
                    </div>
                </div>
                <div class="file-actions">
                    <button class="file-action view-btn" onclick="viewFile('${file.id}')" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="file-action download-btn" onclick="downloadFile('${file.id}')" title="Download">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="file-action delete-btn" onclick="deleteFile('${file.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Get file icon based on type
function getFileIcon(type) {
    if (type.includes('pdf')) return 'fa-file-pdf';
    if (type.includes('image')) return 'fa-file-image';
    if (type.includes('word')) return 'fa-file-word';
    if (type.includes('excel')) return 'fa-file-excel';
    return 'fa-file';
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Truncate long file names
function truncateFileName(name, maxLength = 30) {
    if (name.length <= maxLength) return name;
    const ext = name.split('.').pop();
    const nameWithoutExt = name.substring(0, name.lastIndexOf('.'));
    return nameWithoutExt.substring(0, maxLength - 3 - ext.length) + '...' + ext;
}

// Trigger file upload
function triggerUpload() {
    document.getElementById('fileInput').click();
}

// Handle file selection
async function handleFileSelect(event) {
    const files = Array.from(event.target.files);
    await processFiles(files);
}

// Handle drag and drop
async function handleDrop(event) {
    const files = Array.from(event.dataTransfer.files);
    await processFiles(files);
}

// Process files for upload
async function processFiles(fileList) {
    // Validate files
    const validFiles = fileList.filter(file => {
        if (file.size > CONFIG.MAX_FILE_SIZE) {
            showNotification(`${file.name} exceeds 10MB limit`, 'warning');
            return false;
        }
        
        if (!CONFIG.ALLOWED_TYPES.includes(file.type)) {
            showNotification(`${file.name} is not a supported file type`, 'warning');
            return false;
        }
        
        return true;
    });
    
    if (validFiles.length === 0) {
        showNotification('No valid files to upload', 'warning');
        return;
    }
    
    // Check storage
    const totalAfterUpload = totalStorage + validFiles.reduce((sum, f) => sum + f.size, 0);
    if (totalAfterUpload > CONFIG.STORAGE_LIMIT) {
        showNotification('Storage limit exceeded', 'error');
        return;
    }
    
    // Show progress
    showUploadProgress(validFiles.length);
    
    // Upload files
    for (const file of validFiles) {
        await uploadFile(file);
    }
    
    hideUploadProgress();
    showNotification(`Successfully uploaded ${validFiles.length} file(s)`, 'success');
}

// Upload single file
async function uploadFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        
        reader.onload = async (e) => {
            const fileData = {
                id: generateFileId(),
                name: file.name,
                type: file.type,
                size: file.size,
                data: e.target.result,
                uploadDate: new Date().toISOString()
            };
            
            try {
                const transaction = db.transaction(['files'], 'readwrite');
                const store = transaction.objectStore('files');
                await store.add(fileData);
                
                files.push(fileData);
                renderFiles();
                calculateStorage();
                
                resolve();
            } catch (error) {
                console.error('Error saving file:', error);
                showNotification(`Error uploading ${file.name}`, 'error');
                resolve();
            }
        };
        
        reader.readAsDataURL(file);
    });
}

// Generate unique file ID
function generateFileId() {
    return 'file_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// View file
async function viewFile(fileId) {
    const file = files.find(f => f.id === fileId);
    if (!file) {
        showNotification('File not found', 'error');
        return;
    }
    
    if (file.type.includes('pdf')) {
        // Open PDF in new tab
        const pdfWindow = window.open('', '_blank');
        pdfWindow.document.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>${file.name}</title>
                    <style>
                        body { margin: 0; height: 100vh; }
                        embed { width: 100%; height: 100%; }
                    </style>
                </head>
                <body>
                    <embed src="${file.data}" type="application/pdf" width="100%" height="100%" />
                </body>
            </html>
        `);
    } else if (file.type.includes('image')) {
        // Open image in new tab
        const imgWindow = window.open('', '_blank');
        imgWindow.document.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>${file.name}</title>
                    <style>
                        body { 
                            margin: 0; 
                            min-height: 100vh; 
                            display: flex; 
                            justify-content: center; 
                            align-items: center;
                            background: #1a1a1a;
                        }
                        img { max-width: 100%; max-height: 100vh; }
                    </style>
                </head>
                <body>
                    <img src="${file.data}" alt="${file.name}" />
                </body>
            </html>
        `);
    }
}

// Download file
function downloadFile(fileId) {
    const file = files.find(f => f.id === fileId);
    if (!file) {
        showNotification('File not found', 'error');
        return;
    }
    
    const link = document.createElement('a');
    link.href = file.data;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification(`Downloading ${file.name}`, 'success');
}

// Delete file
async function deleteFile(fileId) {
    if (!confirm('Are you sure you want to delete this file?')) return;
    
    try {
        const transaction = db.transaction(['files'], 'readwrite');
        const store = transaction.objectStore('files');
        await store.delete(fileId);
        
        files = files.filter(f => f.id !== fileId);
        renderFiles();
        calculateStorage();
        
        showNotification('File deleted successfully', 'success');
    } catch (error) {
        console.error('Error deleting file:', error);
        showNotification('Error deleting file', 'error');
    }
}

// Show upload progress
function showUploadProgress(total) {
    let progressDiv = document.querySelector('.upload-progress');
    if (!progressDiv) {
        progressDiv = document.createElement('div');
        progressDiv.className = 'upload-progress';
        progressDiv.innerHTML = `
            <div class="progress-bar-container">
                <div class="progress-bar-fill" id="uploadProgressFill"></div>
            </div>
            <p>Uploading <span id="uploadProgressCount">0</span>/${total} files...</p>
        `;
        document.querySelector('.files-section').prepend(progressDiv);
    }
}

// Hide upload progress
function hideUploadProgress() {
    const progressDiv = document.querySelector('.upload-progress');
    if (progressDiv) {
        progressDiv.remove();
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const container = document.querySelector('.notification-container') || (() => {
        const div = document.createElement('div');
        div.className = 'notification-container';
        document.body.appendChild(div);
        return div;
    })();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Export functions
window.authenticate = authenticate;
window.logout = logout;
window.triggerUpload = triggerUpload;
window.viewFile = viewFile;
window.downloadFile = downloadFile;
window.deleteFile = deleteFile;
