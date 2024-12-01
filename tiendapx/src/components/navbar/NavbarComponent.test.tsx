import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { NavbarComponent } from "./NavbarComponent";
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));

describe("NavbarComponent", () => {
    beforeEach(() => {
        mockedUsedNavigate.mockClear();
    });

    test("click en el titulo redirige a la pagina principal", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <NavbarComponent qty={0} />
            </MemoryRouter>
        );
        const title = getByTestId("title");
        fireEvent.click(title);
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
    });

    test("click en el carrito redirige a la pagina resumen", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <NavbarComponent qty={0} />
            </MemoryRouter>
        );
        const cartIcon = getByTestId("cart-icon");
        fireEvent.click(cartIcon);
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/resumen");
    });
});

describe("Navbar Component", () => {
    test("Deberia renderizarse", async () => {
        user.setup();


        render(
            <Router>
                <NavbarComponent qty={2} />
            </Router>

        );

        const titleH1 = screen.getByTestId("title");

        expect(titleH1).toHaveTextContent("Market");
    });
});
