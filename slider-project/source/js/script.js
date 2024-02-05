'use strict';
let imgEl = document.querySelector('img');
let prevEl = document.querySelector('.prev');
let nextEl = document.querySelector('.next');
let imgArr = ['image/1.jpg', 'image/2.png', 'image/3.jpg'];
let index = 0;

function nextSlide() {
  index++;
  if (index > imgArr.length - 1) {
    index = 0;
  }

  imgEl.src = imgArr[index];
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = imgArr.length - 1;
  }
  imgEl.src = imgArr[index];
}

setInterval(nextSlide, 4e3);
nextEl.addEventListener('click', nextSlide);
prevEl.addEventListener('click', prevSlide);
