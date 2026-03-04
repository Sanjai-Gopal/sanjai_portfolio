/* ========================================
   MAIN.JS - Core Portfolio Functionality
   Sanjai Gopal - AI Engineer & MLOps Specialist
   ======================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavigation();
    initSmoothScroll();
    initTypingAnimation();
    initCounters();
    initAOS();
    initThemeToggle();
    initMobileMenu();
    initScrollEffects();
    initFormValidation();
    initTooltips();
    initParallax();
    initBackToTop();
});

/* ----------------------------------------
   PRELOADER
   ---------------------------------------- */
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (!preloader) return;

    // Simulate loading time
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'visible';
        
        // Trigger initial animations
        document.body.classList.add('loaded');
    }, 2000);

    // Progress bar animation
    const progressBar = preloader.querySelector('.progress-bar');
    if (progressBar) {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width += 1;
                progressBar.style.width = width + '%';
            }
        }, 20);
    }
}

/* ----------------------------------------
   NAVIGATION
   ---------------------------------------- */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navbar) return;

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active link highlighting
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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

    // Mobile menu close on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-menu')?.classList.remove('active');
            document.querySelector('.hamburger')?.classList.remove('active');
        });
    });
}

/* ----------------------------------------
   SMOOTH SCROLL
   ---------------------------------------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });
}

/* ----------------------------------------
   TYPING ANIMATION
   ---------------------------------------- */
function initTypingAnimation() {
    const typedText = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
    
    if (!typedText || !cursor) return;

    const words = [
        'AI Engineer',
        'MLOps Enthusiast',
        'Python Developer',
        'C++ Programmer',
        'Problem Solver',
        'Tech Innovator'
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;

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
            isWaiting = true;
            setTimeout(() => {
                isDeleting = true;
                isWaiting = false;
            }, 2000);
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(type, isWaiting ? 100 : speed);
    }

    type();
}

/* ----------------------------------------
   COUNTER ANIMATION
   ---------------------------------------- */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const speed = 200;

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const count = parseInt(counter.innerText);
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(counter), 1);
        } else {
            counter.innerText = target;
        }
    };

    // Intersection Observer for counters
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

/* ----------------------------------------
   AOS INITIALIZATION
   ---------------------------------------- */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out',
            delay: 100,
            disable: 'mobile'
        });
    }
}

/* ----------------------------------------
   THEME TOGGLE
   ---------------------------------------- */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        let theme = 'dark';
        
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            theme = 'light';
        } else {
            document.body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            theme = 'dark';
        }

        localStorage.setItem('theme', theme);
    });
}

/* ----------------------------------------
   MOBILE MENU
   ---------------------------------------- */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

/* ----------------------------------------
   SCROLL EFFECTS
   ---------------------------------------- */
function initScrollEffects() {
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Parallax effect for sections
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        document.querySelectorAll('.parallax').forEach(el => {
            const speed = el.dataset.speed || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

/* ----------------------------------------
   FORM VALIDATION
   ---------------------------------------- */
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate
        let isValid = true;
        let errors = [];

        if (!data.name || data.name.length < 2) {
            isValid = false;
            errors.push('Name must be at least 2 characters');
            highlightField('name');
        }

        if (!data.email || !isValidEmail(data.email)) {
            isValid = false;
            errors.push('Please enter a valid email');
            highlightField('email');
        }

        if (!data.message || data.message.length < 10) {
            isValid = false;
            errors.push('Message must be at least 10 characters');
            highlightField('message');
        }

        if (isValid) {
            // Show success message
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
            
            // Here you would send to backend
            console.log('Form submitted:', data);
        } else {
            // Show errors
            showNotification(errors.join('<br>'), 'error');
        }
    });
}

/* ----------------------------------------
   EMAIL VALIDATION
   ---------------------------------------- */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/* ----------------------------------------
   HIGHLIGHT FIELD
   ---------------------------------------- */
function highlightField(fieldName) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if (field) {
        field.classList.add('error');
        setTimeout(() => field.classList.remove('error'), 3000);
    }
}

/* ----------------------------------------
   NOTIFICATION SYSTEM
   ---------------------------------------- */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);

    // Auto hide after 5 seconds
    const timeout = setTimeout(() => {
        hideNotification(notification);
    }, 5000);

    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        clearTimeout(timeout);
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
}

/* ----------------------------------------
   TOOLTIPS
   ---------------------------------------- */
function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = el.dataset.tooltip;
            
            document.body.appendChild(tooltip);
            
            const rect = el.getBoundingClientRect();
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            
            tooltip.classList.add('show');
            
            el.addEventListener('mouseleave', () => {
                tooltip.remove();
            }, { once: true });
        });
    });
}

/* ----------------------------------------
   PARALLAX
   ---------------------------------------- */
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.3;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

/* ----------------------------------------
   BACK TO TOP
   ---------------------------------------- */
function initBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ----------------------------------------
   CURSOR EFFECTS
   ---------------------------------------- */
function initCustomCursor() {
    const cursor = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursor || !cursorOutline) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform += ' scale(0.8)';
        cursorOutline.style.transform += ' scale(1.5)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', '');
        cursorOutline.style.transform = cursorOutline.style.transform.replace(' scale(1.5)', '');
    });

    // Hover effects
    document.querySelectorAll('a, button, .project-card, .skill-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('active');
        });
    });
}

// Initialize cursor only on non-touch devices
if (!('ontouchstart' in window)) {
    initCustomCursor();
}
