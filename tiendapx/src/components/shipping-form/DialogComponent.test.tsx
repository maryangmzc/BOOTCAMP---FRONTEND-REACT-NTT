import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DialogComponent from "./DialogComponent";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));

describe("DialogComponent", () => {
    const mockDispatch = jest.fn();
    beforeEach(() => {
        mockedUsedNavigate.mockClear();
        mockDispatch.mockClear();
    });

    test("renderiza correctamente el mensaje de exito", () => {
        const {getByTestId} = render(<MemoryRouter>
            <DialogComponent dispatch={mockDispatch} />
        </MemoryRouter>)

        expect(getByTestId("message")).toHaveTextContent("Su pedido se registro con exito");
        expect(getByTestId("btn")).toHaveTextContent("Aceptar");
    });
    test("al presionar el boton aceptar, se llama al handler", () => {
        const {getByTestId} = render(<MemoryRouter>
            <DialogComponent dispatch={mockDispatch} />
        </MemoryRouter>)

        const btn = getByTestId("btn");
        fireEvent.click(btn);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: "REMOVE_ALL"
        });
    });
});
