// =============== Mobile menu buttons ===============================
const openMobileMenu = document.querySelector('.mobile-menu-open')
const mobileMenu = document.querySelector('.mobile-menu')

function openMenuHandler () {
    console.log("hello world")
    mobileMenu.classList.add('is-open')

}
openMobileMenu.addEventListener('click', openMenuHandler)

const closeMobileMenu = document.querySelector('.mobile-menu-close')

function closeMenuHandler() {
    console.log("bye bye world")
    mobileMenu.classList.remove('is-open')

}
closeMobileMenu.addEventListener('click', closeMenuHandler)

// =====================About me accordion=====================================

new Accordion(".accordion-container");
  
const rotateBtn = document.querySelectorAll(' .ac-trigger-svg');

function clickHandler() {
    this.classList.toggle('ac-is-open');

}
for (let btn of rotateBtn) {
    btn.addEventListener('click', clickHandler);
}

//  =======================About me swiper==============================

const aboutSwiper = new Swiper('.swiper', {
    loop: true,
    speed: 400,
    loopedSlides: 6,
    slidesPerView: 'auto',
        
    mouseweel: {
        invert: false,
    },
    navigation: {
        
        nextEl: '.swiper-button-next',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
   
});

const projectsSwiper = new Swiper('.projects-swiper', {
    loop: false,
    speed: 400,
    loopedSlides: 3,
    navigation: {
        prevEl: '.projects-swiper-before',
        nextEl: '.projects-swiper-next',
    },
});







