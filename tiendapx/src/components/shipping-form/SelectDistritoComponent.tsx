import { useDistritos } from "@/hooks/useDistritos";
import React from "react";

type Props = {
    onChange: (distrito: { id: number; nombre: string } | null) => void;
};

const SelectDistritoComponent = (props: Props) => {
    const { distritos, loading } = useDistritos();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(event.target.value, 10);
        const selectedDistrito = distritos.find((d) => d.id === selectedId) || null;
        props.onChange(selectedDistrito);
    };

    if (loading) {
        return <p data-testid="text-loading">Cargando distritos...</p>;
    }

    return (
        <div className="form-group">
            <label>Seleccione distrito:</label>
            <select data-testid="select-distrito" className="form-field" onChange={handleChange} defaultValue="">
                <option data-testid="initial-value" value="" disabled>
                    Selecciona un distrito
                </option>
                {distritos.map((distrito) => (
                    <option key={distrito.id} value={distrito.id}>
                        {distrito.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDistritoComponent;
