/**
 * Navbar scroll functionality
 * Shows/hides the navbar bottom border based on scroll position
 */
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('main-navbar');
    
    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > 0) {
            // Add border when scrolled
            navbar.classList.add('border-b');
        } else {
            // Remove border when at the top
            navbar.classList.remove('border-b');
        }
    }
    
    // Run once on initial load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});