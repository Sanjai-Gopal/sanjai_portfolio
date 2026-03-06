// ========================================
// ADMIN.JS - Complete Admin Panel
// ========================================

// ========== INITIALIZE ADMIN ==========
document.addEventListener('DOMContentLoaded', function() {
    initAdminLogin();
    initAdminDashboard();
    initAdminTabs();
    initProfilePanel();
    initProjectsPanel();
    initCertificatesPanel();
    initBlogPanel();
    initSkillsPanel();
    initThemePanel();
    initPasswordPanel();
    initLogout();
});

// ========== ADMIN LOGIN ==========
function initAdminLogin() {
    const loginModal = document.getElementById('adminLoginModal');
    const loginClose = document.getElementById('adminLoginClose');
    const passwordInput = document.getElementById('adminPassword');
    const submitBtn = document.getElementById('adminLoginSubmit');
    const errorDiv = document.getElementById('adminLoginError');
    const toggleBtn = document.getElementById('adminPasswordToggle');
    const loadingDiv = document.getElementById('adminLoginLoading');
    
    // Close login modal
    loginClose.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });
    
    // Toggle password visibility
    toggleBtn.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        toggleBtn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
    
    // Submit login
    submitBtn.addEventListener('click', async () => {
        const password = passwordInput.value.trim();
        
        if (!password) {
            errorDiv.textContent = 'Please enter password';
            return;
        }
        
        loadingDiv.style.display = 'block';
        submitBtn.disabled = true;
        
        const result = await API.login(password);
        
        loadingDiv.style.display = 'none';
        submitBtn.disabled = false;
        
        if (result.success) {
            loginModal.classList.remove('active');
            document.getElementById('adminDashboardModal').classList.add('active');
            document.getElementById('adminSecret').style.display = 'block';
            passwordInput.value = '';
            errorDiv.textContent = '';
            
            // Load admin data
            loadAdminData();
        } else {
            errorDiv.textContent = result.message || 'Invalid password';
        }
    });
    
    // Enter key
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
    
    // Check session on load
    API.checkSession().then(response => {
        if (response.success) {
            document.getElementById('adminSecret').style.display = 'block';
        }
    });
}

// ========== ADMIN DASHBOARD ==========
function initAdminDashboard() {
    const dashboardModal = document.getElementById('adminDashboardModal');
    const dashboardClose = document.getElementById('adminDashboardClose');
    
    dashboardClose.addEventListener('click', () => {
        dashboardModal.classList.remove('active');
    });
    
    // Double-click secret to open dashboard (if already logged in)
    document.getElementById('adminSecret').addEventListener('dblclick', async () => {
        const session = await API.checkSession();
        if (session.success) {
            dashboardModal.classList.add('active');
            loadAdminData();
        } else {
            document.getElementById('adminLoginModal').classList.add('active');
        }
    });
}

// ========== ADMIN TABS ==========
function initAdminTabs() {
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            const panelId = this.dataset.tab + 'Panel';
            document.getElementById(panelId).classList.add('active');
        });
    });
}

// ========== LOAD ADMIN DATA ==========
async function loadAdminData() {
    try {
        const response = await API.getData('all');
        if (response.success && response.data) {
            siteData = response.data;
            
            // Update counts
            document.getElementById('adminProjectCount').textContent = siteData.projects?.length || 0;
            document.getElementById('adminCertCount').textContent = siteData.certificates?.length || 0;
            document.getElementById('adminBlogCount').textContent = siteData.blog?.length || 0;
            
            let totalSkills = 0;
            siteData.skills?.forEach(cat => totalSkills += cat.skills?.length || 0);
            document.getElementById('adminSkillCount').textContent = totalSkills;
            
            // Load lists
            loadProjectsList();
            loadCertificatesList();
            loadBlogList();
            loadSkillsList();
            
            // Load profile data
            if (siteData.profile) {
                document.getElementById('adminName').value = siteData.profile.name || '';
                document.getElementById('adminTitle').value = siteData.profile.title || '';
                document.getElementById('adminBio').value = siteData.profile.bio || '';
                document.getElementById('adminLocation').value = siteData.profile.location || '';
                document.getElementById('adminEmail').value = siteData.profile.email || '';
                document.getElementById('adminPhone').value = siteData.profile.phone || '';
                
                if (siteData.profile.photo) {
                    document.getElementById('profilePhotoPreview').src = siteData.profile.photo;
                }
            }
            
            // Load theme data
            if (siteData.theme) {
                document.getElementById('themePrimary').value = siteData.theme.primary || '#4caf7a';
                document.getElementById('themeSecondary').value = siteData.theme.secondary || '#3d7a4f';
                document.getElementById('themeBg').value = siteData.theme.bg || '#f5efe6';
                document.getElementById('themeText').value = siteData.theme.text || '#2c3e2f';
            }
        }
    } catch (error) {
        console.error('Failed to load admin data:', error);
    }
}

// ========== LOAD PROJECTS LIST ==========
function loadProjectsList() {
    const list = document.getElementById('projectsList');
    list.innerHTML = siteData.projects.map(project => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${project.title}</h4>
                <p>${project.category} · ${project.tech.join(', ')}</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn" onclick="editProject('${project.id}')"><i class="fas fa-edit"></i></button>
                <button class="admin-btn delete" onclick="deleteProject('${project.id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

// ========== LOAD CERTIFICATES LIST ==========
function loadCertificatesList() {
    const list = document.getElementById('certificatesList');
    list.innerHTML = siteData.certificates.map(cert => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${cert.title}</h4>
                <p>${cert.issuer} · ${cert.date}</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn" onclick="editCertificate('${cert.id}')"><i class="fas fa-edit"></i></button>
                <button class="admin-btn delete" onclick="deleteCertificate('${cert.id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

// ========== LOAD BLOG LIST ==========
function loadBlogList() {
    const list = document.getElementById('blogList');
    list.innerHTML = siteData.blog.map(post => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${post.title}</h4>
                <p>${post.category} · ${post.date}</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn" onclick="editPost('${post.id}')"><i class="fas fa-edit"></i></button>
                <button class="admin-btn delete" onclick="deletePost('${post.id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

// ========== LOAD SKILLS LIST ==========
function loadSkillsList() {
    const list = document.getElementById('skillsList');
    let html = '';
    
    siteData.skills.forEach((cat, catIndex) => {
        cat.skills.forEach((skill, skillIndex) => {
            const skillId = `${catIndex}-${skillIndex}`;
            html += `
                <div class="admin-item">
                    <div class="admin-item-info">
                        <h4>${skill.name}</h4>
                        <p>${cat.title} · ${skill.level}% · ${skill.tags.join(', ')}</p>
                    </div>
                    <div class="admin-item-actions">
                        <button class="admin-btn" onclick="editSkill('${catIndex}', '${skillIndex}')"><i class="fas fa-edit"></i></button>
                        <button class="admin-btn delete" onclick="deleteSkill('${catIndex}', '${skillIndex}')"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
        });
    });
    
    list.innerHTML = html;
}

// ========== PROFILE PANEL ==========
function initProfilePanel() {
    document.getElementById('saveProfileBtn').addEventListener('click', async () => {
        const loading = document.getElementById('profileLoading');
        const btn = this;
        
        const profileData = {
            name: document.getElementById('adminName').value,
            title: document.getElementById('adminTitle').value,
            bio: document.getElementById('adminBio').value,
            location: document.getElementById('adminLocation').value,
            email: document.getElementById('adminEmail').value,
            phone: document.getElementById('adminPhone').value,
            photo: siteData.profile?.photo || null
        };
        
        loading.style.display = 'block';
        btn.disabled = true;
        
        const result = await API.saveProfile(profileData);
        
        loading.style.display = 'none';
        btn.disabled = false;
        
        if (result.success) {
            showToast('Profile updated successfully!', 'success');
            updateProfile(profileData);
        } else {
            showToast(result.message || 'Failed to update profile', 'error');
        }
    });
    
    // Profile photo upload
    document.getElementById('uploadPhotoBtn').addEventListener('click', () => {
        document.getElementById('profilePhotoUpload').click();
    });
    
    document.getElementById('profilePhotoUpload').addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const result = await API.uploadFile(file);
        if (result.success) {
            document.getElementById('profilePhotoPreview').src = result.data.path;
            siteData.profile.photo = result.data.path;
            showToast('Photo uploaded successfully!', 'success');
        } else {
            showToast('Failed to upload photo', 'error');
        }
    });
}

// ========== PROJECTS PANEL ==========
function initProjectsPanel() {
    document.getElementById('addProjectBtn').addEventListener('click', async () => {
        const name = document.getElementById('newProjectName').value;
        const desc = document.getElementById('newProjectDesc').value;
        const tech = document.getElementById('newProjectTech').value.split(',').map(t => t.trim());
        const category = document.getElementById('newProjectCategory').value;
        const github = document.getElementById('newProjectGithub').value;
        const live = document.getElementById('newProjectLive').value;
        const file = document.getElementById('newProjectImage').files[0];
        
        if (!name || !desc || tech.length === 0 || !category || !github) {
            showToast('Please fill all required fields', 'error');
            return;
        }
        
        const loading = document.getElementById('projectLoading');
        const btn = this;
        
        loading.style.display = 'block';
        btn.disabled = true;
        
        let imagePath = null;
        if (file) {
            const uploadResult = await API.uploadFile(file);
            if (uploadResult.success) {
                imagePath = uploadResult.data.path;
            }
        }
        
        const projectData = {
            title: name,
            description: desc,
            tech: tech,
            category: category,
            github: github,
            live: live || null,
            image: imagePath
        };
        
        const result = await API.saveProject(projectData);
        
        loading.style.display = 'none';
        btn.disabled = false;
        
        if (result.success) {
            showToast('Project added successfully!', 'success');
            document.getElementById('newProjectName').value = '';
            document.getElementById('newProjectDesc').value = '';
            document.getElementById('newProjectTech').value = '';
            document.getElementById('newProjectGithub').value = '';
            document.getElementById('newProjectLive').value = '';
            document.getElementById('newProjectImage').value = '';
            
            // Refresh data
            await loadAllData();
            loadAdminData();
        } else {
            showToast(result.message || 'Failed to add project', 'error');
        }
    });
}

// ========== DELETE PROJECT ==========
window.deleteProject = async function(id) {
    if (!confirm('Delete this project?')) return;
    
    const result = await API.deleteItem('project', id);
    if (result.success) {
        showToast('Project deleted!', 'success');
        await loadAllData();
        loadAdminData();
    } else {
        showToast(result.message || 'Failed to delete project', 'error');
    }
};

// ========== EDIT PROJECT ==========
window.editProject = async function(id) {
    const project = siteData.projects.find(p => p.id === id);
    if (!project) return;
    
    document.getElementById('newProjectName').value = project.title;
    document.getElementById('newProjectDesc').value = project.description;
    document.getElementById('newProjectTech').value = project.tech.join(', ');
    document.getElementById('newProjectCategory').value = project.category;
    document.getElementById('newProjectGithub').value = project.github || '';
    document.getElementById('newProjectLive').value = project.live || '';
    
    // Switch to projects tab
    document.querySelector('[data-tab="projects"]').click();
    
    // Delete old after confirmation
    if (confirm('Edit this project. Click OK to save changes after editing.')) {
        await deleteProject(id);
    }
};

// ========== DELETE CERTIFICATE ==========
window.deleteCertificate = async function(id) {
    if (!confirm('Delete this certificate?')) return;
    
    const result = await API.deleteItem('certificate', id);
    if (result.success) {
        showToast('Certificate deleted!', 'success');
        await loadAllData();
        loadAdminData();
    } else {
        showToast(result.message || 'Failed to delete certificate', 'error');
    }
};

// ========== DELETE BLOG ==========
window.deletePost = async function(id) {
    if (!confirm('Delete this blog post?')) return;
    
    const result = await API.deleteItem('blog', id);
    if (result.success) {
        showToast('Blog post deleted!', 'success');
        await loadAllData();
        loadAdminData();
    } else {
        showToast(result.message || 'Failed to delete blog post', 'error');
    }
};

// ========== DELETE SKILL ==========
window.deleteSkill = async function(catIndex, skillIndex) {
    if (!confirm('Delete this skill?')) return;
    
    siteData.skills[catIndex].skills.splice(skillIndex, 1);
    
    const result = await API.saveSkills(siteData.skills);
    if (result.success) {
        showToast('Skill deleted!', 'success');
        loadSkillsList();
        renderSkills();
    } else {
        showToast(result.message || 'Failed to delete skill', 'error');
    }
};

// ========== CERTIFICATES PANEL ==========
function initCertificatesPanel() {
    document.getElementById('addCertBtn').addEventListener('click', async () => {
        const name = document.getElementById('newCertName').value;
        const issuer = document.getElementById('newCertIssuer').value;
        const date = document.getElementById('newCertDate').value;
        const file = document.getElementById('newCertImage').files[0];
        
        if (!name || !issuer || !date) {
            showToast('Please fill all fields', 'error');
            return;
        }
        
        const loading = document.getElementById('certLoading');
        const btn = this;
        
        loading.style.display = 'block';
        btn.disabled = true;
        
        let imagePath = null;
        if (file) {
            const uploadResult = await API.uploadFile(file);
            if (uploadResult.success) {
                imagePath = uploadResult.data.path;
            }
        }
        
        const certData = {
            title: name,
            issuer: issuer,
            date: date,
            image: imagePath
        };
        
        const result = await API.saveCertificate(certData);
        
        loading.style.display = 'none';
        btn.disabled = false;
        
        if (result.success) {
            showToast('Certificate added successfully!', 'success');
            document.getElementById('newCertName').value = '';
            document.getElementById('newCertIssuer').value = '';
            document.getElementById('newCertDate').value = '';
            document.getElementById('newCertImage').value = '';
            
            await loadAllData();
            loadAdminData();
        } else {
            showToast(result.message || 'Failed to add certificate', 'error');
        }
    });
}

// ========== BLOG PANEL ==========
function initBlogPanel() {
    document.getElementById('addPostBtn').addEventListener('click', async () => {
        const title = document.getElementById('newPostTitle').value;
        const excerpt = document.getElementById('newPostExcerpt').value;
        const content = document.getElementById('newPostContent').value;
        const category = document.getElementById('newPostCategory').value;
        const tags = document.getElementById('newPostTags').value.split(',').map(t => t.trim());
        const file = document.getElementById('newPostImage').files[0];
        
        if (!title || !excerpt || !category) {
            showToast('Please fill required fields', 'error');
            return;
        }
        
        const loading = document.getElementById('blogLoading');
        const btn = this;
        
        loading.style.display = 'block';
        btn.disabled = true;
        
        let imagePath = null;
        if (file) {
            const uploadResult = await API.uploadFile(file);
            if (uploadResult.success) {
                imagePath = uploadResult.data.path;
            }
        }
        
        const postData = {
            title: title,
            excerpt: excerpt,
            content: content || excerpt,
            category: category,
            tags: tags,
            image: imagePath,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
        
        const result = await API.saveBlog(postData);
        
        loading.style.display = 'none';
        btn.disabled = false;
        
        if (result.success) {
            showToast('Blog post added successfully!', 'success');
            document.getElementById('newPostTitle').value = '';
            document.getElementById('newPostExcerpt').value = '';
            document.getElementById('newPostContent').value = '';
            document.getElementById('newPostCategory').value = '';
            document.getElementById('newPostTags').value = '';
            document.getElementById('newPostImage').value = '';
            
            await loadAllData();
            loadAdminData();
        } else {
            showToast(result.message || 'Failed to add blog post', 'error');
        }
    });
}

// ========== SKILLS PANEL ==========
function initSkillsPanel() {
    document.getElementById('addSkillBtn').addEventListener('click', async () => {
        const name = document.getElementById('newSkillName').value;
        const level = document.getElementById('newSkillLevel').value;
        const tags = document.getElementById('newSkillTags').value.split(',').map(t => t.trim());
        const category = document.getElementById('newSkillCategory').value;
        
        if (!name || !level || tags.length === 0) {
            showToast('Please fill all fields', 'error');
            return;
        }
        
        const loading = document.getElementById('skillLoading');
        const btn = this;
        
        loading.style.display = 'block';
        btn.disabled = true;
        
        let categoryIndex = 0;
        if (category === 'languages') categoryIndex = 0;
        else if (category === 'ai') categoryIndex = 1;
        else if (category === 'tools') categoryIndex = 2;
        
        siteData.skills[categoryIndex].skills.push({
            name: name,
            level: parseInt(level),
            tags: tags
        });
        
        const result = await API.saveSkills(siteData.skills);
        
        loading.style.display = 'none';
        btn.disabled = false;
        
        if (result.success) {
            showToast('Skill added successfully!', 'success');
            document.getElementById('newSkillName').value = '';
            document.getElementById('newSkillLevel').value = '';
            document.getElementById('newSkillTags').value = '';
            
            loadSkillsList();
            renderSkills();
        } else {
            showToast(result.message || 'Failed to add skill', 'error');
        }
    });
}

// ========== THEME PANEL ==========
function initThemePanel() {
    document.getElementById('saveThemeBtn').addEventListener('click', async () => {
        const primary = document.getElementById('themePrimary').value;
        const secondary = document.getElementById('themeSecondary').value;
        const bg = document.getElementById('themeBg').value;
        const text = document.getElementById('themeText').value;
        
        const loading = document.getElementById('themeLoading');
        const btn = this;
        
        const themeData = {
            primary: primary,
            secondary: secondary,
            bg: bg,
            text: text
        };
        
        loading.style.display = 'block';
        btn.disabled = true;
        
        const result = await API.saveTheme(themeData);
        
        loading.style.display = 'none';
        btn.disabled = false;
        
        if (result.success) {
            showToast('Theme updated successfully!', 'success');
            applyTheme(themeData);
        } else {
            showToast(result.message || 'Failed to update theme', 'error');
        }
    });
    
    document.getElementById('resetThemeBtn').addEventListener('click', () => {
        document.getElementById('themePrimary').value = '#4caf7a';
        document.getElementById('themeSecondary').value = '#3d7a4f';
        document.getElementById('themeBg').value = '#f5efe6';
        document.getElementById('themeText').value = '#2c3e2f';
    });
}

// ========== PASSWORD PANEL ==========
function initPasswordPanel() {
    document.getElementById('changePasswordBtn').addEventListener('click', async () => {
        const oldPass = document.getElementById('currentPassword').value;
        const newPass = document.getElementById('newPassword').value;
        const confirmPass = document.getElementById('confirmPassword').value;
        
        if (!oldPass || !newPass || !confirmPass) {
            showToast('Please fill all fields', 'error');
            return;
        }
        
        if (newPass !== confirmPass) {
            showToast('New passwords do not match', 'error');
            return;
        }
        
        if (newPass.length < 8) {
            showToast('Password must be at least 8 characters', 'error');
            return;
        }
        
        const loading = document.getElementById('passwordLoading');
        const btn = this;
        
        loading.style.display = 'block';
        btn.disabled = true;
        
        const result = await API.changePassword(oldPass, newPass);
        
        loading.style.display = 'none';
        btn.disabled = false;
        
        if (result.success) {
            showToast('Password changed successfully!', 'success');
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
        } else {
            showToast(result.message || 'Failed to change password', 'error');
        }
    });
}

// ========== LOGOUT ==========
function initLogout() {
    document.getElementById('adminLogout').addEventListener('click', async () => {
        await API.logout();
        document.getElementById('adminDashboardModal').classList.remove('active');
        document.getElementById('adminSecret').style.display = 'none';
        showToast('Logged out successfully', 'info');
    });
}

// ========== TOAST NOTIFICATION ==========
function showToast(message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const icon = toast.querySelector('.toast-icon i');
    const messageEl = toast.querySelector('.toast-message');
    
    icon.className = type === 'success' ? 'fas fa-check-circle' : 
                     type === 'error' ? 'fas fa-exclamation-circle' : 
                     'fas fa-info-circle';
    messageEl.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
