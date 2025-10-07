let spanOpen = document.querySelector('.spanOpen');
let spanClose = document.querySelector('.spanClose');
let ulMenu = document.querySelector('.ulMenu');
function MenuToggle() {
    ulMenu.classList.toggle('menuShow');
    spanOpen.classList.toggle('spanMenu-close-open');
    spanClose.classList.toggle('spanMenu-close-open');
}