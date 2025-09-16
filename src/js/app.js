import * as functions from './modules/baseFunctions.js';
import Swiper from 'swiper/bundle';

functions.isWebp();


const linkHeader = document.querySelectorAll('.nav__item');

const addEffect = (e) => {
  e.preventDefault();
  const divAnimate = document.createElement('div');
  const maxValue = Math.max(e.currentTarget.clientWidth, e.currentTarget.clientHeight)
  const rect = e.currentTarget.getBoundingClientRect();
  const styleDiv = divAnimate.style;
  const px = 'px';

  styleDiv.width = styleDiv.height = maxValue + px;
  styleDiv.left = e.clientX - rect.left - (maxValue / 2) + px;
  styleDiv.top = e.clientY - rect.top - (maxValue / 2) + px;

  divAnimate.classList.add('pulse');
  e.currentTarget.appendChild(divAnimate);

  setTimeout(function () {
    // document.querySelectorAll('.pulse').forEach(el => el.remove());
  }, 1000)
}

linkHeader?.forEach(link => {
  link.addEventListener('click', addEffect)
})

const swiper = new Swiper('.swiper', {
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

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.3,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {

});





