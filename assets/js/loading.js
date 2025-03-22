// assets/js/loading.js

document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');

    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1000);
}); 