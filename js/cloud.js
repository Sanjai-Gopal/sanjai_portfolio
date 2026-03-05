// ========================================
// PRIVATE CLOUD STORAGE SYSTEM
// ========================================

class CloudStorage {
    constructor() {
        this.currentPath = 'root';
        this.files = this.loadFiles();
        this.storageLimit = 10 * 1024 * 1024 * 1024; // 10 GB
        this.usedStorage = this.calculateUsedStorage();
        this.init();
    }
    
    init() {
        this.renderFiles();
        this.updateStorageBar();
        this.setupDragAndDrop();
        this.setupEventListeners();
    }
    
    loadFiles() {
        // Load from localStorage or use default
        const saved = localStorage.getItem('cloudFiles');
        if (saved) {
            return JSON.parse(saved);
        }
        
        // Default files
        return [
            { id: '1', name: 'Projects', type: 'folder', path: 'root', size: 0, modified: new Date().toISOString(), items: 6, icon: 'folder' },
            { id: '2', name: 'Certificates', type: 'folder', path: 'root', size: 0, modified: new Date().toISOString(), items: 34, icon: 'folder' },
            { id: '3', name: 'Blog Posts', type: 'folder', path: 'root', size: 0, modified: new Date().toISOString(), items: 12, icon: 'folder' },
            { id: '4', name: 'Resume.pdf', type: 'pdf', path: 'root', size: 2.4 * 1024 * 1024, modified: new Date().toISOString(), icon: 'pdf' },
            { id: '5', name: 'Profile-Photo.jpg', type: 'image', path: 'root', size: 1.8 * 1024 * 1024, modified: new Date().toISOString(), icon: 'image' },
            { id: '6', name: 'Project-RuralCare.zip', type: 'archive', path: 'root', size: 15.2 * 1024 * 1024, modified: new Date().toISOString(), icon: 'archive' },
            { id: '7', name: 'Python-Scripts', type: 'folder', path: 'root', size: 0, modified: new Date().toISOString(), items: 8, icon: 'folder' },
            { id: '8', name: 'ML-Models', type: 'folder', path: 'root', size: 0, modified: new Date().toISOString(), items: 4, icon: 'folder' }
        ];
    }
    
    saveFiles() {
        localStorage.setItem('cloudFiles', JSON.stringify(this.files));
    }
    
    calculateUsedStorage() {
        return this.files.reduce((total, file) => total + (file.size || 0), 0);
    }
    
    updateStorageBar() {
        const usedGB = (this.usedStorage / (1024 * 1024 * 1024)).toFixed(1);
        const totalGB = (this.storageLimit / (1024 * 1024 * 1024)).toFixed(1);
        const percentage = (this.usedStorage / this.storageLimit) * 100;
        
        document.getElementById('storageUsed').textContent = `${usedGB} GB / ${totalGB} GB`;
        document.getElementById('storageBarFill').style.width = `${percentage}%`;
        document.getElementById('totalStorage').textContent = `${usedGB} GB`;
        document.getElementById('totalFiles').textContent = this.files.length;
        document.getElementById('totalFolders').textContent = this.files.filter(f => f.type === 'folder').length;
    }
    
    renderFiles() {
        const grid = document.getElementById('cloudFilesGrid');
        if (!grid) return;
        
        const currentFiles = this.files.filter(f => f.path === this.currentPath);
        
        if (currentFiles.length === 0) {
            grid.innerHTML = `
                <div class="cloud-empty">
                    <i class="fas fa-folder-open"></i>
                    <h3>Folder is empty</h3>
                    <p>Upload files or create a new folder</p>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = currentFiles.map(file => `
            <div class="cloud-file-item ${file.type === 'folder' ? 'folder' : 'file'}" 
                 data-id="${file.id}" 
                 data-name="${file.name}" 
                 data-type="${file.type}"
                 ondblclick="${file.type === 'folder' ? `cloud.openFolder('${file.id}')` : `cloud.previewFile('${file.id}')`}">
                <div class="file-icon">
                    ${this.getFileIcon(file.type)}
                </div>
                <div class="file-info">
                    <span class="file-name">${file.name}</span>
                    <span class="file-meta">
                        ${file.type === 'folder' ? `${file.items} items` : this.formatBytes(file.size)} 
                        • ${new Date(file.modified).toLocaleDateString()}
                    </span>
                </div>
                <div class="file-actions">
                    ${file.type === 'folder' ? 
                        `<button class="file-action" onclick="cloud.openFolder('${file.id}')" title="Open">
                            <i class="fas fa-folder-open"></i>
                        </button>` : 
                        `<button class="file-action" onclick="cloud.downloadFile('${file.id}')" title="Download">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="file-action" onclick="cloud.previewFile('${file.id}')" title="Preview">
                            <i class="fas fa-eye"></i>
                        </button>`}
                    <button class="file-action" onclick="cloud.renameFile('${file.id}')" title="Rename">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="file-action" onclick="cloud.deleteFile('${file.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    getFileIcon(type) {
        const icons = {
            folder: '<i class="fas fa-folder" style="color: #f59e0b;"></i>',
            pdf: '<i class="fas fa-file-pdf" style="color: #ef4444;"></i>',
            image: '<i class="fas fa-file-image" style="color: #3b82f6;"></i>',
            archive: '<i class="fas fa-file-archive" style="color: #8b5cf6;"></i>',
            code: '<i class="fas fa-file-code" style="color: #10b981;"></i>',
            text: '<i class="fas fa-file-alt" style="color: #94a3b8;"></i>',
            video: '<i class="fas fa-file-video" style="color: #ec4899;"></i>',
            audio: '<i class="fas fa-file-audio" style="color: #f59e0b;"></i>',
            default: '<i class="fas fa-file" style="color: #94a3b8;"></i>'
        };
        return icons[type] || icons.default;
    }
    
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    openFolder(folderId) {
        const folder = this.files.find(f => f.id === folderId);
        if (folder && folder.type === 'folder') {
            this.currentPath = folderId;
            this.updateBreadcrumb(folder.name);
            this.renderFiles();
        }
    }
    
    updateBreadcrumb(folderName) {
        const breadcrumb = document.getElementById('cloudBreadcrumb');
        const rootBreadcrumb = `<span class="breadcrumb-item" onclick="cloud.openFolder('root')">My Cloud</span>`;
        
        if (this.currentPath === 'root') {
            breadcrumb.innerHTML = rootBreadcrumb;
        } else {
            breadcrumb.innerHTML = `
                ${rootBreadcrumb}
                <i class="fas fa-chevron-right"></i>
                <span class="breadcrumb-item active">${folderName}</span>
            `;
        }
    }
    
    uploadFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newFile = {
                    id: Date.now().toString(),
                    name: file.name,
                    type: this.getFileType(file.type),
                    path: this.currentPath,
                    size: file.size,
                    modified: new Date().toISOString(),
                    data: e.target.result,
                    icon: this.getFileType(file.type)
                };
                
                this.files.push(newFile);
                this.usedStorage += file.size;
                this.saveFiles();
                this.renderFiles();
                this.updateStorageBar();
                this.showToast(`Uploaded ${file.name}`, 'success');
                resolve(newFile);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
    
    getFileType(mimeType) {
        if (mimeType.startsWith('image/')) return 'image';
        if (mimeType === 'application/pdf') return 'pdf';
        if (mimeType.includes('zip') || mimeType.includes('rar') || mimeType.includes('tar')) return 'archive';
        if (mimeType.startsWith('text/')) return 'text';
        if (mimeType.includes('javascript') || mimeType.includes('python') || mimeType.includes('html')) return 'code';
        if (mimeType.startsWith('video/')) return 'video';
        if (mimeType.startsWith('audio/')) return 'audio';
        return 'file';
    }
    
    downloadFile(fileId) {
        const file = this.files.find(f => f.id === fileId);
        if (!file) return;
        
        if (file.data) {
            // Download from data URL
            const link = document.createElement('a');
            link.href = file.data;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            // Simulate download
            this.showToast(`Downloading ${file.name}...`, 'info');
            setTimeout(() => {
                this.showToast(`${file.name} downloaded!`, 'success');
            }, 1500);
        }
    }
    
    previewFile(fileId) {
        const file = this.files.find(f => f.id === fileId);
        if (!file) return;
        
        // Create preview modal
        const previewModal = document.createElement('div');
        previewModal.className = 'preview-modal';
        previewModal.innerHTML = `
            <div class="preview-content">
                <div class="preview-header">
                    <h3>${file.name}</h3>
                    <button class="preview-close" onclick="this.closest('.preview-modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="preview-body">
                    ${file.type === 'image' ? 
                        `<img src="${file.data || 'assets/images/placeholder.jpg'}" alt="${file.name}">` :
                        file.type === 'pdf' ?
                        `<iframe src="${file.data || 'about:blank'}" width="100%" height="500px"></iframe>` :
                        `<div class="preview-placeholder">
                            <i class="fas ${this.getFileIcon(file.type).match(/fa-[a-z-]+/)[0]}"></i>
                            <p>Preview not available for this file type</p>
                            <button class="btn btn-primary" onclick="cloud.downloadFile('${file.id}')">
                                <i class="fas fa-download"></i> Download
                            </button>
                        </div>`
                    }
                </div>
                <div class="preview-footer">
                    <span>Size: ${this.formatBytes(file.size)}</span>
                    <span>Modified: ${new Date(file.modified).toLocaleString()}</span>
                </div>
            </div>
        `;
        
        document.body.appendChild(previewModal);
    }
    
    renameFile(fileId) {
        const file = this.files.find(f => f.id === fileId);
        if (!file) return;
        
        const newName = prompt('Enter new name:', file.name);
        if (newName && newName !== file.name) {
            file.name = newName;
            file.modified = new Date().toISOString();
            this.saveFiles();
            this.renderFiles();
            this.showToast(`Renamed to ${newName}`, 'success');
        }
    }
    
    deleteFile(fileId) {
        const file = this.files.find(f => f.id === fileId);
        if (!file) return;
        
        if (confirm(`Are you sure you want to delete ${file.name}?`)) {
            // Remove from files array
            this.files = this.files.filter(f => f.id !== fileId);
            
            // If folder, also remove all files inside
            if (file.type === 'folder') {
                this.files = this.files.filter(f => f.path !== fileId);
            }
            
            this.usedStorage = this.calculateUsedStorage();
            this.saveFiles();
            this.renderFiles();
            this.updateStorageBar();
            this.showToast(`${file.name} deleted`, 'success');
        }
    }
    
    createFolder() {
        const folderName = prompt('Enter folder name:');
        if (!folderName) return;
        
        // Check if folder already exists
        const exists = this.files.some(f => 
            f.path === this.currentPath && 
            f.name === folderName && 
            f.type === 'folder'
        );
        
        if (exists) {
            alert('A folder with this name already exists');
            return;
        }
        
        const newFolder = {
            id: Date.now().toString(),
            name: folderName,
            type: 'folder',
            path: this.currentPath,
            size: 0,
            modified: new Date().toISOString(),
            items: 0,
            icon: 'folder'
        };
        
        this.files.push(newFolder);
        this.saveFiles();
        this.renderFiles();
        this.showToast(`Folder '${folderName}' created`, 'success');
    }
    
    setupDragAndDrop() {
        const dropZone = document.getElementById('cloudUploadArea');
        
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            document.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });
        
        ['dragenter', 'dragover'].forEach(eventName => {
            document.addEventListener(eventName, () => {
                dropZone.style.display = 'flex';
            });
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            document.addEventListener(eventName, () => {
                dropZone.style.display = 'none';
            });
        });
        
        document.addEventListener('drop', (e) => {
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                Array.from(files).forEach(file => this.uploadFile(file));
            }
        });
    }
    
    setupEventListeners() {
        // Upload button
        document.getElementById('cloudUploadBtn')?.addEventListener('click', () => {
            document.getElementById('cloudFileInput').click();
        });
        
        // File input change
        document.getElementById('cloudFileInput')?.addEventListener('change', (e) => {
            Array.from(e.target.files).forEach(file => this.uploadFile(file));
            e.target.value = ''; // Reset input
        });
        
        // New folder button
        document.getElementById('cloudNewFolderBtn')?.addEventListener('click', () => {
            this.createFolder();
        });
        
        // Refresh button
        document.getElementById('cloudRefreshBtn')?.addEventListener('click', () => {
            this.renderFiles();
            this.showToast('Cloud refreshed', 'info');
        });
        
        // Search input
        document.getElementById('cloudSearchInput')?.addEventListener('input', (e) => {
            this.searchFiles(e.target.value);
        });
    }
    
    searchFiles(query) {
        if (!query) {
            this.renderFiles();
            return;
        }
        
        const results = this.files.filter(f => 
            f.name.toLowerCase().includes(query.toLowerCase()) &&
            (f.path === this.currentPath || f.path.includes(this.currentPath))
        );
        
        const grid = document.getElementById('cloudFilesGrid');
        if (results.length === 0) {
            grid.innerHTML = `
                <div class="cloud-empty">
                    <i class="fas fa-search"></i>
                    <h3>No results found</h3>
                    <p>Try a different search term</p>
                </div>
            `;
        } else {
            grid.innerHTML = results.map(file => this.renderFileItem(file)).join('');
        }
    }
    
    renderFileItem(file) {
        return `
            <div class="cloud-file-item ${file.type === 'folder' ? 'folder' : 'file'}" 
                 data-id="${file.id}" 
                 data-name="${file.name}" 
                 data-type="${file.type}"
                 ondblclick="${file.type === 'folder' ? `cloud.openFolder('${file.id}')` : `cloud.previewFile('${file.id}')`}">
                <div class="file-icon">
                    ${this.getFileIcon(file.type)}
                </div>
                <div class="file-info">
                    <span class="file-name">${file.name}</span>
                    <span class="file-meta">
                        ${file.type === 'folder' ? `${file.items} items` : this.formatBytes(file.size)} 
                        • ${new Date(file.modified).toLocaleDateString()}
                    </span>
                </div>
                <div class="file-actions">
                    ${file.type === 'folder' ? 
                        `<button class="file-action" onclick="cloud.openFolder('${file.id}')" title="Open">
                            <i class="fas fa-folder-open"></i>
                        </button>` : 
                        `<button class="file-action" onclick="cloud.downloadFile('${file.id}')" title="Download">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="file-action" onclick="cloud.previewFile('${file.id}')" title="Preview">
                            <i class="fas fa-eye"></i>
                        </button>`}
                    <button class="file-action" onclick="cloud.renameFile('${file.id}')" title="Rename">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="file-action" onclick="cloud.deleteFile('${file.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }
    
    showToast(message, type = 'success') {
        const toast = document.getElementById('toastNotification');
        const icon = toast.querySelector('.toast-icon');
        const messageEl = toast.querySelector('.toast-message');
        
        icon.className = `toast-icon ${type}`;
        icon.innerHTML = type === 'success' ? '<i class="fas fa-check-circle"></i>' :
                         type === 'error' ? '<i class="fas fa-exclamation-circle"></i>' :
                         '<i class="fas fa-info-circle"></i>';
        
        messageEl.textContent = message;
        
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

// Initialize cloud when authenticated
let cloud;

// Cloud password verification
document.getElementById('submitCloudPassword')?.addEventListener('click', function() {
    const password = document.getElementById('cloudPassword').value;
    const error = document.getElementById('cloudPasswordError');
    
    if (password === 'Sanjai@2008') {
        document.getElementById('cloudPasswordForm').style.display = 'none';
        document.getElementById('cloudDashboard').style.display = 'block';
        cloud = new CloudStorage();
    } else {
        error.textContent = 'Incorrect password. Hint: Sanjai@2008';
    }
});

// Password visibility toggle
document.getElementById('cloudPasswordToggle')?.addEventListener('click', function() {
    const input = document.getElementById('cloudPassword');
    const icon = this.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
});

// Cloud logout
document.getElementById('cloudLogoutBtn')?.addEventListener('click', function() {
    document.getElementById('cloudPasswordForm').style.display = 'block';
    document.getElementById('cloudDashboard').style.display = 'none';
    document.getElementById('cloudPassword').value = '';
    cloud = null;
});

// Browse files button
document.getElementById('browseFilesBtn')?.addEventListener('click', function() {
    document.getElementById('cloudFileInput').click();
});
