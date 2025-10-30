import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";

const DishModal = ({ isOpen, onClose, onSubmit, initialData, typeList }) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(initialData);
        setErrors({});
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name?.trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.price || Number(formData.price) <= 0) newErrors.price = "El precio debe ser mayor a 0";
        if (!formData.type) newErrors.type = "Debe seleccionar una categoría";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-h2">{formData._id ? "Editar Plato" : "Nuevo Plato"}</h2>

                <div className="modal-body">
                    <Input className="modal-input" name="name" label="Nombre:" type="text" value={formData.name} onChange={handleChange} error={errors.name} />
                    <Input className="modal-input" name="price" label="Precio:" type="number" value={formData.price} onChange={handleChange} error={errors.price} />
                    <Input className="modal-input" name="description" label="Descripción:" type="text" value={formData.description} onChange={handleChange} error={errors.description} />
                    <Select className="modal-select" name="type" label="Categoría" value={formData.type} onChange={handleChange} lista={typeList} firstOptionLabel="Seleccione la categoría" error={errors.type} />
                </div>

                <div className="modal-buttons">
                    <button className="button cancel" onClick={onClose}>Cancelar</button>
                    <button className="button create" onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default DishModal;
