// assets/js/navbar.js

const menuToggle = document.getElementById('navbar-menu-toggle');
const mobileMenu = document.getElementById('navbar-mobile-menu');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    navbar.classList.toggle('menu-open');
});