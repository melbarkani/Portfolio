// Menu
const menu = document.querySelector(".show-menu");
// Icon d'ouverture de menu (hamburger)
const menuIcon = document.querySelector("#menu-i");
// Icon fermature de menu
const closeIcon = document.querySelector("#close-i");

/**
 * Fonction qui permet d'ouvrir le menu
 */
menuIcon.addEventListener('click', () => {
    menu.classList.add("showMenu");
    menu.style.transition = ".2s ease";
});
/**
 * Fonction qui permet de fermer le menu
 */
closeIcon.addEventListener('click', () => {
    menu.classList.remove("showMenu");
    menu.style.transition = ".2s ease";
});


