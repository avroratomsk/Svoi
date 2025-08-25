import * as functions from './modules/baseFunctions.js';

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
  styleDiv.left  = e.clientX - rect.left - (maxValue / 2) + px;
  styleDiv.top  = e.clientY - rect.top - (maxValue / 2) + px;

  divAnimate.classList.add('pulse');
  e.currentTarget.appendChild(divAnimate);

  setTimeout(function () {
    // document.querySelectorAll('.pulse').forEach(el => el.remove());
  }, 1000)
}

linkHeader?.forEach(link => {
  link.addEventListener('click', addEffect)
})
