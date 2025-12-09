function changeLanguage(lang) {
    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if the translation contains HTML tags
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update active state of buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        // Remove active classes from all buttons
        btn.classList.remove('text-white', 'font-bold', 'bg-white/10');
        btn.classList.add('text-gray-400', 'hover:text-white');

        // Add active classes to the selected language button
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('text-white', 'font-bold', 'bg-white/10');
            btn.classList.remove('text-gray-400', 'hover:text-white');
        }
    });

    // Save preference
    localStorage.setItem('selectedLanguage', lang);

    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'tr';
    changeLanguage(savedLang);
});
