document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const html = document.documentElement;
    
    // Get current theme from localStorage or default to 'system'
    let currentTheme = localStorage.getItem('theme') || 'system';
    
    // Apply theme on page load
    applyTheme(currentTheme);
    updateActiveButton(currentTheme);
    
    // Add click event listeners to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.id.replace('theme-', '');
            currentTheme = theme;
            localStorage.setItem('theme', theme);
            applyTheme(theme);
            updateActiveButton(theme);
        });
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
        if (currentTheme === 'system') {
            applyTheme('system');
        }
    });
    
    function applyTheme(theme) {
        if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }
    
    function updateActiveButton(theme) {
        themeButtons.forEach(button => {
            button.classList.remove('bg-white', 'dark:bg-gray-800', 'text-black', 'dark:text-white');
            button.classList.add('text-gray-600', 'dark:text-gray-400', 'hover:text-black', 'dark:hover:text-white');
        });
        const activeButton = document.getElementById(`theme-${theme}`);
        if (activeButton) {
            activeButton.classList.remove('text-gray-600', 'dark:text-gray-400', 'hover:text-black', 'dark:hover:text-white');
            activeButton.classList.add('bg-white', 'dark:bg-gray-800', 'text-black', 'dark:text-white');
        }
    }
});