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

/* ---------------------------- DARK MODE TOGGLE ---------------------------- */
const darkToggle = document.getElementById("dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
