import { useState } from "react";

type Props = {
    label: string;
    placeholder: string;
    touched: boolean;
    validate: (value: string) => boolean;
    onValid: (value: string) => void;
}
export default function InputText(props: Props) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        if ( !newValue.trim() ) {
            setError("Campo obligatorio");
            props.onValid("");
            return;
        }

        if (props.validate(newValue.trim())) {
            setError("");
            props.onValid(newValue.trim());
        } else {
            setError("Debe ingresar un valor válido.");
            props.onValid("");
        }
    }

    return (<>
        <div className="form-group">
            <label>{props.label}</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                className="form-field" placeholder={props.placeholder} />
            {error.length > 0 && <span className="error">{error}</span>}
            {error.length <= 0 && props.touched && !value && <span className="error">Campo obligatorio</span>}
        </div>
    </>)
}