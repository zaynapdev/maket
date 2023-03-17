const btn = document.querySelector('button');
const list = document.querySelector('.header__ul');

btn.addEventListener('click', () => {
    list.classList.toggle('header__ul--active')
});