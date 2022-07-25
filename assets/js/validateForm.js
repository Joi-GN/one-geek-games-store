export const validate = (input) => {
  if (input.validity.valid) {
    input.classList.remove('invalid');
    input.parentElement.querySelector('[data-error]').innerHTML = '';
    checkFormValidity();
  } else {
    input.classList.add('invalid');
    input.parentElement.querySelector('[data-error]').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${showErrorMessage(input)}`;
    checkFormValidity();
  }
}

const errorMessages = {
  name: {
    tooShort: 'O nome digitado é muito pequeno',
    valueMissing: 'O campo de nome deve ser preenchido'
  },
  message: {
    tooShort: 'A mensagem digitada é muito pequena',
    valueMissing: 'O campo de mensagem deve ser preenchido'
  },
  email: {
    patternMismatch: 'O email digitado não é válido. Ex: nome@email.com',
    typeMismatch: 'O email digitado não é válido. Ex: nome@email.com',
    valueMissing: 'O campo de email deve ser preenchido'
  },
  password: {
    tooShort: 'A senha digitada é muito pequena',
    valueMissing: 'O campo de senha deve ser preenchido'
  }
}

const showErrorMessage = (input) => {
  const dataType = input.dataset.type;
  let message;
  if (errorMessages.hasOwnProperty(dataType)) {
    Object.keys(errorMessages[dataType]).forEach(error => {
      if(input.validity[error]) message = errorMessages[dataType][error];
    })
  }
  input.setCustomValidity(message);
  return message;
}

const checkFormValidity = () => {
  const submitButton = document.querySelector('[data-type="submit"]');
  const validForm = document.querySelector('[data-form]').checkValidity();
  if(validForm) submitButton.removeAttribute('disabled');
  else submitButton.setAttribute('disabled', true);
}