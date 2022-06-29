import {addActiveClass, removeActiveClass} from '../tools/activeClass.js'

const memberChose = () => {
    const memberBtns = document.querySelectorAll('.about-us__member-btn');
    const members = document.querySelectorAll('.about-us__member');

    memberBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            resetActive();

            members.forEach(member => {
                if(member.dataset.memberName === btn.innerText) {
                    addActiveClass(btn, 'about-us__member-btn--active');
                    addActiveClass(member, 'about-us__member--active');
                }
            })
        })
    })

    function resetActive () {
        memberBtns.forEach(btn => {
            removeActiveClass(btn, 'about-us__member-btn--active');
        })
        members.forEach(member => {
            removeActiveClass(member, 'about-us__member--active');
        })
    }
}

export default memberChose;