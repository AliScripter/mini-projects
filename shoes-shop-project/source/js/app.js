'use strict';

let allProducts = [
  { id: 1, name: 'blue shoes', src: 'images/1.png', price: 200 },
  { id: 2, name: 'green shoes', src: 'images/2.png', price: 210 },
  { id: 3, name: 'yellow shoes', src: 'images/3.png', price: 220 },
  { id: 4, name: 'pink shoes', src: 'images/4.png', price: 230 },
];

let containerEl = document.querySelector('.container');
let fragment = document.createDocumentFragment();
let newDiv;

allProducts.forEach(item => {
  newDiv = document.createElement('div');
  newDiv.className = 'product-card';
  newDiv.insertAdjacentHTML(
    'beforeend',
    `<h1>${item.name}</h1>
        <p>Lorem ipsum, or lipsum as it is sometimes known</p>
        <div class="product-pic" style="background-image: url(${item.src});"></div>
        <div class="product-info">
          <div class="product-price">${item.price} $</div>
          <a href="product.html?id=${item.id}" class="product-button">See More</a>
        </div>
      </div>`
  );

  fragment.append(newDiv);
});
containerEl.append(fragment);
