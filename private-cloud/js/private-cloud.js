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
                    <h4 title="${file.name}">${truncateFileName(file.name)}
