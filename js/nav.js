const navOpen = document.querySelector(".header__container__menu-button");
const navClose = document.querySelector(".header__container__nav__close");

navOpen.addEventListener('click', () => {
    document.querySelector("nav").classList.add('header__container__nav--active');
    document.body.style.overflow = "hidden";
})

navClose.addEventListener('click', () => {
    document.querySelector("nav").classList.remove('header__container__nav--active');
    document.body.style.overflow = "auto";
})
