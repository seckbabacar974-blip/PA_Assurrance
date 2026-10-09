const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');

hamburger.onclick = function (){
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}