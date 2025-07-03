document.addEventListener('DOMContentLoaded', function() {
    console.log('Navbar script loaded');
    
    // Menu toggle functionality
    const menuToggle = document.getElementById('menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const hamburgerLine1 = document.getElementById('hamburger-line-1');
    const hamburgerLine2 = document.getElementById('hamburger-line-2');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Apri menu con dissolvenza
            fullscreenMenu?.classList.remove('opacity-0', 'invisible');
            fullscreenMenu?.classList.add('opacity-100', 'visible');
            
            // Trasforma hamburger in X
            if (hamburgerLine1) hamburgerLine1.style.transform = 'rotate(45deg) translate(3px, 3px)';
            if (hamburgerLine2) hamburgerLine2.style.transform = 'rotate(-45deg) translate(3px, -3px)';
            
            // Previeni scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Chiudi menu con dissolvenza
            fullscreenMenu?.classList.remove('opacity-100', 'visible');
            fullscreenMenu?.classList.add('opacity-0', 'invisible');
            
            // Ripristina hamburger
            if (hamburgerLine1) hamburgerLine1.style.transform = 'none';
            if (hamburgerLine2) hamburgerLine2.style.transform = 'none';
            
            // Ripristina scroll
            document.body.style.overflow = 'auto';
        }
    }

    // Event listener per toggle del menu
    menuToggle?.addEventListener('click', toggleMenu);

    // Chiudi menu quando si clicca su un link
    if (fullscreenMenu) {
        const menuLinks = fullscreenMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) {
                    toggleMenu();
                }
            });
        });
    }

    // Chiudi menu con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });
});
