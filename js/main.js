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
//  =======================Projects swiper==============================

const projectsSwiper = new Swiper('.projects-swiper', {
    loop: false,
    speed: 400,
    loopedSlides: 3,
    navigation: {
        prevEl: '.projects-swiper-before',
        nextEl: '.projects-swiper-next',
    },
});

//  =======================FAQ accordion==============================

new Accordion(".faq-accordion");

//  =======================Covers codepen==============================

// const myProjects = [
//     {
//         src: "/photos/content_img/rectangle_1.png",
//         alt: "Powerpulse",
//     },
//     {
//         src: "/photos/content_img/rectangle_2.png",
//         alt: "Mimino",
//     },
//     {
//         src: "/photos/content_img/rectangle_3.png",
//         alt: "Vyshyvanka",
//     },
//     {
//         src: "/photos/content_img/rectangle_4.png",
//         alt: "Green.Harvest",
//     },
//     {
//         src: "/photos/content_img/rectangle_5.png",
//         alt: "Wallet",
//     },
//     {
//         src: "/photos/content_img/rectangle_6.png",
//         alt: "Chego",
//     },
//     {
//         src: "/photos/content_img/rectangle_7.png",
//         alt: "Energy.Flow",
//     },
//     {
//         src: "/photos/content_img/rectangle_8.png",
//         alt: "Fruitbox",
//     },
//     {
//         src: "/photos/content_img/rectangle_9.png",
//         alt: "Englishexcellence",
//     },
//     {
//         src: "/photos/content_img/rectangle_10.png",
//         alt: "Starlightstudio",
//     },
// ]

// console.log('length =', myProjects.length)

// let myProjectsContent = "";
// myProjects.forEach(project => {
//     myProjectsContent += `<img src="" alt="" class="marquee__line">`
// })

// const marqueeContainer = document.querySelector('.marquee__inner')
// marqueeContainer.innerHTML = myProjectsContent;

// const marqueePics = document.querySelectorAll(' .marquee__line')

// for (let i = 0; i < myProjects.length; i++) {
//     marqueePics[i].src = myProjects[i].src;
// }





