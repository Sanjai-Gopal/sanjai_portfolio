/* ========================================
   ADVANCED AI CHATBOT - Enhanced Version
   ======================================== */

class AdvancedChatbot {
    constructor() {
        this.container = document.getElementById('chatbotContainer');
        this.toggle = document.getElementById('chatbotToggle');
        this.close = document.getElementById('chatbotClose');
        this.messages = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendBtn = document.getElementById('chatbotSend');
        
        this.isOpen = false;
        this.context = [];
        this.typingTimeout = null;
        
        // Sanjai's complete profile
        this.profile = {
            name: "Sanjai Gopal",
            title: "Aspiring AI Engineer | MLOps Enthusiast",
            location: "Coimbatore, Tamil Nadu",
            education: "1st year AIDS student at SKCET",
            email: "sanjai.sparkmail@gmail.com",
            phone: "+91 9363265552",
            linkedin: "linkedin.com/in/sanjai2306",
            github: "github.com/Sanjai-Gopal",
            instagram: "@hey.sanjai_",
            
            skills: {
                languages: [
                    { name: "Python", level: 85, experience: "1 year" },
                    { name: "C++", level: 75, experience: "1 year" },
                    { name: "JavaScript", level: 60, experience: "6 months" }
                ],
                ai_ml: [
                    { name: "Machine Learning", level: 70, tools: ["Scikit-learn", "NumPy", "Pandas"] },
                    { name: "Deep Learning", level: 50, tools: ["TensorFlow", "Keras"] },
                    { name: "MLOps", level: 40, tools: ["Docker", "MLflow"] }
                ],
                tools: ["Git", "GitHub", "VS Code", "Linux", "Jupyter"]
            },
            
            projects: [
                {
                    name: "Feedback and Billing System",
                    tech: "C++",
                    description: "Snack shop billing system with tax calculation and file storage",
                    github: "github.com/Sanjai-Gopal/Feedback-and-Billing-System"
                },
                {
                    name: "bis-smart-compliance",
                    tech: "Python",
                    description: "Automated compliance monitoring system",
                    github: "github.com/Sanjai-Gopal/bis-smart-compliance"
                },
                {
                    name: "Railway Reservation System",
                    tech: "C++",
                    description: "Ticket reservation with seat management",
                    github: "github.com/Sanjai-Gopal/railway-reservation-cpp"
                },
                {
                    name: "Advanced Portfolio",
                    tech: "HTML/CSS/JS",
                    description: "This portfolio with 3D and AI features",
                    github: "github.com/Sanjai-Gopal/sanjai_portfolio"
                }
            ],
            
            achievements: [
                "Python for Beginners Certificate",
                "Git & GitHub Workshop",
                "College Coding Competition Finalist",
                "AI/ML Fundamentals Course"
            ],
            
            github_stats: {
                repos: 4,
                contributions: 89,
                followers: 0,
                following: 0
            }
        };
        
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
        
        // Add typing indicator CSS
        this.addTypingCSS();
    }
    
    addTypingCSS() {
        const style = document.createElement('style');
        style.textContent = `
            .typing-indicator {
                display: flex;
                gap: 5px;
                padding: 10px 15px;
                background: var(--bg-secondary);
                border-radius: 20px;
                width: fit-content;
            }
            
            .typing-indicator span {
                width: 8px;
                height: 8px;
                background: var(--primary-500);
                border-radius: 50%;
                animation: typingBounce 1.4s infinite ease-in-out;
            }
            
            .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
            .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
            
            @keyframes typingBounce {
                0%, 80%, 100% { transform: scale(0.6); opacity: 0.6; }
                40% { transform: scale(1); opacity: 1; }
            }
            
            .chat-suggestion {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 10px;
                padding: 10px;
            }
            
            .suggestion-chip {
                padding: 6px 12px;
                background: var(--bg-secondary);
                border: 1px solid var(--border-light);
                border-radius: 20px;
                font-size: 0.85rem;
                color: var(--text-secondary);
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .suggestion-chip:hover {
                background: var(--primary-500);
                color: white;
                border-color: var(--primary-500);
            }
        `;
        document.head.appendChild(style);
    }
    
    toggleChat() {
        this.isOpen ? this.closeChat() : this.openChat();
    }
    
    openChat() {
        this.container.classList.add('active');
        this.toggle.style.display = 'none';
        this.isOpen = true;
        setTimeout(() => this.input?.focus(), 300);
        
        // Show suggestions if no conversation
        if (this.messages.children.length <= 1) {
            this.showSuggestions();
        }
    }
    
    closeChat() {
        this.container.classList.remove('active');
        this.toggle.style.display = 'flex';
        this.isOpen = false;
    }
    
    showSuggestions() {
        const suggestions = [
            "What are your skills?",
            "Show me your projects",
            "Tell me about yourself",
            "Contact information",
            "GitHub stats"
        ];
        
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'chat-suggestion';
        suggestionsDiv.innerHTML = suggestions.map(s => 
            `<span class="suggestion-chip" onclick="window.chatbot.processSuggestion('${s}')">${s}</span>`
        ).join('');
        
        this.messages.appendChild(suggestionsDiv);
    }
    
    processSuggestion(text) {
        this.input.value = text;
        this.sendMessage();
    }
    
    async sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        this.input.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Get AI response with delay simulation
        setTimeout(async () => {
            const response = await this.getAIResponse(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'bot');
            
            // Save context
            this.context.push({ user: message, bot: response });
            this.saveContext();
        }, 1000 + Math.random() * 500);
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        // Format text with markdown-like syntax
        content.innerHTML = this.formatMessage(text);
        
        messageDiv.appendChild(content);
        this.messages.appendChild(messageDiv);
        
        // Scroll to bottom
        this.messages.scrollTop = this.messages.scrollHeight;
    }
    
    formatMessage(text) {
        // Bold
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Italic
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Code
        text = text.replace(/`(.*?)`/g, '<code>$1</code>');
        
        // Line breaks
        text = text.replace(/\n/g, '<br>');
        
        // Lists
        text = text.replace(/• (.*?)(?=<br>|$)/g, '• $1<br>');
        
        return text;
    }
    
    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'message bot typing-indicator-container';
        indicator.id = 'typingIndicator';
        
        const content = document.createElement('div');
        content.className = 'typing-indicator';
        content.innerHTML = '<span></span><span></span><span></span>';
        
        indicator.appendChild(content);
        this.messages.appendChild(indicator);
        this.messages.scrollTop = this.messages.scrollHeight;
    }
    
    hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) indicator.remove();
    }
    
    async getAIResponse(message) {
        message = message.toLowerCase().trim();
        
        // Greetings
        if (message.match(/^(hi|hello|hey|greetings|sup|hola)$/)) {
            return `Hello! 👋 I'm Sanjai's AI assistant. Ask me anything about his **skills**, **projects**, **education**, or **contact information**. You can also ask about his GitHub stats or achievements!`;
        }
        
        // About Sanjai
        if (message.includes('about') || message.includes('who are you') || message.includes('tell me about yourself')) {
            return `**${this.profile.name}** is an **${this.profile.title}** from **${this.profile.location}**. He's currently a **${this.profile.education}** and passionate about building intelligent systems with AI and machine learning.`;
        }
        
        // Skills
        if (message.includes('skill') || message.includes('know') || message.includes('technologies') || message.includes('stack')) {
            let response = `**Sanjai's Skills:**\n\n`;
            
            response += `**💻 Programming Languages:**\n`;
            this.profile.skills.languages.forEach(s => {
                response += `• ${s.name} (${s.level}% - ${s.experience})\n`;
            });
            
            response += `\n**🧠 AI/ML:**\n`;
            this.profile.skills.ai_ml.forEach(s => {
                response += `• ${s.name} (${s.level}%) - Tools: ${s.tools.join(', ')}\n`;
            });
            
            response += `\n**🔧 Tools:** ${this.profile.skills.tools.join(', ')}`;
            
            return response;
        }
        
        // Projects
        if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
            let response = `**Sanjai's Projects (${this.profile.projects.length} total):**\n\n`;
            
            this.profile.projects.forEach((p, i) => {
                response += `**${i+1}. ${p.name}** (${p.tech})\n`;
                response += `   📝 ${p.description}\n`;
                response += `   🔗 ${p.github}\n\n`;
            });
            
            response += `All projects are open source on his GitHub!`;
            return response;
        }
        
        // Education
        if (message.includes('education') || message.includes('study') || message.includes('college') || message.includes('university')) {
            return `**Education:**\n\n🎓 ${this.profile.education}\n📍 ${this.profile.location}\n\nHe's passionate about AI, machine learning, and building real-world applications.`;
        }
        
        // Contact
        if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone') || message.includes('call')) {
            return `**Contact Information:**\n\n📧 Email: ${this.profile.email}\n📞 Phone: ${this.profile.phone}\n💼 LinkedIn: ${this.profile.linkedin}\n🐙 GitHub: ${this.profile.github}\n📸 Instagram: ${this.profile.instagram}`;
        }
        
        // GitHub stats
        if (message.includes('github') || message.includes('git') || message.includes('repo') || message.includes('contribution')) {
            return `**GitHub Statistics:**\n\n📊 **Repositories:** ${this.profile.github_stats.repos}\n📈 **Contributions (last year):** ${this.profile.github_stats.contributions}\n👥 **Followers:** ${this.profile.github_stats.followers}\n👤 **Following:** ${this.profile.github_stats.following}\n\n🔗 https://github.com/Sanjai-Gopal`;
        }
        
        // Achievements
        if (message.includes('achievement') || message.includes('award') || message.includes('certificate') || message.includes('certification')) {
            let response = `**Achievements & Certificates:**\n\n`;
            this.profile.achievements.forEach((a, i) => {
                response += `🏆 ${a}\n`;
            });
            response += `\nYou can view his certificates in the **Private Cloud** section!`;
            return response;
        }
        
        // Location
        if (message.includes('location') || message.includes('where') || message.includes('coimbatore') || message.includes('tamil nadu')) {
            return `📍 **Location:** ${this.profile.location}\n\nCoimbatore is a beautiful city known as the "Manchester of South India" with a growing tech scene!`;
        }
        
        // Resume
        if (message.includes('resume') || message.includes('cv')) {
            return `📄 **Resume Download:**\n\nYou can download Sanjai's resume from the **About section** by clicking the "Download Resume" button, or directly from this link:\n\nhttps://sanjai-gopal.github.io/sanjai_portfolio/assets/docs/Sanjai_Resume_2026.pdf`;
        }
        
        // Cloud
        if (message.includes('cloud') || message.includes('private')) {
            return `☁️ **Private Cloud:**\n\nSanjai's private cloud stores his certificates and important files. You can access it by clicking the **cloud icon** in the navigation bar.\n\nDefault passcode: **1234** (change it in production!)`;
        }
        
        // Help
        if (message.includes('help') || message.includes('what can you do') || message.includes('commands')) {
            return `**I can help you with:**\n\n• **Skills** - Ask about programming languages, AI/ML, tools\n• **Projects** - List all projects with details\n• **Education** - Academic background\n• **Contact** - Email, phone, social media\n• **GitHub** - Stats and repositories\n• **Achievements** - Certificates and awards\n• **Resume** - Download link\n• **Cloud** - Private cloud info\n\nTry asking: "What are your skills?" or "Show me projects"`;
        }
        
        // Default response with suggestions
        return `I'm not sure about that. Try asking about:\n\n• Skills\n• Projects\n• Education\n• Contact\n• GitHub\n• Achievements\n• Resume\n\nOr type **"help"** to see all options.`;
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
        this.addMessage("Hi! I'm Sanjai's AI assistant. How can I help you today?", 'bot');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.chatbot = new AdvancedChatbot();
});
