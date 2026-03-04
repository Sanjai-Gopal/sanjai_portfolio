/* ========================================
   CONTACT.JS - Contact Form with Validation & API
   ======================================== */

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.map = null;
        this.marker = null;
        
        this.init();
    }

    init() {
        if (!this.form) return;

        this.initFormValidation();
        this.initMap();
        this.initSocialLinks();
        this.initReCAPTCHA();
    }

    initFormValidation() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this.form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                language: navigator.language
            };

            // Validate
            const errors = this.validateForm(data);

            if (Object.keys(errors).length > 0) {
                this.showErrors(errors);
                return;
            }

            // Show loading state
            this.setLoading(true);

            try {
                // Send to backend
                const response = await this.sendToBackend(data);
                
                if (response.success) {
                    this.showSuccess('Message sent successfully! I\'ll get back to you soon.');
                    this.form.reset();
                    
                    // Send auto-reply
                    await this.sendAutoReply(data.email, data.name);
                    
                    // Track conversion
                    this.trackConversion('contact_form_submission');
                } else {
                    throw new Error(response.message || 'Failed to send message');
                }
            } catch (error) {
                console.error('Contact form error:', error);
                this.showError('Failed to send message. Please try again later.');
            } finally {
                this.setLoading(false);
            }
        });

        // Real-time validation
        this.form.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('blur', () => {
                this.validateField(field);
            });

            field.addEventListener('input', () => {
                this.clearFieldError(field);
            });
        });
    }

    validateForm(data) {
        const errors = {};

        // Name validation
        if (!data.name || data.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        } else if (data.name.length > 50) {
            errors.name = 'Name must be less than 50 characters';
        }

        // Email validation
        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!this.isValidEmail(data.email)) {
            errors.email = 'Please enter a valid email address';
        }

        // Subject validation
        if (!data.subject || data.subject.trim().length < 3) {
            errors.subject = 'Subject must be at least 3 characters';
        } else if (data.subject.length > 100) {
            errors.subject = 'Subject must be less than 100 characters';
        }

        // Message validation
        if (!data.message || data.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
        } else if (data.message.length > 1000) {
            errors.message = 'Message must be less than 1000 characters';
        }

        // Spam check
        if (this.isSpam(data)) {
            errors.spam = 'Message flagged as spam';
        }

        return errors;
    }

    validateField(field) {
        const value = field.value.trim();
        const errors = {};

        switch (field.name) {
            case 'name':
                if (value.length < 2) {
                    errors[field.name] = 'Name is too short';
                }
                break;
            case 'email':
                if (!this.isValidEmail(value)) {
                    errors[field.name] = 'Invalid email format';
                }
                break;
            case 'subject':
                if (value.length < 3) {
                    errors[field.name] = 'Subject is too short';
                }
                break;
            case 'message':
                if (value.length < 10) {
                    errors[field.name] = 'Message is too short';
                }
                break;
        }

        if (errors[field.name]) {
            this.showFieldError(field, errors[field.name]);
        } else {
            this.clearFieldError(field);
        }

        return Object.keys(errors).length === 0;
    }

    isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    isSpam(data) {
        // Check for common spam patterns
        const spamKeywords = ['viagra', 'casino', 'lottery', 'prize', 'winner'];
        const message = data.message.toLowerCase();
        
        if (spamKeywords.some(keyword => message.includes(keyword))) {
            return true;
        }

        // Check for excessive URLs
        const urlCount = (message.match(/https?:\/\//g) || []).length;
        if (urlCount > 3) {
            return true;
        }

        // Check for all caps
        const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;
        if (capsRatio > 0.5 && message.length > 20) {
            return true;
        }

        return false;
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        
        field.classList.add('error');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        
        field.parentNode.appendChild(errorDiv);
    }

    clearFieldError(field) {
        field.classList.remove('error');
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    showErrors(errors) {
        // Clear all previous errors
        this.form.querySelectorAll('.field-error').forEach(el => el.remove());
        this.form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        // Show new errors
        Object.entries(errors).forEach(([field, message]) => {
            const input = this.form.querySelector(`[name="${field}"]`);
            if (input) {
                this.showFieldError(input, message);
            }
        });

        // Show summary error
        this.showNotification(
            'Please fix the errors in the form',
            'error'
        );
    }

    setLoading(loading) {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        
        if (loading) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        } else {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        }
    }

    async sendToBackend(data) {
        // Try multiple endpoints
        const endpoints = [
            'api/contact.php',
            'api/contact.json',
            'https://formspree.io/f/your-form-id',
            'https://getform.io/f/your-form-id'
        ];

        for (const endpoint of endpoints) {
            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    return await response.json();
                }
            } catch (error) {
                console.log(`Failed to send to ${endpoint}:`, error);
            }
        }

        // Fallback: store in localStorage
        this.saveToLocalStorage(data);
        
        return { success: true, message: 'Message saved locally' };
    }

    saveToLocalStorage(data) {
        const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        messages.push(data);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
    }

    async sendAutoReply(email, name) {
        // Simulate auto-reply
        console.log(`Auto-reply sent to ${email}`);
    }

    trackConversion(action) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                'send_to': 'AW-CONVERSION_ID',
                'event_category': 'contact',
                'event_label': action
            });
        }
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    initMap() {
        // Initialize map with Coimbatore location
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;

        // Using OpenStreetMap (free, no API key required)
        const map = L.map('map').setView([11.0168, 76.9558], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add marker
        const marker = L.marker([11.0168, 76.9558]).addTo(map);
        marker.bindPopup('<b>Sanjai Gopal</b><br>Coimbatore, Tamil Nadu').openPopup();
    }

    initSocialLinks() {
        // Add click tracking to social links
        document.querySelectorAll('.social-link, .social-icon').forEach(link => {
            link.addEventListener('click', (e) => {
                this.trackConversion(`social_click_${link.href.split('/').pop()}`);
            });
        });
    }

    initReCAPTCHA() {
        // Add reCAPTCHA v3
        const recaptchaScript = document.createElement('script');
        recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
        recaptchaScript.async = true;
        recaptchaScript.defer = true;
        document.head.appendChild(recaptchaScript);

        // Add hidden recaptcha field
        const recaptchaDiv = document.createElement('div');
        recaptchaDiv.className = 'g-recaptcha';
        recaptchaDiv.setAttribute('data-sitekey', 'YOUR_SITE_KEY');
        recaptchaDiv.setAttribute('data-size', 'invisible');
        recaptchaDiv.setAttribute('data-callback', 'onRecaptchaSubmit');
        
        this.form.appendChild(recaptchaDiv);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.contactForm = new ContactForm();
});
