// Private Cloud Storage using IndexedDB for better storage capacity
// This provides a more robust solution than localStorage

let db;
let files = [];
const DB_NAME = 'PrivateCloudDB';
const STORE_NAME = 'certificates';
const DB_VERSION = 1;

// Initialize IndexedDB
function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        
        request.onerror = (event) => {
            console.error('Database error:', event.target.error);
            reject('Error opening database');
        };
        
        request.onsuccess = (event) => {
            db = event.target.result;
            console.log('Database opened successfully');
            resolve(db);
        };
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            
            // Create object store for files
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
                store.createIndex('name', 'name', { unique: false });
                store.createIndex('uploadDate', 'uploadDate', { unique: false });
                store.createIndex('type', 'type', { unique: false });
            }
        };
    });
}

// Authentication
const PASSCODE = '1234'; // Change this to your preferred passcode

// Load files from IndexedDB
async function loadFiles() {
    try {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();
        
        request.onsuccess = () => {
            files = request.result;
            displayFiles();
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

// Save file to IndexedDB
async function saveFile(fileData) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.add(fileData);
        
        request.onsuccess = () => {
            resolve(request.result);
        };
        
        request.onerror = () => {
            reject(request.error);
        };
    });
}

// Delete file from IndexedDB
async function deleteFileFromDB(fileId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(fileId);
        
        request.onsuccess = () => {
            resolve();
        };
        
        request.onerror = () => {
            reject(request.error);
        };
    });
}

// Authentication function
async function authenticate() {
    const passcode = document.getElementById('passcode').value;
    const authCard = document.querySelector('.auth-card');
    
    if (passcode === PASSCODE) {
        // Add success animation
        authCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            authCard.style.transform = 'scale(1)';
        }, 200);
        
        // Initialize database and show cloud storage
        try {
            await initDB();
            document.getElementById('authSection').style.display = 'none';
            document.getElementById('cloudStorage').style.display = 'block';
            await loadFiles();
            showNotification('Access granted! Welcome to your private cloud.', 'success');
        } catch (error) {
            console.error('Error initializing database:', error);
            showNotification('Error accessing cloud storage', 'error');
        }
    } else {
        // Add shake animation for wrong passcode
        authCard.style.animation = 'shake 0.5s';
        setTimeout(() => {
            authCard.style.animation = '';
        }, 500);
        
        showNotification('Invalid passcode. Please try again.', 'error');
        document.getElementById('passcode').value = '';
    }
}

// File upload handling
document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    
    if (uploadArea) {
        // Prevent default drag behaviors
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, preventDefaults, false);
            document.body.addEventListener(eventName, preventDefaults, false);
        });

        // Highlight drop zone when dragging over it
        ['dragenter', 'dragover'].forEach(eventName => {
            uploadArea.addEventListener(eventName, highlight, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, unhighlight, false);
        });

        // Handle dropped files
        uploadArea.addEventListener('drop', handleDrop, false);
        
        // Handle click to browse
        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });
        
        // Handle file selection via input
        fileInput.addEventListener('change', (e) => {
            handleFiles(e.target.files);
        });
    }
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    const uploadArea = document.getElementById('uploadArea');
    uploadArea.classList.add('highlight');
    uploadArea.style.borderColor = '#00d2ff';
    uploadArea.style.background = 'rgba(108, 92, 231, 0.2)';
    uploadArea.style.transform = 'scale(1.02)';
}

function unhighlight() {
    const uploadArea = document.getElementById('uploadArea');
    uploadArea.classList.remove('highlight');
    uploadArea.style.borderColor = '#6c5ce7';
    uploadArea.style.background = 'transparent';
    uploadArea.style.transform = 'scale(1)';
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const droppedFiles = dt.files;
    handleFiles(droppedFiles);
}

// Handle file processing
async function handleFiles(fileList) {
    const files = Array.from(fileList);
    const validFiles = files.filter(file => {
        const isValid = file.type.match('application/pdf') || file.type.match('image.*');
        if (!isValid) {
            showNotification(`${file.name} is not a PDF or image file`, 'warning');
        }
        return isValid;
    });
    
    if (validFiles.length === 0) {
        showNotification('Please select PDF or image files only', 'warning');
        return;
    }
    
    // Show upload progress
    showUploadProgress(validFiles.length);
    
    for (const file of validFiles) {
        await processFile(file);
    }
    
    hideUploadProgress();
    showNotification(`Successfully uploaded ${validFiles.length} file(s)`, 'success');
}

// Show upload progress
function showUploadProgress(totalFiles) {
    let progressDiv = document.querySelector('.upload-progress');
    if (!progressDiv) {
        progressDiv = document.createElement('div');
        progressDiv.className = 'upload-progress';
        progressDiv.innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <p>Uploading files...</p>
        `;
        document.querySelector('.upload-section').appendChild(progressDiv);
    }
    
    progressDiv.style.display = 'block';
    const progressFill = progressDiv.querySelector('.progress-fill');
    progressFill.style.width = '0%';
}

function hideUploadProgress() {
    const progressDiv = document.querySelector('.upload-progress');
    if (progressDiv) {
        setTimeout(() => {
            progressDiv.style.display = 'none';
        }, 1000);
    }
}

// Process individual file
async function processFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = async (e) => {
            const fileData = {
                id: generateUniqueId(),
                name: file.name,
                type: file.type,
                size: file.size,
                data: e.target.result,
                uploadDate: new Date().toISOString(),
                lastModified: file.lastModified
            };
            
            try {
                await saveFile(fileData);
                files.push(fileData);
                displayFiles();
                resolve();
            } catch (error) {
                console.error('Error saving file:', error);
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

// Generate unique ID
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Display files in grid
function displayFiles() {
    const filesGrid = document.getElementById('filesGrid');
    
    if (!filesGrid) return;
    
    if (files.length === 0) {
        filesGrid.innerHTML = `
            <div class="no-files">
                <i class="fas fa-cloud-upload-alt"></i>
                <p>No files uploaded yet. Drag and drop your certificates here!</p>
            </div>
        `;
        return;
    }
    
    // Sort files by upload date (newest first)
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
        const fileExtension = file.name.split('.').pop().toUpperCase();
        
        return `
            <div class="file-card" data-id="${file.id}">
                <div class="file-icon">
                    <i class="fas ${icon}"></i>
                    <span class="file-extension">${fileExtension}</span>
                </div>
                <div class="file-info">
                    <h4 title="${file.name}">${truncateFileName(file.name)}</h4>
                    <div class="file-meta">
                        <span><i class="fas fa-weight-hanging"></i> ${size}</span>
                        <span><i class="fas fa-calendar-alt"></i> ${uploadDate}</span>
                    </div>
                </div>
                <div class="file-actions">
                    <button onclick="viewFile('${file.id}')" class="view-btn" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button onclick="downloadFile('${file.id}')" class="download-btn" title="Download">
                        <i class="fas fa-download"></i>
                    </button>
                    <button onclick="deleteFile('${file.id}')" class="delete-btn" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Get appropriate icon based on file type
function getFileIcon(fileType) {
    if (fileType.includes('pdf')) {
        return 'fa-file-pdf';
    } else if (fileType.includes('image')) {
        if (fileType.includes('jpeg') || fileType.includes('jpg')) {
            return 'fa-file-image';
        } else if (fileType.includes('png')) {
            return 'fa-file-png';
        } else {
            return 'fa-file-image';
        }
    } else {
        return 'fa-file';
    }
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
    
    const extension = name.split('.').pop();
    const nameWithoutExt = name.substring(0, name.lastIndexOf('.'));
    const truncatedName = nameWithoutExt.substring(0, maxLength - 3 - extension.length);
    
    return truncatedName + '...' + extension;
}

// View file
function viewFile(fileId) {
    const file = files.find(f => f.id === fileId);
    if (!file) {
        showNotification('File not found', 'error');
        return;
    }
    
    if (file.type.includes('pdf')) {
        // Open PDF in new tab with better viewer
        const pdfWindow = window.open('', '_blank');
        pdfWindow.document.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>${file.name}</title>
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { 
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            background: #1a1a1a;
                            display: flex;
                            flex-direction: column;
                            height: 100vh;
                        }
                        .toolbar {
                            background: #2d2d2d;
                            padding: 1rem;
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                            color: white;
                            border-bottom: 2px solid #6c5ce7;
                        }
                        .toolbar h3 {
                            flex: 1;
                            margin: 0;
                            color: #fff;
                        }
                        .close-btn {
                            background: #ff4444;
                            color: white;
                            border: none;
                            padding: 0.5rem 1rem;
                            border-radius: 5px;
                            cursor: pointer;
                            font-size: 0.9rem;
                        }
                        .close-btn:hover {
                            background: #ff6666;
                        }
                        .pdf-container {
                            flex: 1;
                            background: #2d2d2d;
                        }
                        embed {
                            width: 100%;
                            height: 100%;
                        }
                    </style>
                </head>
                <body>
                    <div class="toolbar">
                        <h3><i class="fas fa-file-pdf" style="color: #ff4444;"></i> ${file.name}</h3>
                        <button class="close-btn" onclick="window.close()">Close</button>
                    </div>
                    <div class="pdf-container">
                        <embed src="${file.data}" type="application/pdf" />
                    </div>
                </body>
            </html>
        `);
    } else {
        // Open image in new tab with better viewer
        const imgWindow = window.open('', '_blank');
        imgWindow.document.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>${file.name}</title>
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { 
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            background: #1a1a1a;
                            display: flex;
                            flex-direction: column;
                            height: 100vh;
                        }
                        .toolbar {
                            background: #2d2d2d;
                            padding: 1rem;
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                            color: white;
                            border-bottom: 2px solid #6c5ce7;
                        }
                        .toolbar h3 {
                            flex: 1;
                            margin: 0;
                            color: #fff;
                        }
                        .close-btn {
                            background: #ff4444;
                            color: white;
                            border: none;
                            padding: 0.5rem 1rem;
                            border-radius: 5px;
                            cursor: pointer;
                            font-size: 0.9rem;
                        }
                        .close-btn:hover {
                            background: #ff6666;
                        }
                        .image-container {
                            flex: 1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: #2d2d2d;
                            padding: 20px;
                        }
                        img {
                            max-width: 100%;
                            max-height: calc(100vh - 80px);
                            object-fit: contain;
                            box-shadow: 0 0 30px rgba(0,0,0,0.5);
                        }
                    </style>
                </head>
                <body>
                    <div class="toolbar">
                        <h3><i class="fas fa-file-image" style="color: #00d2ff;"></i> ${file.name}</h3>
                        <button class="close-btn" onclick="window.close()">Close</button>
                    </div>
                    <div class="image-container">
                        <img src="${file.data}" alt="${file.name}" />
                    </div>
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
    if (confirm('Are you sure you want to delete this file? This action cannot be undone.')) {
        try {
            await deleteFileFromDB(fileId);
            files = files.filter(f => f.id !== fileId);
            displayFiles();
            showNotification('File deleted successfully', 'success');
        } catch (error) {
            console.error('Error deleting file:', error);
            showNotification('Error deleting file', 'error');
        }
    }
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        document.getElementById('authSection').style.display = 'block';
        document.getElementById('cloudStorage').style.display = 'none';
        document.getElementById('passcode').value = '';
        
        // Clear files array
        files = [];
        
        // Close database connection
        if (db) {
            db.close();
            db = null;
        }
        
        showNotification('Logged out successfully', 'info');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Check if notification container exists, if not create it
    let notificationContainer = document.querySelector('.notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Add icon based on type
    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-exclamation-circle';
    if (type === 'warning') icon = 'fa-exclamation-triangle';
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS for notifications and animations
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .notification {
        background: #2d2d2d;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 1rem;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        border-left: 4px solid;
        animation: slideIn 0.3s ease;
        min-width: 300px;
        backdrop-filter: blur(10px);
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .notification.success {
        border-left-color: #00d2ff;
        background: rgba(0, 210, 255, 0.1);
    }
    
    .notification.error {
        border-left-color: #ff4444;
        background: rgba(255, 68, 68, 0.1);
    }
    
    .notification.warning {
        border-left-color: #ffbb33;
        background: rgba(255, 187, 51, 0.1);
    }
    
    .notification.info {
        border-left-color: #6c5ce7;
        background: rgba(108, 92, 231, 0.1);
    }
    
    .notification i {
        font-size: 1.2rem;
    }
    
    .notification.success i {
        color: #00d2ff;
    }
    
    .notification.error i {
        color: #ff4444;
    }
    
    .notification.warning i {
        color: #ffbb33;
    }
    
    .notification.info i {
        color: #6c5ce7;
    }
    
    .upload-progress {
        margin-top: 20px;
        padding: 20px;
        background: rgba(108, 92, 231, 0.1);
        border-radius: 10px;
        text-align: center;
    }
    
    .progress-bar {
        width: 100%;
        height: 10px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    
    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #6c5ce7, #00d2ff);
        width: 0%;
        transition: width 0.3s ease;
        animation: progressPulse 1.5s infinite;
    }
    
    @keyframes progressPulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
    
    .file-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 1px solid rgba(108, 92, 231, 0.2);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .file-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #6c5ce7, #00d2ff);
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }
    
    .file-card:hover::before {
        transform: translateX(0);
    }
    
    .file-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(108, 92, 231, 0.2);
        border-color: rgba(108, 92, 231, 0.4);
    }
    
    .file-icon {
        position: relative;
        text-align: center;
    }
    
    .file-icon i {
        font-size: 3rem;
        color: #6c5ce7;
    }
    
    .file-extension {
        position: absolute;
        bottom: -5px;
        right: 50%;
        transform: translateX(50%);
        background: rgba(108, 92, 231, 0.2);
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 0.7rem;
        color: #fff;
        border: 1px solid rgba(108, 92, 231, 0.4);
    }
    
    .file-info {
        flex: 1;
    }
    
    .file-info h4 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: #fff;
    }
    
    .file-meta {
        display: flex;
        gap: 1rem;
        font-size: 0.8rem;
        color: #888;
    }
    
    .file-meta span {
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }
    
    .file-actions {
        display: flex;
        gap: 0.5rem;
        justify-content: flex-end;
    }
    
    .file-actions button {
        width: 35px;
        height: 35px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
    }
    
    .view-btn {
        background: #6c5ce7;
        color: white;
    }
    
    .view-btn:hover {
        background: #8a7cf0;
        transform: scale(1.1);
    }
    
    .download-btn {
        background: #00d2ff;
        color: white;
    }
    
    .download-btn:hover {
        background: #33dbff;
        transform: scale(1.1);
    }
    
    .delete-btn {
        background: #ff4444;
        color: white;
    }
    
    .delete-btn:hover {
        background: #ff6666;
        transform: scale(1.1);
    }
    
    .no-files {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        color: #888;
    }
    
    .no-files i {
        font-size: 4rem;
        color: #6c5ce7;
        margin-bottom: 1rem;
        opacity: 0.5;
    }
    
    .auth-card {
        animation: fadeInUp 0.5s ease;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add logout button if on cloud page
    const cloudStorage = document.getElementById('cloudStorage');
    if (cloudStorage) {
        const logoutBtn = document.createElement('button');
        logoutBtn.className = 'btn secondary-btn logout-btn';
        logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
        logoutBtn.onclick = logout;
        logoutBtn.style.position = 'absolute';
        logoutBtn.style.top = '100px';
        logoutBtn.style.right = '20px';
        document.querySelector('.private-cloud .container').appendChild(logoutBtn);
    }
    
    // Add passcode input enter key handler
    const passcodeInput = document.getElementById('passcode');
    if (passcodeInput) {
        passcodeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                authenticate();
            }
        });
    }
});

// Export functions for global access
window.authenticate = authenticate;
window.viewFile = viewFile;
window.downloadFile = downloadFile;
window.deleteFile = deleteFile;
window.logout = logout;
