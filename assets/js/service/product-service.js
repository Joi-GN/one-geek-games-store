const productList = async () => {
  const response = await fetch('http://localhost:3000/products')
  return response.json();
}

const addProduct = (imageURL, name, price, description, category) => {
  return fetch('http://localhost:3000/products', {
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

export const productServices = {
  productList,
  addProduct
}