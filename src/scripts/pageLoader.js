// This script handles the loader animation
// It will hide the loader when the page is fully loaded

document.addEventListener('DOMContentLoaded', () => {
// The page content has loaded, but images and other resources may still be loading
const loader = document.getElementById('loader');

// Blocca lo scrolling quando il loader è visibile
document.body.classList.add('no-scroll');

// Add a slight delay to make the loader visible even on fast connections
setTimeout(() => {
    // Hide the loader
    if (loader) {
    loader.classList.add('hidden');
    
    // After transition is complete, set display to none and riabilita lo scrolling
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
        // Riabilita lo scrolling quando il loader scompare
        document.body.classList.remove('no-scroll');
    }, { once: true });
    }, 300);
}
});