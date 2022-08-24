import { productServices } from "../service/product-service.js"

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

const similarProduct = (imageURL, name, price, id) => {
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

const render = async () => {
  try {
    //GET SELECTED PRODUCT FROM DATABASE
    const id = new URL(window.location).searchParams.get('id');
    const productDetails = await productServices.detailsProduct(id);
    product(productDetails.imageURL, productDetails.name, productDetails.price, productDetails.description);

    //GET PRODUCT LIST FROM DATABASE TO SHOW SIMILAR PRODUCTS
    const productList = await productServices.productList();
    const productListSorted = productList.sort(() => 0.5 - Math.random());
    const similarProductsContainer = document.querySelector('[data-similar]');
    
    for (let i = 0; i < productListSorted.length; i++) {
      if (similarProductsContainer.childElementCount >= 6) break;
      if (productListSorted[i].category == productDetails.category && productListSorted[i].id != productDetails.id) {
        similarProductsContainer.appendChild(similarProduct(productListSorted[i].imageURL, productListSorted[i].name, productListSorted[i].price, productListSorted[i].id));
      }
    }
  } catch (err) {
    console.error(err);
  }
}

render();