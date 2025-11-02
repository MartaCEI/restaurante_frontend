import { useState, useEffect } from "react";
import Select from "@/components/forms/Select";
import ModalButtons from "@/components/modals/ModalButtons";

const OrderModal = ({ isOpen, onClose, onSubmit, initialData, statusList }) => {
    const [formData, setFormData] = useState(initialData || {}); // Estado del formulario
    const [errors, setErrors] = useState(""); // Errores de validación

    // Actualiza el formulario cuando cambian los datos iniciales
    useEffect(() => {
        setFormData(initialData || {});
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
        if (formData.orderStatus === undefined || formData.orderStatus === null) newErrors.orderStatus = "Debes seleccionar uno";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onSubmit(formData); // Llamada al submit pasado por props
    };

    if (!isOpen) return null; // No renderizar si modal está cerrado

    // Campos que se muestran en el modal (solo lectura)
    const displayFields = [
        { label: "Usuario", value: formData.user },
        { label: "Email", value: formData.email },
        { label: "Platos", value: formData.items },
        { label: "Total", value: `$${formData.totalPrice}` },
        { label: "Estado actual", value: formData.orderStatus },
        { label: "Fecha de creación", value: formData.createdAt },
    ];

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-h2">Detalles del Pedido</h2>

                {/* Información de la orden */}
                <div className="modal-body modal-info">
                    {displayFields.map((field, index) => (
                        <div key={index} className="modal-info-row">
                            <strong>{field.label}:</strong> <span>{field.value || "—"}</span>
                        </div>
                    ))}
                </div>

                {/* Selector de estado para el administrador */}
                <Select
                    divClassName="form-labels"
                    selectClassName="select"
                    labelClassName="form-label"
                    spanLabel="input-label"
                    name="orderStatus"
                    label="Administrador"
                    value={formData.orderStatus}
                    onChange={handleOnChange}
                    lista={statusList}
                    firstOptionLabel="Selecciona una opción"
                    error={errors.orderStatus}
                    inputError="input--error"
                />

                {/* Botones de submit y cerrar */}
                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default OrderModal;
