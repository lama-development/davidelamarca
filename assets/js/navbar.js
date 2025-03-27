// assets/js/navbar.js
"use strict";

const menuToggle = document.querySelector('.navbar__menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function () {
    navbar.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll'); // Disable background scrolling
});