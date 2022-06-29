import { toggleActiveClass } from "../tools/activeClass.js"
import scrollLock from "../tools/scrollLock.js";

const burgerMenu = () => {
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('[burger-menu]')
    burger.addEventListener('click', () => {
        toggleActiveClass(burger, 'burger--active');
        toggleActiveClass(burgerMenu, 'nav__block--active');
        scrollLock();
    })
}

export default burgerMenu;