import './style.css';

import { getAllProducts, clearContainer, renderProducts } from './products.js';
import { getAllCategories } from './categories.js';

window.productsGlobal = [];

const applyFilter = (container, keyText) => {
  clearContainer(container);

  let result = productsGlobal.filter(
    (producto) =>
      producto.title.toLowerCase().includes(keyText.toLowerCase()) ||
      producto.category === keyText
  );
  // result tiene productos filtrados
  renderProducts(container, result);
};

// Capturo al contenedor de los productos
// getElementsByClassName retorna un array [elemento]

// PASO 1
const productsContainer = document.getElementsByClassName('products');
const filterInput = document.getElementById('filter');
const categoriesSelect = document.getElementById('categories');
window.cartCounter = document.getElementById('qty-update');

// Valido que el contenedor exista
// products existe?
// la longitud de products es 1
if (productsContainer && productsContainer.length === 1) {
  // PASO 2
  getAllProducts(productsContainer[0]);
}

getAllCategories(categoriesSelect);

filterInput.addEventListener('keyup', function (event) {
  // capturo valor
  const text = event.target.value;

  applyFilter(productsContainer[0], text);
});

categoriesSelect.addEventListener('change', function (event) {
  const selected = event.target.value;
  // selected es el valor seleccionado
  applyFilter(productsContainer[0], selected);
});
