const swiperFood = new Swiper('.swiper-food', {

    direction: 'horizontal',
    loop: false,
    slidesPerView: 5,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        144: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        480: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

        1024: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
    },

});

const reviewSwiper = new Swiper(".reviewSwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
