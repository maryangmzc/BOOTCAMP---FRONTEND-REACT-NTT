import './style.css';

import { getAllProducts, clearContainer, renderProducts } from './products.ts';
import { Product } from './entities/product.ts';
import { getAllCategories } from './categories.ts';

if (typeof window.cartCounter === 'undefined') {
  window.cartCounter = document.getElementById('qty-update');
}

if (typeof window.productsGlobal === 'undefined') {
  window.productsGlobal = [];
}

const applyFilter = (container: HTMLElement, keyText: string) => {
  clearContainer(container);

  const result = window.productsGlobal.filter(
    (producto: Product) =>
      producto.title.toLowerCase().includes(keyText.toLowerCase()) ||
      producto.category === keyText
  );
  // result tiene productos filtrados
  renderProducts(container, result);
};

// Capturo al contenedor de los productos
// getElementsByClassName retorna un array [elemento]

// PASO 1
const productsContainer: HTMLCollection =
  document.getElementsByClassName('products');

const filterInput: HTMLElement | null = document.getElementById('filter');

const categoriesSelect: HTMLElement | null =
  document.getElementById('categories');

// Valido que el contenedor exista
// products existe?
// la longitud de products es 1
if (productsContainer && productsContainer.length === 1) {
  // PASO 2
  getAllProducts(productsContainer[0] as HTMLElement);
}

getAllCategories(categoriesSelect as HTMLElement);

filterInput?.addEventListener('keyup', function (event: KeyboardEvent) {
  // capturo valor
  const text = (event.target as HTMLInputElement).value;

  applyFilter(productsContainer[0] as HTMLElement, text);
});

categoriesSelect?.addEventListener('change', function (event) {
  const selected = (event.target as HTMLSelectElement).value;
  // selected es el valor seleccionado
  applyFilter(productsContainer[0] as HTMLElement, selected);
});
