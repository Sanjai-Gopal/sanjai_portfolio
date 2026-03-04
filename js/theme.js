/* ========================================
   THEME.JS - Dark/Light Theme Switcher
   ======================================== */

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeStyle = document.getElementById('theme-style');
        this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        this.init();
    }

    init() {
        // Load saved theme
        this.loadTheme();
        
        // Add event listeners
        this.themeToggle?.addEventListener('click', () => this.toggleTheme());
        
        // Listen for system theme changes
        this.prefersDarkScheme.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });

        // Initialize theme-dependent features
        this.initThemeFeatures();
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            this.setTheme(this.prefersDarkScheme.matches ? 'dark' : 'light');
        }
    }

    setTheme(theme) {
        // Update body attribute
        document.body.setAttribute('data-theme', theme);
        
        // Update theme stylesheet
        if (this.themeStyle) {
            this.themeStyle.href = `css/themes/${theme}.css`;
        }
        
        // Update toggle icon
        if (this.themeToggle) {
            this.themeToggle.innerHTML = theme === 'dark' 
                ? '<i class="fas fa-moon"></i>' 
                : '<i class="fas fa-sun"></i>';
        }

        // Update meta theme-color
        document.querySelector('meta[name="theme-color"]')?.setAttribute(
            'content', 
            theme === 'dark' ? '#0f172a' : '#f8fafc'
        );

        // Save preference
        localStorage.setItem('theme', theme);
        
        // Dispatch event for other components
        window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
        
        // Update charts if they exist
        this.updateChartsForTheme(theme);
    }

    toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    initThemeFeatures() {
        // Add theme transition
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        // Initialize theme-aware components
        this.initCodeHighlighting();
        this.initChartColors();
    }

    updateChartsForTheme(theme) {
        // Update Chart.js charts if they exist
        if (window.Chart) {
            Chart.helpers.each(Chart.instances, (instance) => {
                if (instance.config.options) {
                    instance.config.options.plugins.legend.labels.color = 
                        theme === 'dark' ? '#f8fafc' : '#0f172a';
                }
                instance.update();
            });
        }

        // Update any canvas elements
        document.querySelectorAll('canvas').forEach(canvas => {
            // Trigger canvas redraw if needed
            if (canvas.chart) {
                canvas.chart.update();
            }
        });
    }

    initCodeHighlighting() {
        // Update code highlighting theme
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            if (window.hljs) {
                hljs.highlightElement(block);
            }
        });
    }

    initChartColors() {
        // Define theme colors for charts
        window.chartColors = {
            dark: {
                background: '#1e293b',
                text: '#f8fafc',
                grid: '#334155',
                primary: '#8b5cf6',
                secondary: '#3b82f6',
                accent: '#06b6d4'
            },
            light: {
                background: '#ffffff',
                text: '#0f172a',
                grid: '#e2e8f0',
                primary: '#8b5cf6',
                secondary: '#3b82f6',
                accent: '#06b6d4'
            }
        };
    }

    getCurrentTheme() {
        return document.body.getAttribute('data-theme') || 'dark';
    }

    getThemeColor(colorName) {
        const theme = this.getCurrentTheme();
        return window.chartColors?.[theme]?.[colorName] || '';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});
