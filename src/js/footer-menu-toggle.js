const selectors = {
    title: '.sitemap-category__title',
    toggle: '.sitemap-category__toggle',
    list: '.sitemap-category__list'

}

const states = {
    toggle: {
        closed: 'sitemap-category__toggle--closed',
        open: 'sitemap-category__toggle--open'
    },
    list: {
        open: 'sitemap-category__list--open'
    }
}

const toggle = ({currentTarget}) => {

    const toggle = currentTarget.querySelector(selectors.toggle);
    const list = currentTarget.parentElement.querySelector(selectors.list);

    const isClosed = toggle.classList.contains(states.toggle.closed);

    toggle.classList.toggle(states.toggle.open, isClosed);
    toggle.classList.toggle(states.toggle.closed, !isClosed);
    list.classList.toggle(states.list.open, isClosed);
}

const initToggle = () => {

    const titles = document.querySelectorAll(selectors.title)

    titles.forEach((node) => {

        node.addEventListener('click', toggle)

    })
};

window.addEventListener('DOMContentLoaded', initToggle);