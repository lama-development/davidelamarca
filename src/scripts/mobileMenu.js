/*
Handles toggling the mobile menu open and closed and switches between hamburger and X icons
*/

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navbar = document.getElementById('navbar-menu-mobile');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const xIcon = document.querySelector('.x-icon');
    
    // Custom event to notify other scripts about mobile menu state changes
    const menuToggleEvent = new CustomEvent('mobileMenuToggle', {
        bubbles: true
    });

    // Check if the elements exist before adding event listeners
    if (mobileMenuButton && navbar && hamburgerIcon && xIcon) {
        mobileMenuButton.addEventListener('click', function() {
            navbar.classList.toggle('hidden');
            hamburgerIcon.classList.toggle('hidden');
            xIcon.classList.toggle('hidden');
            
            // Dispatch the event to notify other scripts
            document.dispatchEvent(menuToggleEvent);
        });
    }
});