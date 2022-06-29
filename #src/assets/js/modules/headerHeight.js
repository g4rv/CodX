const headerHeight = () => {
    const headerOffsetHeight = document.querySelector('.header').offsetHeight;

    document.documentElement.style.setProperty('--header-h', headerOffsetHeight - 1 + 'px');
}

export default headerHeight;