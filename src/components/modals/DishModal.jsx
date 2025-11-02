import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import ModalButtons from "@/components/modals/ModalButtons";

const DishModal = ({ isOpen, onClose, onSubmit, initialData, typeList }) => {
    const [formData, setFormData] = useState(initialData); // Estado del formulario
    const [errors, setErrors] = useState({}); // Errores de validación

    // Actualiza el formulario al cambiar los datos iniciales
    useEffect(() => {
        setFormData(initialData);
        setErrors({});
    }, [initialData]);

    // Maneja cambios en los inputs
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    // Validación y envío del formulario
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

        onSubmit(formData); // Llamada al submit pasado por props
    };

    if (!isOpen) return null; // No renderizar si modal está cerrado

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-h2">{formData._id ? "Editar Plato" : "Nuevo Plato"}</h2>

                {/* Cuerpo del modal con inputs */}
                <div className="modal-body">
                    {/* Input para nombre */}
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
                        placeholder="Nombre del plato"
                        error={errors.name}
                        inputError="input--error"
                    />
                    {/* Input para precio */}
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
                        placeholder="Precio"
                        error={errors.price}
                        inputError="input--error"
                    />
                    {/* Input para descripción */}
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
                        placeholder="Descripción"
                        error={errors.description}
                        inputError="input--error"
                    />
                    {/* Selector de tipo de plato */}
                    <Select
                        divClassName="form-labels"
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
                        inputError="input--error"
                    />
                </div>

                {/* Botones de submit y cerrar */}
                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default DishModal;
