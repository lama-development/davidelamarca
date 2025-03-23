// asstes/js/theme.js
"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // Trova il pulsante del tema della navbar (potrebbe non esserci in tutte le pagine)
    const themeBtn = document.querySelector('.theme-btn');
    let themeIcon = null;
    if (themeBtn) {
        themeIcon = themeBtn.querySelector('i');
    }

    // Definizioni variabili colori tema chiaro/scuro
    const lightTheme = {
    '--color-bg-1': '#fff',
    '--color-bg-2': '#f9f9f9',
    '--color-navbar': 'rgba(255, 255, 255, 0.85)',
    '--color-border': '#ddd',
    '--color-accent': '#1e90ff',
    '--color-text-primary': '#000',
    '--color-text-secondary': '#5c5c5c',
    '--color-text-pure': '#fff'
    };

    const darkTheme = {
        '--color-bg-1': '#000',
        '--color-bg-2': '#0f1117',
        '--color-navbar': 'rgba(0, 0, 0, 0.85)',
        '--color-border': '#23252c',
        '--color-accent': '#0b99ff',
        '--color-text-primary': '#fff',
        '--color-text-secondary': '#95969e',
        '--color-text-pure': '#000'
    };

    function applyTheme(theme) {
        Object.keys(theme).forEach(key => {
            document.documentElement.style.setProperty(key, theme[key]);
        });
    }

    function updateThemeIcon(currentTheme) {
        if (themeIcon) {
            if (currentTheme === 'dark') {
                themeIcon.classList.remove('bx-moon');
                themeIcon.classList.add('bx-sun');
            } else {
                themeIcon.classList.remove('bx-sun');
                themeIcon.classList.add('bx-moon');
            }
        }
    }

    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = 'dark';
        } else {
            currentTheme = 'light';
        }
    }

    if (currentTheme === 'dark') {
        applyTheme(darkTheme);
    } else {
        applyTheme(lightTheme);
    }
    updateThemeIcon(currentTheme);

    // Controllo se il pulsante del tema esiste nella pagina
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            if (currentTheme === 'dark') {
                currentTheme = 'light';
            } else {
                currentTheme = 'dark';
            }
            localStorage.setItem('theme', currentTheme);
            if (currentTheme === 'dark') {
                applyTheme(darkTheme);
            } else {
                applyTheme(lightTheme);
            }
            updateThemeIcon(currentTheme);
        });
    }
});
