const selectors = {
    menu: '.menu',
    toggleButton: '.header-navigation__button',
    toggle: '.header-navigation__toggle'
}

const states = {
    toggle: {
        closed: 'header-navigation__toggle--closed',
        open: 'header-navigation__toggle--open'
    },
    menu: {
        open: 'menu--open'
    }
}

const navMenu = document.querySelector(selectors.menu);
const navButton = document.querySelector(selectors.toggleButton);
const navToggle = document.querySelector(selectors.toggle);


const toggleMenu = () => {

    const isClosed = navToggle.classList.contains(states.toggle.closed);

    navToggle.classList.toggle(states.toggle.open, isClosed);
    navToggle.classList.toggle(states.toggle.closed, !isClosed);
    navMenu.classList.toggle(states.menu.open, isClosed);

};

const initToggleMenu = () => {

    navButton.addEventListener('click', toggleMenu);

};

window.addEventListener('DOMContentLoaded', initToggleMenu);