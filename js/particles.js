class ParticleNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.hoverStats = { x: 0, y: 0 };

        // Configuration
        this.config = {
            particleColor: 'rgba(255, 255, 255, 0.5)',
            lineColor: 'rgba(255, 255, 255, 0.15)',
            particleAmount: 60, // Reduced for performance
            defaultSpeed: 0.5,
            variantSpeed: 1,
            defaultRadius: 2,
            variantRadius: 2,
            linkRadius: 150,
        };

        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.hoverStats.x = e.clientX - rect.left;
            this.hoverStats.y = e.clientY - rect.top;
        });
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    createParticles() {
        this.particles = [];
        const quantity = (this.canvas.width * this.canvas.height) / 15000;

        for (let i = 0; i < quantity; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                speedX: (Math.random() - 0.5) * this.config.variantSpeed,
                speedY: (Math.random() - 0.5) * this.config.variantSpeed,
                radius: Math.random() * this.config.variantRadius + this.config.defaultRadius,
            });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i];

            // Move
            p.x += p.speedX;
            p.y += p.speedY;

            // Bounce
            if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;

            // Draw Dots
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = this.config.particleColor;
            this.ctx.fill();

            // Draw Lines
            for (let j = i + 1; j < this.particles.length; j++) {
                let p2 = this.particles[j];
                let distance = Math.hypot(p.x - p2.x, p.y - p2.y);

                if (distance < this.config.linkRadius) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / this.config.linkRadius)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }

            // Mouse Interaction
            let mouseDist = Math.hypot(p.x - this.hoverStats.x, p.y - this.hoverStats.y);
            if (mouseDist < 150) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - mouseDist / 150)})`; // Blue tint near mouse
                this.ctx.lineWidth = 0.8;
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(this.hoverStats.x, this.hoverStats.y);
                this.ctx.stroke();
            }
        }
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('particles-canvas')) {
        new ParticleNetwork('particles-canvas');
    }
});
