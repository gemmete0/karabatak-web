// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {

    // 1. Hero Parallax Effect
    // Moves the hero content and background at different speeds
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

    // 2. Cinematic Section Titles (Reveal)
    // Animate headings with a premium reveal effect
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
        gsap.fromTo(heading,
            {
                y: 50,
                opacity: 0,
                skewY: 7
            },
            {
                y: 0,
                opacity: 1,
                skewY: 0,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%", // Animation starts when top of element hits 85% of viewport
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // 3. Staggered Animations for Grid Items (Cards, Icons)
    // Animate items in a grid one by one
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        const children = grid.children;
        if (children.length > 0) {
            gsap.fromTo(children,
                {
                    y: 30,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2, // 0.2s delay between each item
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: grid,
                        start: "top 80%",
                    }
                }
            );
        }
    });

    // 4. Feature Sections (Zig-Zag) Parallax
    // Add subtle movement to images in the Air/Land/Water sections
    const modeImages = document.querySelectorAll('#air img, #land img, #water img');
    modeImages.forEach(img => {
        gsap.fromTo(img,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: img,
                    start: "top 75%",
                }
            }
        );
    });

    // Log for debugging
    console.log("GSAP Animations Initialized");
});
