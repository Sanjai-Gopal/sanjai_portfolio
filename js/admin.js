// ========================================
// ADMIN.JS - Complete Admin Panel
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initAdminPanel();
});

function initAdminPanel() {
    const secretBtn = document.getElementById('adminSecret');
    const modal = document.getElementById('adminModal');
    const closeBtn = document.getElementById('adminClose');
    const passwordInput = document.getElementById('adminPassword');
    const submitBtn = document.getElementById('adminSubmit');
    const errorDiv = document.getElementById('adminError');
    const passwordForm = document.getElementById('adminPasswordForm');
    const dashboard = document.getElementById('adminDashboard');
    const toggleBtn = document.getElementById('adminPasswordToggle');
    const logoutBtn = document.getElementById('adminLogout');
    
    // Secret button click
    secretBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });
    
    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        passwordForm.style.display = 'block';
        dashboard.classList.remove('active');
        passwordInput.value = '';
        errorDiv.textContent = '';
    });
    
    // Click outside to close
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            passwordForm.style.display = 'block';
            dashboard.classList.remove('active');
            passwordInput.value = '';
            errorDiv.textContent = '';
        }
    });
    
    // Toggle password visibility
    toggleBtn.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        toggleBtn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
    
    // Submit password
    submitBtn.addEventListener('click', () => {
        const password = passwordInput.value;
        
        // Change this password in production!
        if (password === 'admin123') {
            passwordForm.style.display = 'none';
            dashboard.classList.add('active');
            loadAdminData();
            errorDiv.textContent = '';
        } else {
            errorDiv.textContent = 'Incorrect password. Hint: admin123';
        }
    });
    
    // Enter key
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
    
    // Logout
    logoutBtn.addEventListener('click', () => {
        passwordForm.style.display = 'block';
        dashboard.classList.remove('active');
        passwordInput.value = '';
    });
    
    // Tab switching
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            const panelId = this.dataset.tab + 'Panel';
            document.getElementById(panelId).classList.add('active');
        });
    });
    
    // Save profile
    document.getElementById('saveProfileBtn').addEventListener('click', () => {
        const name = document.getElementById('adminName').value;
        const title = document.getElementById('adminTitle').value;
        const bio = document.getElementById('adminBio').value;
        const location = document.getElementById('adminLocation').value;
        const email = document.getElementById('adminEmail').value;
        const phone = document.getElementById('adminPhone').value;
        
        document.getElementById('aboutTitle').textContent = title;
        document.getElementById('aboutBio').textContent = bio;
        document.getElementById('infoLocation').textContent = location;
        document.getElementById('contactLocation').textContent = location;
        document.getElementById('contactEmail').textContent = email;
        document.getElementById('contactPhone').textContent = phone;
        document.getElementById('footerName').innerHTML = `Sanjai <span class="gradient-text">Gopal</span>`;
        
        showAdminNotification('Profile updated successfully!');
    });
    
    // Add project
    document.getElementById('addProjectBtn').addEventListener('click', () => {
        const name = document.getElementById('newProjectName').value;
        const desc = document.getElementById('newProjectDesc').value;
        const tech = document.getElementById('newProjectTech').value.split(',').map(t => t.trim());
        const category = document.getElementById('newProjectCategory').value;
        const github = document.getElementById('newProjectGithub').value;
        
        if (name && desc && tech.length && category && github) {
            window.projectsData.push({
                title: name,
                description: desc,
                category: category,
                tech: tech,
                image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + name.substring(0, 10) + '%3C/text%3E%3C/svg%3E',
                github: github
            });
            
            localStorage.setItem('projectsData', JSON.stringify(window.projectsData));
            window.renderProjects('all');
            loadAdminData();
            
            document.getElementById('newProjectName').value = '';
            document.getElementById('newProjectDesc').value = '';
            document.getElementById('newProjectTech').value = '';
            document.getElementById('newProjectCategory').value = 'python';
            document.getElementById('newProjectGithub').value = '';
            
            showAdminNotification('Project added successfully!');
        } else {
            showAdminNotification('Please fill all fields', 'error');
        }
    });
    
    // Add certificate
    document.getElementById('addCertBtn').addEventListener('click', () => {
        const name = document.getElementById('newCertName').value;
        const issuer = document.getElementById('newCertIssuer').value;
        const date = document.getElementById('newCertDate').value;
        
        if (name && issuer && date) {
            window.certificatesData.push({
                title: name,
                issuer: issuer,
                date: date
            });
            
            localStorage.setItem('certificatesData', JSON.stringify(window.certificatesData));
            window.renderCertificates();
            loadAdminData();
            
            document.getElementById('newCertName').value = '';
            document.getElementById('newCertIssuer').value = '';
            document.getElementById('newCertDate').value = '';
            
            showAdminNotification('Certificate added successfully!');
        } else {
            showAdminNotification('Please fill all fields', 'error');
        }
    });
    
    // Add blog post
    document.getElementById('addPostBtn').addEventListener('click', () => {
        const title = document.getElementById('newPostTitle').value;
        const excerpt = document.getElementById('newPostExcerpt').value;
        const category = document.getElementById('newPostCategory').value;
        const image = document.getElementById('newPostImage').value || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + title.substring(0, 10) + '%3C/text%3E%3C/svg%3E';
        
        if (title && excerpt && category) {
            window.blogData.push({
                title: title,
                excerpt: excerpt,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                category: category,
                image: image
            });
            
            localStorage.setItem('blogData', JSON.stringify(window.blogData));
            window.renderBlog('all');
            loadAdminData();
            
            document.getElementById('newPostTitle').value = '';
            document.getElementById('newPostExcerpt').value = '';
            document.getElementById('newPostCategory').value = '';
            document.getElementById('newPostImage').value = '';
            
            showAdminNotification('Blog post added successfully!');
        } else {
            showAdminNotification('Please fill all fields', 'error');
        }
    });
    
    // Add skill
    document.getElementById('addSkillBtn').addEventListener('click', () => {
        const name = document.getElementById('newSkillName').value;
        const level = document.getElementById('newSkillLevel').value;
        const tags = document.getElementById('newSkillTags').value.split(',').map(t => t.trim());
        const category = document.getElementById('newSkillCategory').value;
        
        if (name && level && tags.length && category) {
            let categoryIndex = 0;
            if (category === 'languages') categoryIndex = 0;
            else if (category === 'ai') categoryIndex = 1;
            else if (category === 'tools') categoryIndex = 2;
            
            window.skillsData[categoryIndex].skills.push({
                name: name,
                level: parseInt(level),
                tags: tags
            });
            
            localStorage.setItem('skillsData', JSON.stringify(window.skillsData));
            window.renderSkills();
            loadAdminData();
            
            document.getElementById('newSkillName').value = '';
            document.getElementById('newSkillLevel').value = '';
            document.getElementById('newSkillTags').value = '';
            
            showAdminNotification('Skill added successfully!');
        } else {
            showAdminNotification('Please fill all fields', 'error');
        }
    });
    
    // Theme settings
    document.getElementById('saveThemeBtn').addEventListener('click', () => {
        const primary = document.getElementById('themePrimary').value;
        const secondary = document.getElementById('themeSecondary').value;
        const bg = document.getElementById('themeBg').value;
        const text = document.getElementById('themeText').value;
        
        document.documentElement.style.setProperty('--primary', primary);
        document.documentElement.style.setProperty('--secondary', secondary);
        document.documentElement.style.setProperty('--bg-primary', bg);
        document.documentElement.style.setProperty('--text-primary', text);
        
        showAdminNotification('Theme updated successfully!');
    });
    
    document.getElementById('resetThemeBtn').addEventListener('click', () => {
        document.documentElement.style.setProperty('--primary', '#4caf7a');
        document.documentElement.style.setProperty('--secondary', '#3d7a4f');
        document.documentElement.style.setProperty('--bg-primary', '#f5efe6');
        document.documentElement.style.setProperty('--text-primary', '#2c3e2f');
        
        document.getElementById('themePrimary').value = '#4caf7a';
        document.getElementById('themeSecondary').value = '#3d7a4f';
        document.getElementById('themeBg').value = '#f5efe6';
        document.getElementById('themeText').value = '#2c3e2f';
        
        showAdminNotification('Theme reset to default!');
    });
}

function loadAdminData() {
    document.getElementById('adminProjectCount').textContent = window.projectsData.length;
    document.getElementById('adminCertCount').textContent = window.certificatesData.length;
    document.getElementById('adminBlogCount').textContent = window.blogData.length;
    
    let totalSkills = 0;
    window.skillsData.forEach(cat => totalSkills += cat.skills.length);
    document.getElementById('adminSkillCount').textContent = totalSkills;
    
    // Load projects list
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = window.projectsData.map((project, index) => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${project.title}</h4>
                <p>${project.category} · ${project.tech.join(', ')}</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn" onclick="editProject(${index})"><i class="fas fa-edit"></i></button>
                <button class="admin-btn delete" onclick="deleteProject(${index})"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
    
    // Load certificates list
    const certsList = document.getElementById('certificatesList');
    certsList.innerHTML = window.certificatesData.map((cert, index) => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${cert.title}</h4>
                <p>${cert.issuer} · ${cert.date}</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn" onclick="editCertificate(${index})"><i class="fas fa-edit"></i></button>
                <button class="admin-btn delete" onclick="deleteCertificate(${index})"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
    
    // Load blog list
    const blogList = document.getElementById('blogList');
    blogList.innerHTML = window.blogData.map((post, index) => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${post.title}</h4>
                <p>${post.category} · ${post.date}</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn" onclick="editPost(${index})"><i class="fas fa-edit"></i></button>
                <button class="admin-btn delete" onclick="deletePost(${index})"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
    
    // Load skills list
    const skillsList = document.getElementById('skillsList');
    let skillsHtml = '';
    window.skillsData.forEach((cat, catIndex) => {
        cat.skills.forEach((skill, skillIndex) => {
            skillsHtml += `
                <div class="admin-item">
                    <div class="admin-item-info">
                        <h4>${skill.name}</h4>
                        <p>${cat.title} · ${skill.level}% · ${skill.tags.join(', ')}</p>
                    </div>
                    <div class="admin-item-actions">
                        <button class="admin-btn" onclick="editSkill(${catIndex}, ${skillIndex})"><i class="fas fa-edit"></i></button>
                        <button class="admin-btn delete" onclick="deleteSkill(${catIndex}, ${skillIndex})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
        });
    });
    skillsList.innerHTML = skillsHtml;
}

function showAdminNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `admin-notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Global functions for admin actions
window.deleteProject = function(index) {
    if (confirm('Delete this project?')) {
        window.projectsData.splice(index, 1);
        localStorage.setItem('projectsData', JSON.stringify(window.projectsData));
        window.renderProjects('all');
        loadAdminData();
        showAdminNotification('Project deleted!');
    }
};

window.deleteCertificate = function(index) {
    if (confirm('Delete this certificate?')) {
        window.certificatesData.splice(index, 1);
        localStorage.setItem('certificatesData', JSON.stringify(window.certificatesData));
        window.renderCertificates();
        loadAdminData();
        showAdminNotification('Certificate deleted!');
    }
};

window.deletePost = function(index) {
    if (confirm('Delete this blog post?')) {
        window.blogData.splice(index, 1);
        localStorage.setItem('blogData', JSON.stringify(window.blogData));
        window.renderBlog('all');
        loadAdminData();
        showAdminNotification('Blog post deleted!');
    }
};

window.deleteSkill = function(catIndex, skillIndex) {
    if (confirm('Delete this skill?')) {
        window.skillsData[catIndex].skills.splice(skillIndex, 1);
        localStorage.setItem('skillsData', JSON.stringify(window.skillsData));
        window.renderSkills();
        loadAdminData();
        showAdminNotification('Skill deleted!');
    }
};

window.editProject = function(index) {
    const project = window.projectsData[index];
    document.getElementById('newProjectName').value = project.title;
    document.getElementById('newProjectDesc').value = project.description;
    document.getElementById('newProjectTech').value = project.tech.join(', ');
    document.getElementById('newProjectCategory').value = project.category;
    document.getElementById('newProjectGithub').value = project.github;
    
    if (confirm('Edit this project and click OK to save changes')) {
        window.deleteProject(index);
    }
};

window.editCertificate = function(index) {
    const cert = window.certificatesData[index];
    document.getElementById('newCertName').value = cert.title;
    document.getElementById('newCertIssuer').value = cert.issuer;
    document.getElementById('newCertDate').value = cert.date;
    
    if (confirm('Edit this certificate and click OK to save changes')) {
        window.deleteCertificate(index);
    }
};

window.editPost = function(index) {
    const post = window.blogData[index];
    document.getElementById('newPostTitle').value = post.title;
    document.getElementById('newPostExcerpt').value = post.excerpt;
    document.getElementById('newPostCategory').value = post.category;
    
    if (confirm('Edit this post and click OK to save changes')) {
        window.deletePost(index);
    }
};

window.editSkill = function(catIndex, skillIndex) {
    const skill = window.skillsData[catIndex].skills[skillIndex];
    document.getElementById('newSkillName').value = skill.name;
    document.getElementById('newSkillLevel').value = skill.level;
    document.getElementById('newSkillTags').value = skill.tags.join(', ');
    
    let category = '';
    if (catIndex === 0) category = 'languages';
    else if (catIndex === 1) category = 'ai';
    else if (catIndex === 2) category = 'tools';
    
    document.getElementById('newSkillCategory').value = category;
    
    if (confirm('Edit this skill and click OK to save changes')) {
        window.deleteSkill(catIndex, skillIndex);
    }
};
