/* ------------------------ CHANGE BACKGROUND HEADER ------------------------ */
function scrollHeader() {
    const header = document.querySelector('header');
    this.scrollY > header.offsetTop ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* -------------------------------- SHOW MENU ------------------------------- */
const menu = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');
function showMenu() {
    menu.classList.toggle('show-menu');
    navMenu.classList.toggle('hidden');
}
menu.addEventListener('click', showMenu);
