import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import ModalButtons from "@/components/modals/ModalButtons";

const UserModal = ({ isOpen, onClose, onSubmit, initialData, isAdminList }) => {
    // Estado local para almacenar los datos del formulario
    const [formData, setFormData] = useState(initialData);

    // Estado para manejar errores de validación en cada campo
    const [errors, setErrors] = useState({});

    // Cada vez que cambian los datos iniciales (nuevo usuario o usuario a editar),
    // se reinicia el formulario y se borran los errores
    useEffect(() => {
        setFormData(initialData);
        setErrors({});
    }, [initialData]);

    // Maneja los cambios en los inputs y select
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el valor del campo modificado
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpia el error de ese campo si lo había
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita la recarga de página

        // Validación de los campos requeridos
        const newErrors = {};
        if (!formData.name?.trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.username) newErrors.username = "El email es obligatorio";
        if (!formData.street?.trim()) newErrors.street = "La calle es obligatoria";
        if (!formData.city?.trim()) newErrors.city = "La ciudad es obligatoria";
        if (!formData.cp?.trim()) newErrors.cp = "El código postal es obligatorio";
        if (formData.isAdmin === undefined || formData.isAdmin === null) newErrors.isAdmin = "Debes seleccionar uno";

        // Si hay errores, se setean y se detiene el envío
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Si todo es correcto, se llama a la función onSubmit pasada como prop
        onSubmit(formData);
    };

    // Si el modal no está abierto, no renderiza nada
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                {/* Título dinámico según si es edición o nuevo usuario */}
                <h2 className="modal-h2">{formData._id ? "Editar Usuario" : "Nuevo Usuario"}</h2>

                <div className="modal-body">
                    {/* Input para el nombre */}
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
                        placeholder="Introduce tu nombre"
                        error={errors.name}
                        inputError="input--error"
                    />

                    {/* Input para el email */}
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

                    {/* Input para la dirección */}
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
                        placeholder="Introduce tu dirección y número"
                        error={errors.street}
                        inputError="input--error"
                    />

                    {/* Input para la ciudad */}
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
                        placeholder="Introduce tu ciudad"
                        error={errors.city}
                        inputError="input--error"
                    />

                    {/* Input para el código postal */}
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
                        placeholder="Introduce el código postal"
                        error={errors.cp}
                        inputError="input--error"
                    />

                    {/* Select para definir si es admin */}
                    <Select
                        divClassName="form-labels"
                        selectClassName="select"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="isAdmin"
                        label="Administrador"
                        value={formData.isAdmin}
                        onChange={handleOnChange}
                        lista={isAdminList} // Opciones true/false
                        firstOptionLabel="Selecciona una opción"
                        error={errors.isAdmin}
                        inputError="input--error"
                    />
                </div>

                {/* Botones del modal: guardar y cerrar */}
                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default UserModal;

