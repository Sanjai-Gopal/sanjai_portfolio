// ========================================
// MAIN.JS - Complete Portfolio with Admin Panel
// ========================================

// ========== GLOBAL VARIABLES ==========
let projectsData = [
    {
        title: 'Feedback and Billing System',
        description: 'A comprehensive snack shop billing system with tax calculation, star ratings, and file storage for transaction history.',
        category: 'cpp',
        tech: ['C++', 'File I/O', 'OOP'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EBilling%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/Feedback-and-Billing-System'
    },
    {
        title: 'bis-smart-compliance',
        description: 'Smart compliance system built with Python for automated monitoring, reporting, and audit logging of regulatory requirements.',
        category: 'python',
        tech: ['Python', 'Automation', 'Logging'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3ECompliance%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/bis-smart-compliance'
    },
    {
        title: 'Railway Reservation System',
        description: 'Console-based railway ticket reservation system with seat management, PNR tracking, and fare calculation.',
        category: 'cpp',
        tech: ['C++', 'OOP', 'Data Structures'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3ERailway%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/railway-reservation-cpp'
    },
    {
        title: 'Advanced Portfolio Website',
        description: 'Futuristic portfolio with 3D elements, AI chatbot, voice navigation, and private cloud storage for certificates.',
        category: 'web',
        tech: ['HTML5/CSS3', 'JavaScript', 'Three.js'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EPortfolio%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/sanjai_portfolio',
        live: 'https://sanjai-gopal.github.io/sanjai_portfolio/'
    },
    {
        title: 'Machine Learning Basics',
        description: 'Collection of ML algorithms implemented from scratch including linear regression, logistic regression, and neural networks.',
        category: 'ai',
        tech: ['Python', 'NumPy', 'Scikit-learn'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EML%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/ml-basics'
    },
    {
        title: 'Smart Attendance System',
        description: 'Face recognition based attendance system using OpenCV and Python with real-time face detection and Excel report generation.',
        category: 'ai',
        tech: ['Python', 'OpenCV', 'Face Recognition'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EAttendance%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/smart-attendance'
    }
];

let certificatesData = [
    { title: 'AWS Certified Cloud Practitioner', issuer: 'AWS', date: 'Oct 2025' },
    { title: 'Python for Everybody', issuer: 'Univ. of Michigan', date: 'Feb 2026' },
    { title: 'Git & GitHub', issuer: 'IBM', date: 'Feb 2026' },
    { title: 'Building with AI', issuer: 'Saylor Academy', date: 'Feb 2026' },
    { title: 'Viksit Bharat Young Leaders', issuer: 'Min. of Youth Affairs', date: 'Sep 2025' },
    { title: 'Canva Design Fundamentals', issuer: 'Coursera', date: 'Feb 2026' }
];

let blogData = [
    {
        title: 'Getting Started with Python',
        excerpt: 'Learn the fundamentals of Python programming for AI and ML.',
        date: 'Mar 1, 2026',
        category: 'Programming',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EPython%3C/text%3E%3C/svg%3E'
    },
    {
        title: 'Git & GitHub Essentials',
        excerpt: 'A comprehensive guide to version control for beginners.',
        date: 'Feb 15, 2026',
        category: 'DevOps',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EGit%3C/text%3E%3C/svg%3E'
    },
    {
        title: 'My First Steps into AI',
        excerpt: 'Sharing my journey as a first-year AI student.',
        date: 'Feb 1, 2026',
        category: 'AI/ML',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EAI%3C/text%3E%3C/svg%3E'
    }
];

let skillsData = [
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
];

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio initialized');
    
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
    initAdminPanel();
    loadSavedData();
});

// ========== LOAD SAVED DATA ==========
function loadSavedData() {
    const savedProjects = localStorage.getItem('projectsData');
    if (savedProjects) projectsData = JSON.parse(savedProjects);
    
    const savedCerts = localStorage.getItem('certificatesData');
    if (savedCerts) certificatesData = JSON.parse(savedCerts);
    
    const savedBlog = localStorage.getItem('blogData');
    if (savedBlog) blogData = JSON.parse(savedBlog);
    
    const savedSkills = localStorage.getItem('skillsData');
    if (savedSkills) skillsData = JSON.parse(savedSkills);
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
            'MLOps Enthusiast',
            'Python Developer',
            'C++ Programmer',
            'Nature Lover'
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
    
    grid.innerHTML = skillsData.map(category => `
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
    const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);
    
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
    
    grid.innerHTML = certificatesData.slice(0, 6).map(cert => `
        <div class="certificate-card" data-aos="fade-up">
            <div class="certificate-icon"><i class="fas fa-certificate"></i></div>
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
    
    renderBlog();
}

function renderBlog() {
    const grid = document.getElementById('blogGrid');
    
    grid.innerHTML = blogData.slice(0, 3).map(post => `
        <div class="blog-card" data-aos="fade-up">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="blog/" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// ========== CONTACT FORM ==========
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        alert('Thank you for your message! I will get back to you soon.');
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

// ========== ADMIN PANEL ==========
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
        
        document.querySelector('.hero-title').innerHTML = `Sanjai <span class="gradient-text">Gopal</span>`;
        document.getElementById('aboutTitle').textContent = title;
        document.getElementById('aboutBio').textContent = bio;
        document.getElementById('infoLocation').textContent = location;
        document.getElementById('contactLocation').textContent = location;
        document.getElementById('contactEmail').textContent = email;
        document.getElementById('contactPhone').textContent = phone;
        document.getElementById('footerName').textContent = name;
        
        alert('Profile updated!');
    });
    
    // Add project
    document.getElementById('addProjectBtn').addEventListener('click', () => {
        const name = document.getElementById('newProjectName').value;
        const desc = document.getElementById('newProjectDesc').value;
        const tech = document.getElementById('newProjectTech').value.split(',').map(t => t.trim());
        const category = document.getElementById('newProjectCategory').value;
        
        if (name && desc && tech.length && category) {
            projectsData.push({
                title: name,
                description: desc,
                category: category,
                tech: tech,
                image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3E' + name.substring(0, 10) + '%3C/text%3E%3C/svg%3E',
                github: 'https://github.com/Sanjai-Gopal/' + name.toLowerCase().replace(/\s+/g, '-')
            });
            
            localStorage.setItem('projectsData', JSON.stringify(projectsData));
            renderProjects('all');
            loadAdminData();
            
            document.getElementById('newProjectName').value = '';
            document.getElementById('newProjectDesc').value = '';
            document.getElementById('newProjectTech').value = '';
            document.getElementById('newProjectCategory').value = '';
            
            alert('Project added!');
        } else {
            alert('Please fill all fields');
        }
    });
    
    // Add certificate
    document.getElementById('addCertBtn').addEventListener('click', () => {
        const name = document.getElementById('newCertName').value;
        const issuer = document.getElementById('newCertIssuer').value;
        const date = document.getElementById('newCertDate').value;
        
        if (name && issuer && date) {
            certificatesData.push({
                title: name,
                issuer: issuer,
                date: date
            });
            
            localStorage.setItem('certificatesData', JSON.stringify(certificatesData));
            renderCertificates();
            loadAdminData();
            
            document.getElementById('newCertName').value = '';
            document.getElementById('newCertIssuer').value = '';
            document.getElementById('newCertDate').value = '';
            
            alert('Certificate added!');
        } else {
            alert('Please fill all fields');
        }
    });
    
    // Add blog post
    document.getElementById('addPostBtn').addEventListener('click', () => {
        const title = document.getElementById('newPostTitle').value;
        const excerpt = document.getElementById('newPostExcerpt').value;
        const category = document.getElementById('newPostCategory').value;
        
        if (title && excerpt && category) {
            blogData.push({
                title: title,
                excerpt: excerpt,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                category: category,
                image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3E' + title.substring(0, 10) + '%3C/text%3E%3C/svg%3E'
            });
            
            localStorage.setItem('blogData', JSON.stringify(blogData));
            renderBlog();
            loadAdminData();
            
            document.getElementById('newPostTitle').value = '';
            document.getElementById('newPostExcerpt').value = '';
            document.getElementById('newPostCategory').value = '';
            
            alert('Blog post added!');
        } else {
            alert('Please fill all fields');
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
            
            skillsData[categoryIndex].skills.push({
                name: name,
                level: parseInt(level),
                tags: tags
            });
            
            localStorage.setItem('skillsData', JSON.stringify(skillsData));
            renderSkills();
            loadAdminData();
            
            document.getElementById('newSkillName').value = '';
            document.getElementById('newSkillLevel').value = '';
            document.getElementById('newSkillTags').value = '';
            
            alert('Skill added!');
        } else {
            alert('Please fill all fields');
        }
    });
}

function loadAdminData() {
    document.getElementById('adminProjectCount').textContent = projectsData.length;
    document.getElementById('adminCertCount').textContent = certificatesData.length;
    document.getElementById('adminBlogCount').textContent = blogData.length;
    
    let totalSkills = 0;
    skillsData.forEach(cat => totalSkills += cat.skills.length);
    document.getElementById('adminSkillCount').textContent = totalSkills;
    
    // Load projects list
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = projectsData.map((project, index) => `
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
    certsList.innerHTML = certificatesData.map((cert, index) => `
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
    blogList.innerHTML = blogData.map((post, index) => `
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
    skillsData.forEach((cat, catIndex) => {
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

// Global admin functions
window.deleteProject = function(index) {
    if (confirm('Delete this project?')) {
        projectsData.splice(index, 1);
        localStorage.setItem('projectsData', JSON.stringify(projectsData));
        renderProjects('all');
        loadAdminData();
    }
};

window.deleteCertificate = function(index) {
    if (confirm('Delete this certificate?')) {
        certificatesData.splice(index, 1);
        localStorage.setItem('certificatesData', JSON.stringify(certificatesData));
        renderCertificates();
        loadAdminData();
    }
};

window.deletePost = function(index) {
    if (confirm('Delete this blog post?')) {
        blogData.splice(index, 1);
        localStorage.setItem('blogData', JSON.stringify(blogData));
        renderBlog();
        loadAdminData();
    }
};

window.deleteSkill = function(catIndex, skillIndex) {
    if (confirm('Delete this skill?')) {
        skillsData[catIndex].skills.splice(skillIndex, 1);
        localStorage.setItem('skillsData', JSON.stringify(skillsData));
        renderSkills();
        loadAdminData();
    }
};

window.editProject = function(index) {
    const project = projectsData[index];
    document.getElementById('newProjectName').value = project.title;
    document.getElementById('newProjectDesc').value = project.description;
    document.getElementById('newProjectTech').value = project.tech.join(', ');
    document.getElementById('newProjectCategory').value = project.category;
    
    if (confirm('Edit this project and click OK to save changes')) {
        deleteProject(index);
    }
};

window.editCertificate = function(index) {
    const cert = certificatesData[index];
    document.getElementById('newCertName').value = cert.title;
    document.getElementById('newCertIssuer').value = cert.issuer;
    document.getElementById('newCertDate').value = cert.date;
    
    if (confirm('Edit this certificate and click OK to save changes')) {
        deleteCertificate(index);
    }
};

window.editPost = function(index) {
    const post = blogData[index];
    document.getElementById('newPostTitle').value = post.title;
    document.getElementById('newPostExcerpt').value = post.excerpt;
    document.getElementById('newPostCategory').value = post.category;
    
    if (confirm('Edit this post and click OK to save changes')) {
        deletePost(index);
    }
};

window.editSkill = function(catIndex, skillIndex) {
    const skill = skillsData[catIndex].skills[skillIndex];
    document.getElementById('newSkillName').value = skill.name;
    document.getElementById('newSkillLevel').value = skill.level;
    document.getElementById('newSkillTags').value = skill.tags.join(', ');
    
    let category = '';
    if (catIndex === 0) category = 'languages';
    else if (catIndex === 1) category = 'ai';
    else if (catIndex === 2) category = 'tools';
    
    document.getElementById('newSkillCategory').value = category;
    
    if (confirm('Edit this skill and click OK to save changes')) {
        deleteSkill(catIndex, skillIndex);
    }
};
