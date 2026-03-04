/* ========================================
   PROJECTS.JS - Projects Filter & Gallery
   ======================================== */

class ProjectsGallery {
    constructor() {
        this.projects = [];
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectsGrid = document.getElementById('projectsGrid');
        this.activeFilter = 'all';
        
        this.init();
    }

    init() {
        if (!this.projectsGrid) return;

        // Load projects data
        this.loadProjects();
        
        // Initialize filter buttons
        this.initFilters();
        
        // Initialize 3D hover effect
        this.init3DEffect();
        
        // Initialize lightbox
        this.initLightbox();
    }

    loadProjects() {
        // Project data (can be fetched from JSON file)
        this.projects = [
            {
                id: 1,
                title: 'Feedback and Billing System',
                category: 'cpp',
                image: 'assets/images/projects/billing-system.jpg',
                description: 'Comprehensive snack shop billing system with tax calculation, star ratings, and file storage',
                longDescription: 'A complete C++ application for snack shop management. Features include automatic bill generation, tax calculation (CGST/SGST), customer feedback with star ratings, and persistent file storage for transaction history.',
                technologies: ['C++', 'File I/O', 'OOP', 'STL'],
                features: [
                    'Automatic bill generation with unique IDs',
                    'Real-time tax calculation',
                    'Customer feedback system with ratings',
                    'File-based data persistence',
                    'Transaction history viewer'
                ],
                github: 'https://github.com/Sanjai-Gopal/Feedback-and-Billing-System',
                demo: null,
                date: '2025-12-15',
                featured: true
            },
            {
                id: 2,
                title: 'bis-smart-compliance',
                category: 'python',
                image: 'assets/images/projects/compliance.jpg',
                description: 'Smart compliance system built with Python for automated monitoring and reporting',
                longDescription: 'A Python-based compliance monitoring system that automates the checking of regulatory requirements. Includes report generation, data validation, and audit logging capabilities.',
                technologies: ['Python', 'Automation', 'Data Validation', 'Logging'],
                features: [
                    'Automated compliance checks',
                    'PDF report generation',
                    'Data validation framework',
                    'Audit trail logging',
                    'Email notifications'
                ],
                github: 'https://github.com/Sanjai-Gopal/bis-smart-compliance',
                demo: null,
                date: '2026-01-20',
                featured: true
            },
            {
                id: 3,
                title: 'Railway Reservation System',
                category: 'cpp',
                image: 'assets/images/projects/railway.jpg',
                description: 'Console-based railway ticket reservation system with seat management',
                longDescription: 'A comprehensive railway reservation system built in C++ that handles ticket booking, cancellation, seat availability tracking, and PNR status management.',
                technologies: ['C++', 'OOP', 'Data Structures', 'File Handling'],
                features: [
                    'Ticket booking with seat selection',
                    'Online cancellation with refund calculation',
                    'Real-time seat availability',
                    'PNR status tracking',
                    'Train schedule management'
                ],
                github: 'https://github.com/Sanjai-Gopal/railway-reservation-cpp',
                demo: null,
                date: '2025-11-10',
                featured: true
            },
            {
                id: 4,
                title: 'Advanced Portfolio',
                category: 'web',
                image: 'assets/images/projects/portfolio.jpg',
                description: 'Futuristic portfolio with 3D elements, AI chatbot, and private cloud storage',
                longDescription: 'A cutting-edge portfolio website featuring 3D backgrounds, AI-powered chatbot, voice navigation, and a secure private cloud for certificate storage. Built with modern web technologies.',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'Three.js', 'IndexedDB'],
                features: [
                    '3D interactive background',
                    'AI chatbot assistant',
                    'Voice navigation system',
                    'Private cloud storage',
                    'PWA support',
                    'Dark/light theme'
                ],
                github: 'https://github.com/Sanjai-Gopal/sanjai_portfolio',
                demo: 'https://sanjai-gopal.github.io/sanjai_portfolio/',
                date: '2026-03-04',
                featured: true
            },
            {
                id: 5,
                title: 'Machine Learning Basics',
                category: 'ai',
                image: 'assets/images/projects/ml-basics.jpg',
                description: 'Collection of ML algorithms implemented from scratch',
                longDescription: 'A learning project implementing fundamental machine learning algorithms from scratch using Python and NumPy. Includes linear regression, logistic regression, and k-nearest neighbors.',
                technologies: ['Python', 'NumPy', 'Scikit-learn', 'Jupyter'],
                features: [
                    'Linear regression from scratch',
                    'Logistic regression implementation',
                    'KNN classifier',
                    'Model evaluation metrics',
                    'Visualization with Matplotlib'
                ],
                github: 'https://github.com/Sanjai-Gopal/ml-basics',
                demo: null,
                date: '2026-02-15',
                featured: false
            }
        ];

        this.renderProjects();
    }

    initFilters() {
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                this.filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects
                this.activeFilter = btn.dataset.filter;
                this.renderProjects();
                
                // Animate filter change
                this.animateFilterChange();
            });
        });
    }

    renderProjects() {
        const filteredProjects = this.activeFilter === 'all' 
            ? this.projects 
            : this.projects.filter(p => p.category === this.activeFilter);

        this.projectsGrid.innerHTML = filteredProjects.map(project => `
            <div class="project-card" data-category="${project.category}" data-aos="flip-left" data-aos-delay="${project.id * 100}">
                <div class="project-3d">
                    <div class="project-front">
                        <div class="project-image">
                            <img src="${project.image}" alt="${project.title}" loading="lazy">
                            <div class="project-overlay">
                                <span class="project-category">${this.getCategoryName(project.category)}</span>
                                ${project.featured ? '<span class="project-featured"><i class="fas fa-star"></i> Featured</span>' : ''}
                            </div>
                        </div>
                        <div class="project-info">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <div class="project-tech">
                                ${project.technologies.slice(0, 3).map(tech => `<span>${tech}</span>`).join('')}
                                ${project.technologies.length > 3 ? `<span class="more">+${project.technologies.length - 3}</span>` : ''}
                            </div>
                        </div>
                    </div>
                    <div class="project-back">
                        <h4>Key Features</h4>
                        <ul>
                            ${project.features.slice(0, 4).map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
                        </ul>
                        <div class="project-links">
                            <a href="${project.github}" target="_blank" class="github-link">
                                <i class="fab fa-github"></i> Code
                            </a>
                            ${project.demo ? `
                                <a href="${project.demo}" target="_blank" class="live-link">
                                    <i class="fas fa-external-link-alt"></i> Demo
                                </a>
                            ` : ''}
                            <button class="project-details-btn" data-project-id="${project.id}">
                                <i class="fas fa-info-circle"></i> Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Re-attach event listeners for details buttons
        document.querySelectorAll('.project-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = parseInt(btn.dataset.projectId);
                this.showProjectDetails(projectId);
            });
        });
    }

    getCategoryName(category) {
        const categories = {
            'cpp': 'C++',
            'python': 'Python',
            'web': 'Web Dev',
            'ai': 'AI/ML'
        };
        return categories[category] || category.toUpperCase();
    }

    init3DEffect() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                const card3d = card.querySelector('.project-3d');
                if (card3d) {
                    card3d.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
                }
            });

            card.addEventListener('mouseleave', () => {
                const card3d = card.querySelector('.project-3d');
                if (card3d) {
                    card3d.style.transform = 'rotateY(0) rotateX(0)';
                }
            });
        });
    }

    initLightbox() {
        // Create lightbox container
        const lightbox = document.createElement('div');
        lightbox.className = 'project-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <div class="lightbox-body"></div>
            </div>
        `;
        document.body.appendChild(lightbox);

        this.lightbox = lightbox;
        this.lightboxClose = lightbox.querySelector('.lightbox-close');
        this.lightboxBody = lightbox.querySelector('.lightbox-body');

        this.lightboxClose.addEventListener('click', () => this.hideLightbox());
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) this.hideLightbox();
        });
    }

    showProjectDetails(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;

        this.lightboxBody.innerHTML = `
            <div class="project-details">
                <div class="details-header">
                    <h2>${project.title}</h2>
                    <span class="details-date">${new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                
                <div class="details-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                
                <div class="details-description">
                    <h3>Description</h3>
                    <p>${project.longDescription}</p>
                </div>
                
                <div class="details-features">
                    <h3>Features</h3>
                    <ul>
                        ${project.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="details-tech">
                    <h3>Technologies</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="details-links">
                    <a href="${project.github}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-github"></i> View on GitHub
                    </a>
                    ${project.demo ? `
                        <a href="${project.demo}" target="_blank" class="btn btn-outline">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;

        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    hideLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    animateFilterChange() {
        this.projectsGrid.style.opacity = '0';
        this.projectsGrid.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            this.projectsGrid.style.opacity = '1';
            this.projectsGrid.style.transform = 'scale(1)';
        }, 300);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.projectsGallery = new ProjectsGallery();
});
