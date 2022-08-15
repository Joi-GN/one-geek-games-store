import { productServices } from "../service/product-service.js";

const newProduct = (imageURL, name, price, id) => {
  const li = document.createElement('li');
  li.classList.add('product__list__item');
  const template = `
    <img src="${imageURL}" alt="" class="product__list__item__img">
    <h4 class="product__list__item__title">${name}</h4>
    <h5 class="product__list__item__price">R$ ${price}</h5>
    <a href="./product.html?${id}" class="product__list__item__link">Ver produto</a>
  `
  li.innerHTML = template;
  return li;
}

const productButtons = () => {
  const div = document.createElement('div');
  div.classList.add('product__list__item__icons');
  const template = `
    <button class="product__list__item__button">
      <i class="fa-solid fa-trash product__list__item__icons__delete"></i>
    </button>
    <button class="product__list__item__button">
      <i class="fa-solid fa-pen-to-square product__list__item__icons__edit"></i>
    </button>
  `
  div.innerHTML = template;
  return div;
}

const render = async () => {
  try {
    const productList = await productServices.productList();
    productList.forEach(product => {
      const productListElement = document.querySelector(`[data-product-list="${product.category}"]`) || document.querySelector(`[data-product-list]`);
      const productLi = newProduct(product.imageURL, product.name, product.price, product.id);
      const pathnameRegex = /[\w-]+\.html/;
      const pathname = pathnameRegex.exec(window.location.pathname)[0];
      if (pathname === 'all-products.html') productLi.appendChild(productButtons());
      productListElement.appendChild(productLi);
    })
  }
  catch (err) {
    console.error(err);
  }
}

render();