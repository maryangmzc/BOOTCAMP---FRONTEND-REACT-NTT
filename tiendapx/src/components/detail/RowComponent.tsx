import { ItemCart } from "../../entities/ItemCart";
import { Action } from "../../reducers/Reducer";
import SpinnerComponent from "./SpinnerComponent";

type Props = {
    item: ItemCart,
    dispatch: React.Dispatch<Action>
}

export default function RowComponent(props: Props) {
    const remove = () => {
        props.dispatch({
            "type": "REMOVE_FROM_CART",
            "payload": props.item
        })
    }
    const updateQty = (qty: number) => {
        if ((props.item.qty + qty) <= 0) {
            props.dispatch({
                "type": "REMOVE_FROM_CART",
                "payload": props.item
            })
        } else {
            props.dispatch({
                "type": "UPDATE_QTY",
                "payload": { ...props.item, "qty": props.item.qty + qty }
            })
        }
    }
    return (
        <section className="detail-row-area">
            <div className="col">
                <img width={36} src={props.item.product.thumbnail} />
            </div>
            <div className="col">{props.item.product.title}</div>
            <div className="col">{props.item.product.price}</div>
            <div className="col">
                <SpinnerComponent callback={updateQty} qty={props.item.qty} />
            </div>
            <div className="col">
                <button onClick={remove} type="button">Eliminar</button>
            </div>
        </section>
    );
}