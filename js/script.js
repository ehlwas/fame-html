const mobileNavBtn = document.querySelector('#mobileNavBtn');
const mobileCloseBtn = document.querySelector('#mobileCloseBtn');
const navContainer = document.querySelector('#navContainer');

mobileNavBtn.addEventListener('click', () => {
    navContainer.classList.add('show');
});

mobileCloseBtn.addEventListener('click', () => {
    navContainer.classList.remove('show');
});