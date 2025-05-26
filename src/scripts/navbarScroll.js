/*
Shows/hides the navbar bottom border based on scroll position
Also shows border when mobile menu is expanded
*/

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('main-navbar');
    const mobileMenu = document.getElementById('navbar-menu-mobile');
    let isMobileMenuOpen = false;
    
    // Function to handle scroll event
    function handleScroll() {
        // If mobile menu is open, always show the border
        if (isMobileMenuOpen) {
            navbar.classList.add('border-b');
            return;
        }
        
        if (window.scrollY > 0) {
            // Add border when scrolled
            navbar.classList.add('border-b');
        } else {
            // Remove border when at the top and mobile menu is closed
            navbar.classList.remove('border-b');
        }
    }
    
    // Listen for mobile menu toggle events
    document.addEventListener('mobileMenuToggle', function() {
        // Check if the mobile menu is currently visible
        isMobileMenuOpen = !mobileMenu.classList.contains('hidden');
        
        // Update border based on the new state
        handleScroll();
    });
    
    // Run once on initial load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});