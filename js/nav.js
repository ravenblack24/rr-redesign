const navOpen = document.querySelector(".menu-button");
const navClose = document.querySelector(".header__container__nav__close");

navOpen.addEventListener('click', () => {
  //  document.querySelector("nav").style.display = "block";
    document.querySelector("nav").classList.add('header__container__nav--active');
    document.body.style.overflow = "hidden";
})

navClose.addEventListener('click', () => {
    document.querySelector("nav").classList.remove('header__container__nav--active');
  //  document.querySelector("nav").style.display = "none";
    document.body.style.overflow = "auto";
})
