'use strict';

const scrollEl = document.getElementById('scroll');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windowHeight = window.innerHeight;

  let scrollPrecent = scrollTop / (documentHeight - windowHeight);
  scrollPrecent = Math.round(scrollPrecent * 100);
  scrollEl.style.width = `${scrollPrecent}%`;
});
