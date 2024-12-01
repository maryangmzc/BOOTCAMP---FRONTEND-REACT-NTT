import { ItemCart } from "../entities/ItemCart";

type State = ItemCart[];

export type Action =
    | { type: "INIT", payload: ItemCart[] }
    | { type: "ADD_TO_CART", payload: ItemCart }
    | { type: "REMOVE_FROM_CART", payload: ItemCart }
    | { type: "UPDATE_QTY", payload: ItemCart }
    | { type: "REMOVE_ALL" }

function cartReducer(state: State, action: Action): State {
    switch (action.type) {
        case "INIT":
            let newValues = action.payload.filter((e:ItemCart) => 
                    !state.map((e:ItemCart) => e.product.id).includes(e.product.id))
            
            return [...state, ...newValues];
        case "ADD_TO_CART":
            let tmp_0 = state.find((e: ItemCart) => e.product.id === action.payload.product.id) ?
                state.map((e: ItemCart) => e.product.id === action.payload.product.id ?
                    { ...e, qty: e.qty + 1 } : { ...e }) :
                [...state, { ...action.payload }];

            localStorage.setItem("cart", JSON.stringify(tmp_0));
            return tmp_0;

        case "REMOVE_FROM_CART":
            let tmp = [...state.filter((e: ItemCart) =>
                e.product.id !== action.payload.product.id)];
            localStorage.setItem("cart", JSON.stringify(tmp));
            return tmp;
        case "UPDATE_QTY":
            let tmp_2 = [...state.map((e: ItemCart) => (e.product.id === action.payload.product.id) ?
                { ...e, "qty": action.payload.qty } : { ...e }
            )];
            localStorage.setItem("cart", JSON.stringify(tmp_2));

            return tmp_2;
        case "REMOVE_ALL":
                localStorage.clear();
                return [];
        default:
            throw new Error("Error xD");
    }
}
export default cartReducer;