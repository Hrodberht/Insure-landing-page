const header = document.getElementById('header');
const nav = document.getElementById('nav');
const btn = document.getElementById('btn');
const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('cross');
var clicks = 1;

function clickCount () {
    clicks += 1;
    console.log(clicks);
}

function showNav () {
    header.classList.add('header--show-nav');
    nav.style.display = 'block';
    hamburger.classList.add('dropdown--hidden');
    cross.classList.remove('dropdown--hidden');
}

function hideNav () {
    header.classList.remove('header--show-nav');
    nav.style.display = "none";
    hamburger.classList.remove('dropdown--hidden');
    cross.classList.add('dropdown--hidden');
}

function displayNav () {
    if (clicks % 2 == 0) {
        showNav();
    } else {
        hideNav();
    }
}

btn.addEventListener('click', clickCount);
btn.addEventListener('click', displayNav);

