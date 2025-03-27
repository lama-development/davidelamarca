// assets/js/loader.js
"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loader');

    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.remove();
                }
            }, 500);
        }
    }, 1000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Observe all cards
    const features = document.querySelectorAll('.services__feature');
    features.forEach(feature => observer.observe(feature));
});