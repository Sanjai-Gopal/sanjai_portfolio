// ========================================
// MAIN.JS - CORE FUNCTIONALITY
// ========================================

console.log('Site loaded successfully');

// ==================== CERTIFICATES DATA ====================
const certificates = [
    // Coursera Canva Series (14)
    { title: "Canva Essentials Professional Certificate", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Presentation Design Mastery in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Social Media Content Creation with Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Marketing Material Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Video Content Creation in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Interactive Document Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Event Marketing Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "AI-Powered Design with Canva Magic Studio", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Advanced Branding in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Portfolio Development in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Event Video & Social Media Experience Design", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Brand Identity Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Typography and Color Theory in Design", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Canva Design Fundamentals", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "#" },
    
    // Other Coursera
    { title: "Increase Engagement to your Instagram Business", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-instagram", link: "#" },
    { title: "Create and Design Digital Products using Canva", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Use Canva to Create Social Media Visuals", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-canva", link: "#" },
    { title: "Programming for Everybody (Python)", issuer: "Univ. of Michigan", date: "Feb 2026", category: "coursera", icon: "fa-python", link: "#" },
    
    // IBM
    { title: "Getting Started with Git and GitHub", issuer: "IBM", date: "Feb 2026", category: "ibm", icon: "fa-github", link: "#" },
    { title: "Getting Started with Data", issuer: "IBM SkillsBuild", date: "Oct 2025", category: "ibm", icon: "fa-database", link: "#" },
    
    // AWS
    { title: "AWS Certified Cloud Practitioner (Practice Set)", issuer: "AWS", date: "Oct 2025", category: "aws", icon: "fa-aws", link: "#" },
    
    // Saylor Academy
    { title: "CS205: Building with Artificial Intelligence", issuer: "Saylor Academy", date: "Feb 2026", category: "other", icon: "fa-robot", link: "#" },
    
    // byteXL
    { title: "C Programming", issuer: "byteXL", date: "Nov 2025", category: "other", icon: "fa-code", link: "#" },
    
    // Government
    { title: "Viksit Bharat Young Leaders Dialogue", issuer: "Min. of Youth Affairs", date: "Sep 2025", category: "govt", icon: "fa-indian-rupee-sign", link: "#" },
    { title: "MYBharat Budget Quest 2026", issuer: "MYBharat", date: "Feb 2026", category: "govt", icon: "fa-chart-line", link: "#" },
    { title: "Online Essay on Viksit Bharat", issuer: "Min. of Youth Affairs", date: "Nov 2025", category: "govt", icon: "fa-pen", link: "#" },
    { title: "Know more about DFPD-II Quiz", issuer: "MYBharat", date: "Feb 2026", category: "govt", icon: "fa-question", link: "#" },
    { title: "The Viksit Bharat Quiz 2026", issuer: "MYBharat", date: "2025", category: "govt", icon: "fa-medal", link: "#" },
    { title: "Sardar 150 National Level Essay Competition", issuer: "Ek Bharat", date: "2025", category: "govt", icon: "fa-award", link: "#" },
    
    // IIRS/ISRO
    { title: "Advances in thermal infrared Remote Sensing", issuer: "IIRS/ISRO", date: "Oct 2025", category: "other", icon: "fa-satellite", link: "#" },
    
    // Typing
    { title: "Typing - Beginner Unit", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "#" },
    { title: "Typing - Intermediate Unit", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "#" },
    { title: "Typing - Advanced Unit", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "#" }
];

// ==================== PROJECTS DATA ====================
const projects = [
    {
        name: "RuralCare AI",
        description: "Multilingual AI-based rural health assistant with symptom checker, voice recording, and real-time dashboard.",
        tech: ["Python", "Flask", "AI/ML"],
        category: "ai",
        github: "https://github.com/Sanjai-Gopal/ruralcare-ai",
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=RuralCare+AI",
        features: ["AI Symptom Checker", "Voice Recording", "Disease Library", "Real-time dashboard", "Printable reports"],
        demo: "#"
    },
    {
        name: "Feedback & Billing System",
        description: "Complete snack shop management system with tax calculation, star ratings, and file-based persistence.",
        tech: ["C++", "File I/O", "OOP"],
        category: "cpp",
        github: "https://github.com/Sanjai-Gopal/Feedback-and-Billing-System",
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=Billing+System",
        features: ["Automatic bill generation", "Tax calculation", "Customer feedback", "File persistence"],
        demo: null
    },
    {
        name: "bis-smart-compliance",
        description: "Automated compliance monitoring system with report generation and audit logging.",
        tech: ["Python", "Automation", "Logging"],
        category: "python",
        github: "https://github.com/Sanjai-Gopal/bis-smart-compliance",
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=Compliance+System",
        features: ["Automated compliance checks", "Report generation", "Data validation", "Audit logging"],
        demo: null
    },
    {
        name: "Railway Reservation System",
        description: "Console-based railway ticket reservation system with seat management and PNR tracking.",
        tech: ["C++", "OOP", "Data Structures"],
        category: "cpp",
        github: "https://github.com/Sanjai-Gopal/railway-reservation-cpp",
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=Railway+Reservation",
        features: ["Ticket booking", "Seat availability", "PNR tracking", "Fare calculation"],
        demo: null
    },
    {
        name: "Advanced Portfolio 2026",
        description: "Futuristic nature-themed portfolio with 3D elements, AI chatbot, and private cloud storage.",
        tech: ["HTML5/CSS3", "JavaScript", "Three.js"],
        category: "web",
        github: "https://github.com/Sanjai-Gopal/sanjai_portfolio",
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=Portfolio",
        demo: "#",
        features: ["Nature theme", "AI chatbot", "Private cloud", "Admin panel"]
    },
    {
        name: "Student Performance Predictor",
        description: "ML model to predict student grades based on study hours, attendance, and previous performance.",
        tech: ["Python", "scikit-learn", "Pandas"],
        category: "ai",
        github: "https://github.com/Sanjai-Gopal/ml-student-performance",
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=ML+Model",
        features: ["85% accuracy", "Feature importance", "Data visualization", "Model evaluation"],
        demo: null
    }
];

// ==================== BLOG POSTS DATA ====================
const blogPosts = [
    {
        title: "Getting Started with Python: A Beginner's Guide",
        excerpt: "Learn the fundamentals of Python programming with practical examples and tips for aspiring AI engineers.",
        date: "Mar 1, 2026",
        category: "Programming",
        readTime: 5,
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=Python+Basics",
        slug: "post1.html"
    },
    {
        title: "Git & GitHub: Essential Commands Every Developer Should Know",
        excerpt: "A comprehensive guide to version control for beginners, with practical workflows and tips.",
        date: "Feb 15, 2026",
        category: "DevOps",
        readTime: 7,
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=Git+Guide",
        slug: "post2.html"
    },
    {
        title: "My First Steps into AI: What I Learned in 3 Months",
        excerpt: "Sharing my journey as a first-year student diving into the world of Artificial Intelligence.",
        date: "Feb 1, 2026",
        category: "AI/ML",
        readTime: 6,
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=AI+Journey",
        slug: "post3.html"
    },
    {
        title: "Understanding Neural Networks: A Visual Guide",
        excerpt: "Demystifying neural networks with visual explanations and simple analogies.",
        date: "Jan 20, 2026",
        category: "AI/ML",
        readTime: 8,
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=Neural+Networks",
        slug: "post4.html"
    },
    {
        title: "Building Your First C++ Project",
        excerpt: "Step-by-step guide to creating a practical C++ application from scratch.",
        date: "Jan 5, 2026",
        category: "Programming",
        readTime: 6,
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=C+++Project",
        slug: "post5.html"
    },
    {
        title: "Introduction to MLOps: Bridging ML and Operations",
        excerpt: "Understanding the basics of MLOps and why it matters for production ML systems.",
        date: "Dec 10, 2025",
        category: "MLOps",
        readTime: 7,
        image: "https://via.placeholder.com/400x200/0f172a/8b5cf6?text=MLOps",
        slug: "post6.html"
    }
];

// ==================== RENDER FUNCTIONS ====================
function renderCertificates(filter = 'all') {
    const grid = document.getElementById('certificatesGrid');
    if (!grid) return;
    
    const filtered = filter === 'all' ? certificates : certificates.filter(c => c.category === filter);
    
    grid.innerHTML = filtered.map(cert => `
        <div class="certificate-card" onclick="window.open('${cert.link}', '_blank')">
            <img src="https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Certificate" alt="${cert.title}">
            <div class="certificate-overlay">
                <span>${cert.title}</span>
                <p><i class="fab ${cert.icon}"></i> ${cert.issuer} • ${cert.date}</p>
                <button class="view-cert-btn" onclick="event.stopPropagation(); window.open('${cert.link}', '_blank')">
                    <i class="fab fa-linkedin"></i> View
                </button>
            </div>
        </div>
    `).join('');
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    
    grid.innerHTML = filtered.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}">
                <span class="project-category">${project.category.toUpperCase()}</span>
            </div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="github-link"><i class="fab fa-github"></i> Code</a>
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="demo-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function renderBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    grid.innerHTML = blogPosts.map(post => `
        <article class="blog-card">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
                <span class="blog-category">${post.category}</span>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime} min read</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="blog/${post.slug}" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');
}

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    
    const skillsData = [
        { category: "Languages", icon: "fa-code", skills: [
            { name: "Python", level: 85, tags: ["NumPy", "Pandas", "Matplotlib"] },
            { name: "C++", level: 75, tags: ["OOP", "STL", "Algorithms"] },
            { name: "JavaScript", level: 60, tags: ["ES6", "React", "Node.js"] }
        ]},
        { category: "AI & ML", icon: "fa-brain", skills: [
            { name: "Machine Learning", level: 70, tags: ["Scikit-learn", "Regression", "Classification"] },
            { name: "Deep Learning", level: 50, tags: ["Neural Networks", "TensorFlow"] },
            { name: "MLOps", level: 40, tags: ["Docker", "MLflow"] }
        ]},
        { category: "Tools", icon: "fa-tools", skills: [
            { name: "Git & GitHub", level: 80, tags: ["Version Control", "Collaboration"] },
            { name: "VS Code", level: 65, tags: ["Extensions", "Debugging"] },
            { name: "Linux/Unix", level: 55, tags: ["Command Line", "Bash"] }
        ]}
    ];
    
    grid.innerHTML = skillsData.map(cat => `
        <div class="skill-tree">
            <div class="skill-header">
                <i class="fas ${cat.icon}"></i>
                <h3>${cat.category}</h3>
            </div>
            <div class="skill-branch">
                ${cat.skills.map(skill => `
                    <div class="skill-leaf">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-progress">
                            <div class="progress-fill" style="width: ${skill.level}%"></div>
                        </div>
                        <div class="skill-tags">
                            ${skill.tags.map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ==================== FILTER FUNCTIONS ====================
window.filterCertificates = function(category) {
    document.querySelectorAll('.cert-filters .filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderCertificates(category);
};

// ==================== RESUME GENERATION ====================
function generateResume() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setTextColor(139, 92, 246);
    doc.setFontSize(24);
    doc.text("Sanjai Gopal", 20, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Aspiring AI Engineer | MLOps Enthusiast", 20, 30);
    doc.text("Coimbatore, Tamil Nadu | +91 9363265552 | sanjai.sparkmail@gmail.com", 20, 37);
    
    doc.setDrawColor(139, 92, 246);
    doc.line(20, 42, 190, 42);
    
    doc.setFontSize(16);
    doc.setTextColor(139, 92, 246);
    doc.text("Education", 20, 55);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("SKCET - 1st Year Artificial Intelligence & Data Science (2025-2029)", 20, 65);
    
    doc.setFontSize(16);
    doc.setTextColor(139, 92, 246);
    doc.text("Certifications (30+)", 20, 80);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    
    let y = 90;
    certificates.slice(0, 15).forEach((cert, i) => {
        doc.text(`• ${cert.title} - ${cert.issuer} (${cert.date})`, 25, y);
        y += 6;
    });
    
    doc.save("Sanjai_Gopal_Resume.pdf");
}

// ==================== LEAF BACKGROUND ====================
function createLeafBackground() {
    const container = document.getElementById('leafContainer');
    for (let i = 0; i < 30; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'falling-leaf';
        leaf.style.left = Math.random() * 100 + '%';
        leaf.style.animationDuration = (8 + Math.random() * 10) + 's';
        leaf.style.animationDelay = Math.random() * 10 + 's';
        leaf.style.opacity = 0.1 + Math.random() * 0.2;
        leaf.innerHTML = ['🌿', '🍃', '🌱', '🌳', '🌲'][Math.floor(Math.random() * 5)];
        container.appendChild(leaf);
    }
}

// ==================== TYPING ANIMATION ====================
function initTyping() {
    const words = ['AI Engineer', 'MLOps Enthusiast', 'Python Developer', 'C++ Programmer', 'Nature Lover'];
    const typedText = document.querySelector('.typed-text');
    if (!typedText) return;
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 100);
        }
    }
    
    type();
}

// ==================== CHATBOT ====================
class NatureAIChatbot {
    constructor() {
        this.container = document.getElementById('chatbotContainer');
        this.toggle = document.getElementById('chatbotToggle');
        this.close = document.getElementById('chatbotClose');
        this.messages = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendBtn = document.getElementById('chatbotSend');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        this.toggle.addEventListener('click', () => this.toggleChat());
        this.close.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }
    
    toggleChat() {
        this.isOpen ? this.closeChat() : this.openChat();
    }
    
    openChat() {
        this.container.classList.add('active');
        this.toggle.style.display = 'none';
        this.isOpen = true;
    }
    
    closeChat() {
        this.container.classList.remove('active');
        this.toggle.style.display = 'flex';
        this.isOpen = false;
    }
    
    addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `message ${sender}`;
        msg.innerHTML = text;
        this.messages.appendChild(msg);
        this.messages.scrollTop = this.messages.scrollHeight;
    }
    
    sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;
        
        this.addMessage(text, 'user');
        this.input.value = '';
        
        setTimeout(() => {
            const response = this.getAIResponse(text);
            this.addMessage(response, 'bot');
        }, 500);
    }
    
    getAIResponse(input) {
        input = input.toLowerCase();
        
        if (input.includes('skill')) {
            return "Sanjai has expertise in Python (85%), C++ (75%), JavaScript (60%), Machine Learning (70%), Deep Learning (50%), and MLOps (40%).";
        }
        else if (input.includes('project')) {
            return "Sanjai has built 6 major projects including RuralCare AI, Feedback & Billing System, and this portfolio!";
        }
        else if (input.includes('certificate') || input.includes('certification')) {
            return "Sanjai has earned over 30 certifications from Coursera, AWS, IBM, and the Government of India!";
        }
        else if (input.includes('contact') || input.includes('email')) {
            return "You can reach Sanjai at sanjai.sparkmail@gmail.com or on LinkedIn.";
        }
        else if (input.includes('education')) {
            return "Sanjai is currently in his 1st year of AI & Data Science at SKCET, Coimbatore.";
        }
        else {
            return "I'm not sure about that. Ask me about Sanjai's skills, projects, certifications, or education!";
        }
    }
}

// ==================== ADMIN FUNCTIONS ====================
window.updateProfilePhoto = function() {
    alert('Profile photo updated! (Demo)');
};

window.updateBio = function() {
    alert('Bio updated! (Demo)');
};

window.addProject = function() {
    alert('Project added! (Demo)');
};

window.addCertificate = function() {
    alert('Certificate added! (Demo)');
};

window.addBlogPost = function() {
    alert('Blog post published! (Demo)');
};

// ==================== INITIALIZE EVERYTHING ====================
document.addEventListener('DOMContentLoaded', function() {
    renderSkills();
    renderCertificates('all');
    renderProjects('all');
    renderBlog();
    createLeafBackground();
    initTyping();
    
    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Project filter
    document.querySelectorAll('.projects-filter .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.projects-filter .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProjects(this.dataset.filter);
        });
    });
    
    // Resume download
    document.getElementById('downloadResumeBtn').addEventListener('click', function(e) {
        e.preventDefault();
        generateResume();
    });
    
    document.getElementById('resumeFooterLink').addEventListener('click', function(e) {
        e.preventDefault();
        generateResume();
    });
    
    // Chatbot
    window.chatbot = new NatureAIChatbot();
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent! (Demo)');
        this.reset();
    });
    
    // Admin Panel
    const adminSecret = document.getElementById('adminSecret');
    const adminPanel = document.getElementById('adminPanel');
    const adminClose = document.getElementById('adminClose');
    
    adminSecret.addEventListener('dblclick', () => {
        adminPanel.classList.add('active');
    });
    
    adminClose.addEventListener('click', () => {
        adminPanel.classList.remove('active');
    });
    
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-pane').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.tab + '-pane').classList.add('active');
        });
    });
    
    // Active link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
