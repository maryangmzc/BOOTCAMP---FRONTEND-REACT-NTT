import { Product } from "../../entities/Product";

type Props = {
    product: Product,
    callback: (value: Product) => void,
}

function ProductComponent(props: Props) {

    const addToCart = () => {
        props.callback(props.product);
    }

    return (<>
        <div className="product-card">
            <div className="product-image">
                <img alt={props.product.title} src={props.product.thumbnail} />
            </div>
            <div data-testid="title" className="product-title">{props.product.title}</div>
            <div className="product-desc">{props.product.description}</div>
            <div className="product-extra">
                <button data-testid="btn-add-to-cart" className=""
                    onClick={addToCart}
                    type="button">Agregar a carrito</button>
            </div>
        </div>
    </>)
}

export default ProductComponent;