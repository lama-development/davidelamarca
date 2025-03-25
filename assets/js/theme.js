// assets/js/theme.js
"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // Select the theme toggle input
    const themeToggle = document.querySelector('.navbar__theme-input');

    // Define theme colors
    const lightTheme = {
        '--color-bg-1': '#fff',
        '--color-bg-2': '#f9f9f9',
        '--color-navbar': 'rgba(249, 249, 249, 0.85)',
        '--color-border': '#ddd',
        '--color-accent': '#0b99ff',
        '--color-accent-2': '#075c99',
        '--color-text-primary': '#000',
        '--color-text-secondary': '#5c5c5c',
        '--color-text-pure': '#fff'
    };

    const darkTheme = {
        '--color-bg-1': '#000',
        '--color-bg-2': '#0f1117',
        '--color-navbar': 'rgba(15, 17, 23, 0.85)',
        '--color-border': '#23252c',
        '--color-accent': '#0b99ff',
        '--color-accent-2': '#075c99',
        '--color-text-primary': '#fff',
        '--color-text-secondary': '#95969e',
        '--color-text-pure': '#000'
    };

    function applyTheme(theme) {
        Object.keys(theme).forEach(key => {
            document.documentElement.style.setProperty(key, theme[key]);
        });
    }

    // Check saved theme or fallback to preferred setting
    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Apply the theme on load
    if (currentTheme === 'dark') {
        applyTheme(darkTheme);
        document.body.classList.add('dark-theme');
        if (themeToggle) themeToggle.checked = true;
    } else {
        applyTheme(lightTheme);
        document.body.classList.remove('dark-theme');
        if (themeToggle) themeToggle.checked = false;
    }

    // Add change event listener to theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                currentTheme = 'dark';
                applyTheme(darkTheme);
                document.body.classList.add('dark-theme');
            } else {
                currentTheme = 'light';
                applyTheme(lightTheme);
                document.body.classList.remove('dark-theme');
            }
            localStorage.setItem('theme', currentTheme);
        });
    }
});