import { components } from "../components.js";
import { productServices } from "../service/product-service.js";

const render = async () => {
  //REGEX TO GET PATHNAME OF WINDOW'S LOCATION
  const pathnameRegex = /[\w-]+\.html/;
  const pathname = pathnameRegex.exec(window.location.pathname)[0];
  try {
    //GET PRODUCT LIST FROM DATABASE TO SHOW PRODUCTS
    const productList = await productServices.productList();
    productList.forEach(product => {
      const productListElement = document.querySelector(`[data-product-list]`);
      const productLi = components.productListItem(product.imageURL, product.name, product.price, product.id);
      
      //ADD BUTTONS TO PRODUCT IF ITS ADMIN MENU
      if (pathname === 'admin-menu.html') {
        productLi.appendChild(components.productButtons(product.id));
        //ADD EVENT LISTENER TO DELETE BUTTON
        const deleteButton = productLi.querySelector(`[data-delete]`)
        deleteButton.addEventListener('click', (e) => {
          const id = e.target.parentElement.dataset.delete;
          if (confirm('Tem certeza que deseja deletar o produto?')) productServices.removeProduct(id);
        })
      }
      productListElement.appendChild(productLi);
    })
  }
  catch (err) {
    console.error(err);
  }
}

render();