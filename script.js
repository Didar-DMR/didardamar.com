function changeLang(lang) {
    const elements = document.querySelectorAll('.translate');
    
    elements.forEach(el => {
        // data-tr veya data-en değerini al ve içeriğe aktar
        const newText = el.getAttribute(`data-${lang}`);
        if (newText) {
            el.textContent = newText;
        }
    });

    // Sayfa başlığını da güncelle (Opsiyonel)
    document.title = lang === 'tr' ? 'Didar Damar | Portfolyo' : 'Didar Damar | Portfolio';
    
    console.log("Language switched to: " + lang);
}
