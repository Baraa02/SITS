function changBg() {
    var navber = document.getElementById('navber')
    var scrollvalue = window.scrollY;
    if (scrollvalue < 150) {          
        navber.classList.remove('bgColor');
    }

    else {
        navber.classList.add('bgColor')
    }
}
window.addEventListener('scroll', changBg);


let navbar = document.querySelector('.header .nav');
let menuBtn = document.querySelector('#menu-btn');


menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};
