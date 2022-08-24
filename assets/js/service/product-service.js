const DATABASE_URL = 'http://localhost:3000/products'

const productList = async () => {
  const response = await fetch(DATABASE_URL)
  if (response.ok) return response.json();
  throw new Error('Não foi possível listar os produtos')
}

const addProduct = (imageURL, name, price, description, category) => {
  return fetch(DATABASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({imageURL, name, price, description, category})
  })
  .then(response => { 
    if (response.ok) return response.body;
    throw new Error('Não foi possível adicionar o produto');
  })
}

const removeProduct = (id) => {
  return fetch(`${DATABASE_URL}/${id}`, {
    method: 'DELETE',
  })
  .then(response => {
    if (!response.ok) throw new Error('Não foi possível deletar o produto');
  })
}

const detailsProduct = (id) => {
  return fetch(`${DATABASE_URL}/${id}`)
  .then(response => {
    if(response.ok) return response.json()
    throw new Error('Não foi possível detalhar o produto');
  })
}

const updateProduct = (id, imageURL, name, price, description, category) => {
  return fetch(`${DATABASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({imageURL, name, price, description, category})
  })
  .then(response => {
    if (response.ok) return response.json();
    throw new Error('Não foi possível atualizar o produto');
  })
}

export const productServices = {
  productList,
  addProduct,
  removeProduct,
  detailsProduct,
  updateProduct
}