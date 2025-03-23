const mobileNavBtn = document.querySelector('#mobileNavBtn');
const mobileCloseBtn = document.querySelector('#mobileCloseBtn');
const navContainer = document.querySelector('#navContainer');

mobileNavBtn.addEventListener('click', () => {
    navContainer.classList.add('show');
});

mobileCloseBtn.addEventListener('click', () => {
    navContainer.classList.remove('show');
});




let lastScrollY = window.scrollY;
const navbar = document.getElementById('headerNavigation');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling Down
    navbar.style.top = '-150px';
  } else {
    // Scrolling Up
    navbar.style.top = '0';
  }
  lastScrollY = window.scrollY;
});