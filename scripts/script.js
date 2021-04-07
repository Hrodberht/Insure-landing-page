const header = document.getElementById('header');
const nav = document.getElementById('nav');
const btn = document.getElementById('btn');
const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('cross');

function toggleNav () {
    nav.classList.toggle('nav--show-nav');
    header.classList.toggle('header--show-nav');
    hamburger.classList.toggle('dropdown--hidden');
    cross.classList.toggle('dropdown--hidden');
}

btn.addEventListener('click', toggleNav);