/*
Handles the loader animation and hides the logo when the page is fully loaded
*/

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');

    // Disable scrolling when the loader is visible
    document.body.classList.add('no-scroll');

    // Add a slight delay to make the loader visible even on fast connections
    setTimeout(() => {
        if (loader) {
            loader.classList.add('hidden');
            // After transition is complete, set display to none and enable scrolling
            loader.addEventListener('transitionend', () => {
                loader.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }, { once: true });
        }
    }, 800); // 800ms delay
});

// Show loader when navigating to a new page
document.addEventListener('astro:before-preparation', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.removeProperty('display');
        loader.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    }
});

// Hide loader after the new page is loaded
document.addEventListener('astro:after-swap', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            loader.addEventListener('transitionend', () => {
                loader.style.display = 'none';
                // Enable scrolling after the loader is hidden
                document.body.classList.remove('no-scroll');
            }, { once: true });
        }, 300);
    }
});