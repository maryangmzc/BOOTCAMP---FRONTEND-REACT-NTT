import {environments} from './environments.js';


export const renderProduct = (productJson) => {
  // PASO 5
  const productArea = document.createElement('section');
  productArea.className = 'product';

  const imageArea = document.createElement('div');
  imageArea.className = 'image';

  const imgElement = document.createElement('img');
  imgElement.src = productJson['thumbnail'];

  imageArea.appendChild(imgElement);

  const buttonCart = document.createElement("button");
  buttonCart.type = "button";
  buttonCart.className = "add-cart";
  buttonCart.textContent = "Anadir";


  const titleArea = document.createElement('div');
  titleArea.className = 'title';
  titleArea.textContent = productJson['title'];

  titleArea.appendChild(buttonCart);

  const descArea = document.createElement('div');
  descArea.className = 'description';
  descArea.textContent = productJson['description'];

  productArea.appendChild(imageArea);
  productArea.appendChild(titleArea);
  productArea.appendChild(descArea);
  return productArea;
};

export const applyEventsToButton = () => {
  const buttons = document.getElementsByClassName("add-cart");
  for(let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener("click", function() {
      let num = parseInt(window.cartCounter.textContent);
      num += 1;
      window.cartCounter.textContent = num;
    });
  }
};

export const renderProducts = (container, products) => {
  // PASO 4
  for (let i = 0; products.length > i; i++) {
    // ITERA
    let toRender = renderProduct(products[i]);
    // PASO 6 FINAL
    container.appendChild(toRender);
  }
  applyEventsToButton();
};

export const getAllProducts = async (container) => {
  // PASO 3
  const response = await fetch(`${environments['api']}products`);

  // products , solo existe dentro de getAllProducts
  const products = await response.json();

  window.productsGlobal = products['products'];

  clearContainer(container);
  renderProducts(container, productsGlobal);
};

export const clearContainer = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

