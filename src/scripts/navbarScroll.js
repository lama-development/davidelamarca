/*
Shows/hides the navbar background and border based on scroll position
Also shows background and border when mobile menu is expanded
*/

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('main-navbar');
    const mobileMenu = document.getElementById('navbar-menu-mobile');
    let isMobileMenuOpen = false;
    
    // Function to apply glassmorphism styling
    function applyGlassmorphism() {
        navbar.classList.add(
            'bg-white/80', 
            'dark:bg-gray-900/80', 
            'backdrop-blur-md', 
            'border-b', 
            'border-white/20', 
            'dark:border-gray-700/30'
        );
    }
    
    // Function to remove glassmorphism styling
    function removeGlassmorphism() {
        navbar.classList.remove(
            'bg-white/80', 
            'dark:bg-gray-900/80', 
            'backdrop-blur-md', 
            'border-b', 
            'border-white/20', 
            'dark:border-gray-700/30'
        );
    }
    
    // Function to handle scroll event
    function handleScroll() {
        // If mobile menu is open, always show the glassmorphism effect
        if (isMobileMenuOpen) {
            applyGlassmorphism();
            return;
        }
        
        if (window.scrollY > 10) {
            // Apply glassmorphism when scrolled down
            applyGlassmorphism();
        } else {
            // Remove glassmorphism when at the top and mobile menu is closed
            removeGlassmorphism();
        }
    }
    
    // Listen for mobile menu toggle events
    document.addEventListener('mobileMenuToggle', function() {
        // Check if the mobile menu is currently visible
        isMobileMenuOpen = !mobileMenu.classList.contains('hidden');
        
        // Update styling based on the new state
        handleScroll();
    });
    
    // Run once on initial load
    handleScroll();
    
    // Add scroll event listener with throttling for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
});