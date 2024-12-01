import { Action } from "@/reducers/Reducer";
import { useNavigate } from "react-router-dom";

type Props = {
    dispatch: React.Dispatch<Action>
}
export default function DialogComponent(props: Props) {

    const navigate = useNavigate();
    const handleClick = () => {
        props.dispatch({
            type: "REMOVE_ALL"
        });
        navigate("/")
    }
    return (<>
        <section className="dialog">
            <div className="content">
                <h4 data-testid="message">Su pedido se registro con exito</h4>
                <button data-testid="btn" onClick={handleClick} type="button">Aceptar</button>
            </div>
        </section>
    </>);
}