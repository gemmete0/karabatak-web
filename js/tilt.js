class TiltEffect {
    constructor(cards) {
        this.cards = cards;
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
        });
    }

    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max tilt 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'transform 0.1s ease';

        // Dynamic Lighting Effect
        const shine = card.querySelector('.card-shine');
        if (shine) {
            const moveX = ((x / rect.width) * 100) - 50;
            const moveY = ((y / rect.height) * 100) - 50;
            shine.style.transform = `translate(${moveX}%, ${moveY}%) skewX(-25deg)`;
        }
    }

    handleMouseLeave(card) {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.5s ease';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('#hero .group, #vision .bg-zinc-900\\/50');
    if (cards.length > 0) {
        new TiltEffect(cards);
    }
});
