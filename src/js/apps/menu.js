let menuButton = document.querySelector('[data-menu-toggle]'),
    menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});
