export const addActiveClass = (item, className = 'active') => {
    item.classList.add(className);
}

export const removeActiveClass = (item, className = 'active') => {
    item.classList.remove(className);
}

export const toggleActiveClass = (item, className = 'active') => {
    item.classList.toggle(className);
}