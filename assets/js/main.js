import { searchProduct } from "./search-product.js";
import { validate } from "./validate-form.js";

const inputs = document.querySelectorAll('[data-type]');
inputs.forEach(input => {
  if (input.dataset.type === 'search') {
    input.addEventListener('input', (e) => searchProduct(e.target.value));
    return;
  }
  if (input.dataset.type === 'price') {
    SimpleMaskMoney.setMask(input, {
      prefix: 'R$ ',
      fixed: true,
      fractionDigits: 2,
      decimalSeparator: ',',
      thousandsSeparator: '.',
      cursor: 'end'
    })
  }
  if (input.dataset.type === 'url') {
    const nameFile = document.querySelector('[data-file="name"]')
    input.addEventListener('change', (e) => {
      if (e.target.files.length == 0) nameFile.textContent = 'Nenhuma imagem selecionada';
      else nameFile.textContent = e.target.files[0].name;
    });
  }
  input.addEventListener('blur', (e) => validate(e.target))
  input.addEventListener('focus', (e) => e.target.parentElement.querySelector('[data-error]').innerHTML = '')
});
