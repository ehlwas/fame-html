const images = document.querySelectorAll('#img-moving-vertical');

new SimpleParallax(images, {
    scale: 1.3,
    delay: 0.6,
    transition: 'cubic-bezier(0,0,0,1)'
});