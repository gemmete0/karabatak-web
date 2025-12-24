// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {

    // 1. Hero Parallax Effect (Background & Cards)
    gsap.to("#particles-canvas", {
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        yPercent: 50,
        ease: "none"
    });

    // Parallax for Hero Cards (Staggered Movement)
    const heroCards = document.querySelectorAll('#hero .tilt-card');
    if (heroCards.length > 0) {
        gsap.to(heroCards[0], { // Air
            scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 },
            y: -50, ease: "none"
        });
        gsap.to(heroCards[1], { // Land (Middle - Slower)
            scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 },
            y: -20, ease: "none"
        });
        gsap.to(heroCards[2], { // Water (Last - Faster)
            scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 },
            y: -80, ease: "none"
        });
    }


    // 2. Cinematic Section Titles (Reveal) - SOFTER & ELEGANT
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
        gsap.fromTo(heading,
            {
                y: 50,
                opacity: 0,
                filter: "blur(10px)" // Add blur for cinematic enter
            },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power4.out", // Luxurious ease
                scrollTrigger: {
                    trigger: heading,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // 3. Staggered Animations for Grid Items
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
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: grid,
                        start: "top 85%",
                    }
                }
            );
        }
    });

    // 4. Feature Sections (Zig-Zag) Parallax
    const modeImages = document.querySelectorAll('#air img, #land img, #water img');
    modeImages.forEach(img => {
        gsap.fromTo(img,
            { scale: 0.9, opacity: 0, rotationY: 10 },
            {
                scale: 1,
                opacity: 1,
                rotationY: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: img,
                    start: "top 80%",
                }
            }
        );
    });

    // 5. Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, {
                x: x * 0.3, // Pull factor
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });

    // 6. Blueprint / X-Ray Toggle Logic
    const blueprintToggle = document.getElementById('air-blueprint-toggle');
    const airContainer = document.getElementById('air-image-container');

    if (blueprintToggle && airContainer) {
        blueprintToggle.addEventListener('click', () => {
            const isBlueprint = airContainer.classList.toggle('blueprint-mode');

            // Sound Effect Placeholder (future)
            // playTechSound();

            if (isBlueprint) {
                gsap.to(blueprintToggle, { borderColor: "#22d3ee", color: "#22d3ee" }); // Cyan
                // Flash effect
                gsap.fromTo(airContainer, { filter: "brightness(2)" }, { filter: "brightness(1)", duration: 0.2 });
            } else {
                gsap.to(blueprintToggle, { borderColor: "rgba(255,255,255,0.1)", color: "white" });
            }
        });
    }

    console.log("GSAP Animations Initialized (Premium Mode)");
});
