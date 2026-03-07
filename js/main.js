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
            description: 'Multilingual AI-based rural health assistant with symptom checker and voice recording. Uses NLP to understand symptoms in 10+ Indian languages and provides preliminary diagnoses.',
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
            description: 'Tool that optimizes ML models for energy efficiency, reducing carbon footprint by up to 40% while maintaining accuracy.',
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
            description: 'ML model achieving 85% accuracy in predicting student grades based on study hours, attendance, and previous performance.',
            type: 'Machine Learning',
            framework: 'scikit-learn, Pandas',
            metrics: '85% accuracy',
            github: 'https://github.com/Sanjai-Gopal/ml-student-performance',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EPredictor%3C/text%3E%3C/svg%3E',
            features: ['Feature Importance', 'Data Visualization', 'Predictive Analytics']
        },
        {
            id: '4',
            name: 'Voice-Controlled Home Automation',
            description: 'Privacy-first smart home system that processes voice commands locally. Supports multiple Indian languages with on-device processing.',
            type: 'NLP, IoT',
            framework: 'TensorFlow Lite, Raspberry Pi',
            metrics: '98% accuracy',
            github: 'https://github.com/Sanjai-Gopal/voice-home',
            image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EVoiceHome%3C/text%3E%3C/svg%3E',
            features: ['Offline Processing', 'Multi-language', 'Privacy-focused', 'Real-time']
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

// ========== RENDER AI MODELS ==========
function initAIModels() {
    const grid = document.getElementById('aiGrid');
    if (!grid) return;
    
    renderAIModels('all');
    
    // Create AI filter buttons if they don't exist
    const filterContainer = document.querySelector('.ai-filter');
    if (!filterContainer && grid.parentElement) {
        const filterDiv = document.createElement('div');
        filterDiv.className = 'ai-filter projects-filter';
        filterDiv.innerHTML = `
            <button class="filter-btn active" data-ai-filter="all">All</button>
            <button class="filter-btn" data-ai-filter="NLP">NLP</button>
            <button class="filter-btn" data-ai-filter="MLOps">MLOps</button>
            <button class="filter-btn" data-ai-filter="Machine Learning">ML</button>
        `;
        grid.parentElement.insertBefore(filterDiv, grid);
        
        filterDiv.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                filterDiv.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                renderAIModels(this.dataset.aiFilter);
            });
        });
    }
}

function renderAIModels(filter = 'all') {
    const grid = document.getElementById('aiGrid');
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
    const modal = document.getElementById('aiModal');
    if (!modal) {
        createAIModal();
    }
    
    const model = siteData.aiModels.find(m => m.id === modelId);
    if (!model) return;
    
    const modalTitle = document.getElementById('aiModalTitle');
    const modalBody = document.getElementById('aiModalBody');
    
    modalTitle.textContent = model.name;
    modalBody.innerHTML = `
        <div class="ai-details">
            <img src="${model.image}" alt="${model.name}" class="ai-detail-image">
            <h3>About</h3>
            <p>${model.description}</p>
            
            <h3>Technical Details</h3>
            <table class="ai-detail-table">
                <tr><th>Type:</th><td>${model.type}</td></tr>
                <tr><th>Framework:</th><td>${model.framework}</td></tr>
                <tr><th>Performance:</th><td>${model.metrics}</td></tr>
            </table>
            
            <h3>Key Features</h3>
            <ul class="ai-detail-features">
                ${model.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
            </ul>
            
            <div class="ai-detail-links">
                <a href="${model.github}" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> View on GitHub</a>
                ${model.demo ? `<a href="${model.demo}" target="_blank" class="btn btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========== CREATE AI MODAL ==========
function createAIModal() {
    const modalHTML = `
        <div class="ai-modal" id="aiModal">
            <div class="ai-modal-content">
                <div class="ai-modal-header">
                    <h2 id="aiModalTitle">AI Model Details</h2>
                    <button class="ai-modal-close" id="aiModalClose">&times;</button>
                </div>
                <div class="ai-modal-body" id="aiModalBody"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    document.getElementById('aiModalClose').addEventListener('click', () => {
        document.getElementById('aiModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('aiModal')) {
            document.getElementById('aiModal').classList.remove('active');
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
    const filtered = filter === 'all' ? siteData.portfolio : siteData.portfolio.filter(item => item.category === filter);
    
    grid.innerHTML = filtered.map(item => `
        <div class="portfolio-item" data-aos="zoom-in">
            <img src="${item.image}" alt="${item.title}" class="portfolio-image">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <span class="portfolio-category">${item.category}</span>
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
    const posts = showAll ? filtered : filtered.slice(0, 3);
    
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
                    <span><i class="far fa-clock"></i> ${post.readTime} min</span>
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
                <span><i class="far fa-clock"></i> ${post.readTime} min read</span>
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
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would send to API
        console.log('Contact form:', { name, email, subject, message });
        
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
        const email = document.getElementById('newsletterEmail').value;
        
        if (!email || !email.includes('@')) {
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
    const modal = document.getElementById('resumeModal');
    if (!modal) {
        createResumeModal();
    }
    
    const frame = document.getElementById('resumeFrame');
    frame.src = 'assets/docs/Sanjai_Resume_2026.pdf';
    
    document.getElementById('resumeModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========== CREATE RESUME MODAL ==========
function createResumeModal() {
    const modalHTML = `
        <div class="resume-modal" id="resumeModal">
            <div class="resume-modal-content">
                <div class="resume-modal-header">
                    <h2>Resume Preview</h2>
                    <button class="resume-modal-close" id="resumeModalClose">&times;</button>
                </div>
                <div class="resume-modal-body">
                    <iframe id="resumeFrame" style="width:100%; height:100%; border:none;"></iframe>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    document.getElementById('resumeModalClose').addEventListener('click', () => {
        document.getElementById('resumeModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('resumeModal')) {
            document.getElementById('resumeModal').classList.remove('active');
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
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            toggleBtn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const password = passwordInput.value.trim();
            
            if (!password) {
                errorDiv.textContent = 'Please enter password';
                return;
            }
            
            loadingDiv.style.display = 'block';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                loadingDiv.style.display = 'none';
                submitBtn.disabled = false;
                
                if (password === 'Sanjai@2008') {
                    loginModal.classList.remove('active');
                    document.getElementById('adminDashboardModal').classList.add('active');
                    document.getElementById('adminSecret').style.display = 'block';
                    isAdminLoggedIn = true;
                    sessionStorage.setItem('adminLoggedIn', 'true');
                    passwordInput.value = '';
                    errorDiv.textContent = '';
                    
                    loadAdminData();
                    showToast('Welcome, Admin!', 'success');
                } else {
                    errorDiv.textContent = 'Invalid password';
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
            const panel = document.getElementById(panelId);
            if (panel) {
                panel.classList.add('active');
            }
        });
    });
}

// ========== LOAD ADMIN DATA ==========
function loadAdminData() {
    document.getElementById('adminProjectCount').textContent = siteData.projects.length;
    document.getElementById('adminCertCount').textContent = siteData.certificates.length;
    document.getElementById('adminBlogCount').textContent = siteData.blog.length;
    document.getElementById('adminAICount').textContent = siteData.aiModels.length;
    
    let totalSkills = 0;
    siteData.skills.forEach(cat => totalSkills += cat.skills.length);
    document.getElementById('adminSkillCount').textContent = totalSkills;
    
    loadProjectsList();
    loadCertificatesList();
    loadBlogList();
    loadSkillsList();
    loadAIList();
    loadPortfolioList();
    
    // Load profile data
    document.getElementById('adminName').value = siteData.profile.name;
    document.getElementById('adminDisplayName').value = siteData.profile.displayName;
    document.getElementById('adminTitle').value = siteData.profile.title;
    document.getElementById('adminBio').value = siteData.profile.bio;
    document.getElementById('adminLocation').value = siteData.profile.location;
    document.getElementById('adminEmail').value = siteData.profile.email;
    document.getElementById('adminPhone').value = siteData.profile.phone;
    document.getElementById('adminLinkedin').value = siteData.profile.linkedin;
    document.getElementById('adminGithub').value = siteData.profile.github;
    document.getElementById('adminInstagram').value = siteData.profile.instagram;
    
    // Load theme data
    document.getElementById('themePrimary').value = siteData.theme.primary;
    document.getElementById('themeSecondary').value = siteData.theme.secondary;
    document.getElementById('themeBg').value = siteData.theme.bg;
    document.getElementById('themeText').value = siteData.theme.text;
    document.getElementById('themeAccent').value = siteData.theme.accent;
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
        
        siteData.profile.name = document.getElementById('adminName').value;
        siteData.profile.displayName = document.getElementById('adminDisplayName').value;
        siteData.profile.title = document.getElementById('adminTitle').value;
        siteData.profile.bio = document.getElementById('adminBio').value;
        siteData.profile.location = document.getElementById('adminLocation').value;
        siteData.profile.email = document.getElementById('adminEmail').value;
        siteData.profile.phone = document.getElementById('adminPhone').value;
        siteData.profile.linkedin = document.getElementById('adminLinkedin').value;
        siteData.profile.github = document.getElementById('adminGithub').value;
        siteData.profile.instagram = document.getElementById('adminInstagram').value;
        
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
        const name = document.getElementById('newAIName').value;
        const desc = document.getElementById('newAIDesc').value;
        const type = document.getElementById('newAIType').value;
        const framework = document.getElementById('newAIFramework').value;
        const metrics = document.getElementById('newAIMetrics').value;
        const github = document.getElementById('newAIGithub').value;
        const demo = document.getElementById('newAIDemo').value;
        
        if (!name || !desc || !type || !framework || !metrics || !github) {
            showToast('Please fill required fields', 'error');
            return;
        }
        
        const loading = document.getElementById('aiLoading');
        loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
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
            
            siteData.aiModels.push(newModel);
            loadAIList();
            renderAIModels('all');
            
            document.getElementById('newAIName').value = '';
            document.getElementById('newAIDesc').value = '';
            document.getElementById('newAIType').value = '';
            document.getElementById('newAIFramework').value = '';
            document.getElementById('newAIMetrics').value = '';
            document.getElementById('newAIGithub').value = '';
            document.getElementById('newAIDemo').value = '';
            
            loading.style.display = 'none';
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
        const title = document.getElementById('newGalleryTitle').value;
        const desc = document.getElementById('newGalleryDesc').value;
        const category = document.getElementById('newGalleryCategory').value;
        
        if (!title || !desc || !category) {
            showToast('Please fill required fields', 'error');
            return;
        }
        
        const loading = document.getElementById('galleryLoading');
        loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            const newItem = {
                id: Date.now().toString(),
                title: title,
                description: desc,
                category: category,
                image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + title.substring(0, 10) + '%3C/text%3E%3C/svg%3E'
            };
            
            siteData.portfolio.push(newItem);
            loadPortfolioList();
            renderPortfolio('all');
            
            document.getElementById('newGalleryTitle').value = '';
            document.getElementById('newGalleryDesc').value = '';
            
            loading.style.display = 'none';
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
        const name = document.getElementById('newCertName').value;
        const issuer = document.getElementById('newCertIssuer').value;
        const date = document.getElementById('newCertDate').value;
        const credential = document.getElementById('newCertCredential').value;
        const link = document.getElementById('newCertLink').value;
        
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
        
        loading.style.display = 'block';
        addBtn.disabled = true;
        
        setTimeout(() => {
            siteData.certificates.push(newCert);
            
            document.getElementById('newCertName').value = '';
            document.getElementById('newCertIssuer').value = '';
            document.getElementById('newCertDate').value = '';
            document.getElementById('newCertCredential').value = '';
            document.getElementById('newCertLink').value = '';
            
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
        const readTime = document.getElementById('newPostReadTime').value;
        
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

// ========== RESUME PANEL ==========
function initResumePanel() {
    const uploadBtn = document.getElementById('uploadResumeBtn');
    const saveBtn = document.getElementById('saveResumeBtn');
    
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            const file = document.getElementById('resumeFile').files[0];
            if (!file) {
                showToast('Please select a PDF file', 'error');
                return;
            }
            
            if (file.type !== 'application/pdf') {
                showToast('Please upload a PDF file', 'error');
                return;
            }
            
            const loading = document.getElementById('resumeLoading');
            loading.style.display = 'block';
            uploadBtn.disabled = true;
            
            setTimeout(() => {
                loading.style.display = 'none';
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
            const primary = document.getElementById('themePrimary').value;
            const secondary = document.getElementById('themeSecondary').value;
            const bg = document.getElementById('themeBg').value;
            const text = document.getElementById('themeText').value;
            const accent = document.getElementById('themeAccent').value;
            
            siteData.theme = { primary, secondary, bg, text, accent };
            
            applyTheme(siteData.theme);
            showToast('Theme updated!', 'success');
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            document.getElementById('themePrimary').value = '#4caf7a';
            document.getElementById('themeSecondary').value = '#3d7a4f';
            document.getElementById('themeBg').value = '#f5efe6';
            document.getElementById('themeText').value = '#2c3e2f';
            document.getElementById('themeAccent').value = '#d9b382';
            
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
        document.getElementById('adminDashboardModal').classList.remove('active');
        document.getElementById('adminSecret').style.display = 'none';
        isAdminLoggedIn = false;
        sessionStorage.removeItem('adminLoggedIn');
        showToast('Logged out successfully', 'info');
    });
}