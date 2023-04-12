const selectors = {
    filter: '.popular-filter__item',
    list: '.swiper-food',
}

const states = {
    filter: {
        current: 'popular-filter__item--current',
    },
    hidden: 'hidden',
}

const InitFilter = () => {

    const filterItems = document.querySelectorAll(selectors.filter);

    filterItems.forEach((node) => {

        node.addEventListener('click', filter)

    })
};

const filter = ({currentTarget}) => {

    const filterItems = document.querySelectorAll(selectors.filter);
    const foodLists = document.querySelectorAll(selectors.list);
    const foodList = document.querySelector('.swiper-food--' + currentTarget.id)

    filterItems.forEach((item) => {
        item.classList.remove(states.filter.current);
    })

    foodLists.forEach((list) => {
        list.classList.add(states.hidden);
    })

    currentTarget.classList.add(states.filter.current);
    foodList.classList.remove(states.hidden);
};

window.addEventListener('DOMContentLoaded', () => {
    InitFilter()
});