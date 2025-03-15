const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    navbar.classList.toggle('menu-open');
});