let openList = document.querySelector('.open');
let ExitList = document.querySelector('.exit');
let loading = document.querySelector('.loading');
let ul = document.querySelector('ul');
let Left = document.querySelector('.Left');
let Right = document.querySelector('.Right');
let ImageToggel = document.getElementById('ImageToggel');


openList.addEventListener('click', () => {
    ul.classList.add('active')
});

ExitList.addEventListener('click', () => {
    ul.classList.remove('active')
});

Right.addEventListener('click', () => {
    ImageToggel.setAttribute('src', 'app/imgTow.png');
});


Left.addEventListener('click', () => {
    ImageToggel.setAttribute('src', 'app/imgOne.png');
});


window.addEventListener('load', () => {
    loading.classList.add('heddin')
});