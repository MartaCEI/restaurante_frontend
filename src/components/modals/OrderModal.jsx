import { useState, useEffect } from "react";
import Select from "@/components/forms/Select";

const OrderModal = ({ isOpen, onClose, onSubmit, initialData, statusList }) => {
    const [formData, setFormData] = useState(initialData || {});
    const [error, setError] = useState("");

    useEffect(() => {
        setFormData(initialData || {});
        setError("");
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.orderStatus) {
            setError("Debes seleccionar un estado");
            return;
        }
        onSubmit(formData);
    };

    if (!isOpen) return null;

    const displayFields = [
        { label: "Usuario", value: formData.userName },
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

                <div className="modal-body modal-info">
                    {displayFields.map((field, index) => (
                        <div key={index} className="modal-info-row">
                            <strong>{field.label}:</strong> <span>{field.value || "—"}</span>
                        </div>
                    ))}
                </div>

                <div className="modal-select">
                    <Select name="orderStatus" label="Actualizar estado" value={formData.orderStatus} onChange={handleChange} lista={statusList} firstOptionLabel="Selecciona un estado" error={error} />
                </div>

                <div className="modal-buttons">
                    <button className="button cancel" onClick={onClose}>Cancelar</button>
                    <button className="button create" onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
