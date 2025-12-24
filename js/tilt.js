class TiltEffect {
    constructor(elements) {
        if (typeof elements === 'string') {
            this.elements = document.querySelectorAll(elements);
        } else if (elements instanceof NodeList || Array.isArray(elements)) {
            this.elements = elements;
        } else {
            this.elements = [elements];
        }

        this.init();
    }

    init() {
        this.elements.forEach(el => {
            // Mouse events
            el.addEventListener('mousemove', (e) => this.handleMouseMove(e, el));
            el.addEventListener('mouseleave', () => this.handleMouseLeave(el));
            el.addEventListener('mouseenter', () => this.handleMouseEnter(el));

            // Set initial transition
            el.style.transition = 'transform 0.1s ease-out';
        });
    }

    handleMouseEnter(el) {
        el.style.transition = 'transform 0.1s ease-out';
    }

    handleMouseMove(e, el) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Get custom tilt amount or use default
        const maxTilt = el.getAttribute('data-tilt-max') || 10;

        // Calculate rotation
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        // Apply transform with perspective
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        // Optional: Glare/Shine effect handling could go here
    }

    handleMouseLeave(el) {
        el.style.transition = 'transform 0.5s ease-out';
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Select elements that want the tilt effect
    const tiltElements = document.querySelectorAll('.tilt-card, #hero img, .mode-card');
    if (tiltElements.length > 0) {
        new TiltEffect(tiltElements);
    }
});
