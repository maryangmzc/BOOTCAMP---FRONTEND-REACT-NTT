import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

const renderProduct = (productJson) => {
  // PASO 5
  const productArea = document.createElement('section');
  productArea.className = 'product';

  const imageArea = document.createElement('div');
  imageArea.className = 'image';

  const imgElement = document.createElement("img");
  imgElement.src = productJson["thumbnail"];

  imageArea.appendChild(imgElement);

  const titleArea = document.createElement('div');
  titleArea.className = 'title';
  titleArea.textContent = productJson["title"];

  const descArea = document.createElement('div');
  descArea.className = 'description';
  descArea.textContent = productJson["description"];


  productArea.appendChild(imageArea);
  productArea.appendChild(titleArea);
  productArea.appendChild(descArea);
  return productArea;
};

const renderProducts = (container, products) => {
  // PASO 4
  for (let i = 0; products.length > i; i++) { // ITERA
    let toRender = renderProduct(products[i]);
    // PASO 6 FINAL
    container.appendChild(toRender);
  }
};

const getAllProducts = async (container) => {
  // PASO 3
  const response = await fetch('https://dummyjson.com/products');
  const products = await response.json();
 
  renderProducts(container, products["products"]);
};

// Capturo al contenedor de los productos
// getElementsByClassName retorna un array [elemento]

// PASO 1
const products = document.getElementsByClassName('products');

// Valido que el contenedor exista
// products existe?
// la longitud de products es 1
if (products && products.length === 1) {
  // PASO 2
  getAllProducts(products[0]);
}
