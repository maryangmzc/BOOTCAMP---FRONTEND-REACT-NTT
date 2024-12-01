import { ItemCart } from "../../entities/ItemCart";
import DetailTableComponent from "./DetailTableComponent";
import RowComponent from "./RowComponent";
import { Action } from "../../reducers/Reducer";
type Props = {
    items: ItemCart[],
    dispatch: React.Dispatch<Action>
}
export default function DetailComponent(props: Props) {

    return <>
        <section className="detail-area">
            <DetailTableComponent />
            {props.items.map((e: ItemCart, index: number) => <RowComponent dispatch={props.dispatch}
                item={e} key={index} />)}


            <div className="summary">
                <div>
                    Total a pagar: S/. {props.items.reduce((num: number, item: ItemCart) => num + item.qty * item.product.price, 0)}
                </div>
            </div>
        </section>
    </>
}