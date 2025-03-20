var SmoothParallax = require("../js/smooth-parallax/smooth-parallax.min.js");

const wrappers = document.querySelectorAll("#bannerContainer");
const speed = 0.2;
let offset = 0;

let callScroll = null;

window.addEventListener("load", () => {
  const body = document.body;
  const scrollWrapp = document.getElementsByClassName(
    "page-content"
  )[0];

  const height = scrollWrapp.getBoundingClientRect().height - 1;

  body.style.height = `${Math.floor(height)}px`;

  function smoothScroll() {
    offset += (window.scrollY - offset) * speed;

    let scroll = `translateY(-${offset}px) translateZ(0)`;
    scrollWrapp.style.transform = scroll;

    callScroll = window.requestAnimationFrame(smoothScroll);
  }

  smoothScroll();

  wrappers.forEach((wrapper) => {
    const parallax = new SmoothParallax(wrapper, {
      speed: 20,
      scale: 1.3
    });
  });
});
