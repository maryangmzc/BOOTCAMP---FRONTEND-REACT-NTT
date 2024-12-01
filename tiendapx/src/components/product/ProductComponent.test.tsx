import { fireEvent, render } from "@testing-library/react";
import ProductComponent from "./ProductComponent";
import { Product } from "@/entities/Product";

const mockProduct: Product = {
    id: 1,
    title: 'Product de prueba',
    description: 'Descripcion del producto',
    thumbnail: 'https://ejemplo.com/imagen.jpg',
    price: 100
};

describe("ProductComponent", () => {
    test("renderiza correctamente los detalles del producto", () => {
        const mockCallback = jest.fn();
        const { getByTestId, getByAltText } = render(<ProductComponent product={mockProduct}
            callback={mockCallback} />);

        const title = getByTestId("title");
        const image = getByAltText(mockProduct.title) as HTMLImageElement;

        expect(title).toHaveTextContent("Product de prueba");
        expect(image.src).toBe(mockProduct.thumbnail);
    });
    test("al presionar click en Agregar a Carrito llama al callback", () => {
        const mockCallback = jest.fn();

        const { getByTestId } = render(<ProductComponent product={mockProduct}
            callback={mockCallback} />);

        const btn = getByTestId("btn-add-to-cart");
        fireEvent.click(btn); // clickear al boton

        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(mockCallback).toHaveBeenCalledWith(mockProduct);
    });
});