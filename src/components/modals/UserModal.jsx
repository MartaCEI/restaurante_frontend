import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";

const UserModal = ({ isOpen, onClose, onSubmit, initialData, isAdminList }) => {
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
        if (!formData.username?.trim()) newErrors.username = "El email es obligatorio";
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
                    <Input className="modal-input" name="name" label="Nombre:" type="text" value={formData.name} onChange={handleChange} error={errors.name} />
                    <Input className="modal-input" name="username" label="Email:" type="email" value={formData.username} onChange={handleChange} error={errors.username} />
                    <Input className="modal-input" name="street" label="Calle:" type="text" value={formData.street} onChange={handleChange} error={errors.street} />
                    <Input className="modal-input" name="city" label="Ciudad:" type="text" value={formData.city} onChange={handleChange} error={errors.city} />
                    <Input className="modal-input" name="cp" label="Código Postal:" type="text" value={formData.cp} onChange={handleChange} error={errors.cp} />

                    <Select className="modal-select" name="isAdmin" label="Administrador" value={formData.isAdmin} onChange={handleChange} lista={isAdminList} firstOptionLabel="Selecciona una opción" error={errors.isAdmin} />
                </div>

                <div className="modal-buttons">
                    <button className="button cancel" onClick={onClose}>Cancelar</button>
                    <button className="button create" onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default UserModal;
