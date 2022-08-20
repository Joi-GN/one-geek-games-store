import { productServices } from '../service/product-service.js';

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let url = form.querySelector('[data-type="url"]').value;
  let name = form.querySelector('[data-type="name"]').value;
  let price = form.querySelector('[data-type="price"]').formatToNumber();
  let description = form.querySelector('[data-type="description"]').value;
  let category = form.querySelector('[data-type="category"]').value;

  productServices.addProduct(url, name, price, description, category);
})