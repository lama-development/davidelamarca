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
        // Set initial state
        navbar.style.maxHeight = '0';
        navbar.style.opacity = '0';
        navbar.style.transform = 'translateY(-10px)';
        navbar.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        navbar.style.overflow = 'hidden';
        
        let isOpen = false;
        
        mobileMenuButton.addEventListener('click', function() {
            if (!isOpen) {
                // Open menu
                navbar.classList.remove('hidden');
                // Force reflow
                navbar.offsetHeight;
                navbar.style.maxHeight = '500px';
                navbar.style.opacity = '1';
                navbar.style.transform = 'translateY(0)';
                
                hamburgerIcon.classList.add('hidden');
                xIcon.classList.remove('hidden');
                
                // Add rotation animation to button
                mobileMenuButton.style.transform = 'rotate(90deg)';
                
                isOpen = true;
            } else {
                // Close menu
                navbar.style.maxHeight = '0';
                navbar.style.opacity = '0';
                navbar.style.transform = 'translateY(-10px)';
                
                hamburgerIcon.classList.remove('hidden');
                xIcon.classList.add('hidden');
                
                // Remove rotation animation from button
                mobileMenuButton.style.transform = 'rotate(0deg)';
                
                setTimeout(() => {
                    navbar.classList.add('hidden');
                }, 300);
                
                isOpen = false;
            }
            
            // Update aria-expanded attribute
            mobileMenuButton.setAttribute('aria-expanded', isOpen);
            
            // Dispatch the event to notify other scripts
            document.dispatchEvent(menuToggleEvent);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (isOpen && !mobileMenuButton.contains(event.target) && !navbar.contains(event.target)) {
                mobileMenuButton.click();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && isOpen) {
                mobileMenuButton.click();
            }
        });
    }
});