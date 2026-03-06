// ========================================
// MAIN.JS - Complete Portfolio with Hidden Admin
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

// ========== SECRET KEY LISTENER (Hidden Admin Access) ==========
function initSecretKeyListener() {
    document.addEventListener('keydown', function(e) {
        const currentTime = Date.now();
        
        // Reset sequence if more than 3 seconds passed
        if (currentTime - lastKeyTime > 3000) {
            secretKeySequence = [];
        }
        
        lastKeyTime = currentTime;
        secretKeySequence.push(e.key.toUpperCase());
        
        // Keep only last 5 keys
        if (secretKeySequence.length > 5) {
            secretKeySequence.shift();
        }
        
        // Check if sequence matches SECRET_KEY
        if (secretKeySequence.length === 5 && 
            secretKeySequence.join('') === SECRET_KEY.join('')) {
            showAdminAccess();
            secretKeySequence = [];
        }
    });
    
    // Double-click on empty space (top-right corner)
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
            
            // Simulate API call
            setTimeout(() => {
                loadingDiv.style.display = 'none';
                submitBtn.disabled = false;
                
                // CHANGE THIS PASSWORD!
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

// ========== RENDER AI MODELS ==========
function initAIModels() {
    const grid = document.getElementById('aiGrid');
    if (!grid) return;
    
    renderAIModels('all');
    
    // AI filter buttons
    const filterContainer = document.querySelector('.ai-filter');
    if (filterContainer) {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                renderAIModels(this.dataset.aiFilter);
            });
        });
    }
}

function renderAIModels(filter = 'all') {
    const grid = document.getElementById('aiGrid');
    const filtered = filter === 'all' ? siteData.aiModels : siteData.aiModels.filter(m => m.type === filter);
    
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
    
    const modal = document.getElementById('aiModal');
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

// ========== RENDER PORTFOLIO GALLERY ==========
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

// ========== RESUME FUNCTIONALITY ==========
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

function openResumeModal() {
    const modal = document.getElementById('resumeModal');
    const frame = document.getElementById('resumeFrame');
    
    // Try to load PDF if exists, otherwise show generated resume
    frame.src = 'assets/docs/Sanjai_Resume_2026.pdf';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close resume modal
document.getElementById('resumeModalClose')?.addEventListener('click', () => {
    document.getElementById('resumeModal').classList.remove('active');
    document.body.style.overflow = 'auto';
});

// ========== NEWSLETTER ==========
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value;
        
        // Validate email
        if (!email || !email.includes('@')) {
            showToast('Please enter a valid email', 'error');
            return;
        }
        
        showToast('Thanks for subscribing! 🎉', 'success');
        form.reset();
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

// ========== DELETE FUNCTIONS ==========
window.deleteAIModel = function(id) {
    if (!confirm('Delete this AI model?')) return;
    siteData.aiModels = siteData.aiModels.filter(m => m.id !== id);
    loadAIList();
    renderAIModels('all');
    showToast('AI model deleted', 'success');
};

window.deletePortfolioItem = function(id) {
    if (!confirm('Delete this portfolio item?')) return;
    siteData.portfolio = siteData.portfolio.filter(i => i.id !== id);
    loadPortfolioList();
    renderPortfolio('all');
    showToast('Portfolio item deleted', 'success');
};

// ========== ADD AI MODEL ==========
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

// ========== ADD PORTFOLIO ITEM ==========
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

// ========== (All other existing functions remain the same) ==========
