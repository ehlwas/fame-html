import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

new Swiper('#testimonialSwiper', {
    direction: 'horizontal', // Change to 'horizontal' if needed
    loop: true,
    initialSlide: 1,
    slidesPerView: 3,
    autoHeight: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 50,

    navigation: {
        nextEl: '#testimonialNext',
        prevEl: '#testimonialPrev',
    },
});

new Swiper('#recentEventsSwiper', {
    direction: 'horizontal', // Change to 'horizontal' if needed
    loop: true,
    initialSlide: 1,
    slidesPerView: 3,
    autoHeight: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 50,
    allowTouchMove: true,
    breakpoints: {
        1200: {
            loop: false,
            direction: 'horizontal', // Change to 'horizontal' if needed
            initialSlide: 1,
            slidesPerView: 3,
            autoHeight: true,
            centeredSlides: true,
            spaceBetween: 0,
            allowTouchMove: false,
        },
        800: {
            loop: false,
            direction: 'horizontal', // Change to 'horizontal' if needed
            initialSlide: 1,
            slidesPerView: 2,
            autoHeight: true,
            centeredSlides: true,
            spaceBetween: 0,
            allowTouchMove: true,
        },
    },
})

new Swiper('#imageSlides', {
    direction: 'horizontal', // Change to 'horizontal' if needed
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 30,
    allowTouchMove: true,
    freeMode: true,
})