import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";

const DishModal = ({ isOpen, onClose, onSubmit, initialData, typeList }) => {
    const [formData, setFormData] = useState(initialData);
    const [errores, setErrores] = useState({});

    useEffect(() => {
        setFormData(initialData);
        setErrores({});
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrores(prev => ({ ...prev, [name]: "" })); // limpiar error al escribir
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.price || Number(formData.price) <= 0) newErrors.price = "El precio debe ser mayor a 0";
        if (!formData.type) newErrors.type = "Debe seleccionar una categoría";

        if (Object.keys(newErrors).length > 0) {
            setErrores(newErrors);
            return;
        }

        onSubmit(formData); // llamar función de creación/edición
    }

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-h2">{formData._id ? "Editar Plato" : "Nuevo Plato"}</h2>

                <Input
                    name="name"
                    label="Nombre:"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    error={errores.name}
                />

                <Input
                    name="price"
                    label="Precio:"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    error={errores.price}
                />

                <Input
                    name="description"
                    label="Descripción:"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    error={errores.description}
                />

                <Select
                    name="type"
                    label="Categoría"
                    firstOptionLabel="Seleccione la categoría"
                    value={formData.type}
                    onChange={handleChange}
                    lista={typeList}
                    error={errores.type}
                />

                <div className="modal-buttons">
                    <button className="button cancel" onClick={onClose}>Cancelar</button>
                    <button className="button create" onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default DishModal;
