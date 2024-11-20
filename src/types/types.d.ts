import { Product } from '../entities/product';

export {}; // Asegura que sea un módulo

declare global {
  interface Window {
    cartCounter: HTMLElement | null;
    productsGlobal: Product[];
  }
}
