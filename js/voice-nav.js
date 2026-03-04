/* ========================================
   VOICE-NAV.JS - Voice Navigation System
   ======================================== */

class VoiceNavigation {
    constructor() {
        this.recognition = null;
        this.isListening = false;
        this.modal = document.getElementById('voiceModal');
        this.toggle = document.getElementById('voiceToggle');
        this.close = document.getElementById('voiceClose');
        this.status = document.querySelector('.voice-status');
        this.commandDisplay = document.getElementById('voiceCommand');
        
        this.commands = {
            'go to home': '#home',
            'go to about': '#about',
            'go to skills': '#skills',
            'go to projects': '#projects',
            'go to achievements': '#achievements',
            'go to blog': '#blog',
            'go to contact': '#contact',
            'open cloud': 'private-cloud/',
            'download resume': 'assets/docs/Sanjai_Resume_2026.pdf',
            'scroll up': 'up',
            'scroll down': 'down',
            'back to top': 'top',
            'read more': 'read',
            'contact me': '#contact',
            'view projects': '#projects',
            'show skills': '#skills',
            'tell me about yourself': 'about',
            'what can you do': 'help',
            'stop listening': 'stop'
        };

        this.init();
    }

    init() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.warn('Voice recognition not supported');
            this.toggle.style.display = 'none';
            return;
        }

        // Initialize speech recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';

        // Set up event listeners
        this.recognition.onstart = () => this.onStart();
        this.recognition.onend = () => this.onEnd();
        this.recognition.onresult = (e) => this.onResult(e);
        this.recognition.onerror = (e) => this.onError(e);

        // UI event listeners
        this.toggle?.addEventListener('click', () => this.toggleListening());
        this.close?.addEventListener('click', () => this.hideModal());

        // Keyboard shortcut (Ctrl+Shift+V)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'V') {
                this.toggleListening();
            }
        });

        // Add help overlay
        this.createHelpOverlay();
    }

    toggleListening() {
        if (this.isListening) {
            this.stopListening();
        } else {
            this.startListening();
        }
    }

    startListening() {
        try {
            this.recognition.start();
            this.isListening = true;
            this.showModal();
            this.updateStatus('Listening...', 'active');
            this.toggle.classList.add('listening');
        } catch (error) {
            console.error('Failed to start listening:', error);
        }
    }

    stopListening() {
        try {
            this.recognition.stop();
            this.isListening = false;
            this.hideModal();
            this.updateStatus('Voice commands stopped', 'inactive');
            this.toggle.classList.remove('listening');
        } catch (error) {
            console.error('Failed to stop listening:', error);
        }
    }

    onStart() {
        console.log('Voice recognition started');
        this.updateStatus('Listening...', 'active');
    }

    onEnd() {
        console.log('Voice recognition ended');
        this.isListening = false;
        this.toggle.classList.remove('listening');
        
        // Auto restart if modal is still open
        if (this.modal.classList.contains('active')) {
            setTimeout(() => this.startListening(), 100);
        }
    }

    onResult(event) {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
                this.processCommand(transcript.toLowerCase().trim());
            } else {
                interimTranscript += transcript;
            }
        }

        if (interimTranscript) {
            this.commandDisplay.textContent = `"${interimTranscript}"`;
        }
    }

    onError(event) {
        console.error('Voice recognition error:', event.error);
        this.updateStatus(`Error: ${event.error}`, 'error');
        
        if (event.error === 'no-speech') {
            this.updateStatus('No speech detected. Try again.', 'error');
        }
    }

    processCommand(command) {
        this.commandDisplay.textContent = `"${command}"`;
        this.updateStatus('Processing...', 'processing');

        // Check for exact matches
        for (const [phrase, action] of Object.entries(this.commands)) {
            if (command.includes(phrase)) {
                this.executeCommand(phrase, action);
                return;
            }
        }

        // Check for partial matches
        if (command.includes('home') || command.includes('main')) {
            this.executeCommand('go to home', '#home');
        } else if (command.includes('about')) {
            this.executeCommand('go to about', '#about');
        } else if (command.includes('skill')) {
            this.executeCommand('go to skills', '#skills');
        } else if (command.includes('project')) {
            this.executeCommand('go to projects', '#projects');
        } else if (command.includes('achievement') || command.includes('award')) {
            this.executeCommand('go to achievements', '#achievements');
        } else if (command.includes('blog') || command.includes('post')) {
            this.executeCommand('go to blog', '#blog');
        } else if (command.includes('contact') || command.includes('reach')) {
            this.executeCommand('go to contact', '#contact');
        } else if (command.includes('cloud') || command.includes('private')) {
            this.executeCommand('open cloud', 'private-cloud/');
        } else if (command.includes('resume') || command.includes('cv')) {
            this.executeCommand('download resume', 'assets/docs/Sanjai_Resume_2026.pdf');
        } else if (command.includes('scroll up')) {
            this.executeCommand('scroll up', 'up');
        } else if (command.includes('scroll down')) {
            this.executeCommand('scroll down', 'down');
        } else if (command.includes('top') || command.includes('beginning')) {
            this.executeCommand('back to top', 'top');
        } else if (command.includes('help') || command.includes('what can you do')) {
            this.showHelp();
        } else {
            this.updateStatus('Command not recognized. Try "help"', 'error');
        }
    }

    executeCommand(phrase, action) {
        this.updateStatus(`Executing: ${phrase}`, 'success');
        
        setTimeout(() => {
            if (action === 'up') {
                window.scrollBy({ top: -200, behavior: 'smooth' });
            } else if (action === 'down') {
                window.scrollBy({ top: 200, behavior: 'smooth' });
            } else if (action === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (action === 'read') {
                this.readCurrentSection();
            } else if (action === 'about') {
                this.speakAbout();
            } else if (action === 'help') {
                this.showHelp();
            } else if (action === 'stop') {
                this.stopListening();
            } else if (action.startsWith('#')) {
                // Scroll to section
                document.querySelector(action)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Open link
                window.open(action, '_blank');
            }
            
            // Provide audio feedback
            this.speak(`Navigating to ${phrase}`);
        }, 500);
    }

    updateStatus(text, type) {
        this.status.textContent = text;
        this.status.className = `voice-status ${type}`;
    }

    showModal() {
        this.modal.classList.add('active');
    }

    hideModal() {
        this.modal.classList.remove('active');
    }

    speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1;
            utterance.voice = speechSynthesis.getVoices().find(v => v.lang === 'en-US');
            window.speechSynthesis.speak(utterance);
        }
    }

    readCurrentSection() {
        const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'blog', 'contact'];
        let currentSection = '';

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element && this.isElementInViewport(element)) {
                currentSection = section;
                break;
            }
        }

        if (currentSection) {
            const text = document.querySelector(`#${currentSection} p`)?.textContent || '';
            this.speak(`This is the ${currentSection} section. ${text}`);
        }
    }

    speakAbout() {
        const about = `Sanjai Gopal is an aspiring AI Engineer and MLOps enthusiast from Coimbatore. 
                       He's currently in his first year of Artificial Intelligence and Data Science at SKCET. 
                       He knows Python, C++, and JavaScript, and has completed 4 projects.`;
        this.speak(about);
    }

    showHelp() {
        const commands = Object.keys(this.commands).slice(0, 10).join(', ');
        this.speak(`You can say commands like: ${commands}`);
        
        // Show in modal
        const helpList = document.createElement('div');
        helpList.className = 'voice-help-list';
        helpList.innerHTML = `
            <h4>Available Commands:</h4>
            <ul>
                ${Object.keys(this.commands).map(cmd => `<li>${cmd}</li>`).join('')}
            </ul>
        `;
        
        this.modal.querySelector('.voice-commands-list').innerHTML = helpList.outerHTML;
    }

    createHelpOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'voice-help-overlay';
        overlay.innerHTML = `
            <div class="voice-help-content">
                <h3>Voice Navigation</h3>
                <p>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> to start/stop voice commands</p>
                <p>Try saying: "Go to projects", "Show skills", "Contact me"</p>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.voiceNav = new VoiceNavigation();
});
