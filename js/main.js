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

//  =======================Covers section==============================

const coversSection = document.querySelector('.covers');
const marquee = document.querySelectorAll('.marquee__line');

marquee.forEach(item => {
    item.classList.add('is-playing')
})

const options = {
  root: null,
  threshold: 0.1
};

const observer = new IntersectionObserver((entires) => {
    entires.forEach(entry => {
        if (entry.isIntersecting) {
            marquee.forEach(item => {
                item.classList.add('is-playing')
            })
        } else {
             marquee.forEach(item => {
                item.classList.remove('is-playing')
            })
        }
    })
}, options)

const target = document.querySelector('.covers');
if (target) {
  observer.observe(target);
}

//  =======================Reviews section==============================

const LINK = "https://portfolio-js.b.goit.study/api";
const getReviews = "/reviews";


function renderReviews(reviews) {
    const reviewsList = document.querySelector('.reviews-swiper-wrapper ');
    const markup = reviews.map(item => `
        <div class="reviews-swiper-slide swiper-slide">
            <div class="review-card">
            <img src="${item.avatar_url}" alt="${item.author}" class="review-card-avatar">
            <h3 class="review-card-author">${item.author}</h3>
            <p class="review-card-text">${item.review}</p>
          </div>
        </div>
          
        `).join('');
    reviewsList.innerHTML = markup;   
}

fetch(LINK + getReviews)
    .then(response => response.json())
    .catch(err => {
        console.log('Помилка:', err);
    })
    .then(data => {
        renderReviews(data)
        const rojectsSwiper = new Swiper('.reviews-swiper', {
            loop: false,
            speed: 400,
            navigation: {
            prevEl: '.reviews-swiper-before',
            nextEl: '.reviews-swiper-next',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,  
                    spaceBetween: 16   
                },
                1280: {
                    slidesPerView: 4, 
                    spaceBetween: 16
                    }
                }
        });
    })




