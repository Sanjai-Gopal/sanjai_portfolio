// ========================================
// MAIN.JS - Peaceful Portfolio Core
// ========================================

// ========== GLOBAL DATA ==========
let siteData = {
    profile: null,
    projects: [],
    certificates: [],
    blog: [],
    skills: [],
    theme: null
};

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Peaceful Portfolio Initialized');
    
    // Load all data from API
    await loadAllData();
    
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
    initAdminSecret();
    initCloudLink();
});

// ========== LOAD ALL DATA FROM API ==========
async function loadAllData() {
    try {
        const response = await API.getData('all');
        if (response.success && response.data) {
            siteData = response.data;
            
            // Apply theme
            if (siteData.theme) {
                applyTheme(siteData.theme);
            }
            
            // Update profile
            if (siteData.profile) {
                updateProfile(siteData.profile);
            }
            
            console.log('Data loaded successfully');
        }
    } catch (error) {
        console.error('Failed to load data:', error);
    }
}

// ========== UPDATE PROFILE ==========
function updateProfile(profile) {
    if (profile.title) {
        document.getElementById('aboutTitle').textContent = profile.title;
    }
    if (profile.bio) {
        document.getElementById('aboutBio').textContent = profile.bio;
    }
    if (profile.location) {
        document.getElementById('infoLocation').textContent = profile.location;
        document.getElementById('contactLocation').textContent = profile.location;
    }
    if (profile.email) {
        document.getElementById('contactEmail').textContent = profile.email;
    }
    if (profile.phone) {
        document.getElementById('contactPhone').textContent = profile.phone;
    }
    if (profile.photo) {
        document.getElementById('profileImage').src = profile.photo;
    }
}

// ========== APPLY THEME ==========
function applyTheme(theme) {
    document.documentElement.style.setProperty('--primary', theme.primary || '#4caf7a');
    document.documentElement.style.setProperty('--secondary', theme.secondary || '#3d7a4f');
    document.documentElement.style.setProperty('--bg-primary', theme.bg || '#f5efe6');
    document.documentElement.style.setProperty('--text-primary', theme.text || '#2c3e2f');
}

// ========== ADMIN SECRET ==========
function initAdminSecret() {
    const secretBtn = document.getElementById('adminSecret');
    
    // Check if user is admin (via session)
    API.checkSession().then(response => {
        if (response.success) {
            secretBtn.style.display = 'block';
        }
    });
    
    // Double-click to open login
    secretBtn.addEventListener('dblclick', () => {
        document.getElementById('adminLoginModal').classList.add('active');
    });
}

// ========== CLOUD LINK ==========
function initCloudLink() {
    const cloudLink = document.getElementById('cloudLink');
    const cloudFooterLink = document.getElementById('cloudFooterLink');
    
    cloudLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'private-cloud/';
    });
    
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
    if (!grid || !siteData.skills) return;
    
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
    if (!grid || !siteData.projects) return;
    
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
                <img src="${project.image || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'40\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + project.title.substring(0, 10) + '%3C/text%3E%3C/svg%3E'}" alt="${project.title}">
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
    if (!grid || !siteData.certificates) return;
    
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
    if (!grid || !siteData.blog) return;
    
    renderBlog('all');
    
    document.querySelectorAll('.blog-cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.blog-cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderBlog(this.dataset.cat);
        });
    });
    
    document.getElementById('viewAllBlogs').addEventListener('click', (e) => {
        e.preventDefault();
        renderBlog('all', true);
    });
}

function renderBlog(category, showAll = false) {
    const grid = document.getElementById('blogGrid');
    const filtered = category === 'all' ? siteData.blog : siteData.blog.filter(post => post.category === category);
    const posts = showAll ? filtered : filtered.slice(0, 3);
    
    grid.innerHTML = posts.map(post => `
        <div class="blog-card" data-aos="fade-up" data-post-id="${post.id}">
            <div class="blog-image">
                <img src="${post.image || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + post.title.substring(0, 10) + '%3C/text%3E%3C/svg%3E'}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>${post.category}</span>
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
            <img src="${post.image || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'400\' viewBox=\'0 0 800 400\'%3E%3Crect width=\'800\' height=\'400\' fill=\'%23e2f0d9\'/%3E%3Ctext x=\'400\' y=\'200\' font-family=\'Arial\' font-size=\'48\' fill=\'%234caf7a\' text-anchor=\'middle\'%3E' + post.title.substring(0, 10) + '%3C/text%3E%3C/svg%3E'}" alt="${post.title}" class="blog-post-image">
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

// ========== BLOG MODAL CLOSE ==========
document.getElementById('blogModalClose').addEventListener('click', () => {
    document.getElementById('blogModal').classList.remove('active');
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('blogModal')) {
        document.getElementById('blogModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
