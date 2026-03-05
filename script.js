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

window.onload = () => console.log("Didar Damar Portfolio Active");
