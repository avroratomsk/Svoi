import * as functions from './modules/baseFunctions.js';

import {Fancybox} from "@fancyapps/ui"
import './modules/filter.js'
import "./modules/menu.js";
import "./modules/tabs.js";
import "./modules/popup.js";
import "./modules/sliders.js";
import "./modules/normalizeFormatPhoneLink.js";
import "./modules/stickyMenu.js";

// import { Fancybox } from "@fancyapps/ui/dist/fancybox/";

// Fancybox.bind("[data-photo]", {
//
// });


functions.isWebp();


Fancybox.bind("[data-fancybox]", {});


document.querySelectorAll('.accordion__title').forEach(title => {
  title.addEventListener('click', () => {
    const item = title.parentElement;
    const body = title.nextElementSibling;

    if (item.classList.contains('active')) {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => body.style.maxHeight = '0');
      item.classList.remove('active');
    } else {
      // закрываем все остальные
      document.querySelectorAll('.accordion__item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion__body').style.maxHeight = '0';
      });

      item.classList.add('active');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

const imagesItems = document.querySelectorAll('.images__item');
const imagesGridContainer = document.querySelector('.images__grid');

if (imagesItems.length === 5) {
  imagesGridContainer.classList.add('grid-5');
}

if (imagesItems.length === 4) {
  imagesGridContainer.classList.add('grid-4');
}

if (imagesItems.length === 3) {
  imagesGridContainer.classList.add('grid-3');
}

if (imagesItems.length === 2) {
  imagesGridContainer.classList.add('grid-2');
}

if (imagesItems.length === 1) {
  imagesGridContainer.classList.add('grid-1');
}



const playBtnCatalog = document.querySelectorAll('.catalog__play');
console.log(playBtnCatalog)
playBtnCatalog?.forEach((item) => {
  item.addEventListener('click', (e) => {
    const poster = e.currentTarget.dataset.poster;
    const dataSet = e.currentTarget.dataset.video;
    const popup = document.getElementById('video');
    const element = document.getElementById('plan-video');

    popup.classList.add('popup_show');
    document.body.classList.add('_lock');
    element.innerHTML = `<video width="100%"  controls playsinline poster="${poster}">
          <source src="${dataSet}" type="video/mp4">
        </video>`

  })
})


const scaleBtn = document.querySelectorAll('.project__scale');

scaleBtn.forEach((item) => {
  item.addEventListener('click', (e) => {

  })
})

const reviewsLink = document.querySelectorAll('.reviews__link');
reviewsLink?.forEach((item) => {
  item.addEventListener('click', (e) => {
    const prevElText = item.previousElementSibling.innerHTML;
    document.getElementById('text').innerHTML = prevElText;
  })
})

const titleTextBtn = document.querySelectorAll('[data-text]');
titleTextBtn?.forEach((item) => {
  item.addEventListener('click', (e) => {
    const text = item.dataset.text;
    const titlePopup = document.getElementById('title-popup');
    titlePopup.innerText = text;
  })
});


document.addEventListener("DOMContentLoaded", function () {
  // Проверяем, установлены ли куки
  if (!document.cookie.split('; ').find(row => row.startsWith('cookie_consent='))) {
    // Если куки не установлены, показываем уведомление
    document.getElementById('cookie-notice').style.display = 'block';
  }

  // Обработчик для кнопки согласия
  document.getElementById('accept-cookies').addEventListener('click', function () {
    // Устанавливаем куки на 1 год
    document.cookie = "cookie_consent=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
    // Скрываем уведомление
    document.getElementById('cookie-notice').style.display = 'none';
  });
});

// const heroBlockBottom = document.querySelector('.main-slider')?.getBoundingClientRect().bottom;
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {

  window.scrollY > 600 ? backToTopBtn.classList.add('active') : backToTopBtn.classList.remove('active');

});


backToTopBtn.addEventListener('click', (e) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const singleTextBtn = document.querySelector('.single__text-btn');
singleTextBtn?.addEventListener('click', (e) => {
  const nextEl  = singleTextBtn.nextElementSibling;
  nextEl.classList.toggle('active');
});


// Функция для проверки, равен ли экран 992px или больше
/*function checkDeviceWidth() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    console.log("Устройство: Desktop / Планшет (>= 992px)");
    // Ваш код для больших экранов
  } else {
    console.log("Устройство: Mobile / Планшет (< 992px)");
    // Ваш код для маленьких экранов
  }
}

// Проверка при загрузке
checkDeviceWidth();

// Проверка при изменении размера окна
window.addEventListener('resize', checkDeviceWidth);*/

document.addEventListener('DOMContentLoaded', () => {
  const tml = document.getElementById('tml');
  const target = document.getElementById('thiIs');
  const originalParent = tml?.parentElement;

  function moveBlock() {
    if (window.innerWidth <= 992) {

      // очищаем контейнер
      target.innerHTML = '';

      // переносим tml
      if(tml) {
        target.appendChild(tml);
      }

    } else {
      if (!originalParent?.contains(tml) && tml) {
        originalParent?.appendChild(tml);
      }
    }
  }

  moveBlock();
  window.addEventListener('resize', moveBlock);
});





