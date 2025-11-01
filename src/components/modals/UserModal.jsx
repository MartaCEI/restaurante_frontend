import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import ModalButtons from "@/components/modals/ModalButtons";

const UserModal = ({ isOpen, onClose, onSubmit, initialData, isAdminList }) => {
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
        if (!formData.username) newErrors.username = "El email es obligatorio";
        if (!formData.street?.trim()) newErrors.street = "La calle es obligatoria";
        if (!formData.city?.trim()) newErrors.city = "La ciudad es obligatoria";
        if (!formData.cp?.trim()) newErrors.cp = "El código postal es obligatorio";
        if (formData.isAdmin === undefined || formData.isAdmin === null) newErrors.isAdmin = "Debes seleccionar uno";

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
                <h2 className="modal-h2">{formData._id ? "Editar Usuario" : "Nuevo Usuario"}</h2>

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
                        name="username"
                        label="Email*"
                        type="text"
                        value={formData.username}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.username}
                        inputError="input--error"
                    />

                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="street"
                        label="Dirección*"
                        type="text"
                        value={formData.street}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.street}
                        inputError="input--error"
                    />

                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="city"
                        label="Ciudad*"
                        type="text"
                        value={formData.city}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.city}
                        inputError="input--error"
                    />

                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="cp"
                        label="Código Postal*"
                        type="text"
                        value={formData.cp}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.cp}
                        inputError="input--error"
                    />

                    <Select divClassName="form-labels"
                        selectClassName="select"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="isAdmin"
                        label="Administrador"
                        value={formData.isAdmin}
                        onChange={handleOnChange}
                        lista={isAdminList}
                        firstOptionLabel="Selecciona una opción"
                        error={errors.isAdmin}
                        inputError="input--error" />
                </div>

                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default UserModal;
