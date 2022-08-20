export const validate = (input) => {
  if (input.validity.valid) {
    input.classList.remove('invalid');
    input.parentElement.querySelector('[data-error]').innerHTML = '';
    checkFormValidity(input);
  } else {
    input.classList.add('invalid');
    input.parentElement.querySelector('[data-error]').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${showErrorMessage(input)}`;
    checkFormValidity(input);
  }
}

const errorMessages = {
  name: {
    tooShort: 'O nome é muito pequeno',
    valueMissing: 'O campo de nome está vazio'
  },
  message: {
    tooShort: 'A mensagem é muito pequena',
    valueMissing: 'O campo de mensagem está vazio'
  },
  email: {
    patternMismatch: 'O email não é válido. Ex: nome@email.com',
    typeMismatch: 'O email não é válido. Ex: nome@email.com',
    valueMissing: 'O campo de email está vazio'
  },
  password: {
    tooShort: 'A senha é muito pequena',
    valueMissing: 'O campo de senha está vazio'
  },
  url: {
    valueMissing: 'Nenhuma imagem selecionada'
  },
  category: {
    valueMissing: 'O campo de categoria está vazio'
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
  return message;
}

const checkFormValidity = (input) => {
  const form = input.closest('[data-form]');
  const submitButton = form.querySelector('[data-type="submit"]');
  if(form.checkValidity()) submitButton.removeAttribute('disabled');
  else submitButton.setAttribute('disabled', true);
}