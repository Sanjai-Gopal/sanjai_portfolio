// ========================================
// MAIN.JS - Complete Portfolio Functionality
// ========================================

// Initialize everything when DOM is loaded
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
    initChatbot();
    initResumeDownload();
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
    
    // Check for saved theme
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
    
    // Close menu when clicking a link
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

// ========== SKILLS DATA ==========
const skillsData = [
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

// ========== RENDER SKILLS ==========
function initSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    
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

// ========== PROJECTS DATA ==========
const projectsData = [
    {
        title: 'RuralCare AI',
        description: 'Multilingual AI-based rural health assistant with symptom checker and voice recording.',
        category: 'ai',
        tech: ['Python', 'Flask', 'TensorFlow'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3ERuralCare%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/ruralcare-ai'
    },
    {
        title: 'Feedback & Billing System',
        description: 'Complete snack shop management system with bill generation and tax calculation.',
        category: 'cpp',
        tech: ['C++', 'File I/O', 'OOP'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EBilling%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/Feedback-and-Billing-System'
    },
    {
        title: 'Railway Reservation System',
        description: 'Console-based railway ticket reservation system with PNR tracking.',
        category: 'cpp',
        tech: ['C++', 'Data Structures'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3ERailway%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/railway-reservation-cpp'
    },
    {
        title: 'Advanced Portfolio',
        description: 'Cutting-edge portfolio with 3D background and AI chatbot.',
        category: 'web',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Three.js'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EPortfolio%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/sanjai_portfolio',
        live: 'https://sanjai-gopal.github.io/sanjai_portfolio/'
    },
    {
        title: 'Student Performance Predictor',
        description: 'ML model predicting student grades with 85% accuracy.',
        category: 'ai',
        tech: ['Python', 'scikit-learn', 'Pandas'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EML%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/ml-student-performance'
    },
    {
        title: 'Green AI Optimizer',
        description: 'Tool that optimizes ML models for energy efficiency.',
        category: 'ai',
        tech: ['Python', 'TensorFlow', 'Docker'],
        image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23334155\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%238b5cf6\' text-anchor=\'middle\'%3EGreen%3C/text%3E%3C/svg%3E',
        github: 'https://github.com/Sanjai-Gopal/green-ai'
    }
];

// ========== RENDER PROJECTS ==========
function initProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    renderProjects('all');
    
    // Filter buttons
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
    
    grid.innerHTML = filtered.slice(0, 3).map(project => `
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

// ========== CERTIFICATES DATA ==========
const certificatesData = [
    { title: 'AWS Certified Cloud Practitioner', issuer: 'AWS', date: 'Oct 2025' },
    { title: 'Python for Everybody', issuer: 'Univ. of Michigan', date: 'Feb 2026' },
    { title: 'Git & GitHub', issuer: 'IBM', date: 'Feb 2026' },
    { title: 'Building with AI', issuer: 'Saylor Academy', date: 'Feb 2026' },
    { title: 'Viksit Bharat Young Leaders', issuer: 'Min. of Youth Affairs', date: 'Sep 2025' },
    { title: 'Canva Design Fundamentals', issuer: 'Coursera', date: 'Feb 2026' }
];

// ========== RENDER CERTIFICATES ==========
function initCertificates() {
    const grid = document.getElementById('certificatesGrid');
    if (!grid) return;
    
    grid.innerHTML = certificatesData.slice(0, 3).map(cert => `
        <div class="certificate-card" data-aos="fade-up">
            <div class="certificate-icon"><i class="fas fa-certificate"></i></div>
            <h3 class="certificate-title">${cert.title}</h3>
            <p class="certificate-issuer">${cert.issuer}</p>
            <p class="certificate-date">${cert.date}</p>
        </div>
    `).join('');
}

// ========== BLOG DATA ==========
const blogData = [
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

// ========== RENDER BLOG ==========
function initBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    grid.innerHTML = blogData.map(post => `
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
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Show success message
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

// ========== CHATBOT ==========
function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const chatbot = document.getElementById('chatbot');
    const close = document.getElementById('chatbotClose');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');
    const messages = document.getElementById('chatbotMessages');
    
    toggle.addEventListener('click', () => {
        chatbot.classList.toggle('active');
    });
    
    close.addEventListener('click', () => {
        chatbot.classList.remove('active');
    });
    
    function addMessage(text, sender) {
        const message = document.createElement('div');
        message.className = `message ${sender}`;
        message.innerHTML = `<div class="message-content">${text}</div>`;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }
    
    function getResponse(input) {
        input = input.toLowerCase();
        
        if (input.includes('skill')) {
            return "Sanjai has expertise in Python, C++, JavaScript, Machine Learning, and MLOps!";
        } else if (input.includes('project')) {
            return "He has built 6 projects including RuralCare AI, Feedback System, and this portfolio!";
        } else if (input.includes('certificate')) {
            return "He has 33+ certifications from Coursera, AWS, IBM, and Government of India!";
        } else if (input.includes('contact')) {
            return "You can reach him at sanjai.sparkmail@gmail.com or through the contact form!";
        } else {
            return "I'm not sure. Ask me about skills, projects, certificates, or contact!";
        }
    }
    
    send.addEventListener('click', () => {
        const text = input.value.trim();
        if (!text) return;
        
        addMessage(text, 'user');
        input.value = '';
        
        setTimeout(() => {
            addMessage(getResponse(text), 'bot');
        }, 500);
    });
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            send.click();
        }
    });
}

// ========== RESUME DOWNLOAD ==========
function initResumeDownload() {
    const downloadBtn = document.getElementById('downloadResume');
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', () => {
        // Create a simple PDF-like download
        const resume = `
Sanjai Gopal
============
Aspiring AI Engineer | MLOps Enthusiast
Coimbatore, Tamil Nadu | +91 9363265552 | sanjai.sparkmail@gmail.com

EDUCATION
---------
SKCET - 1st Year Artificial Intelligence & Data Science (2025-2029)

CERTIFICATIONS (33+)
-------------------
• AWS Certified Cloud Practitioner - AWS (Oct 2025)
• Python for Everybody - Univ. of Michigan (Feb 2026)
• Git & GitHub - IBM (Feb 2026)
• Building with AI - Saylor Academy (Feb 2026)
• Viksit Bharat Young Leaders - Min. of Youth Affairs (Sep 2025)
• Canva Design Fundamentals - Coursera (Feb 2026)
• And 27+ more...

SKILLS
------
Languages: Python, C++, JavaScript
AI/ML: Machine Learning, Deep Learning, MLOps
Tools: Git, VS Code, Docker, Linux

PROJECTS
--------
• RuralCare AI - Python, Flask, TensorFlow
• Feedback & Billing System - C++, OOP
• Railway Reservation System - C++, Data Structures
• Advanced Portfolio - HTML, CSS, JavaScript
• Student Performance Predictor - Python, scikit-learn
• Green AI Optimizer - Python, TensorFlow
        `;
        
        const blob = new Blob([resume], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Sanjai_Gopal_Resume.txt';
        a.click();
        URL.revokeObjectURL(url);
        
        alert('Resume downloaded!');
    });
}
