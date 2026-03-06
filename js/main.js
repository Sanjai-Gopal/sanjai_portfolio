// ========================================
// MAIN.JS - Peaceful Portfolio Core
// ========================================

// ========== GLOBAL DATA ==========
let siteData = {
    profile: {
        name: 'Sanjai Gopal',
        title: 'AI Engineer & Nature Enthusiast',
        bio: 'I\'m a first-year Artificial Intelligence and Data Science student at SKCET, Coimbatore. I believe in building technology that\'s not just intelligent, but also sustainable and accessible to all.',
        location: 'Coimbatore, India',
        email: 'sanjai.sparkmail@gmail.com',
        phone: '+91 9363265552',
        photo: null
    },
    projects: [
        {
            id: '1',
            title: 'Feedback and Billing System',
            description: 'A comprehensive snack shop billing system with tax calculation, star ratings, and file storage for transaction history.',
            category: 'cpp',
            tech: ['C++', 'File I/O', 'OOP'],
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EBilling%3C/text%3E%3C/svg%3E',
            github: 'https://github.com/Sanjai-Gopal/Feedback-and-Billing-System'
        },
        {
            id: '2',
            title: 'bis-smart-compliance',
            description: 'Smart compliance system built with Python for automated monitoring, reporting, and audit logging.',
            category: 'python',
            tech: ['Python', 'Automation', 'Logging'],
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3ECompliance%3C/text%3E%3C/svg%3E',
            github: 'https://github.com/Sanjai-Gopal/bis-smart-compliance'
        },
        {
            id: '3',
            title: 'Railway Reservation System',
            description: 'Console-based railway ticket reservation system with seat management and PNR tracking.',
            category: 'cpp',
            tech: ['C++', 'OOP', 'Data Structures'],
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3ERailway%3C/text%3E%3C/svg%3E',
            github: 'https://github.com/Sanjai-Gopal/railway-reservation-cpp'
        },
        {
            id: '4',
            title: 'Advanced Portfolio Website',
            description: 'Futuristic portfolio with 3D elements, AI chatbot, and private cloud storage.',
            category: 'web',
            tech: ['HTML5/CSS3', 'JavaScript', 'Three.js'],
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EPortfolio%3C/text%3E%3C/svg%3E',
            github: 'https://github.com/Sanjai-Gopal/sanjai_portfolio',
            live: 'https://sanjai-gopal.github.io/sanjai_portfolio/'
        },
        {
            id: '5',
            title: 'Machine Learning Basics',
            description: 'Collection of ML algorithms implemented from scratch.',
            category: 'ai',
            tech: ['Python', 'NumPy', 'Scikit-learn'],
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EML%3C/text%3E%3C/svg%3E',
            github: 'https://github.com/Sanjai-Gopal/ml-basics'
        },
        {
            id: '6',
            title: 'Smart Attendance System',
            description: 'Face recognition based attendance system using OpenCV.',
            category: 'ai',
            tech: ['Python', 'OpenCV', 'Face Recognition'],
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EAttendance%3C/text%3E%3C/svg%3E',
            github: 'https://github.com/Sanjai-Gopal/smart-attendance'
        }
    ],
    certificates: [
        { id: '1', title: 'AWS Certified Cloud Practitioner', issuer: 'AWS', date: 'Oct 2025' },
        { id: '2', title: 'Python for Everybody', issuer: 'Univ. of Michigan', date: 'Feb 2026' },
        { id: '3', title: 'Git & GitHub', issuer: 'IBM', date: 'Feb 2026' },
        { id: '4', title: 'Building with AI', issuer: 'Saylor Academy', date: 'Feb 2026' },
        { id: '5', title: 'Viksit Bharat Young Leaders', issuer: 'Min. of Youth Affairs', date: 'Sep 2025' },
        { id: '6', title: 'Canva Design Fundamentals', issuer: 'Coursera', date: 'Feb 2026' }
    ],
    blog: [
        {
            id: '1',
            title: 'Getting Started with Python',
            excerpt: 'Learn the fundamentals of Python programming for AI and ML.',
            date: 'Mar 1, 2026',
            category: 'programming',
            tags: ['Python', 'Beginners', 'Tutorial'],
            content: '<h2>Introduction to Python</h2><p>Python has become the de facto language for artificial intelligence and machine learning. Its simplicity, extensive libraries, and vibrant community make it the perfect choice for beginners.</p><h3>Why Python for AI?</h3><ul><li>Easy to Learn</li><li>Rich Ecosystem: NumPy, Pandas, TensorFlow</li><li>Community Support</li></ul>',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EPython%3C/text%3E%3C/svg%3E'
        },
        {
            id: '2',
            title: 'Git & GitHub Essentials',
            excerpt: 'A comprehensive guide to version control for beginners.',
            date: 'Feb 15, 2026',
            category: 'devops',
            tags: ['Git', 'GitHub', 'DevOps'],
            content: '<h2>Mastering Git and GitHub</h2><p>Version control is an essential skill for every developer. Git helps you track changes, collaborate with others, and manage your code effectively.</p><h3>Basic Git Commands</h3><pre><code>git init\ngit add .\ngit commit -m \'message\'\ngit push</code></pre>',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EGit%3C/text%3E%3C/svg%3E'
        },
        {
            id: '3',
            title: 'My First Steps into AI',
            excerpt: 'Sharing my journey as a first-year AI student.',
            date: 'Feb 1, 2026',
            category: 'ai',
            tags: ['AI', 'Machine Learning', 'Journey'],
            content: '<h2>Three Months of AI Learning</h2><p>As a first-year AI student, the past three months have been transformative. Here\'s what I learned:</p><h3>Month 1: Foundations</h3><p>Started with Python basics, then moved to data structures.</p><h3>Month 2: Machine Learning</h3><p>Dove into ML concepts: regression, classification.</p><h3>Month 3: Deep Learning</h3><p>Explored neural networks and CNNs.</p>',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EAI%3C/text%3E%3C/svg%3E'
        },
        {
            id: '4',
            title: 'Understanding Neural Networks',
            excerpt: 'Demystifying neural networks with visual explanations.',
            date: 'Jan 20, 2026',
            category: 'ai',
            tags: ['Neural Networks', 'Deep Learning'],
            content: '<h2>Neural Networks Explained Visually</h2><p>Neural networks might seem complex, but they\'re built on simple concepts.</p><h3>The Neuron</h3><p>A neuron takes inputs, applies weights, adds bias, and passes through an activation function.</p>',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3ENeural%3C/text%3E%3C/svg%3E'
        },
        {
            id: '5',
            title: 'Building Your First C++ Project',
            excerpt: 'Step-by-step guide to creating a C++ application.',
            date: 'Jan 5, 2026',
            category: 'programming',
            tags: ['C++', 'Projects'],
            content: '<h2>C++ Railway Reservation System</h2><p>Building a railway reservation system is an excellent way to practice C++ concepts.</p><h3>Key Concepts</h3><ul><li>Classes and Objects</li><li>Inheritance</li><li>File I/O</li></ul>',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EC%2B%2B%3C/text%3E%3C/svg%3E'
        },
        {
            id: '6',
            title: 'Introduction to MLOps',
            excerpt: 'Understanding MLOps for production ML systems.',
            date: 'Dec 10, 2025',
            category: 'devops',
            tags: ['MLOps', 'DevOps'],
            content: '<h2>What is MLOps?</h2><p>MLOps combines ML, DevOps, and data engineering to deploy ML systems reliably.</p><h3>Why MLOps Matters</h3><ul><li>Reproducibility</li><li>Model versioning</li><li>Automated deployment</li></ul>',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EMLOps%3C/text%3E%3C/svg%3E'
        }
    ],
    skills: [
        {
            icon: 'fa-code',
            title: 'Programming Languages',
            skills: [
                { name: 'Python', level: 90, tags: ['NumPy', 'Pandas', 'Matplotlib'] },
                { name: 'C++', level: 80, tags: ['OOP', 'STL', 'Algorithms'] },
                { name: 'JavaScript', level: 75, tags: ['ES6', 'React', 'Node.js'] }
            ]
        },
        {
            icon: 'fa-brain',
            title: 'AI & Machine Learning',
            skills: [
                { name: 'Machine Learning', level: 85, tags: ['Scikit-learn', 'Regression'] },
                { name: 'Deep Learning', level: 75, tags: ['TensorFlow', 'Neural Networks'] },
                { name: 'MLOps', level: 60, tags: ['Docker', 'MLflow'] }
            ]
        },
        {
            icon: 'fa-tools',
            title: 'Tools & Technologies',
            skills: [
                { name: 'Git & GitHub', level: 90, tags: ['Version Control'] },
                { name: 'VS Code', level: 85, tags: ['Extensions', 'Debugging'] },
                { name: 'Linux', level: 75, tags: ['Bash', 'Command Line'] }
            ]
        }
    ],
    theme: {
        primary: '#4caf7a',
        secondary: '#3d7a4f',
        bg: '#f5efe6',
        text: '#2c3e2f'
    }
};

// ========== ADMIN SESSION ==========
let isAdminLoggedIn = false;

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('Peaceful Portfolio Initialized');
    
    // Check if admin was previously logged in (session storage)
    const adminSession = sessionStorage.getItem('adminLoggedIn');
    if (adminSession === 'true') {
        isAdminLoggedIn = true;
        document.getElementById('adminSecret').style.display = 'block';
    }
    
    initPreloader();
    initAOS();
    initTyped();
    initTheme();
    initMobileMenu();
    initSmoothScroll();
    initStats();
    initSkills();
    initProjects();
    initCertificates();
    initBlog();
    initContactForm();
    initBackToTop();
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
    initCloudLink();
    initAdminSecret();
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
    if (loginClose) {
        loginClose.addEventListener('click', () => {
            loginModal.classList.remove('active');
        });
    }
    
    // Toggle password visibility
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            toggleBtn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
    
    // Submit login
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const password = passwordInput.value.trim();
            
            if (!password) {
                errorDiv.textContent = 'Please enter password';
                return;
            }
            
            loadingDiv.style.display = 'block';
            submitBtn.disabled = true;
            
            // Simulate API call (in production, use real API)
            setTimeout(() => {
                loadingDiv.style.display = 'none';
                submitBtn.disabled = false;
                
                // CHANGE THIS PASSWORD IN PRODUCTION!
                if (password === 'Sanjai@2008') {
                    loginModal.classList.remove('active');
                    document.getElementById('adminDashboardModal').classList.add('active');
                    document.getElementById('adminSecret').style.display = 'block';
                    isAdminLoggedIn = true;
                    sessionStorage.setItem('adminLoggedIn', 'true');
                    passwordInput.value = '';
                    errorDiv.textContent = '';
                    
                    // Load admin data
                    loadAdminData();
                } else {
                    errorDiv.textContent = 'Invalid password';
                }
            }, 1000);
        });
    }
    
    // Enter key
    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && submitBtn) {
                submitBtn.click();
            }
        });
    }
}

// ========== ADMIN SECRET ==========
function initAdminSecret() {
    const secretBtn = document.getElementById('adminSecret');
    
    if (secretBtn) {
        secretBtn.addEventListener('dblclick', () => {
            if (isAdminLoggedIn) {
                document.getElementById('adminDashboardModal').classList.add('active');
                loadAdminData();
            } else {
                document.getElementById('adminLoginModal').classList.add('active');
            }
        });
    }
}

// ========== LOAD ADMIN DATA ==========
function loadAdminData() {
    // Update counts
    document.getElementById('adminProjectCount').textContent = siteData.projects.length;
    document.getElementById('adminCertCount').textContent = siteData.certificates.length;
    document.getElementById('adminBlogCount').textContent = siteData.blog.length;
    
    let totalSkills = 0;
    siteData.skills.forEach(cat => totalSkills += cat.skills.length);
    document.getElementById('adminSkillCount').textContent = totalSkills;
    
    // Load lists
    loadProjectsList();
    loadCertificatesList();
    loadBlogList();
    loadSkillsList();
    
    // Load profile data
    document.getElementById('adminName').value = siteData.profile.name;
    document.getElementById('adminTitle').value = siteData.profile.title;
    document.getElementById('adminBio').value = siteData.profile.bio;
    document.getElementById('adminLocation').value = siteData.profile.location;
    document.getElementById('adminEmail').value = siteData.profile.email;
    document.getElementById('adminPhone').value = siteData.profile.phone;
    
    // Load theme data
    document.getElementById('themePrimary').value = siteData.theme.primary;
    document.getElementById('themeSecondary').value = siteData.theme.secondary;
    document.getElementById('themeBg').value = siteData.theme.bg;
    document.getElementById('themeText').value = siteData.theme.text;
}

// ========== LOAD PROJECTS LIST ==========
function loadProjectsList() {
    const list = document.getElementById('projectsList');
    if (!list) return;
    
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
    if (!list) return;
    
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
    if (!list) return;
    
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
    if (!list) return;
    
    let html = '';
    siteData.skills.forEach((cat, catIndex) => {
        cat.skills.forEach((skill, skillIndex) => {
            html += `
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
    list.innerHTML = html;
}

// ========== ADMIN DASHBOARD ==========
function initAdminDashboard() {
    const dashboardModal = document.getElementById('adminDashboardModal');
    const dashboardClose = document.getElementById('adminDashboardClose');
    
    if (dashboardClose) {
        dashboardClose.addEventListener('click', () => {
            dashboardModal.classList.remove('active');
        });
    }
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

// ========== PROFILE PANEL ==========
function initProfilePanel() {
    const saveBtn = document.getElementById('saveProfileBtn');
    if (!saveBtn) return;
    
    saveBtn.addEventListener('click', () => {
        const loading = document.getElementById('profileLoading');
        
        siteData.profile.name = document.getElementById('adminName').value;
        siteData.profile.title = document.getElementById('adminTitle').value;
        siteData.profile.bio = document.getElementById('adminBio').value;
        siteData.profile.location = document.getElementById('adminLocation').value;
        siteData.profile.email = document.getElementById('adminEmail').value;
        siteData.profile.phone = document.getElementById('adminPhone').value;
        
        loading.style.display = 'block';
        saveBtn.disabled = true;
        
        setTimeout(() => {
            loading.style.display = 'none';
            saveBtn.disabled = false;
            showToast('Profile updated successfully!', 'success');
            updateProfile();
        }, 500);
    });
}

// ========== UPDATE PROFILE ==========
function updateProfile() {
    document.getElementById('aboutTitle').textContent = siteData.profile.title;
    document.getElementById('aboutBio').textContent = siteData.profile.bio;
    document.getElementById('infoLocation').textContent = siteData.profile.location;
    document.getElementById('contactLocation').textContent = siteData.profile.location;
    document.getElementById('contactEmail').textContent = siteData.profile.email;
    document.getElementById('contactPhone').textContent = siteData.profile.phone;
}

// ========== PROJECTS PANEL ==========
function initProjectsPanel() {
    const addBtn = document.getElementById('addProjectBtn');
    if (!addBtn) return;
    
    addBtn.addEventListener('click', () => {
        const name = document.getElementById('newProjectName').value;
        const desc = document.getElementById('newProjectDesc').value;
        const tech = document.getElementById('newProjectTech').value.split(',').map(t => t.trim());
        const category = document.getElementById('newProjectCategory').value;
        const github = document.getElementById('newProjectGithub').value;
        const live = document.getElementById('newProjectLive').value;
        
        if (!name || !desc || tech.length === 0 || !category || !github) {
            showToast('Please fill all required fields', 'error');
            return;
        }
        
        const loading = document.getElementById('projectLoading');
        
        const newProject = {
            id: Date.now().toString(),
            title: name,
            description: desc,
            tech: tech,
            category: category,
            github: github,
            live: live || null,
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + name.substring(0, 10) + '%3C/text%3E%3C/svg%3E'
        };
        
        loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.projects.push(newProject);
            
            document.getElementById('newProjectName').value = '';
            document.getElementById('newProjectDesc').value = '';
            document.getElementById('newProjectTech').value = '';
            document.getElementById('newProjectGithub').value = '';
            document.getElementById('newProjectLive').value = '';
            
            loadProjectsList();
            renderProjects('all');
            document.getElementById('adminProjectCount').textContent = siteData.projects.length;
            
            loading.style.display = 'none';
            addBtn.disabled = false;
            showToast('Project added successfully!', 'success');
        }, 500);
    });
}

// ========== DELETE PROJECT ==========
window.deleteProject = function(id) {
    if (!confirm('Delete this project?')) return;
    
    siteData.projects = siteData.projects.filter(p => p.id !== id);
    loadProjectsList();
    renderProjects('all');
    document.getElementById('adminProjectCount').textContent = siteData.projects.length;
    showToast('Project deleted!', 'success');
};

// ========== EDIT PROJECT ==========
window.editProject = function(id) {
    const project = siteData.projects.find(p => p.id === id);
    if (!project) return;
    
    document.getElementById('newProjectName').value = project.title;
    document.getElementById('newProjectDesc').value = project.description;
    document.getElementById('newProjectTech').value = project.tech.join(', ');
    document.getElementById('newProjectCategory').value = project.category;
    document.getElementById('newProjectGithub').value = project.github || '';
    document.getElementById('newProjectLive').value = project.live || '';
    
    document.querySelector('[data-tab="projects"]').click();
    
    if (confirm('Edit this project. Click OK to delete old version and add edited version.')) {
        siteData.projects = siteData.projects.filter(p => p.id !== id);
    }
};

// ========== DELETE CERTIFICATE ==========
window.deleteCertificate = function(id) {
    if (!confirm('Delete this certificate?')) return;
    
    siteData.certificates = siteData.certificates.filter(c => c.id !== id);
    loadCertificatesList();
    renderCertificates();
    document.getElementById('adminCertCount').textContent = siteData.certificates.length;
    showToast('Certificate deleted!', 'success');
};

// ========== DELETE BLOG ==========
window.deletePost = function(id) {
    if (!confirm('Delete this blog post?')) return;
    
    siteData.blog = siteData.blog.filter(p => p.id !== id);
    loadBlogList();
    renderBlog('all');
    document.getElementById('adminBlogCount').textContent = siteData.blog.length;
    showToast('Blog post deleted!', 'success');
};

// ========== DELETE SKILL ==========
window.deleteSkill = function(catIndex, skillIndex) {
    if (!confirm('Delete this skill?')) return;
    
    siteData.skills[catIndex].skills.splice(skillIndex, 1);
    loadSkillsList();
    renderSkills();
    showToast('Skill deleted!', 'success');
};

// ========== CERTIFICATES PANEL ==========
function initCertificatesPanel() {
    const addBtn = document.getElementById('addCertBtn');
    if (!addBtn) return;
    
    addBtn.addEventListener('click', () => {
        const name = document.getElementById('newCertName').value;
        const issuer = document.getElementById('newCertIssuer').value;
        const date = document.getElementById('newCertDate').value;
        
        if (!name || !issuer || !date) {
            showToast('Please fill all fields', 'error');
            return;
        }
        
        const loading = document.getElementById('certLoading');
        
        const newCert = {
            id: Date.now().toString(),
            title: name,
            issuer: issuer,
            date: date
        };
        
        loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.certificates.push(newCert);
            
            document.getElementById('newCertName').value = '';
            document.getElementById('newCertIssuer').value = '';
            document.getElementById('newCertDate').value = '';
            
            loadCertificatesList();
            renderCertificates();
            document.getElementById('adminCertCount').textContent = siteData.certificates.length;
            
            loading.style.display = 'none';
            addBtn.disabled = false;
            showToast('Certificate added successfully!', 'success');
        }, 500);
    });
}

// ========== BLOG PANEL ==========
function initBlogPanel() {
    const addBtn = document.getElementById('addPostBtn');
    if (!addBtn) return;
    
    addBtn.addEventListener('click', () => {
        const title = document.getElementById('newPostTitle').value;
        const excerpt = document.getElementById('newPostExcerpt').value;
        const content = document.getElementById('newPostContent').value;
        const category = document.getElementById('newPostCategory').value;
        const tags = document.getElementById('newPostTags').value.split(',').map(t => t.trim());
        
        if (!title || !excerpt || !category) {
            showToast('Please fill required fields', 'error');
            return;
        }
        
        const loading = document.getElementById('blogLoading');
        
        const newPost = {
            id: Date.now().toString(),
            title: title,
            excerpt: excerpt,
            content: content || excerpt,
            category: category,
            tags: tags,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + title.substring(0, 10) + '%3C/text%3E%3C/svg%3E'
        };
        
        loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.blog.push(newPost);
            
            document.getElementById('newPostTitle').value = '';
            document.getElementById('newPostExcerpt').value = '';
            document.getElementById('newPostContent').value = '';
            document.getElementById('newPostCategory').value = '';
            document.getElementById('newPostTags').value = '';
            
            loadBlogList();
            renderBlog('all');
            document.getElementById('adminBlogCount').textContent = siteData.blog.length;
            
            loading.style.display = 'none';
            addBtn.disabled = false;
            showToast('Blog post added successfully!', 'success');
        }, 500);
    });
}

// ========== SKILLS PANEL ==========
function initSkillsPanel() {
    const addBtn = document.getElementById('addSkillBtn');
    if (!addBtn) return;
    
    addBtn.addEventListener('click', () => {
        const name = document.getElementById('newSkillName').value;
        const level = document.getElementById('newSkillLevel').value;
        const tags = document.getElementById('newSkillTags').value.split(',').map(t => t.trim());
        const category = document.getElementById('newSkillCategory').value;
        
        if (!name || !level || tags.length === 0) {
            showToast('Please fill all fields', 'error');
            return;
        }
        
        const loading = document.getElementById('skillLoading');
        
        let categoryIndex = 0;
        if (category === 'languages') categoryIndex = 0;
        else if (category === 'ai') categoryIndex = 1;
        else if (category === 'tools') categoryIndex = 2;
        
        loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.skills[categoryIndex].skills.push({
                name: name,
                level: parseInt(level),
                tags: tags
            });
            
            document.getElementById('newSkillName').value = '';
            document.getElementById('newSkillLevel').value = '';
            document.getElementById('newSkillTags').value = '';
            
            loadSkillsList();
            renderSkills();
            
            loading.style.display = 'none';
            addBtn.disabled = false;
            showToast('Skill added successfully!', 'success');
        }, 500);
    });
}

// ========== THEME PANEL ==========
function initThemePanel() {
    const saveBtn = document.getElementById('saveThemeBtn');
    const resetBtn = document.getElementById('resetThemeBtn');
    
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const primary = document.getElementById('themePrimary').value;
            const secondary = document.getElementById('themeSecondary').value;
            const bg = document.getElementById('themeBg').value;
            const text = document.getElementById('themeText').value;
            
            const loading = document.getElementById('themeLoading');
            
            siteData.theme = { primary, secondary, bg, text };
            
            loading.style.display = 'block';
            saveBtn.disabled = true;
            
            setTimeout(() => {
                loading.style.display = 'none';
                saveBtn.disabled = false;
                applyTheme(siteData.theme);
                showToast('Theme updated successfully!', 'success');
            }, 500);
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            document.getElementById('themePrimary').value = '#4caf7a';
            document.getElementById('themeSecondary').value = '#3d7a4f';
            document.getElementById('themeBg').value = '#f5efe6';
            document.getElementById('themeText').value = '#2c3e2f';
        });
    }
}

// ========== APPLY THEME ==========
function applyTheme(theme) {
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--secondary', theme.secondary);
    document.documentElement.style.setProperty('--bg-primary', theme.bg);
    document.documentElement.style.setProperty('--text-primary', theme.text);
}

// ========== PASSWORD PANEL ==========
function initPasswordPanel() {
    const changeBtn = document.getElementById('changePasswordBtn');
    if (!changeBtn) return;
    
    changeBtn.addEventListener('click', () => {
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
        
        loading.style.display = 'block';
        changeBtn.disabled = true;
        
        setTimeout(() => {
            loading.style.display = 'none';
            changeBtn.disabled = false;
            showToast('Password changed successfully!', 'success');
            
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
        }, 500);
    });
}

// ========== LOGOUT ==========
function initLogout() {
    const logoutBtn = document.getElementById('adminLogout');
    if (!logoutBtn) return;
    
    logoutBtn.addEventListener('click', () => {
        document.getElementById('adminDashboardModal').classList.remove('active');
        document.getElementById('adminSecret').style.display = 'none';
        isAdminLoggedIn = false;
        sessionStorage.removeItem('adminLoggedIn');
        showToast('Logged out successfully', 'info');
    });
}

// ========== CLOUD LINK ==========
function initCloudLink() {
    const cloudLink = document.getElementById('cloudLink');
    const cloudFooterLink = document.getElementById('cloudFooterLink');
    
    if (cloudLink) {
        cloudLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'private-cloud/';
        });
    }
    
    if (cloudFooterLink) {
        cloudFooterLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'private-cloud/';
        });
    }
}

// ========== PRELOADER ==========
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 500);
    });
}

// ========== AOS ==========
function initAOS() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
}

// ========== TYPED.JS ==========
function initTyped() {
    new Typed('.typed-text', {
        strings: [
            'AI Engineer',
            'Nature Enthusiast',
            'Python Developer',
            'C++ Programmer',
            'Peaceful Coder'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
}

// ========== THEME TOGGLE ==========
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        icon.className = 'fas fa-sun';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        if (document.body.classList.contains('light-theme')) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'light');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== STATS COUNTER ==========
function initStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseInt(stat.dataset.target);
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 30);
                
                observer.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// ========== RENDER SKILLS ==========
function initSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    
    renderSkills();
}

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    
    grid.innerHTML = siteData.skills.map(category => `
        <div class="skill-card" data-aos="fade-up">
            <div class="skill-header">
                <i class="fas ${category.icon}"></i>
                <h3>${category.title}</h3>
            </div>
            <div class="skill-items">
                ${category.skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>${skill.name}</span>
                            <span>${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-fill" style="width: ${skill.level}%"></div>
                        </div>
                        <div class="skill-tags">
                            ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ========== RENDER PROJECTS ==========
function initProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    renderProjects('all');
    
    document.querySelectorAll('.projects-filter .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.projects-filter .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProjects(this.dataset.filter);
        });
    });
}

function renderProjects(filter) {
    const grid = document.getElementById('projectsGrid');
    const filtered = filter === 'all' ? siteData.projects : siteData.projects.filter(p => p.category === filter);
    
    grid.innerHTML = filtered.slice(0, 6).map(project => `
        <div class="project-card" data-aos="fade-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <span class="project-category">${project.category.toUpperCase()}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> Code</a>
                    ${project.live ? `<a href="${project.live}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// ========== RENDER CERTIFICATES ==========
function initCertificates() {
    const grid = document.getElementById('certificatesGrid');
    if (!grid) return;
    
    renderCertificates();
}

function renderCertificates() {
    const grid = document.getElementById('certificatesGrid');
    
    grid.innerHTML = siteData.certificates.slice(0, 6).map(cert => `
        <div class="certificate-card" data-aos="fade-up">
            <div class="certificate-icon"><i class="fas fa-leaf"></i></div>
            <h3 class="certificate-title">${cert.title}</h3>
            <p class="certificate-issuer">${cert.issuer}</p>
            <p class="certificate-date">${cert.date}</p>
        </div>
    `).join('');
}

// ========== RENDER BLOG ==========
function initBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    renderBlog('all');
    
    document.querySelectorAll('.blog-cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.blog-cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderBlog(this.dataset.cat);
        });
    });
    
    const viewAllBtn = document.getElementById('viewAllBlogs');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderBlog('all', true);
        });
    }
}

function renderBlog(category, showAll = false) {
    const grid = document.getElementById('blogGrid');
    const filtered = category === 'all' ? siteData.blog : siteData.blog.filter(post => post.category === category);
    const posts = showAll ? filtered : filtered.slice(0, 6);
    
    if (posts.length === 0) {
        grid.innerHTML = '<div class="no-posts">No blog posts found in this category.</div>';
        return;
    }
    
    grid.innerHTML = posts.map(post => `
        <div class="blog-card" data-aos="fade-up" data-post-id="${post.id}">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-folder"></i> ${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags ? post.tags.map(tag => `<span class="blog-tag">#${tag}</span>`).join('') : ''}
                </div>
                <button class="blog-link read-more-btn" data-post-id="${post.id}">Read More <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `).join('');
    
    // Add click handlers for read more buttons
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const postId = this.dataset.postId;
            openBlogPost(postId);
        });
    });
}

// ========== OPEN BLOG POST ==========
function openBlogPost(postId) {
    const post = siteData.blog.find(p => p.id === postId);
    if (!post) return;
    
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('blogModalTitle');
    const modalBody = document.getElementById('blogModalBody');
    
    modalTitle.textContent = post.title;
    modalBody.innerHTML = `
        <div class="blog-post-full">
            <img src="${post.image}" alt="${post.title}" class="blog-post-image">
            <div class="blog-post-meta">
                <span><i class="far fa-calendar"></i> ${post.date}</span>
                <span><i class="far fa-folder"></i> ${post.category}</span>
                ${post.tags ? `<span><i class="fas fa-tags"></i> ${post.tags.join(', ')}</span>` : ''}
            </div>
            <div class="blog-post-content">
                ${post.content || post.excerpt}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========== BLOG MODAL CLOSE ==========
document.getElementById('blogModalClose')?.addEventListener('click', () => {
    document.getElementById('blogModal').classList.remove('active');
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('blogModal')) {
        document.getElementById('blogModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ========== CONTACT FORM ==========
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        showToast('Thank you for your message! I will get back to you soon.', 'success');
        form.reset();
    });
}

// ========== BACK TO TOP ==========
function initBackToTop() {
    const button = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
