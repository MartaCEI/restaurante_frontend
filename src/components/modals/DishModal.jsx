import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import ModalButtons from "@/components/modals/ModalButtons";

const DishModal = ({ isOpen, onClose, onSubmit, initialData, typeList }) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(initialData);
        setErrors({});
    }, [initialData]);

    const handleOnChange = (e) => {
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
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="name"
                        label="Nombre*"
                        type="text"
                        value={formData.name}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.name}
                        inputError="input--error"
                    />
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="price"
                        label="Precio *"
                        type="number"
                        value={formData.price}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.price}
                        inputError="input--error"
                    />
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="description"
                        label="Descripción*"
                        type="text"
                        value={formData.description}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.description}
                        inputError="input--error"
                    />
                    <Select divClassName="form-labels"
                        selectClassName="select"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="type"
                        label="Administrador"
                        value={formData.type}
                        onChange={handleOnChange}
                        lista={typeList}
                        firstOptionLabel="Selecciona una opción"
                        error={errors.type}
                        inputError="input--error" />
                </div>
                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default DishModal;
