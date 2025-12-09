// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {

    // 1. Hero Parallax Effect
    gsap.to("#hero", {
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        yPercent: 50,
        ease: "none"
    });

    // 2. Cinematic Section Titles (Reveal) - FASTER
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
        gsap.fromTo(heading,
            {
                y: 30, // Reduced distance
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6, // Much faster (was 1.5)
                ease: "power2.out", // Snappier ease
                scrollTrigger: {
                    trigger: heading,
                    start: "top 95%", // Triggers almost immediately when entering viewport
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // 3. Staggered Animations for Grid Items - FASTER
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        const children = grid.children;
        if (children.length > 0) {
            gsap.fromTo(children,
                {
                    y: 20,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5, // Faster
                    stagger: 0.05, // Very fast stagger (was 0.2)
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: grid,
                        start: "top 90%", // Triggers earlier
                    }
                }
            );
        }
    });

    // 4. Feature Sections (Zig-Zag) Parallax - FASTER
    const modeImages = document.querySelectorAll('#air img, #land img, #water img');
    modeImages.forEach(img => {
        gsap.fromTo(img,
            { scale: 0.95, opacity: 0 }, // Less scaling needed
            {
                scale: 1,
                opacity: 1,
                duration: 0.8, // Faster (was 1.2)
                ease: "power2.out",
                scrollTrigger: {
                    trigger: img,
                    start: "top 85%",
                }
            }
        );
    });

    console.log("GSAP Animations Initialized (Fast Mode)");
});
