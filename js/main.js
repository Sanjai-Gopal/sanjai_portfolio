// ========================================
// MAIN.JS - Complete Portfolio with All Functions
// ========================================

// ========== GLOBAL DATA ==========
let siteData = {
    profile: {
        name: 'Sanjai Gopal',
        displayName: 'Sanjai',
        title: 'AI Engineer & Nature Enthusiast',
        bio: 'I\'m a first-year Artificial Intelligence and Data Science student at SKCET, Coimbatore. I believe in building technology that\'s not just intelligent, but also sustainable and accessible to all.',
        location: 'Coimbatore, India',
        email: 'sanjai.sparkmail@gmail.com',
        phone: '+91 9363265552',
        linkedin: 'https://linkedin.com/in/sanjai2306',
        github: 'https://github.com/Sanjai-Gopal',
        instagram: 'https://instagram.com/hey.sanjai_',
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
    aiModels: [
        {
            id: '1',
            name: 'RuralCare AI',
            description: 'Multilingual AI-based rural health assistant with symptom checker and voice recording.',
            type: 'NLP',
            framework: 'TensorFlow, Flask',
            metrics: '85% accuracy',
            github: 'https://github.com/Sanjai-Gopal/ruralcare-ai',
            demo: 'https://ruralcare.demo.com',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3ERuralCare%3C/text%3E%3C/svg%3E',
            features: ['Voice Recognition', 'Multi-language NLP', 'Offline Mode', 'Disease Prediction']
        },
        {
            id: '2',
            name: 'Green AI Optimizer',
            description: 'Tool that optimizes ML models for energy efficiency.',
            type: 'MLOps',
            framework: 'Python, TensorFlow',
            metrics: '40% energy reduction',
            github: 'https://github.com/Sanjai-Gopal/green-ai',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EGreenAI%3C/text%3E%3C/svg%3E',
            features: ['Energy Profiling', 'Model Pruning', 'Quantization', 'Carbon Tracking']
        },
        {
            id: '3',
            name: 'Student Performance Predictor',
            description: 'ML model predicting student grades with 85% accuracy.',
            type: 'Machine Learning',
            framework: 'scikit-learn, Pandas',
            metrics: '85% accuracy',
            github: 'https://github.com/Sanjai-Gopal/ml-student-performance',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EPredictor%3C/text%3E%3C/svg%3E',
            features: ['Feature Importance', 'Data Visualization', 'Predictive Analytics']
        }
    ],
    certificates: [
        { id: '1', title: 'AWS Certified Cloud Practitioner', issuer: 'AWS', date: 'Oct 2025', credential: 'AWS123456', link: '#' },
        { id: '2', title: 'Python for Everybody', issuer: 'Univ. of Michigan', date: 'Feb 2026', credential: 'PY789012', link: '#' },
        { id: '3', title: 'Git & GitHub', issuer: 'IBM', date: 'Feb 2026', credential: 'GH345678', link: '#' },
        { id: '4', title: 'Building with AI', issuer: 'Saylor Academy', date: 'Feb 2026', credential: 'AI901234', link: '#' },
        { id: '5', title: 'Viksit Bharat Young Leaders', issuer: 'Min. of Youth Affairs', date: 'Sep 2025', credential: 'VB567890', link: '#' },
        { id: '6', title: 'Canva Design Fundamentals', issuer: 'Coursera', date: 'Feb 2026', credential: 'CV123890', link: '#' }
    ],
    blog: [
        {
            id: '1',
            title: 'Getting Started with Python',
            excerpt: 'Learn the fundamentals of Python programming for AI and ML.',
            content: '<h2>Introduction to Python</h2><p>Python has become the de facto language for artificial intelligence...</p>',
            date: 'Mar 1, 2026',
            category: 'programming',
            tags: ['Python', 'Beginners', 'Tutorial'],
            readTime: 5,
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EPython%3C/text%3E%3C/svg%3E'
        },
        {
            id: '2',
            title: 'Git & GitHub Essentials',
            excerpt: 'A comprehensive guide to version control for beginners.',
            content: '<h2>Mastering Git and GitHub</h2><p>Version control is an essential skill...</p>',
            date: 'Feb 15, 2026',
            category: 'devops',
            tags: ['Git', 'GitHub', 'DevOps'],
            readTime: 7,
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EGit%3C/text%3E%3C/svg%3E'
        },
        {
            id: '3',
            title: 'My First Steps into AI',
            excerpt: 'Sharing my journey as a first-year AI student.',
            content: '<h2>Three Months of AI Learning</h2><p>As a first-year AI student...</p>',
            date: 'Feb 1, 2026',
            category: 'ai',
            tags: ['AI', 'Machine Learning', 'Journey'],
            readTime: 6,
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EAI%3C/text%3E%3C/svg%3E'
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
    portfolio: [
        {
            id: '1',
            title: 'Smart India Hackathon 2025',
            description: 'First prize winning project RuralCare AI',
            category: 'achievement',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3ESIH%202025%3C/text%3E%3C/svg%3E'
        },
        {
            id: '2',
            title: 'Google Summer of Code',
            description: 'Contributor to TensorFlow organization',
            category: 'achievement',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EGSoC%3C/text%3E%3C/svg%3E'
        }
    ],
    theme: {
        primary: '#4caf7a',
        secondary: '#3d7a4f',
        bg: '#f5efe6',
        text: '#2c3e2f',
        accent: '#d9b382'
    }
};

// ========== ADMIN SESSION ==========
let isAdminLoggedIn = false;
let secretKeySequence = [];
const SECRET_KEY = ['A', 'D', 'M', 'I', 'N'];
let lastKeyTime = Date.now();

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('Peaceful Portfolio Initialized');
    
    // Check URL parameter for admin access
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
        isAdminLoggedIn = true;
        const adminSecret = document.getElementById('adminSecret');
        if (adminSecret) adminSecret.style.display = 'block';
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
    initAIModels();
    initPortfolio();
    initCertificates();
    initBlog();
    initContactForm();
    initNewsletter();
    initBackToTop();
    initAdminLogin();
    initAdminDashboard();
    initAdminTabs();
    initProfilePanel();
    initProjectsPanel();
    initAIPanel();
    initPortfolioPanel();
    initCertificatesPanel();
    initBlogPanel();
    initSkillsPanel();
    initResumePanel();
    initThemePanel();
    initPasswordPanel();
    initLogout();
    initCloudLink();
    initResumeLink();
    initSecretKeyListener();
});

// ========== PRELOADER ==========
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 500);
    });
}

// ========== AOS ==========
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
}

// ========== TYPED.JS ==========
function initTyped() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement || typeof Typed === 'undefined') return;
    
    new Typed('.typed-text', {
        strings: [
            'AI Engineer',
            'Nature Enthusiast',
            'Python Developer',
            'C++ Programmer',
            'MLOps Specialist'
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
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (icon) icon.className = 'fas fa-sun';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        if (document.body.classList.contains('light-theme')) {
            if (icon) icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'light');
        } else {
            if (icon) icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (!hamburger || !navMenu) return;
    
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
    if (stats.length === 0) return;
    
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
    if (!grid) return;
    
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
    
    const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProjects(this.dataset.filter);
        });
    });
}

function renderProjects(filter) {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
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

// ========== RENDER AI MODELS ==========
function initAIModels() {
    const grid = document.getElementById('aiGrid');
    if (!grid) return;
    
    renderAIModels('all');
}

function renderAIModels(filter = 'all') {
    const grid = document.getElementById('aiGrid');
    if (!grid) return;
    
    const filtered = filter === 'all' ? siteData.aiModels : siteData.aiModels.filter(m => m.type.includes(filter));
    
    grid.innerHTML = filtered.map(model => `
        <div class="ai-card" data-aos="fade-up" data-model-id="${model.id}">
            <div class="ai-image">
                <img src="${model.image}" alt="${model.name}">
                <span class="ai-type">${model.type}</span>
            </div>
            <div class="ai-content">
                <h3 class="ai-title">${model.name}</h3>
                <p class="ai-description">${model.description}</p>
                <div class="ai-metrics">
                    <span class="ai-metric"><i class="fas fa-chart-line"></i> ${model.metrics}</span>
                    <span class="ai-metric"><i class="fas fa-cube"></i> ${model.framework}</span>
                </div>
                <div class="ai-features">
                    ${model.features.map(f => `<span class="ai-feature">${f}</span>`).join('')}
                </div>
                <div class="ai-links">
                    <a href="${model.github}" target="_blank" class="ai-link"><i class="fab fa-github"></i> Code</a>
                    ${model.demo ? `<a href="${model.demo}" target="_blank" class="ai-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                    <button class="ai-link details-btn" data-model-id="${model.id}"><i class="fas fa-info-circle"></i> Details</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers for details buttons
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const modelId = this.dataset.modelId;
            openAIModal(modelId);
        });
    });
}

// ========== OPEN AI MODAL ==========
function openAIModal(modelId) {
    const model = siteData.aiModels.find(m => m.id === modelId);
    if (!model) return;
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('aiModal');
    if (!modal) {
        createAIModal();
        modal = document.getElementById('aiModal');
    }
    
    const modalTitle = document.getElementById('aiModalTitle');
    const modalBody = document.getElementById('aiModalBody');
    
    if (modalTitle) modalTitle.textContent = model.name;
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="ai-details">
                <img src="${model.image}" alt="${model.name}" style="width:100%; max-height:300px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem;">
                <h3>About</h3>
                <p>${model.description}</p>
                
                <h3>Technical Details</h3>
                <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
                    <tr><th style="text-align:left; padding:0.5rem; background:rgba(76,175,122,0.1);">Type:</th><td style="padding:0.5rem;">${model.type}</td></tr>
                    <tr><th style="text-align:left; padding:0.5rem; background:rgba(76,175,122,0.1);">Framework:</th><td style="padding:0.5rem;">${model.framework}</td></tr>
                    <tr><th style="text-align:left; padding:0.5rem; background:rgba(76,175,122,0.1);">Performance:</th><td style="padding:0.5rem;">${model.metrics}</td></tr>
                </table>
                
                <h3>Key Features</h3>
                <ul style="list-style:none; padding:0;">
                    ${model.features.map(f => `<li style="margin:0.5rem 0;"><i class="fas fa-check-circle" style="color:var(--primary); margin-right:0.5rem;"></i> ${f}</li>`).join('')}
                </ul>
                
                <div style="display:flex; gap:1rem; margin-top:2rem;">
                    <a href="${model.github}" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> View on GitHub</a>
                    ${model.demo ? `<a href="${model.demo}" target="_blank" class="btn btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                </div>
            </div>
        `;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========== CREATE AI MODAL ==========
function createAIModal() {
    const modalHTML = `
        <div class="modal" id="aiModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:10000; align-items:center; justify-content:center;">
            <div style="background:var(--bg-primary); border-radius:24px; max-width:800px; width:90%; max-height:90vh; overflow:hidden;">
                <div style="background:var(--gradient); color:white; padding:1rem 1.5rem; display:flex; align-items:center; justify-content:space-between;">
                    <h2 id="aiModalTitle">AI Model Details</h2>
                    <button id="aiModalClose" style="background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">&times;</button>
                </div>
                <div id="aiModalBody" style="padding:1.5rem; overflow-y:auto; max-height:calc(90vh - 80px);"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    document.getElementById('aiModalClose').addEventListener('click', () => {
        document.getElementById('aiModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('aiModal');
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// ========== RENDER PORTFOLIO ==========
function initPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    
    renderPortfolio('all');
    
    document.querySelectorAll('[data-portfolio-filter]').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('[data-portfolio-filter]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderPortfolio(this.dataset.portfolioFilter);
        });
    });
}

function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    
    const filtered = filter === 'all' ? siteData.portfolio : siteData.portfolio.filter(item => item.category === filter);
    
    grid.innerHTML = filtered.map(item => `
        <div class="portfolio-item" data-aos="zoom-in" style="position:relative; border-radius:16px; overflow:hidden; cursor:pointer;">
            <img src="${item.image}" alt="${item.title}" style="width:100%; height:250px; object-fit:cover; transition:transform 0.5s;">
            <div class="portfolio-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:linear-gradient(to top, rgba(0,0,0,0.8), transparent); display:flex; flex-direction:column; justify-content:flex-end; padding:1.5rem; opacity:0; transition:opacity 0.3s;">
                <h3 style="color:white; margin-bottom:0.5rem;">${item.title}</h3>
                <p style="color:rgba(255,255,255,0.8); margin-bottom:0.5rem;">${item.description}</p>
                <span style="display:inline-block; padding:0.2rem 1rem; background:var(--primary); color:white; border-radius:20px; font-size:0.8rem; width:fit-content;">${item.category}</span>
            </div>
        </div>
    `).join('');
    
    // Add hover effects
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '1';
            this.querySelector('img').style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '0';
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
}

// ========== RENDER CERTIFICATES ==========
function initCertificates() {
    const grid = document.getElementById('certificatesGrid');
    if (!grid) return;
    
    renderCertificates();
}

function renderCertificates() {
    const grid = document.getElementById('certificatesGrid');
    if (!grid) return;
    
    grid.innerHTML = siteData.certificates.slice(0, 6).map(cert => `
        <div class="certificate-card" data-aos="fade-up" style="background:var(--bg-card); border:1px solid var(--border); border-radius:20px; padding:1.5rem; text-align:center; transition:all 0.3s;">
            <div class="certificate-icon" style="width:60px; height:60px; background:rgba(76,175,122,0.1); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
                <i class="fas fa-leaf" style="font-size:1.5rem; color:var(--primary);"></i>
            </div>
            <h3 style="font-size:1.1rem; margin-bottom:0.5rem;">${cert.title}</h3>
            <p style="color:var(--text-tertiary); margin-bottom:0.25rem;">${cert.issuer}</p>
            <p style="color:var(--text-muted); font-size:0.9rem;">${cert.date}</p>
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
    if (!grid) return;
    
    const filtered = category === 'all' ? siteData.blog : siteData.blog.filter(post => post.category === category);
    const posts = showAll ? filtered : filtered.slice(0, 3);
    
    if (posts.length === 0) {
        grid.innerHTML = '<div style="text-align:center; padding:3rem; color:var(--text-tertiary);">No blog posts found in this category.</div>';
        return;
    }
    
    grid.innerHTML = posts.map(post => `
        <div class="blog-card" data-aos="fade-up" data-post-id="${post.id}" style="background:var(--bg-card); border:1px solid var(--border); border-radius:20px; overflow:hidden; transition:all 0.3s;">
            <div class="blog-image" style="height:200px; overflow:hidden;">
                <img src="${post.image}" alt="${post.title}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.5s;">
            </div>
            <div class="blog-content" style="padding:1.5rem;">
                <div style="display:flex; gap:1rem; margin-bottom:0.5rem; color:var(--text-tertiary); font-size:0.85rem;">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-folder"></i> ${post.category}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime} min</span>
                </div>
                <h3 style="font-size:1.2rem; margin-bottom:0.5rem;">${post.title}</h3>
                <p style="color:var(--text-tertiary); margin-bottom:1rem;">${post.excerpt}</p>
                <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
                    ${post.tags ? post.tags.map(tag => `<span style="padding:0.2rem 0.8rem; background:var(--bg-tertiary); border-radius:20px; font-size:0.8rem; color:var(--text-tertiary);">#${tag}</span>`).join('') : ''}
                </div>
                <button class="blog-link read-more-btn" data-post-id="${post.id}" style="background:none; border:none; color:var(--primary); cursor:pointer; display:inline-flex; align-items:center; gap:0.3rem; font-weight:500;">Read More <i class="fas fa-arrow-right"></i></button>
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
    
    if (!modal) return;
    
    if (modalTitle) modalTitle.textContent = post.title;
    if (modalBody) {
        modalBody.innerHTML = `
            <div>
                <img src="${post.image}" alt="${post.title}" style="width:100%; max-height:400px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem;">
                <div style="display:flex; gap:1.5rem; margin-bottom:1.5rem; color:var(--text-tertiary); flex-wrap:wrap;">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-folder"></i> ${post.category}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime} min read</span>
                    ${post.tags ? `<span><i class="fas fa-tags"></i> ${post.tags.join(', ')}</span>` : ''}
                </div>
                <div style="line-height:1.8;">
                    ${post.content || post.excerpt}
                </div>
            </div>
        `;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========== BLOG MODAL CLOSE ==========
const blogModalClose = document.getElementById('blogModalClose');
if (blogModalClose) {
    blogModalClose.addEventListener('click', () => {
        const modal = document.getElementById('blogModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('blogModal');
    if (e.target === modal) {
        modal.classList.remove('active');
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

// ========== NEWSLETTER ==========
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail');
        if (!email) return;
        
        if (!email.value || !email.value.includes('@')) {
            showToast('Please enter a valid email', 'error');
            return;
        }
        
        showToast('Thanks for subscribing! 🎉', 'success');
        form.reset();
    });
}

// ========== BACK TO TOP ==========
function initBackToTop() {
    const button = document.getElementById('backToTop');
    if (!button) return;
    
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

// ========== RESUME LINK ==========
function initResumeLink() {
    const resumeBtn = document.getElementById('resumeBtn');
    const resumeLink = document.getElementById('resumeLink');
    const resumeFooterLink = document.getElementById('resumeFooterLink');
    const downloadBtn = document.getElementById('downloadResumeBtn');
    
    [resumeBtn, resumeLink, resumeFooterLink, downloadBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openResumeModal();
            });
        }
    });
}

// ========== OPEN RESUME MODAL ==========
function openResumeModal() {
    let modal = document.getElementById('resumeModal');
    if (!modal) {
        createResumeModal();
        modal = document.getElementById('resumeModal');
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// ========== CREATE RESUME MODAL ==========
function createResumeModal() {
    const modalHTML = `
        <div class="modal" id="resumeModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); backdrop-filter:blur(10px); z-index:10000; align-items:center; justify-content:center;">
            <div style="background:var(--bg-primary); border-radius:24px; width:90%; max-width:900px; height:90vh; overflow:hidden;">
                <div style="background:var(--gradient); color:white; padding:1rem 1.5rem; display:flex; align-items:center; justify-content:space-between;">
                    <h2>Resume Preview</h2>
                    <button id="resumeModalClose" style="background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">&times;</button>
                </div>
                <div style="height:calc(90vh - 80px); padding:1rem;">
                    <iframe style="width:100%; height:100%; border:none;"></iframe>
                    <p style="text-align:center; color:var(--text-tertiary); margin-top:2rem;">Resume PDF will be displayed here</p>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    document.getElementById('resumeModalClose').addEventListener('click', () => {
        document.getElementById('resumeModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('resumeModal');
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// ========== CLOUD LINK ==========
function initCloudLink() {
    const cloudLink = document.getElementById('cloudLink');
    const cloudFooterLink = document.getElementById('cloudFooterLink');
    
    [cloudLink, cloudFooterLink].forEach(link => {
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'private-cloud/';
            });
        }
    });
}

// ========== TOAST NOTIFICATION ==========
function showToast(message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;
    
    const icon = toast.querySelector('.toast-icon i');
    const messageEl = toast.querySelector('.toast-message');
    
    if (icon) {
        icon.className = type === 'success' ? 'fas fa-check-circle' : 
                         type === 'error' ? 'fas fa-exclamation-circle' : 
                         'fas fa-info-circle';
    }
    if (messageEl) messageEl.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========== SECRET KEY LISTENER ==========
function initSecretKeyListener() {
    document.addEventListener('keydown', function(e) {
        const currentTime = Date.now();
        
        if (currentTime - lastKeyTime > 3000) {
            secretKeySequence = [];
        }
        
        lastKeyTime = currentTime;
        secretKeySequence.push(e.key.toUpperCase());
        
        if (secretKeySequence.length > 5) {
            secretKeySequence.shift();
        }
        
        if (secretKeySequence.length === 5 && 
            secretKeySequence.join('') === SECRET_KEY.join('')) {
            showAdminAccess();
            secretKeySequence = [];
        }
    });
    
    document.addEventListener('dblclick', function(e) {
        const rect = document.body.getBoundingClientRect();
        if (e.clientX > rect.width - 100 && e.clientY < 100) {
            showAdminAccess();
        }
    });
}

function showAdminAccess() {
    if (isAdminLoggedIn) {
        document.getElementById('adminDashboardModal').classList.add('active');
        loadAdminData();
    } else {
        document.getElementById('adminLoginModal').classList.add('active');
    }
    showToast('🔐 Admin access granted!', 'info');
}

// ========== ADMIN LOGIN ==========
function initAdminLogin() {
    const loginModal = document.getElementById('adminLoginModal');
    const loginClose = document.getElementById('adminLoginClose');
    const passwordInput = document.getElementById('adminPassword');
    const submitBtn = document.getElementById('adminLoginSubmit');
    const errorDiv = document.getElementById('adminLoginError');
    const toggleBtn = document.getElementById('adminPasswordToggle');
    const loadingDiv = document.getElementById('adminLoginLoading');
    
    if (loginClose) {
        loginClose.addEventListener('click', () => {
            loginModal.classList.remove('active');
        });
    }
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            if (!passwordInput) return;
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            toggleBtn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            if (!passwordInput) return;
            const password = passwordInput.value.trim();
            
            if (!password) {
                if (errorDiv) errorDiv.textContent = 'Please enter password';
                return;
            }
            
            if (loadingDiv) loadingDiv.style.display = 'block';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                if (loadingDiv) loadingDiv.style.display = 'none';
                submitBtn.disabled = false;
                
                if (password === 'Sanjai@2008') {
                    if (loginModal) loginModal.classList.remove('active');
                    const dashboardModal = document.getElementById('adminDashboardModal');
                    if (dashboardModal) dashboardModal.classList.add('active');
                    
                    const adminSecret = document.getElementById('adminSecret');
                    if (adminSecret) adminSecret.style.display = 'block';
                    
                    isAdminLoggedIn = true;
                    sessionStorage.setItem('adminLoggedIn', 'true');
                    
                    if (passwordInput) passwordInput.value = '';
                    if (errorDiv) errorDiv.textContent = '';
                    
                    loadAdminData();
                    showToast('Welcome, Admin!', 'success');
                } else {
                    if (errorDiv) errorDiv.textContent = 'Invalid password';
                }
            }, 1000);
        });
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && submitBtn) {
                submitBtn.click();
            }
        });
    }
}

// ========== ADMIN DASHBOARD ==========
function initAdminDashboard() {
    const dashboardModal = document.getElementById('adminDashboardModal');
    const dashboardClose = document.getElementById('adminDashboardClose');
    
    if (dashboardClose) {
        dashboardClose.addEventListener('click', () => {
            if (dashboardModal) dashboardModal.classList.remove('active');
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
            const panel = document.getElementById(panelId);
            if (panel) {
                panel.classList.add('active');
            }
        });
    });
}

// ========== LOAD ADMIN DATA ==========
function loadAdminData() {
    // Safely update stats with null checks
    const projectCount = document.getElementById('adminProjectCount');
    if (projectCount) projectCount.textContent = siteData.projects.length;
    
    const certCount = document.getElementById('adminCertCount');
    if (certCount) certCount.textContent = siteData.certificates.length;
    
    const blogCount = document.getElementById('adminBlogCount');
    if (blogCount) blogCount.textContent = siteData.blog.length;
    
    const aiCount = document.getElementById('adminAICount');
    if (aiCount) aiCount.textContent = siteData.aiModels.length;
    
    let totalSkills = 0;
    siteData.skills.forEach(cat => totalSkills += cat.skills.length);
    
    const skillCount = document.getElementById('adminSkillCount');
    if (skillCount) skillCount.textContent = totalSkills;
    
    // Load lists
    loadProjectsList();
    loadCertificatesList();
    loadBlogList();
    loadSkillsList();
    loadAIList();
    loadPortfolioList();
    
    // Load profile data with null checks
    const nameInput = document.getElementById('adminName');
    if (nameInput) nameInput.value = siteData.profile.name;
    
    const displayNameInput = document.getElementById('adminDisplayName');
    if (displayNameInput) displayNameInput.value = siteData.profile.displayName;
    
    const titleInput = document.getElementById('adminTitle');
    if (titleInput) titleInput.value = siteData.profile.title;
    
    const bioInput = document.getElementById('adminBio');
    if (bioInput) bioInput.value = siteData.profile.bio;
    
    const locationInput = document.getElementById('adminLocation');
    if (locationInput) locationInput.value = siteData.profile.location;
    
    const emailInput = document.getElementById('adminEmail');
    if (emailInput) emailInput.value = siteData.profile.email;
    
    const phoneInput = document.getElementById('adminPhone');
    if (phoneInput) phoneInput.value = siteData.profile.phone;
    
    const linkedinInput = document.getElementById('adminLinkedin');
    if (linkedinInput) linkedinInput.value = siteData.profile.linkedin;
    
    const githubInput = document.getElementById('adminGithub');
    if (githubInput) githubInput.value = siteData.profile.github;
    
    const instagramInput = document.getElementById('adminInstagram');
    if (instagramInput) instagramInput.value = siteData.profile.instagram;
    
    // Load theme data with null checks
    const themePrimary = document.getElementById('themePrimary');
    if (themePrimary) themePrimary.value = siteData.theme.primary;
    
    const themeSecondary = document.getElementById('themeSecondary');
    if (themeSecondary) themeSecondary.value = siteData.theme.secondary;
    
    const themeBg = document.getElementById('themeBg');
    if (themeBg) themeBg.value = siteData.theme.bg;
    
    const themeText = document.getElementById('themeText');
    if (themeText) themeText.value = siteData.theme.text;
    
    const themeAccent = document.getElementById('themeAccent');
    if (themeAccent) themeAccent.value = siteData.theme.accent;
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

// ========== LOAD AI LIST ==========
function loadAIList() {
    const list = document.getElementById('aiList');
    if (!list) return;
    
    list.innerHTML = siteData.aiModels.map(model => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${model.name}</h4>
                <p>${model.type} · ${model.framework}</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn" onclick="editAIModel('${model.id}')"><i class="fas fa-edit"></i></button>
                <button class="admin-btn delete" onclick="deleteAIModel('${model.id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

// ========== LOAD PORTFOLIO LIST ==========
function loadPortfolioList() {
    const list = document.getElementById('galleryList');
    if (!list) return;
    
    list.innerHTML = siteData.portfolio.map(item => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${item.title}</h4>
                <p>${item.category} · ${item.description.substring(0, 50)}...</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn" onclick="editPortfolioItem('${item.id}')"><i class="fas fa-edit"></i></button>
                <button class="admin-btn delete" onclick="deletePortfolioItem('${item.id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

// ========== PROFILE PANEL ==========
function initProfilePanel() {
    const saveBtn = document.getElementById('saveProfileBtn');
    if (!saveBtn) return;
    
    saveBtn.addEventListener('click', () => {
        const loading = document.getElementById('profileLoading');
        
        // Safely get values with null checks
        const nameInput = document.getElementById('adminName');
        if (nameInput) siteData.profile.name = nameInput.value;
        
        const displayNameInput = document.getElementById('adminDisplayName');
        if (displayNameInput) siteData.profile.displayName = displayNameInput.value;
        
        const titleInput = document.getElementById('adminTitle');
        if (titleInput) siteData.profile.title = titleInput.value;
        
        const bioInput = document.getElementById('adminBio');
        if (bioInput) siteData.profile.bio = bioInput.value;
        
        const locationInput = document.getElementById('adminLocation');
        if (locationInput) siteData.profile.location = locationInput.value;
        
        const emailInput = document.getElementById('adminEmail');
        if (emailInput) siteData.profile.email = emailInput.value;
        
        const phoneInput = document.getElementById('adminPhone');
        if (phoneInput) siteData.profile.phone = phoneInput.value;
        
        const linkedinInput = document.getElementById('adminLinkedin');
        if (linkedinInput) siteData.profile.linkedin = linkedinInput.value;
        
        const githubInput = document.getElementById('adminGithub');
        if (githubInput) siteData.profile.github = githubInput.value;
        
        const instagramInput = document.getElementById('adminInstagram');
        if (instagramInput) siteData.profile.instagram = instagramInput.value;
        
        if (loading) loading.style.display = 'block';
        saveBtn.disabled = true;
        
        setTimeout(() => {
            if (loading) loading.style.display = 'none';
            saveBtn.disabled = false;
            showToast('Profile updated successfully!', 'success');
            updateProfile();
        }, 500);
    });
}

// ========== UPDATE PROFILE ==========
function updateProfile() {
    const aboutTitle = document.getElementById('aboutTitle');
    if (aboutTitle) aboutTitle.textContent = siteData.profile.title;
    
    const aboutBio = document.getElementById('aboutBio');
    if (aboutBio) aboutBio.textContent = siteData.profile.bio;
    
    const infoLocation = document.getElementById('infoLocation');
    if (infoLocation) infoLocation.textContent = siteData.profile.location;
    
    const contactLocation = document.getElementById('contactLocation');
    if (contactLocation) contactLocation.textContent = siteData.profile.location;
    
    const contactEmail = document.getElementById('contactEmail');
    if (contactEmail) contactEmail.textContent = siteData.profile.email;
    
    const contactPhone = document.getElementById('contactPhone');
    if (contactPhone) contactPhone.textContent = siteData.profile.phone;
}

// ========== PROJECTS PANEL ==========
function initProjectsPanel() {
    const addBtn = document.getElementById('addProjectBtn');
    if (!addBtn) return;
    
    addBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('newProjectName');
        const descInput = document.getElementById('newProjectDesc');
        const techInput = document.getElementById('newProjectTech');
        const categoryInput = document.getElementById('newProjectCategory');
        const githubInput = document.getElementById('newProjectGithub');
        const liveInput = document.getElementById('newProjectLive');
        
        if (!nameInput || !descInput || !techInput || !categoryInput || !githubInput) return;
        
        const name = nameInput.value;
        const desc = descInput.value;
        const tech = techInput.value.split(',').map(t => t.trim());
        const category = categoryInput.value;
        const github = githubInput.value;
        const live = liveInput ? liveInput.value : '';
        
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
        
        if (loading) loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.projects.push(newProject);
            
            nameInput.value = '';
            descInput.value = '';
            techInput.value = '';
            githubInput.value = '';
            if (liveInput) liveInput.value = '';
            
            loadProjectsList();
            renderProjects('all');
            
            const projectCount = document.getElementById('adminProjectCount');
            if (projectCount) projectCount.textContent = siteData.projects.length;
            
            if (loading) loading.style.display = 'none';
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
    
    const projectCount = document.getElementById('adminProjectCount');
    if (projectCount) projectCount.textContent = siteData.projects.length;
    
    showToast('Project deleted!', 'success');
};

// ========== EDIT PROJECT ==========
window.editProject = function(id) {
    const project = siteData.projects.find(p => p.id === id);
    if (!project) return;
    
    const nameInput = document.getElementById('newProjectName');
    const descInput = document.getElementById('newProjectDesc');
    const techInput = document.getElementById('newProjectTech');
    const categoryInput = document.getElementById('newProjectCategory');
    const githubInput = document.getElementById('newProjectGithub');
    const liveInput = document.getElementById('newProjectLive');
    
    if (nameInput) nameInput.value = project.title;
    if (descInput) descInput.value = project.description;
    if (techInput) techInput.value = project.tech.join(', ');
    if (categoryInput) categoryInput.value = project.category;
    if (githubInput) githubInput.value = project.github || '';
    if (liveInput) liveInput.value = project.live || '';
    
    const projectsTab = document.querySelector('[data-tab="projects"]');
    if (projectsTab) projectsTab.click();
    
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
    
    const certCount = document.getElementById('adminCertCount');
    if (certCount) certCount.textContent = siteData.certificates.length;
    
    showToast('Certificate deleted!', 'success');
};

// ========== DELETE BLOG ==========
window.deletePost = function(id) {
    if (!confirm('Delete this blog post?')) return;
    
    siteData.blog = siteData.blog.filter(p => p.id !== id);
    loadBlogList();
    renderBlog('all');
    
    const blogCount = document.getElementById('adminBlogCount');
    if (blogCount) blogCount.textContent = siteData.blog.length;
    
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

// ========== DELETE AI MODEL ==========
window.deleteAIModel = function(id) {
    if (!confirm('Delete this AI model?')) return;
    
    siteData.aiModels = siteData.aiModels.filter(m => m.id !== id);
    loadAIList();
    renderAIModels('all');
    showToast('AI model deleted', 'success');
};

// ========== DELETE PORTFOLIO ITEM ==========
window.deletePortfolioItem = function(id) {
    if (!confirm('Delete this portfolio item?')) return;
    
    siteData.portfolio = siteData.portfolio.filter(i => i.id !== id);
    loadPortfolioList();
    renderPortfolio('all');
    showToast('Portfolio item deleted', 'success');
};

// ========== AI PANEL ==========
function initAIPanel() {
    const addBtn = document.getElementById('addAIBtn');
    if (!addBtn) return;
    
    addBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('newAIName');
        const descInput = document.getElementById('newAIDesc');
        const typeInput = document.getElementById('newAIType');
        const frameworkInput = document.getElementById('newAIFramework');
        const metricsInput = document.getElementById('newAIMetrics');
        const githubInput = document.getElementById('newAIGithub');
        const demoInput = document.getElementById('newAIDemo');
        
        if (!nameInput || !descInput || !typeInput || !frameworkInput || !metricsInput || !githubInput) return;
        
        const name = nameInput.value;
        const desc = descInput.value;
        const type = typeInput.value;
        const framework = frameworkInput.value;
        const metrics = metricsInput.value;
        const github = githubInput.value;
        const demo = demoInput ? demoInput.value : '';
        
        if (!name || !desc || !type || !framework || !metrics || !github) {
            showToast('Please fill required fields', 'error');
            return;
        }
        
        const loading = document.getElementById('aiLoading');
        
        const newModel = {
            id: Date.now().toString(),
            name: name,
            description: desc,
            type: type,
            framework: framework,
            metrics: metrics,
            github: github,
            demo: demo || null,
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + name.substring(0, 10) + '%3C/text%3E%3C/svg%3E',
            features: []
        };
        
        if (loading) loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.aiModels.push(newModel);
            
            nameInput.value = '';
            descInput.value = '';
            typeInput.value = '';
            frameworkInput.value = '';
            metricsInput.value = '';
            githubInput.value = '';
            if (demoInput) demoInput.value = '';
            
            loadAIList();
            renderAIModels('all');
            
            if (loading) loading.style.display = 'none';
            addBtn.disabled = false;
            showToast('AI model added!', 'success');
        }, 500);
    });
}

// ========== PORTFOLIO PANEL ==========
function initPortfolioPanel() {
    const addBtn = document.getElementById('addGalleryBtn');
    if (!addBtn) return;
    
    addBtn.addEventListener('click', () => {
        const titleInput = document.getElementById('newGalleryTitle');
        const descInput = document.getElementById('newGalleryDesc');
        const categoryInput = document.getElementById('newGalleryCategory');
        
        if (!titleInput || !descInput || !categoryInput) return;
        
        const title = titleInput.value;
        const desc = descInput.value;
        const category = categoryInput.value;
        
        if (!title || !desc || !category) {
            showToast('Please fill required fields', 'error');
            return;
        }
        
        const loading = document.getElementById('galleryLoading');
        
        const newItem = {
            id: Date.now().toString(),
            title: title,
            description: desc,
            category: category,
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + title.substring(0, 10) + '%3C/text%3E%3C/svg%3E'
        };
        
        if (loading) loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.portfolio.push(newItem);
            
            titleInput.value = '';
            descInput.value = '';
            
            loadPortfolioList();
            renderPortfolio('all');
            
            if (loading) loading.style.display = 'none';
            addBtn.disabled = false;
            showToast('Portfolio item added!', 'success');
        }, 500);
    });
}

// ========== CERTIFICATES PANEL ==========
function initCertificatesPanel() {
    const addBtn = document.getElementById('addCertBtn');
    if (!addBtn) return;
    
    addBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('newCertName');
        const issuerInput = document.getElementById('newCertIssuer');
        const dateInput = document.getElementById('newCertDate');
        const credentialInput = document.getElementById('newCertCredential');
        const linkInput = document.getElementById('newCertLink');
        
        if (!nameInput || !issuerInput || !dateInput) return;
        
        const name = nameInput.value;
        const issuer = issuerInput.value;
        const date = dateInput.value;
        const credential = credentialInput ? credentialInput.value : '';
        const link = linkInput ? linkInput.value : '';
        
        if (!name || !issuer || !date) {
            showToast('Please fill required fields', 'error');
            return;
        }
        
        const loading = document.getElementById('certLoading');
        
        const newCert = {
            id: Date.now().toString(),
            title: name,
            issuer: issuer,
            date: date,
            credential: credential || '',
            link: link || ''
        };
        
        if (loading) loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.certificates.push(newCert);
            
            nameInput.value = '';
            issuerInput.value = '';
            dateInput.value = '';
            if (credentialInput) credentialInput.value = '';
            if (linkInput) linkInput.value = '';
            
            loadCertificatesList();
            renderCertificates();
            
            const certCount = document.getElementById('adminCertCount');
            if (certCount) certCount.textContent = siteData.certificates.length;
            
            if (loading) loading.style.display = 'none';
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
        const titleInput = document.getElementById('newPostTitle');
        const excerptInput = document.getElementById('newPostExcerpt');
        const contentInput = document.getElementById('newPostContent');
        const categoryInput = document.getElementById('newPostCategory');
        const tagsInput = document.getElementById('newPostTags');
        const readTimeInput = document.getElementById('newPostReadTime');
        
        if (!titleInput || !excerptInput || !categoryInput) return;
        
        const title = titleInput.value;
        const excerpt = excerptInput.value;
        const content = contentInput ? contentInput.value : '';
        const category = categoryInput.value;
        const tags = tagsInput ? tagsInput.value.split(',').map(t => t.trim()) : [];
        const readTime = readTimeInput ? readTimeInput.value : 5;
        
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
            readTime: readTime || 5,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + title.substring(0, 10) + '%3C/text%3E%3C/svg%3E'
        };
        
        if (loading) loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.blog.push(newPost);
            
            titleInput.value = '';
            excerptInput.value = '';
            if (contentInput) contentInput.value = '';
            categoryInput.value = '';
            if (tagsInput) tagsInput.value = '';
            
            loadBlogList();
            renderBlog('all');
            
            const blogCount = document.getElementById('adminBlogCount');
            if (blogCount) blogCount.textContent = siteData.blog.length;
            
            if (loading) loading.style.display = 'none';
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
        const nameInput = document.getElementById('newSkillName');
        const levelInput = document.getElementById('newSkillLevel');
        const tagsInput = document.getElementById('newSkillTags');
        const categoryInput = document.getElementById('newSkillCategory');
        
        if (!nameInput || !levelInput || !tagsInput || !categoryInput) return;
        
        const name = nameInput.value;
        const level = levelInput.value;
        const tags = tagsInput.value.split(',').map(t => t.trim());
        const category = categoryInput.value;
        
        if (!name || !level || tags.length === 0) {
            showToast('Please fill all fields', 'error');
            return;
        }
        
        const loading = document.getElementById('skillLoading');
        
        let categoryIndex = 0;
        if (category === 'languages') categoryIndex = 0;
        else if (category === 'ai') categoryIndex = 1;
        else if (category === 'tools') categoryIndex = 2;
        
        if (loading) loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.skills[categoryIndex].skills.push({
                name: name,
                level: parseInt(level),
                tags: tags
            });
            
            nameInput.value = '';
            levelInput.value = '';
            tagsInput.value = '';
            
            loadSkillsList();
            renderSkills();
            
            if (loading) loading.style.display = 'none';
            addBtn.disabled = false;
            showToast('Skill added successfully!', 'success');
        }, 500);
    });
}

// ========== RESUME PANEL ==========
function initResumePanel() {
    const uploadBtn = document.getElementById('uploadResumeBtn');
    const saveBtn = document.getElementById('saveResumeBtn');
    
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            const fileInput = document.getElementById('resumeFile');
            if (!fileInput) return;
            
            const file = fileInput.files[0];
            if (!file) {
                showToast('Please select a PDF file', 'error');
                return;
            }
            
            if (file.type !== 'application/pdf') {
                showToast('Please upload a PDF file', 'error');
                return;
            }
            
            const loading = document.getElementById('resumeLoading');
            if (loading) loading.style.display = 'block';
            uploadBtn.disabled = true;
            
            setTimeout(() => {
                if (loading) loading.style.display = 'none';
                uploadBtn.disabled = false;
                showToast('Resume uploaded successfully!', 'success');
            }, 1000);
        });
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            showToast('Resume sections saved!', 'success');
        });
    }
}

// ========== THEME PANEL ==========
function initThemePanel() {
    const saveBtn = document.getElementById('saveThemeBtn');
    const resetBtn = document.getElementById('resetThemeBtn');
    
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const primaryInput = document.getElementById('themePrimary');
            const secondaryInput = document.getElementById('themeSecondary');
            const bgInput = document.getElementById('themeBg');
            const textInput = document.getElementById('themeText');
            const accentInput = document.getElementById('themeAccent');
            
            if (!primaryInput || !secondaryInput || !bgInput || !textInput || !accentInput) return;
            
            siteData.theme = {
                primary: primaryInput.value,
                secondary: secondaryInput.value,
                bg: bgInput.value,
                text: textInput.value,
                accent: accentInput.value
            };
            
            applyTheme(siteData.theme);
            showToast('Theme updated!', 'success');
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            const primaryInput = document.getElementById('themePrimary');
            const secondaryInput = document.getElementById('themeSecondary');
            const bgInput = document.getElementById('themeBg');
            const textInput = document.getElementById('themeText');
            const accentInput = document.getElementById('themeAccent');
            
            if (primaryInput) primaryInput.value = '#4caf7a';
            if (secondaryInput) secondaryInput.value = '#3d7a4f';
            if (bgInput) bgInput.value = '#f5efe6';
            if (textInput) textInput.value = '#2c3e2f';
            if (accentInput) accentInput.value = '#d9b382';
            
            applyTheme({
                primary: '#4caf7a',
                secondary: '#3d7a4f',
                bg: '#f5efe6',
                text: '#2c3e2f',
                accent: '#d9b382'
            });
            
            showToast('Theme reset to default', 'success');
        });
    }
}

function applyTheme(theme) {
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--secondary', theme.secondary);
    document.documentElement.style.setProperty('--bg-primary', theme.bg);
    document.documentElement.style.setProperty('--text-primary', theme.text);
    document.documentElement.style.setProperty('--accent', theme.accent);
}

// ========== PASSWORD PANEL ==========
function initPasswordPanel() {
    const changeBtn = document.getElementById('changePasswordBtn');
    const logoutAllBtn = document.getElementById('logoutAllDevicesBtn');
    
    if (changeBtn) {
        changeBtn.addEventListener('click', () => {
            const oldPassInput = document.getElementById('currentPassword');
            const newPassInput = document.getElementById('newPassword');
            const confirmPassInput = document.getElementById('confirmPassword');
            
            if (!oldPassInput || !newPassInput || !confirmPassInput) return;
            
            const oldPass = oldPassInput.value;
            const newPass = newPassInput.value;
            const confirmPass = confirmPassInput.value;
            
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
            
            if (loading) loading.style.display = 'block';
            changeBtn.disabled = true;
            
            setTimeout(() => {
                if (loading) loading.style.display = 'none';
                changeBtn.disabled = false;
                showToast('Password changed successfully!', 'success');
                
                oldPassInput.value = '';
                newPassInput.value = '';
                confirmPassInput.value = '';
            }, 500);
        });
    }
    
    if (logoutAllBtn) {
        logoutAllBtn.addEventListener('click', () => {
            if (confirm('This will logout all other devices. Continue?')) {
                showToast('All other devices logged out', 'success');
            }
        });
    }
}

// ========== LOGOUT ==========
function initLogout() {
    const logoutBtn = document.getElementById('adminLogout');
    if (!logoutBtn) return;
    
    logoutBtn.addEventListener('click', () => {
        const dashboardModal = document.getElementById('adminDashboardModal');
        if (dashboardModal) dashboardModal.classList.remove('active');
        
        const adminSecret = document.getElementById('adminSecret');
        if (adminSecret) adminSecret.style.display = 'none';
        
        isAdminLoggedIn = false;
        sessionStorage.removeItem('adminLoggedIn');
        showToast('Logged out successfully', 'info');
    });
}

// Make functions globally available for onclick handlers
window.editProject = editProject;
window.deleteProject = deleteProject;
window.editCertificate = editCertificate;
window.deleteCertificate = deleteCertificate;
window.editPost = editPost;
window.deletePost = deletePost;
window.editSkill = editSkill;
window.deleteSkill = deleteSkill;
window.editAIModel = editAIModel;
window.deleteAIModel = deleteAIModel;
window.editPortfolioItem = editPortfolioItem;
window.deletePortfolioItem = deletePortfolioItem;

// Placeholder functions for edit handlers
function editCertificate(id) {
    const cert = siteData.certificates.find(c => c.id === id);
    if (!cert) return;
    
    const nameInput = document.getElementById('newCertName');
    const issuerInput = document.getElementById('newCertIssuer');
    const dateInput = document.getElementById('newCertDate');
    const credentialInput = document.getElementById('newCertCredential');
    const linkInput = document.getElementById('newCertLink');
    
    if (nameInput) nameInput.value = cert.title;
    if (issuerInput) issuerInput.value = cert.issuer;
    if (dateInput) dateInput.value = cert.date;
    if (credentialInput) credentialInput.value = cert.credential || '';
    if (linkInput) linkInput.value = cert.link || '';
    
    const certsTab = document.querySelector('[data-tab="certificates"]');
    if (certsTab) certsTab.click();
    
    if (confirm('Edit this certificate. Click OK to delete old version and add edited version.')) {
        siteData.certificates = siteData.certificates.filter(c => c.id !== id);
    }
}

function editPost(id) {
    const post = siteData.blog.find(p => p.id === id);
    if (!post) return;
    
    const titleInput = document.getElementById('newPostTitle');
    const excerptInput = document.getElementById('newPostExcerpt');
    const contentInput = document.getElementById('newPostContent');
    const categoryInput = document.getElementById('newPostCategory');
    const tagsInput = document.getElementById('newPostTags');
    const readTimeInput = document.getElementById('newPostReadTime');
    
    if (titleInput) titleInput.value = post.title;
    if (excerptInput) excerptInput.value = post.excerpt;
    if (contentInput) contentInput.value = post.content || '';
    if (categoryInput) categoryInput.value = post.category;
    if (tagsInput) tagsInput.value = post.tags ? post.tags.join(', ') : '';
    if (readTimeInput) readTimeInput.value = post.readTime || 5;
    
    const blogTab = document.querySelector('[data-tab="blog"]');
    if (blogTab) blogTab.click();
    
    if (confirm('Edit this blog post. Click OK to delete old version and add edited version.')) {
        siteData.blog = siteData.blog.filter(p => p.id !== id);
    }
}

function editSkill(catIndex, skillIndex) {
    const skill = siteData.skills[catIndex].skills[skillIndex];
    if (!skill) return;
    
    const nameInput = document.getElementById('newSkillName');
    const levelInput = document.getElementById('newSkillLevel');
    const tagsInput = document.getElementById('newSkillTags');
    const categoryInput = document.getElementById('newSkillCategory');
    
    if (nameInput) nameInput.value = skill.name;
    if (levelInput) levelInput.value = skill.level;
    if (tagsInput) tagsInput.value = skill.tags.join(', ');
    
    let category = '';
    if (catIndex === 0) category = 'languages';
    else if (catIndex === 1) category = 'ai';
    else if (catIndex === 2) category = 'tools';
    
    if (categoryInput) categoryInput.value = category;
    
    const skillsTab = document.querySelector('[data-tab="skills"]');
    if (skillsTab) skillsTab.click();
    
    if (confirm('Edit this skill. Click OK to delete old version and add edited version.')) {
        siteData.skills[catIndex].skills.splice(skillIndex, 1);
    }
}

function editAIModel(id) {
    const model = siteData.aiModels.find(m => m.id === id);
    if (!model) return;
    
    const nameInput = document.getElementById('newAIName');
    const descInput = document.getElementById('newAIDesc');
    const typeInput = document.getElementById('newAIType');
    const frameworkInput = document.getElementById('newAIFramework');
    const metricsInput = document.getElementById('newAIMetrics');
    const githubInput = document.getElementById('newAIGithub');
    const demoInput = document.getElementById('newAIDemo');
    
    if (nameInput) nameInput.value = model.name;
    if (descInput) descInput.value = model.description;
    if (typeInput) typeInput.value = model.type;
    if (frameworkInput) frameworkInput.value = model.framework;
    if (metricsInput) metricsInput.value = model.metrics;
    if (githubInput) githubInput.value = model.github || '';
    if (demoInput) demoInput.value = model.demo || '';
    
    const aiTab = document.querySelector('[data-tab="ai"]');
    if (aiTab) aiTab.click();
    
    if (confirm('Edit this AI model. Click OK to delete old version and add edited version.')) {
        siteData.aiModels = siteData.aiModels.filter(m => m.id !== id);
    }
}

function editPortfolioItem(id) {
    const item = siteData.portfolio.find(i => i.id === id);
    if (!item) return;
    
    const titleInput = document.getElementById('newGalleryTitle');
    const descInput = document.getElementById('newGalleryDesc');
    const categoryInput = document.getElementById('newGalleryCategory');
    
    if (titleInput) titleInput.value = item.title;
    if (descInput) descInput.value = item.description;
    if (categoryInput) categoryInput.value = item.category;
    
    const portfolioTab = document.querySelector('[data-tab="portfolio"]');
    if (portfolioTab) portfolioTab.click();
    
    if (confirm('Edit this portfolio item. Click OK to delete old version and add edited version.')) {
        siteData.portfolio = siteData.portfolio.filter(i => i.id !== id);
    }
}
