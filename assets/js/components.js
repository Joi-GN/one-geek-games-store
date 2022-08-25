const productListItem = (imageURL, name, price, id) => {
  const li = document.createElement('li');
  li.classList.add('product__list__item');
  const template = `
    <img src="${imageURL}" alt="" class="product__list__item__img">
    <h4 class="product__list__item__title">${name}</h4>
    <h5 class="product__list__item__price">R$ ${price}</h5>
    <a href="./product.html?id=${id}" class="product__list__item__link">Ver produto</a>
  `
  li.innerHTML = template;
  return li;
}

const productButtons = (id) => {
  const div = document.createElement('div');
  div.classList.add('product__list__item__icons');
  const template = `
    <button class="product__list__item__button" data-delete="${id}">
      <i class="fa-solid fa-trash product__list__item__icons__delete"></i>
    </button>
    <a href="./edit-product.html?id=${id}" class="product__list__item__button">
      <i class="fa-solid fa-pen-to-square product__list__item__icons__edit"></i>
    </a>
  `
  div.innerHTML = template;
  return div;
}

const product = (imageURL, name, price, description) => {
  const div = document.querySelector('[data-product]');
  const template = `
    <img src="${imageURL}" alt="" class="product__img">
    <div class="product__info">
      <h2 class="product__info__title">${name}</h2>
      <h4 class="product__info__price">R$ ${price}</h4>
      <p class="product__info__description">${description}</p>
    </div>
  `
   div.innerHTML = template; 
}

export const components = {
  productListItem,
  productButtons,
  product
}