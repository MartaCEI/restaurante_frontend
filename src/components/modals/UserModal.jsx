import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";

const UserModal = ({ isOpen, onClose, onSubmit, initialData, isAdminList }) => {
    const [formData, setFormData] = useState(initialData);
    const [errores, setErrores] = useState({});

    useEffect(() => {
        setFormData(initialData);
        setErrores({});
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrores(prev => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.username.trim()) newErrors.username = "El email es obligatorio";
        if (!formData.street.trim()) newErrors.street = "La calle es obligatoria";
        if (!formData.city.trim()) newErrors.city = "La ciudad es obligatoria";
        if (!formData.cp.trim()) newErrors.cp = "El código postal es obligatorio";
        if (!formData.isAdmin) newErrors.isAdmin = "Debes seleccionar uno";

        if (Object.keys(newErrors).length > 0) {
            setErrores(newErrors);
            return;
        }

        onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-h2">{formData._id ? "Editar Usuario" : "Nuevo Usuario"}</h2>

                <Input name="name" label="Nombre:" type="text" value={formData.name} onChange={handleChange} error={errores.name} />
                <Input name="username" label="Email:" type="email" value={formData.username} onChange={handleChange} error={errores.username} />
                <Input name="street" label="Calle:" type="text" value={formData.street} onChange={handleChange} error={errores.street} />
                <Input name="city" label="Ciudad:" type="text" value={formData.city} onChange={handleChange} error={errores.city} />
                <Input name="cp" label="Código Postal:" type="text" value={formData.cp} onChange={handleChange} error={errores.cp} />

                <Select
                    name="isAdmin"
                    label="Administrador"
                    firstOptionLabel="Selecciona una opción"
                    value={formData.isAdmin}
                    onChange={handleChange}
                    lista={isAdminList}
                    error={errores.isAdmin}
                />

                <div className="modal-buttons">
                    <button className="button cancel" onClick={onClose}>Cancelar</button>
                    <button className="button create" onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default UserModal;
