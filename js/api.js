// ========================================
// API.JS - API Client for Backend Communication
// ========================================

const API = {
    baseUrl: '/api/', // Change this to your actual API URL
    
    // ========== AUTHENTICATION ==========
    async login(password) {
        try {
            const response = await fetch(this.baseUrl + 'auth.php?action=login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Network error' };
        }
    },
    
    async logout() {
        try {
            const response = await fetch(this.baseUrl + 'auth.php?action=logout', {
                method: 'POST',
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            console.error('Logout error:', error);
            return { success: false };
        }
    },
    
    async checkSession() {
        try {
            const response = await fetch(this.baseUrl + 'auth.php?action=check', {
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { success: false };
        }
    },
    
    async changePassword(oldPassword, newPassword) {
        try {
            const response = await fetch(this.baseUrl + 'auth.php?action=change-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ oldPassword, newPassword }),
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Network error' };
        }
    },
    
    // ========== DATA RETRIEVAL ==========
    async getData(type = 'all') {
        try {
            const response = await fetch(this.baseUrl + 'get-data.php?type=' + type);
            return await response.json();
        } catch (error) {
            console.error('Get data error:', error);
            return { success: false, data: null };
        }
    },
    
    // ========== SAVE DATA ==========
    async saveProfile(data) {
        try {
            const response = await fetch(this.baseUrl + 'save-data.php?type=profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Network error' };
        }
    },
    
    async saveProject(data) {
        try {
            const response = await fetch(this.baseUrl + 'save-data.php?type=project', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Network error' };
        }
    },
    
    async saveCertificate(data) {
        try {
            const response = await fetch(this.baseUrl + 'save-data.php?type=certificate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Network error' };
        }
    },
    
    async saveBlog(data) {
        try {
            const response = await fetch(this.baseUrl + 'save-data.php?type=blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Network error' };
        }
    },
    
    async saveSkills(data) {
        try {
            const response = await fetch(this.baseUrl + 'save-data.php?type=skill', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Network error' };
        }
    },
    
    async saveTheme(data) {
        try {
            const response = await fetch(this.baseUrl + 'save-data.php?type=theme', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Network error' };
        }
    },
    
    // ========== DELETE DATA ==========
    async deleteItem(type, id) {
        try {
            const response = await fetch(this.baseUrl + 'delete.php?type=' + type + '&id=' + id, {
                method: 'DELETE',
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Network error' };
        }
    },
    
    // ========== FILE UPLOAD ==========
    async uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', 'upload');
        
        try {
            const response = await fetch(this.baseUrl + 'save-data.php', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Network error' };
        }
    }
};
