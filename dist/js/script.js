/* ------------------------ CHANGE BACKGROUND HEADER ------------------------ */
function scrollHeader() {
  const header = document.querySelector("header");
  this.scrollY > header.offsetTop
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* -------------------------------- SHOW MENU ------------------------------- */
const menu = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");
function showMenu() {
  menu.classList.toggle("show-menu");
  navMenu.classList.toggle("hidden");
}
menu.addEventListener("click", showMenu);

/* ------------------------------- REMOVE MENU ------------------------------ */
function removeMenu(e) {
  if (e.target !== menu && e.target !== navMenu) {
    menu.classList.remove("show-menu");
    navMenu.classList.add("hidden");
  }
}
window.addEventListener("click", removeMenu);

/* ------------------------------ SCROLL TO TOP ----------------------------- */
function scrollUp() {
  const scrollUp = document.getElementById("back-to-top");
  this.scrollY > 200
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
