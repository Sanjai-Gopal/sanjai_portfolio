/* ========================================
   PRIVATE-CLOUD.JS - Complete Cloud Storage System
   ======================================== */

// ==================== CONFIGURATION ====================
const CONFIG = {
    PASSCODE: 'Sanjai@2026', // Change this to your secure passcode
    DB_NAME: 'SanjaiCloudDB',
    DB_VERSION: 2,
    STORE_NAME: 'files',
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: ['application/pdf', 'image/jpeg', 'image/png', 'image/gif'],
    STORAGE_LIMIT: 100 * 1024 * 1024, // 100MB
    ENCRYPTION_KEY: 'sanjai-secure-key-2026' // For encryption
};

// ==================== STATE MANAGEMENT ====================
let db = null;
let currentUser = null;
let files = [];
let currentFolder = 'root';
let totalStorage = 0;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Check if already authenticated
    const session = localStorage.getItem('cloudSession');
    if (session) {
        const sessionData = JSON.parse(session);
        if (sessionData.expiry > Date.now()) {
            initDB().then(() => {
                currentUser = sessionData.user;
                showDashboard();
                loadFiles();
            });
        } else {
            localStorage.removeItem('cloudSession');
        }
    }

    // Setup drag and drop
    setupDragAndDrop();
});

// ==================== DATABASE MANAGEMENT ====================
async function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(CONFIG.DB_NAME, CONFIG.DB_VERSION);
        
        request.onerror = (event) => {
            console.error('Database error:', event.target.error);
            showNotification('Failed to open database', 'error');
            reject(event.target.error);
        };
        
        request.onsuccess = (event) => {
            db = event.target.result;
            console.log('Database opened successfully');
            resolve(db);
        };
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            
            // Create files store
            if (!db.objectStoreNames.contains(CONFIG.STORE_NAME)) {
                const store = db.createObjectStore(CONFIG.STORE_NAME, { keyPath: 'id' });
                store.createIndex('name', 'name', { unique: false });
                store.createIndex('type', 'type', { unique: false });
                store.createIndex('uploadDate', 'uploadDate', { unique: false });
                store.createIndex('folder', 'folder', { unique: false });
                store.createIndex('encrypted', 'encrypted', { unique: false });
            }
            
            // Create users store
            if (!db.objectStoreNames.contains('users')) {
                const userStore = db.createObjectStore('users', { keyPath: 'username' });
                userStore.createIndex('email', 'email', { unique: true });
            }
        };
    });
}

// ==================== AUTHENTICATION ====================
async function authenticate() {
    const passcode = document.getElementById('passcode').value;
    
    if (!passcode) {
        showNotification('Please enter passcode', 'warning');
        return;
    }

    // Show loading state
    const authBtn = document.querySelector('.auth-btn');
    const originalText = authBtn.innerHTML;
    authBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
    authBtn.disabled = true;

    try {
        // Simulate authentication delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (passcode === CONFIG.PASSCODE) {
            // Create session
            const session = {
                user: {
                    username: 'sanjai',
                    name: 'Sanjai Gopal',
                    email: 'sanjai.sparkmail@gmail.com',
                    avatar: 'S'
                },
                expiry: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
            };
            
            localStorage.setItem('cloudSession', JSON.stringify(session));
            currentUser = session.user;
            
            await initDB();
            showDashboard();
            loadFiles();
            showNotification('Access granted! Welcome to your private cloud.', 'success');
            
            // Add success animation
            document.querySelector('.auth-card').style.transform = 'scale(0.98)';
            setTimeout(() => {
                document.querySelector('.auth-card').style.transform = 'scale(1)';
            }, 200);
        } else {
            // Shake animation for wrong passcode
            document.querySelector('.auth-card').style.animation = 'shake 0.5s';
            setTimeout(() => {
                document.querySelector('.auth-card').style.animation = '';
            }, 500);
            
            showNotification('Invalid passcode. Please try again.', 'error');
            document.getElementById('passcode').value = '';
        }
    } catch (error) {
        console.error('Authentication error:', error);
        showNotification('Authentication failed', 'error');
    } finally {
        authBtn.innerHTML = originalText;
        authBtn.disabled = false;
    }
}

function showDashboard() {
    document.getElementById('authSection').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    updateStorageInfo();
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('cloudSession');
        currentUser = null;
        files = [];
        
        document.getElementById('authSection').style.display = 'block';
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('passcode').value = '';
        
        if (db) {
            db.close();
            db = null;
        }
        
        showNotification('Logged out successfully', 'info');
    }
}

// ==================== FILE MANAGEMENT ====================
async function loadFiles() {
    if (!db) await initDB();

    try {
        const transaction = db.transaction([CONFIG.STORE_NAME], 'readonly');
        const store = transaction.objectStore(CONFIG.STORE_NAME);
        const request = store.getAll();

        request.onsuccess = () => {
            files = request.result || [];
            renderFiles();
            calculateStorage();
        };

        request.onerror = () => {
            console.error('Error loading files');
            showNotification('Error loading files', 'error');
        };
    } catch (error) {
        console.error('Error loading files:', error);
        showNotification('Error loading files', 'error');
    }
}

async function saveFile(file, encrypted = false) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([CONFIG.STORE_NAME], 'readwrite');
        const store = transaction.objectStore(CONFIG.STORE_NAME);
        
        const fileData = {
            id: generateFileId(),
            name: file.name,
            type: file.type,
            size: file.size,
            data: file.data,
            uploadDate: new Date().toISOString(),
            folder: currentFolder,
            encrypted: encrypted,
            lastModified: file.lastModified || Date.now(),
            tags: extractTags(file.name),
            description: '',
            shared: false,
            shareLink: null
        };
        
        const request = store.add(fileData);
        
        request.onsuccess = () => {
            resolve(fileData);
        };
        
        request.onerror = () => {
            reject(request.error);
        };
    });
}

async function deleteFile(fileId) {
    if (!confirm('Are you sure you want to delete this file? This action cannot be undone.')) {
        return;
    }

    try {
        const transaction = db.transaction([CONFIG.STORE_NAME], 'readwrite');
        const store = transaction.objectStore(CONFIG.STORE_NAME);
        const request = store.delete(fileId);
        
        request.onsuccess = () => {
            files = files.filter(f => f.id !== fileId);
            renderFiles();
            calculateStorage();
            showNotification('File deleted successfully', 'success');
        };
        
        request.onerror = () => {
            showNotification('Error deleting file', 'error');
        };
    } catch (error) {
        console.error('Error deleting file:', error);
        showNotification('Error deleting file', 'error');
    }
}

async function getFile(fileId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([CONFIG.STORE_NAME], 'readonly');
        const store = transaction.objectStore(CONFIG.STORE_NAME);
        const request = store.get(fileId);
        
        request.onsuccess = () => {
            resolve(request.result);
        };
        
        request.onerror = () => {
            reject(request.error);
        };
    });
}

// ==================== FILE UPLOAD ====================
function triggerUpload() {
    document.getElementById('fileInput').click();
}

async function handleFileSelect(event) {
    const selectedFiles = Array.from(event.target.files);
    await processFiles(selectedFiles);
}

function setupDragAndDrop() {
    const uploadArea = document.getElementById('uploadArea');
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, unhighlight, false);
    });

    uploadArea.addEventListener('drop', handleDrop, false);
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    document.getElementById('uploadArea').classList.add('dragover');
}

function unhighlight() {
    document.getElementById('uploadArea').classList.remove('dragover');
}

async function handleDrop(e) {
    const dt = e.dataTransfer;
    const droppedFiles = Array.from(dt.files);
    await processFiles(droppedFiles);
}

async function processFiles(fileList) {
    // Validate files
    const validFiles = fileList.filter(file => {
        // Check file size
        if (file.size > CONFIG.MAX_FILE_SIZE) {
            showNotification(`${file.name} exceeds 10MB limit`, 'warning');
            return false;
        }
        
        // Check file type
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

    // Check storage limit
    const totalAfterUpload = totalStorage + validFiles.reduce((sum, f) => sum + f.size, 0);
    if (totalAfterUpload > CONFIG.STORAGE_LIMIT) {
        showNotification('Storage limit exceeded', 'error');
        return;
    }

    // Show upload progress
    showUploadProgress(validFiles.length);

    // Process each file
    for (const file of validFiles) {
        await processFile(file);
    }

    hideUploadProgress();
    showNotification(`Successfully uploaded ${validFiles.length} file(s)`, 'success');
    event.target.value = ''; // Clear input
}

async function processFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = async (e) => {
            try {
                // Encrypt sensitive files
                const shouldEncrypt = file.type.includes('pdf') || confirm(`Encrypt ${file.name}?`);
                
                const fileData = {
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    lastModified: file.lastModified,
                    data: shouldEncrypt ? encryptData(e.target.result) : e.target.result
                };
                
                const savedFile = await saveFile(fileData, shouldEncrypt);
                files.push(savedFile);
                renderFiles();
                calculateStorage();
                resolve();
            } catch (error) {
                console.error('Error processing file:', error);
                reject(error);
            }
        };
        
        reader.onerror = (error) => {
            console.error('Error reading file:', error);
            reject(error);
        };
        
        reader.readAsDataURL(file);
    });
}

// ==================== FILE ENCRYPTION ====================
function encryptData(data) {
    // Simple XOR encryption (for demo - use proper encryption in production)
    let encrypted = '';
    const key = CONFIG.ENCRYPTION_KEY;
    
    for (let i = 0; i < data.length; i++) {
        encrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    
    return btoa(encrypted); // Base64 encode
}

function decryptData(encryptedData) {
    try {
        const decoded = atob(encryptedData);
        let decrypted = '';
        const key = CONFIG.ENCRYPTION_KEY;
        
        for (let i = 0; i < decoded.length; i++) {
            decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        
        return decrypted;
    } catch (error) {
        console.error('Decryption error:', error);
        return null;
    }
}

// ==================== FILE RENDERING ====================
function renderFiles() {
    const filesGrid = document.getElementById('filesGrid');
    
    if (files.length === 0) {
        filesGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-cloud-upload-alt"></i>
                <h3>No files yet</h3>
                <p>Upload your certificates and files to get started</p>
                <button class="upload-btn" onclick="triggerUpload()">
                    <i class="fas fa-cloud-upload-alt"></i> Upload Now
                </button>
            </div>
        `;
        return;
    }

    // Sort files by date (newest first)
    const sortedFiles = [...files].sort((a, b) => 
        new Date(b.uploadDate) - new Date(a.uploadDate)
    );

    filesGrid.innerHTML = sortedFiles.map(file => {
        const icon = getFileIcon(file.type);
        const size = formatFileSize(file.size);
        const uploadDate = new Date(file.uploadDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        return `
            <div class="file-card" data-id="${file.id}" ondblclick="viewFile('${file.id}')">
                <div class="file-icon">
                    <i class="fas ${icon}"></i>
                    ${file.encrypted ? '<i class="fas fa-lock" style="font-size: 1rem; margin-left: 0.5rem; color: #f59e0b;"></i>' : ''}
                </div>
                <div class="file-info">
                    <h4 title="${file.name}">${truncateFileName(file.name)}</h4>
                    <div class="file-meta">
                        <span><i class="fas fa-weight-hanging"></i> ${size}</span>
                        <span><i class="far fa-calendar"></i> ${uploadDate}</span>
                    </div>
                </div>
                <div class="file-actions">
                    <button class="file-action view-btn" onclick="viewFile('${file.id}')" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="file-action download-btn" onclick="downloadFile('${file.id}')" title="Download">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="file-action share-btn" onclick="shareFile('${file.id}')" title="Share">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button class="file-action delete-btn" onclick="deleteFile('${file.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function getFileIcon(fileType) {
    if (fileType.includes('pdf')) return 'fa-file-pdf';
    if (fileType.includes('image')) return 'fa-file-image';
    if (fileType.includes('video')) return 'fa-file-video';
    if (fileType.includes('audio')) return 'fa-file-audio';
    if (fileType.includes('zip') || fileType.includes('rar')) return 'fa-file-archive';
    if (fileType.includes('word') || fileType.includes('document')) return 'fa-file-word';
    if (fileType.includes('excel') || fileType.includes('sheet')) return 'fa-file-excel';
    if (fileType.includes('powerpoint') || fileType.includes('presentation')) return 'fa-file-powerpoint';
    return 'fa-file';
}

function truncateFileName(name, maxLength = 30) {
    if (name.length <= maxLength) return name;
    const ext = name.split('.').pop();
    const nameWithoutExt = name.substring(0, name.lastIndexOf('.'));
    return nameWithoutExt.substring(0, maxLength - 3 - ext.length) + '...' + ext;
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function generateFileId() {
    return 'file_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function extractTags(filename) {
    const tags = [];
    const commonTags = ['certificate', 'project', 'assignment', 'report', 'thesis', 'paper'];
    
    commonTags.forEach(tag => {
        if (filename.toLowerCase().includes(tag)) {
            tags.push(tag);
        }
    });
    
    return tags;
}

// ==================== FILE OPERATIONS ====================
async function viewFile(fileId) {
    const file = files.find(f => f.id === fileId);
    if (!file) {
        showNotification('File not found', 'error');
        return;
    }

    const modal = document.getElementById('previewModal');
    const title = document.getElementById('previewTitle');
    const body = document.getElementById('previewBody');

    title.textContent = file.name;

    // Decrypt if encrypted
    let fileData = file.data;
    if (file.encrypted) {
        fileData = decryptData(file.data);
        if (!fileData) {
            showNotification('Failed to decrypt file', 'error');
            return;
        }
    }

    if (file.type.includes('image')) {
        body.innerHTML = `<img src="${fileData}" alt="${file.name}" style="max-width: 100%; max-height: 70vh;">`;
    } else if (file.type.includes('pdf')) {
        body.innerHTML = `<iframe src="${fileData}" style="width: 100%; height: 70vh;" frameborder="0"></iframe>`;
    } else {
        body.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-file" style="font-size: 5rem; color: var(--primary-500); margin-bottom: 1rem;"></i>
                <p>Preview not available for this file type</p>
                <button class="auth-btn" onclick="downloadFile('${file.id}')">
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        `;
    }

    modal.classList.add('active');
}

async function downloadFile(fileId) {
    const file = files.find(f => f.id === fileId);
    if (!file) {
        showNotification('File not found', 'error');
        return;
    }

    try {
        // Decrypt if encrypted
        let fileData = file.data;
        if (file.encrypted) {
            fileData = decryptData(file.data);
            if (!fileData) {
                showNotification('Failed to decrypt file', 'error');
                return;
            }
        }

        const link = document.createElement('a');
        link.href = fileData;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showNotification(`Downloading ${file.name}`, 'success');
    } catch (error) {
        console.error('Download error:', error);
        showNotification('Failed to download file', 'error');
    }
}

async function shareFile(fileId) {
    const file = files.find(f => f.id === fileId);
    if (!file) return;

    // Generate share link
    const shareLink = `${window.location.origin}/share/${file.id}`;
    
    // Copy to clipboard
    try {
        await navigator.clipboard.writeText(shareLink);
        showNotification('Share link copied to clipboard!', 'success');
    } catch (error) {
        console.error('Failed to copy:', error);
        showNotification('Failed to copy share link', 'error');
    }
}

function closeModal() {
    document.getElementById('previewModal').classList.remove('active');
}

// ==================== STORAGE MANAGEMENT ====================
function calculateStorage() {
    totalStorage = files.reduce((sum, file) => sum + file.size, 0);
    updateStorageInfo();
}

function updateStorageInfo() {
    const usedMB = (totalStorage / (1024 * 1024)).toFixed(1);
    const limitMB = CONFIG.STORAGE_LIMIT / (1024 * 1024);
    const percentage = (totalStorage / CONFIG.STORAGE_LIMIT) * 100;
    
    document.getElementById('storageUsed').style.width = percentage + '%';
    document.getElementById('storageText').textContent = `${usedMB} MB / ${limitMB} MB`;
}

// ==================== FOLDER MANAGEMENT ====================
function createFolder() {
    const folderName = prompt('Enter folder name:');
    if (!folderName) return;

    // Create virtual folder
    showNotification(`Folder "${folderName}" created`, 'success');
}

// ==================== SHARE FEATURES ====================
function shareFiles() {
    if (files.length === 0) {
        showNotification('No files to share', 'warning');
        return;
    }

    // Create share package
    const shareData = {
        files: files.map(f => ({
            name: f.name,
            type: f.type,
            size: f.size,
            shareId: generateFileId()
        })),
        expiry: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days
    };

    const shareLink = `${window.location.origin}/shared/${btoa(JSON.stringify(shareData))}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareLink);
    showNotification('Share link copied to clipboard! (Valid for 7 days)', 'success');
}

// ==================== ACTIVITY LOG ====================
function viewActivity() {
    const activities = files.map(f => ({
        action: 'upload',
        file: f.name,
        date: new Date(f.uploadDate).toLocaleString()
    }));

    // Show activity modal
    const modal = document.getElementById('previewModal');
    const title = document.getElementById('previewTitle');
    const body = document.getElementById('previewBody');

    title.textContent = 'Recent Activity';
    body.innerHTML = `
        <div style="max-height: 400px; overflow-y: auto;">
            ${activities.map(a => `
                <div style="padding: 1rem; border-bottom: 1px solid var(--border-light);">
                    <i class="fas fa-cloud-upload-alt" style="color: var(--primary-500); margin-right: 1rem;"></i>
                    <span>${a.file}</span>
                    <small style="color: var(--text-tertiary); float: right;">${a.date}</small>
                </div>
            `).join('')}
        </div>
    `;

    modal.classList.add('active');
}

// ==================== UPLOAD PROGRESS ====================
function showUploadProgress(totalFiles) {
    let progressDiv = document.querySelector('.upload-progress');
    if (!progressDiv) {
        progressDiv = document.createElement('div');
        progressDiv.className = 'upload-progress';
        progressDiv.innerHTML = `
            <div class="progress-bar-container">
                <div class="progress-bar-fill"></div>
            </div>
            <p>Uploading <span id="uploadCount">0</span>/${totalFiles} files...</p>
        `;
        document.querySelector('.files-section').prepend(progressDiv);
    }
    
    progressDiv.style.display = 'block';
}

function hideUploadProgress() {
    const progressDiv = document.querySelector('.upload-progress');
    if (progressDiv) {
        progressDiv.remove();
    }
}

// ==================== NOTIFICATIONS ====================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== HINT FUNCTION ====================
function showHint() {
    showNotification('Hint: The passcode is "Sanjai@2026"', 'info');
}

// ==================== SEARCH FUNCTIONALITY ====================
function searchFiles(query) {
    if (!query) {
        renderFiles();
        return;
    }

    const searchResults = files.filter(file => 
        file.name.toLowerCase().includes(query.toLowerCase()) ||
        file.tags?.some(tag => tag.includes(query.toLowerCase()))
    );

    const filesGrid = document.getElementById('filesGrid');
    if (searchResults.length === 0) {
        filesGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No results found</h3>
                <p>No files match your search "${query}"</p>
            </div>
        `;
    } else {
        files = searchResults;
        renderFiles();
    }
}

// ==================== EXPORT FUNCTIONS ====================
window.authenticate = authenticate;
window.logout = logout;
window.triggerUpload = triggerUpload;
window.handleFileSelect = handleFileSelect;
window.viewFile = viewFile;
window.downloadFile = downloadFile;
window.deleteFile = deleteFile;
window.shareFile = shareFile;
window.closeModal = closeModal;
window.createFolder = createFolder;
window.shareFiles = shareFiles;
window.viewActivity = viewActivity;
window.showHint = showHint;
window.searchFiles = searchFiles;
