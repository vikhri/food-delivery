window.addEventListener('DOMContentLoaded', () => {

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

        const title = currentTarget.querySelector(selectors.title);
        const toggle = currentTarget.querySelector(selectors.toggle);
        const list = currentTarget.querySelector(selectors.list);

        title.addEventListener('click', () => {

            const isClosed = toggle.classList.contains(states.toggle.closed);

            toggle.classList.toggle(states.toggle.open, isClosed);
            toggle.classList.toggle(states.toggle.closed, !isClosed);
            list.classList.toggle(states.list.open, isClosed);


        });

    }
});


const initFaqToggle = () => {
    const rootNodes = document.querySelectorAll(selectors.title)

    rootNodes.forEach((node) => {
        node.addEventListener('click', toggle)
    })
};