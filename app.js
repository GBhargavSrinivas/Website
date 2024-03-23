const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    this.classList.toggle('is-active'); 
    menuLinks.classList.toggle('active'); 
});
