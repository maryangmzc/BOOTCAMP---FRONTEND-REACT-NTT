import { useEffect, useReducer, useState } from "react";
import DetailComponent from "../components/detail/DetailComponent";
import cartReducer from "../reducers/Reducer";
import { ItemCart } from "../entities/ItemCart";
import ShippingFormComponent from "@/components/shipping-form/ShippingFormComponent";
import DialogComponent from "@/components/shipping-form/DialogComponent";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";

function Resumen() {
    const [state, dispatch] = useReducer(cartReducer, []);
    const [showDialog, setShowDialog] = useState(false);
    useEffect(() => {
        let data = localStorage.getItem("cart");
        if (data) {
            dispatch({
                "type": "INIT",
                "payload": JSON.parse(data)
            })
        }
    }, []);

    useEffect(() => {
        console.log("MODI", state);
    }, [state]);

    const handleSubmit = () => {
        setShowDialog(true);
    }


    return (
        <>

            <NavbarComponent qty={state.reduce((num: number, item: ItemCart) => num + item.qty, 0)} />
            <section className='main-content '>
                <DetailComponent dispatch={dispatch} items={state} />
                <ShippingFormComponent onSubmit={handleSubmit} />
                {showDialog &&
                    <DialogComponent dispatch={dispatch} />}
            </section>
        </>
    )
}
export default Resumen;