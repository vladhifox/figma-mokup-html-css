const burger = document.querySelector('.header__burger');
if (burger) {
    burger.addEventListener('click', () => {
        const burgerMenu = document.querySelector('.header__menu');
        const heroBody = document.querySelector('.hero__body');
        if (burgerMenu) {
            burgerMenu.classList.toggle('_active');
            heroBody.classList.toggle('hero__body_active');
        }
    })
}
