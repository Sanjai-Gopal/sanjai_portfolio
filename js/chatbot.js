/* ========================================
   CHATBOT.JS - AI Assistant
   ======================================== */

class AIChatbot {
    constructor() {
        this.container = document.getElementById('chatbotContainer');
        this.toggle = document.getElementById('chatbotToggle');
        this.close = document.getElementById('chatbotClose');
        this.messages = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendBtn = document.getElementById('chatbotSend');
        
        this.isOpen = false;
        this.context = [];
        
        this.init();
    }

    init() {
        if (!this.container) return;

        // Event listeners
        this.toggle?.addEventListener('click', () => this.toggleChat());
        this.close?.addEventListener('click', () => this.closeChat());
        this.sendBtn?.addEventListener('click', () => this.sendMessage());
        this.input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Load conversation history
        this.loadContext();
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.container.classList.add('active');
        this.toggle.style.display = 'none';
        this.isOpen = true;
        
        // Focus input
        setTimeout(() => this.input?.focus(), 300);
    }

    closeChat() {
        this.container.classList.remove('active');
        this.toggle.style.display = 'flex';
        this.isOpen = false;
    }

    async sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        this.input.value = '';

        // Show typing indicator
        this.showTyping();

        // Get AI response
        const response = await this.getAIResponse(message);

        // Remove typing indicator
        this.hideTyping();

        // Add AI response
        this.addMessage(response, 'bot');

        // Save to context
        this.context.push({ user: message, bot: response });
        this.saveContext();
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.textContent = text;
        
        messageDiv.appendChild(content);
        this.messages.appendChild(messageDiv);
        
        // Scroll to bottom
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing';
        typingDiv.id = 'typing-indicator';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = '<span>.</span><span>.</span><span>.</span>';
        
        typingDiv.appendChild(content);
        this.messages.appendChild(typingDiv);
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    hideTyping() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }

    async getAIResponse(message) {
        message = message.toLowerCase();

        // Personal information
        const personalInfo = {
            name: 'Sanjai Gopal',
            location: 'Coimbatore, Tamil Nadu',
            education: '1st year AIDS student at SKCET',
            email: 'sanjai.sparkmail@gmail.com',
            phone: '+91 9363265552',
            linkedin: 'linkedin.com/in/sanjai2306',
            github: 'github.com/Sanjai-Gopal',
            instagram: '@hey.sanjai_'
        };

        // Skills
        const skills = {
            languages: ['Python (85%)', 'C++ (75%)', 'JavaScript (60%)'],
            ai_ml: ['Machine Learning (70%)', 'Deep Learning (50%)', 'MLOps (40%)'],
            tools: ['Git/GitHub (80%)', 'VS Code (65%)', 'Linux (55%)']
        };

        // Projects
        const projects = {
            billing: 'Feedback and Billing System - C++ project for snack shop billing with tax calculation',
            compliance: 'bis-smart-compliance - Python project for smart compliance monitoring',
            railway: 'Railway Reservation System - C++ railway ticket booking system',
            portfolio: 'Advanced Portfolio - Current portfolio with 3D elements and AI chatbot'
        };

        // Check for greetings
        if (message.match(/hello|hi|hey|greetings/)) {
            return `Hello! I'm Sanjai's AI assistant. How can I help you today? You can ask me about his skills, projects, education, or contact information.`;
        }

        // Check for name
        if (message.includes('name') || message.includes('who are you')) {
            return `I'm an AI assistant for Sanjai Gopal. He's an aspiring AI Engineer and MLOps enthusiast from Coimbatore.`;
        }

        // Check for skills
        if (message.includes('skill') || message.includes('know') || message.includes('technologies')) {
            return `Sanjai's skills include:\n\n💻 Languages: ${skills.languages.join(', ')}\n🧠 AI/ML: ${skills.ai_ml.join(', ')}\n🔧 Tools: ${skills.tools.join(', ')}`;
        }

        // Check for projects
        if (message.includes('project') || message.includes('work')) {
            return `Here are Sanjai's main projects:\n\n💰 ${projects.billing}\n🔒 ${projects.compliance}\n🚂 ${projects.railway}\n🌟 ${projects.portfolio}\n\nCheck them out on his GitHub!`;
        }

        // Check for education
        if (message.includes('study') || message.includes('education') || message.includes('college')) {
            return `Sanjai is currently in his 1st year of Artificial Intelligence and Data Science at SKCET, Coimbatore. He's passionate about AI and building intelligent systems!`;
        }

        // Check for contact
        if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone')) {
            return `You can reach Sanjai through:\n📧 Email: ${personalInfo.email}\n📞 Phone: ${personalInfo.phone}\n💼 LinkedIn: ${personalInfo.linkedin}\n🐙 GitHub: ${personalInfo.github}\n📸 Instagram: ${personalInfo.instagram}`;
        }

        // Check for location
        if (message.includes('location') || message.includes('where') || message.includes('coimbatore')) {
            return `Sanjai is based in Coimbatore, Tamil Nadu. It's a beautiful city known as the Manchester of South India!`;
        }

        // Check for GitHub
        if (message.includes('github') || message.includes('code')) {
            return `You can find all of Sanjai's code on GitHub: ${personalInfo.github}. He has 4 public repositories with 89+ contributions!`;
        }

        // Check for resume/CV
        if (message.includes('resume') || message.includes('cv')) {
            return `You can download Sanjai's resume from the website. Just click the "Download Resume" button in the About section!`;
        }

        // Default response
        return `I'm not sure about that. You can ask me about Sanjai's skills, projects, education, contact information, or GitHub. What would you like to know?`;
    }

    saveContext() {
        localStorage.setItem('chatbotContext', JSON.stringify(this.context.slice(-10)));
    }

    loadContext() {
        const saved = localStorage.getItem('chatbotContext');
        if (saved) {
            this.context = JSON.parse(saved);
        }
    }

    clearContext() {
        this.context = [];
        localStorage.removeItem('chatbotContext');
        this.messages.innerHTML = '';
        this.addMessage("Hi! I'm Sanjai's AI assistant. Ask me anything about his skills, projects, or experience!", 'bot');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.chatbot = new AIChatbot();
});
