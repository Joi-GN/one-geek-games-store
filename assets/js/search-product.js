import { productServices } from "./service/product-service.js"

const searchResultsDiv = document.getElementById('search-results');

export const searchProduct = async (value) => {
  const productList = await productServices.productList();
  searchResultsDiv.innerHTML = '';
  if (value.length > 0) {
    for (let i = 0; i < productList.length; i++) {
      let productName = productList[i].name;
      let filter = new RegExp(value, "i");

      if (filter.test(productName)) showMatch(productList[i].id, productName);
    }
    checkNoMatchesFound();
  }
}

const showMatch = (id, productName) => {
  const template = `<a href="./product.html?id=${id}" class="header__search-results__result">${productName}</a>`
  searchResultsDiv.innerHTML += template;
}

const checkNoMatchesFound = () => {
  if(!searchResultsDiv.hasChildNodes()) searchResultsDiv.innerHTML = `<p class="header__search-results__no-result">Nenhum resultado encontrado</p>`;
}