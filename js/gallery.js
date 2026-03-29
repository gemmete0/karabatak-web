// Lightbox Variables
let galleryImages = [];
let currentImageIndex = 0;
let lightbox = null;
let lightboxImg = null;

// Lightbox Functions
function openLightbox(index) {
    if (!lightbox) {
        lightbox = document.getElementById('lightbox');
        lightboxImg = document.getElementById('lightbox-img');
    }

    if (!lightbox || !lightboxImg) {
        console.error("Lightbox elements not found in DOM");
        return;
    }

    // Dynamically fetch images from the currently active project slider
    const activeSlider = document.querySelector('.project-content:not(.hidden) .gallery-slider');
    
    // Fallback to the first gallery-slider if project-content wrappers aren't used or found
    const sliderToUse = activeSlider || document.querySelector('.gallery-slider');
    
    if (sliderToUse) {
        const imgs = sliderToUse.querySelectorAll('.swiper-slide img');
        galleryImages = Array.from(imgs).map(img => img.src);
    }

    if (galleryImages.length === 0) return;
    
    currentImageIndex = index;
    lightboxImg.src = galleryImages[currentImageIndex];

    lightbox.classList.remove('hidden');
    setTimeout(() => {
        lightbox.classList.remove('opacity-0');
        lightboxImg.classList.remove('scale-95');
        lightboxImg.classList.add('scale-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if(!lightbox) return;
    lightbox.classList.add('opacity-0');
    lightboxImg.classList.remove('scale-100');
    lightboxImg.classList.add('scale-95');
    setTimeout(() => {
        lightbox.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
}

function nextImage() {
    if (galleryImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

function prevImage() {
    if (galleryImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    if(!lightboxImg) return;
    lightboxImg.classList.add('opacity-0');
    setTimeout(() => {
        lightboxImg.src = galleryImages[currentImageIndex];
        lightboxImg.onload = () => {
            lightboxImg.classList.remove('opacity-0');
        };
    }, 200);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Attempt bindings early just in case
    lightbox = document.getElementById('lightbox');
    lightboxImg = document.getElementById('lightbox-img');

    // Close lightbox on outside click
    document.body.addEventListener('click', (e) => {
        if (lightbox && e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox || lightbox.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    // Swiper Initialization
    // Find all gallery sliders and initialize them individually so they don't break when hidden
    const sliders = document.querySelectorAll('.gallery-slider');
    sliders.forEach(sliderEl => {
        new Swiper(sliderEl, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            initialSlide: 1,
            // Critical config to make Swiper recalculate when parent `.hidden` is removed!
            observer: true,
            observeParents: true,
            coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: sliderEl.querySelector('.swiper-pagination'), 
                clickable: true,
            },
            navigation: {
                nextEl: sliderEl.querySelector('.swiper-button-next') || sliderEl.parentElement.querySelector('.swiper-button-next'),
                prevEl: sliderEl.querySelector('.swiper-button-prev') || sliderEl.parentElement.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    effect: 'slide'
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    });
});

// Expose functions to global scope for HTML onclick attributes
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.nextImage = nextImage;
window.prevImage = prevImage;
