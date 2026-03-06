// ========================================
// MAIN.JS - Peaceful Portfolio Core
// ========================================

// ========== GLOBAL DATA ==========
let projectsData = [
    {
        title: 'Feedback and Billing System',
        description: 'A comprehensive snack shop billing system with tax calculation, star ratings, and file storage for transaction history.',
        category: 'cpp',
        tech: ['C++', 'File I/O', 'OOP'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EBilling%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/Feedback-and-Billing-System'
    },
    {
        title: 'bis-smart-compliance',
        description: 'Smart compliance system built with Python for automated monitoring, reporting, and audit logging.',
        category: 'python',
        tech: ['Python', 'Automation', 'Logging'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3ECompliance%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/bis-smart-compliance'
    },
    {
        title: 'Railway Reservation System',
        description: 'Console-based railway ticket reservation system with seat management and PNR tracking.',
        category: 'cpp',
        tech: ['C++', 'OOP', 'Data Structures'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3ERailway%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/railway-reservation-cpp'
    },
    {
        title: 'Advanced Portfolio Website',
        description: 'Futuristic portfolio with 3D elements, AI chatbot, and private cloud storage.',
        category: 'web',
        tech: ['HTML5/CSS3', 'JavaScript', 'Three.js'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EPortfolio%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/sanjai_portfolio',
        live: 'https://sanjai-gopal.github.io/sanjai_portfolio/'
    },
    {
        title: 'Machine Learning Basics',
        description: 'Collection of ML algorithms implemented from scratch.',
        category: 'ai',
        tech: ['Python', 'NumPy', 'Scikit-learn'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EML%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/ml-basics'
    },
    {
        title: 'Smart Attendance System',
        description: 'Face recognition based attendance system using OpenCV.',
        category: 'ai',
        tech: ['Python', 'OpenCV', 'Face Recognition'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EAttendance%3C/text%3E%3C/svg%3E',
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
        category: 'programming',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EPython%3C/text%3E%3C/svg%3E'
    },
    {
        title: 'Git & GitHub Essentials',
        excerpt: 'A comprehensive guide to version control for beginners.',
        date: 'Feb 15, 2026',
        category: 'devops',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EGit%3C/text%3E%3C/svg%3E'
    },
    {
        title: 'My First Steps into AI',
        excerpt: 'Sharing my journey as a first-year AI student.',
        date: 'Feb 1, 2026',
        category: 'ai',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EAI%3C/text%3E%3C/svg%3E'
    },
    {
        title: 'Understanding Neural Networks',
        excerpt: 'Demystifying neural networks with visual explanations.',
        date: 'Jan 20, 2026',
        category: 'ai',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3ENeural%3C/text%3E%3C/svg%3E'
    },
    {
        title: 'Building Your First C++ Project',
        excerpt: 'Step-by-step guide to creating a C++ application.',
        date: 'Jan 5, 2026',
        category: 'programming',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EC%2B%2B%3C/text%3E%3C/svg%3E'
    },
    {
        title: 'Introduction to MLOps',
        excerpt: 'Understanding MLOps for production ML systems.',
        date: 'Dec 10, 2025',
        category: 'devops',
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3EMLOps%3C/text%3E%3C/svg%3E'
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
    console.log('Peaceful Portfolio Initialized');
    
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
}

function renderBlog(category) {
    const grid = document.getElementById('blogGrid');
    const filtered = category === 'all' ? blogData : blogData.filter(post => post.category === category);
    
    grid.innerHTML = filtered.slice(0, 6).map(post => `
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
