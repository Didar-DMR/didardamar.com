function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(el => {
        if (lang === 'tr') {
            el.textContent = el.getAttribute('data-tr');
        } else {
            el.textContent = el.getAttribute('data-en');
        }
    });

    // Sayfa yönünü veya font ayarlarını dile göre buraya ekleyebilirsin
    document.documentElement.lang = lang;
}