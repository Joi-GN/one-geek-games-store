import { components } from "../components.js";
import { productServices } from "../service/product-service.js";

const render = async () => {
  try {
    //GET PRODUCT LIST FROM DATABASE TO SHOW PRODUCTS
    const productList = await productServices.productList();
    productList.forEach(product => {
      const productListElement = document.querySelector(`[data-product-list="${product.category}"]`);
      if (productListElement.childElementCount >= 6) return;
      const productLi = components.productListItem(product.imageURL, product.name, product.price, product.id);
      productListElement.appendChild(productLi);
    })
  }
  catch (err) {
    console.error(err);
  }
}

render();