import { searchProduct } from "./controller/search-product.js";
import { validate } from "./validate-form.js";

const inputs = document.querySelectorAll('[data-type]');
inputs.forEach(input => {
  switch (input.dataset.type) {
    case 'search':
      input.addEventListener('input', (e) => searchProduct(e.target.value));
      return;
    case 'file':
      const urlInput = document.querySelector('[data-type="url"]');
      input.addEventListener('change', (e) => {
        if (e.target.files.length > 0) urlInput.value = e.target.files[0].name;
        validate(urlInput);
      })
      return;
    case 'price':
      SimpleMaskMoney.setMask(input, {
        prefix: 'R$ ',
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: ',',
        thousandsSeparator: '.',
        cursor: 'end'
      })
      break;
  }
  input.addEventListener('blur', (e) => validate(e.target))
  input.addEventListener('focus', (e) => e.target.parentElement.querySelector('[data-error]').innerHTML = '')
});
