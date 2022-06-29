import { toggleActiveClass } from "./activeClass.js";

const scrollLock = () => {
    const pageBody = document.documentElement;
    toggleActiveClass(pageBody, 'lock')
}

export default scrollLock;