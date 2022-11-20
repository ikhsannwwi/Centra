

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar__');

menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('open');
}
