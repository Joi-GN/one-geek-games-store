import { productServices } from '../service/product-service.js';

const form = document.querySelector('[data-form]');
const urlInput = form.querySelector('[data-type="url"]');
const nameInput = form.querySelector('[data-type="name"]');
const priceInput = form.querySelector('[data-type="price"]');
const descriptionInput = form.querySelector('[data-type="description"]');
const categoryInput = form.querySelector('[data-type="category"]');

(async () => {
  let id = new URL(window.location).searchParams.get('id');

  try {
    let product = await productServices.detailsProduct(id);
    urlInput.value = product.imageURL;
    nameInput.value = product.name;
    priceInput.value = `R$ ${product.price}`;
    descriptionInput.value = product.description;
    categoryInput.value = product.category;
  }
  catch (err) {
    console.error(err);
  }
})()

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    await productServices.updateProduct(id, urlInput.value, nameInput.value, priceInput.formatToNumber(), descriptionInput.value, categoryInput.value.toLowerCase());
  }
  catch (err) {
    console.error(err)
  }
})