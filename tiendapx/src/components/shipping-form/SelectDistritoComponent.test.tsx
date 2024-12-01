import { useDistritos } from "@/hooks/useDistritos";
import SelectDistritoComponent from "./SelectDistritoComponent";
import { fireEvent, render } from "@testing-library/react";

jest.mock("@/hooks/useDistritos");

describe("SelectDistritoComponent", () => {
    const mockDistritos = [
        {id: 1, nombre: "Distrito 1"},
        {id: 2, nombre: "Distrito 2"},
    ];
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("muestra 'Cargando distritos' cuando esta cargando", () => {
        (useDistritos as jest.Mock).mockReturnValue({
            distritos: [],
            loading: true
        });

        const {getByTestId} = render(<SelectDistritoComponent onChange={() => {}} />);
        expect(getByTestId("text-loading")).toHaveTextContent("Cargando distritos...");
    });
    test("muestra los datos cuando ha cargado", () => {
        (useDistritos as jest.Mock).mockReturnValue({
            distritos: mockDistritos,
            loading: false
        });

        const {getByTestId} = render(<SelectDistritoComponent onChange={() => {}} />);
        expect(getByTestId("initial-value")).toHaveTextContent("Selecciona un distrito")
    });
    test("llama al handleChange cuando se selecciona", () => {
        const mockOnChange = jest.fn();

        (useDistritos as jest.Mock).mockReturnValue({
            distritos: mockDistritos,
            loading: false
        });

        const {getByTestId} = render(<SelectDistritoComponent onChange={mockOnChange} />);
        const select = getByTestId("select-distrito");
        fireEvent.change(select, { target: {value: '2'} });

        expect(mockOnChange).toHaveBeenCalledTimes(1);

    });
    
});