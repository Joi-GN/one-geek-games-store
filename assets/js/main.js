import { validate } from "./validateForm.js";

const inputs = document.querySelectorAll('[data-type]');

inputs.forEach(input => input.addEventListener('blur', (e) => validate(e.target)));
inputs.forEach(input => input.addEventListener('focus', () => input.parentElement.querySelector('[data-error]').innerHTML = ''));