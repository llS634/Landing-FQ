function toggleTheme() {
    const link = document.querySelector('link[rel="stylesheet"]');
    const currentTheme = link.getAttribute('href');
    
    if (currentTheme === 'style.css') {
        link.setAttribute('href', 'style-theme.css');
    } else {
        link.setAttribute('href', 'style.css');
    }
}

function toggleTheme() {
    const link = document.querySelector('link[rel="stylesheet"]');
    const currentTheme = link.getAttribute('href');
    const themeIcon = document.getElementById('theme-icon');

    if (currentTheme === 'style.css') {
        link.setAttribute('href', 'style-theme.css');
        themeIcon.setAttribute('src', 'assets/svg/header_block/color-theme-light.svg');
    } else {
        link.setAttribute('href', 'style.css');
        themeIcon.setAttribute('src', 'assets/svg/header_block/color-theme-dark.svg');
    }
}