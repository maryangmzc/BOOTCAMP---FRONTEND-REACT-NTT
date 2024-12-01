import { useNavigate } from "react-router-dom";

type Props = {
    qty: number
}


export function NavbarComponent(props: Props) {
    const navigate = useNavigate();

    return <>
        <nav className="navbar">
            <div>
                <h1 data-testid="title" onClick={() => navigate("/")}>Market</h1>
            </div>
            <div data-testid="cart-icon" className="cart" onClick={() => navigate("/resumen")}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="42" height="42" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                </svg>
                <div className="circle">
                    {props.qty}
                </div>
            </div>
        </nav>
    </>
}