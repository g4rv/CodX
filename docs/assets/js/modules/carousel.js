const carousel = () => {
    let carouselBody = document.querySelector('[carousel]');
    let carouselList = carouselBody.querySelector('.carousel__list');
    let carouselItem = carouselList.querySelectorAll('.carousel__item');
    let carouselList2;

    const speed = 1;

    const width = carouselList.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone() {
        carouselList2 = carouselList.cloneNode(true);
        carouselBody.appendChild(carouselList2);
        carouselList2.style.left = `${width}px`;
    }

    function moveFirst() {
        x -= speed;

        if (width >= Math.abs(x)) {
        carouselList.style.left = `${x}px`;
        } else {
        x = width;
        }
    }

    function moveSecond() {
        x2 -= speed;

        if (carouselList2.offsetWidth >= Math.abs(x2)) {
        carouselList2.style.left = `${x2}px`;
        } else {
        x2 = width;
        }
    }

    function hover() {
        clearInterval(a);
        clearInterval(b);
    }

    function unhover() {
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
    }

    clone();

    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);

    carouselBody.addEventListener("mouseenter", hover);
    carouselBody.addEventListener("mouseleave", unhover);
}

export default carousel;