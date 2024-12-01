import { Product } from "./Product";

export interface ItemCart {
    product: Product;
    qty: number,
    qty_to_update?: number;
};