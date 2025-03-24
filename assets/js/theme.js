// assets/js/theme.js
"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // Select all theme buttons
    const themeBtns = document.querySelectorAll('.theme-btn');

    // Function to update the icon for all theme buttons
    function updateThemeIcon(currentTheme) {
        themeBtns.forEach(btn => {
            const themeIcon = btn.querySelector('i');
            if (themeIcon) {
                if (currentTheme === 'dark') {
                    themeIcon.classList.remove('bx-moon');
                    themeIcon.classList.add('bx-sun');
                } else {
                    themeIcon.classList.remove('bx-sun');
                    themeIcon.classList.add('bx-moon');
                }
            }
        });
    }

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
    } else {
        applyTheme(lightTheme);
    }
    updateThemeIcon(currentTheme);

    // Add click event listener to all theme buttons
    themeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);
            if (currentTheme === 'dark') {
                applyTheme(darkTheme);
            } else {
                applyTheme(lightTheme);
            }
            updateThemeIcon(currentTheme);
        });
    });
});