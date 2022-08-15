const productList = async () => {
  const response = await fetch('http://localhost:3000/products')
  return response.json();
}

export const productServices = {
  productList,
}