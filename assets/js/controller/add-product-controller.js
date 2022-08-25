import { productServices } from '../service/product-service.js';

const form = document.querySelector('[data-form]');
const urlInput = form.querySelector('[data-type="url"]');
const nameInput = form.querySelector('[data-type="name"]');
const priceInput = form.querySelector('[data-type="price"]');
const descriptionInput = form.querySelector('[data-type="description"]');
const categoryInput = form.querySelector('[data-type="category"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  //IF DESCRIPTION IS EMPTY, SET DEFAULT DESCRIPTION
  if (descriptionInput.value == '') descriptionInput.value = 'Nenhuma descrição informada.';
  try {
    await productServices.addProduct(urlInput.value, nameInput.value, priceInput.formatToNumber(), descriptionInput.value, categoryInput.value.toLowerCase());
  }
  catch (err) {
    console.error(err)
  }
})