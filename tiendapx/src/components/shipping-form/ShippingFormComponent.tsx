import { useState } from "react";
import InputText from "../input-text/InputTextComponent";
import { Shipping } from "@/entities/Shipping";
import SelectDistritoComponent from "./SelectDistritoComponent";
import { Distrito } from "@/hooks/useDistritos";

type Props = {
    onSubmit: () => void;
}

export default function ShippingFormComponent(props: Props) {
    const [shippingModel, setShippingModel] = useState({} as Shipping);
    const [touched, setTouched] = useState(false);
    const validateText = (value: string): boolean => {
        if (!value) {
            return false;
        }
        const regex = /^[\p{L}\s]+$/u;
        if (regex.test(value)) {
            return true;
        }
        return false;
    }

    const validateTextNumbers = (value: string): boolean => {
        if (!value) {
            return false;
        }
        const regex = /^[\p{L}\d\s]+$/u;
        if (regex.test(value)) {
            return true;
        }
        return false;
    }

    const validateNumbers = (value: string): boolean => {
        if (!value) {
            return false;
        }
        const regex = /^\d+$/;
        if (regex.test(value)) {
            return true;
        }
        return false;
    }

    const updateChangesOnField = (field: string, value: string) => {
        setShippingModel({
            ...shippingModel,
            [field]: value
        });
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTouched(true);
        if (shippingModel.address && shippingModel.district
            && shippingModel.first_name && shippingModel.last_name &&
            shippingModel.phone && shippingModel.reference) {
            console.log("DATOS DEL FORMULARIO: ", shippingModel);
            props.onSubmit();
        }
    }

    const hangleDistrito = (e: Distrito | null) => {
        setShippingModel({
            ...shippingModel,
            district: e
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="shipping-form">
                <div className="form-group">
                    <h3>Formulario de Envio</h3>
                </div>

                <InputText touched={touched}
                    validate={validateText}
                    onValid={(value: string) => updateChangesOnField("first_name", value)}
                    label={"Nombres"} placeholder={"Ingresa tu nombre"} />

                <InputText touched={touched}
                    validate={validateText}
                    onValid={(value: string) => updateChangesOnField("last_name", value)}
                    label={"Apellidos"} placeholder={"Ingresa tus apellidos"} />

                <SelectDistritoComponent onChange={hangleDistrito} />

                <InputText touched={touched}
                    validate={validateTextNumbers}
                    onValid={(value: string) => updateChangesOnField("address", value)}
                    label={"Direccion"} placeholder={"Ingresa tu direccion"} />

                <InputText touched={touched}
                    validate={validateTextNumbers}
                    onValid={(value: string) => updateChangesOnField("reference", value)}
                    label={"Referencia"} placeholder={"Ingresa la referencia de tu direccion"} />

                <InputText touched={touched}
                    validate={validateNumbers}
                    onValid={(value: string) => updateChangesOnField("phone", value)}
                    label={"Celular"} placeholder={"Ingresa tu numero de celular"} />


                <div className="form-group">
                    <button className="" type="submit">Comprar</button>
                </div>
            </form>
        </>
    )
}