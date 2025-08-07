document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('.header');

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', function() {
            header.classList.toggle('menu-open');
            navMenu.classList.toggle('active');
        });
    }
});