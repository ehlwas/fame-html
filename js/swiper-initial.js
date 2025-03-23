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