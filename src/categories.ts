import { Category } from './entities/category.ts';
import { environments } from './environments.ts';

export const renderCategories = (
  container: HTMLElement,
  categories: Category[]
) => {
  // EL CONTENEDOR ES EL SELECT
  for (let i = 0; categories.length > i; i++) {
    const opt = document.createElement('option'); // CREA NODO
    opt.value = categories[i].slug; // EL VALOR DEL SELECCIONABLE
    opt.textContent = categories[i].name; // EL USUARIO LO VEE

    container.appendChild(opt); // SE INCLUYE EN EL SELECT
  }
};

export const getAllCategories = async (container: HTMLElement) => {
  const response = await fetch(`${environments['api']}products/categories`);

  // products , solo existe dentro de getAllProducts
  const categories = await response.json();
  renderCategories(container, categories);
};
