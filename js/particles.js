/* ========================================
   PARTICLES.JS - Particle Network Animation
   ======================================== */

class ParticleNetwork {
    constructor() {
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.canvas = null;
        this.ctx = null;
        this.width = 0;
        this.height = 0;
        
        this.init();
    }

    init() {
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'particles-canvas';
        document.getElementById('particles-js').appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        
        this.setSize();
        this.createParticles();
        this.animate();
        this.addEventListeners();
    }

    setSize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    createParticles() {
        const particleCount = Math.floor((this.width * this.height) / 8000);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: `rgba(139, 92, 246, ${Math.random() * 0.5 + 0.2})`
            });
        }
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    update() {
        this.particles.forEach(p => {
            // Move particles
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < 0) p.x = this.width;
            if (p.x > this.width) p.x = 0;
            if (p.y < 0) p.y = this.height;
            if (p.y > this.height) p.y = 0;

            // Mouse interaction
            const dx = this.mouse.x - p.x;
            const dy = this.mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - distance) / 100;
                
                p.x -= Math.cos(angle) * force * 2;
                p.y -= Math.sin(angle) * force * 2;
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Draw connections
        this.ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
        this.ctx.lineWidth = 1;

        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                
                const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                
                if (distance < 100) {
                    const opacity = (100 - distance) / 100 * 0.3;
                    this.ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }

        // Draw particles
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();

            // Add glow effect
            this.ctx.shadowColor = '#8b5cf6';
            this.ctx.shadowBlur = 10;
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        });
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.setSize();
            this.particles = [];
            this.createParticles();
        });

        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        document.addEventListener('mouseleave', () => {
            this.mouse.x = 0;
            this.mouse.y = 0;
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('particles-js')) {
        new ParticleNetwork();
    }
});
