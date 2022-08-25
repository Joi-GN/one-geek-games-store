import { components } from "../components.js";
import { productServices } from "../service/product-service.js"

const render = async () => {
  try {
    //GET SELECTED PRODUCT FROM DATABASE
    const id = new URL(window.location).searchParams.get('id');
    const productDetails = await productServices.detailsProduct(id);
    components.product(productDetails.imageURL, productDetails.name, productDetails.price, productDetails.description);

    //GET PRODUCT LIST FROM DATABASE TO SHOW SIMILAR PRODUCTS
    const productList = await productServices.productList();
    const productListSorted = productList.sort(() => 0.5 - Math.random());
    const similarProductsContainer = document.querySelector('[data-similar]');
    
    for (let i = 0; i < productListSorted.length; i++) {
      if (similarProductsContainer.childElementCount >= 6) break;
      if (productListSorted[i].category == productDetails.category && productListSorted[i].id != productDetails.id) {
        similarProductsContainer.appendChild(components.productListItem(productListSorted[i].imageURL, productListSorted[i].name, productListSorted[i].price, productListSorted[i].id));
      }
    }
  } catch (err) {
    console.error(err);
  }
}

render();