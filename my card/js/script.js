'use strict';

let btns = document.querySelectorAll('.btn');

function setColor(event) {
  let bgColor = event.target.dataset.color;
  document.documentElement.style.setProperty('--theme-color', bgColor);
}

btns.forEach(function (element) {
  element.addEventListener('click', setColor);
});
