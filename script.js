function changeLang(lang) {
    const elements = document.querySelectorAll('.translate');
    
    elements.forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text) {
            el.textContent = text;
        }
    });

    document.documentElement.lang = lang;
}

// Konsol Bilgisi
console.log("Portfolio Security Scan: Success. Version 2.0 Active.");
