const body = document.getElementsByTagName('body')[0];
const img = document.querySelector('.d-img');
const arrow = document.querySelector('.arrow-shop');
// Menu
const menu = document.querySelector('.moblie-menu-list');
const humburger = document.querySelector('#humburger');
const items = document.querySelectorAll('.items li');
const logo = document.querySelector('.logo');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay-modal');

// Slider
const slides = document.querySelectorAll('.single-slide');
const contentSlides = document.querySelectorAll('.single-content-slide');
const totalSlides = slides.length;
const totalContentSlides = contentSlides.length;
const right = document.querySelector('.arrow-right');
const left = document.querySelector('.arrow-left');


// GSAP Menu Animation
const tl = new TimelineMax();

humburger.addEventListener('click', () =>{
    body.classList.add('overflow-hidden');
    if (tl.reversed()){
        tl.play();
    }else {
        tl.to(menu, 0.7, {top:0, ease: "expo.out"})
        .to(humburger,0.1, {opacity:0, ease: "expo.out"})
        .to(overlay, { height: '100vh' }, '-=.1')
        .to(closeBtn,0.7, {opacity:1, ease: "expo.out"}, '-=0.1')
        .to('nav ul li', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8');
    }
})

closeBtn.addEventListener('click', () =>{
    tl.reverse();
    body.classList.remove('overflow-hidden');
})


//Hero Slider

let slidePosition = 0;

right.addEventListener('click', ()=>{
        moveToNextSlide();
})
left.addEventListener('click', ()=>{
    moveToPrevSlide();
})

function updateSlidePosition() {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[slidePosition].classList.add('active');

    for(let contentSlide of contentSlides){
        contentSlide.classList.remove('active');
    }
    contentSlides[slidePosition].classList.add('active');
}

function moveToNextSlide(){
    if(slidePosition === totalSlides -1) {
        slidePosition = 0;
    } else {
        slidePosition ++;
    }
    updateSlidePosition();
}


function moveToPrevSlide(){
    if(slidePosition === 0) {
        slidePosition = totalSlides -1;
    } else {
        slidePosition --;
    }
    updateSlidePosition();
}