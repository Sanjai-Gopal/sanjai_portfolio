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
                    errors[field.name
