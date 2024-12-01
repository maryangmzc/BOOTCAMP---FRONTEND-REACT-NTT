import { useEffect, useState } from "react";

type Props = {
    qty: number,
    callback: (value: number) => void
}
export default function SpinnerComponent(props: Props) {
    const [tmpQty, setTmpQty] = useState(props.qty);

    useEffect(() => {
        setTmpQty(props.qty);
    }, [props.qty]);

    const handlerValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTmpQty(parseInt(e.target.value));
    }
    return (<>
        <div className="spinner">
            <button onClick={() => props.callback(-1)}>-</button>
            <input type="number" value={tmpQty} onChange={handlerValue} />
            <button onClick={() => props.callback(1)}>+</button>
        </div>
    </>);
};