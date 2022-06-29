import {toggleActiveClass} from '../tools/activeClass.js'

const cardsSwitcher = () => {
    const switcher = document.querySelector('[cards-switcher]')
    const cards = switcher.querySelectorAll('[cards-card]')
    cards.forEach(card => {
        setInterval(
            () => {
                toggleActiveClass(card, 'team-cards__card--active')
            }, 5000
        );
    })
}
export default cardsSwitcher;