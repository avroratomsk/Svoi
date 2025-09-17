import * as functions from './modules/baseFunctions.js';
import Swiper from 'swiper/bundle';

functions.isWebp();


const mainSlider = new Swiper('.main-slider__slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '<span class="separator"></span>' +
        '<span class="' + totalClass + '"></span>';
    },
    formatFractionCurrent: function (number) {
      return number < 10 ? '0' + number : number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? '0' + number : number;
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const responsibilitySlider = new Swiper('.responsibility__slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 1.8,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2.5,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4.2,
    },
    1200: {
      slidesPerView: 5,
    }
  }

});

const housesSaleSlider = new Swiper('.houses-sale__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 38,

});

// Initialize Lenis
// const lenis = new Lenis({
//   autoRaf: true,
//   lerp: 0.3,
// });
//
// // Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//
// });





