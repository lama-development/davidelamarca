/*
Handles toggling between light and dark mode and persists user preference in localStorage
*/

document.addEventListener('DOMContentLoaded', function() {
    // Get both mobile and desktop toggle buttons and icons
    var themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
    var themeToggleLightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');
    var themeToggleDarkIconDesktop = document.getElementById('theme-toggle-dark-icon-desktop');
    var themeToggleLightIconDesktop = document.getElementById('theme-toggle-light-icon-desktop');
    var themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    var themeToggleBtnDesktop = document.getElementById('theme-toggle-desktop');

    // Function to set the initial icon state based on current theme
    function setInitialIconState() {
        if (localStorage.getItem('color-theme') === 'dark' || 
            (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            // Show light icon (sun) when in dark mode
            themeToggleLightIconMobile.classList.remove('hidden');
            themeToggleLightIconDesktop.classList.remove('hidden');
        } else {
            // Show dark icon (moon) when in light mode
            themeToggleDarkIconMobile.classList.remove('hidden');
            themeToggleDarkIconDesktop.classList.remove('hidden');
        }
    }

    // Function to toggle theme and icons on both mobile and desktop buttons
    function toggleTheme() {
        // Toggle icons for both mobile and desktop buttons
        themeToggleDarkIconMobile.classList.toggle('hidden');
        themeToggleLightIconMobile.classList.toggle('hidden');
        themeToggleDarkIconDesktop.classList.toggle('hidden');
        themeToggleLightIconDesktop.classList.toggle('hidden');

        // If set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        // If NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    }

    // Set initial state of icons
    setInitialIconState();

    // Add click event listeners to both buttons
    if (themeToggleBtnMobile) {
        themeToggleBtnMobile.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleBtnDesktop) {
        themeToggleBtnDesktop.addEventListener('click', toggleTheme);
    }
});