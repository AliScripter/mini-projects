'use strict';

let allProducts = [
  { id: 1, name: 'blue shoes', src: 'images/1.png', price: 200 },
  { id: 2, name: 'green shoes', src: 'images/2.png', price: 210 },
  { id: 3, name: 'yellow shoes', src: 'images/3.png', price: 220 },
  { id: 4, name: 'pink shoes', src: 'images/4.png', price: 230 },
];

let buttonEl = document.querySelector('button');
let h1El = document.querySelector('h1');
let pEl = document.querySelector('p');
let imgEl = document.querySelector('img');

let urlSearch = new URLSearchParams(location.search);
let idProduct = urlSearch.get('id');
idProduct = parseInt(idProduct);

let result = allProducts.find(item => {
  return idProduct === item.id;
});

if (result) {
  h1El.innerHTML = result.name;
  pEl.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at
    nobis, ipsum quas excepturi sed minus modi officia corrupti, veniam
    rem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur
    incidunt molestias? (${result.name})`;
  imgEl.src = result.src;
} else {
  alert(`Error 404 : NOT FOUND ! `);
}

buttonEl.addEventListener('click', () => {
  history.back();
});
