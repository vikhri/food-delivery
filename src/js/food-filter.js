    const selectors = {
        filter: '.popular-filter__item',
    }

    const states = {
        filter: {
            current: 'popular-filter__item--current',
        }
    }


    const InitFilter = () => {

        const filterItems = document.querySelectorAll(selectors.filter);

        filterItems.forEach((node) => {

            node.addEventListener('click', filter)

        })

    };

    const filter = ({currentTarget}) => {

        const filterItems = document.querySelectorAll(selectors.filter);

        filterItems.forEach((item) => {
            item.classList.remove(states.filter.current);
        })

        currentTarget.classList.add(states.filter.current);

    };





    window.addEventListener('DOMContentLoaded', () => { InitFilter() });