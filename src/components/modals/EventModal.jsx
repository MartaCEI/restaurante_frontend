import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";

const EventModal = ({ isOpen, onClose, onSubmit, initialData }) => {
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

        if (!formData.title.trim()) newErrors.title = "El título es obligatorio";
        if (!formData.description.trim()) newErrors.description = "La descripción es obligatoria";
        if (!formData.date.trim()) newErrors.date = "La fecha es obligatoria";
        if (!formData.time.trim()) newErrors.time = "La hora es obligatoria";
        if (!formData.img.trim()) newErrors.img = "La URL de la imagen es obligatoria";

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
                <h2 className="modal-h2">{formData._id ? "Editar Evento" : "Nuevo Evento"}</h2>

                <Input name="title" label="Título:" type="text" value={formData.title} onChange={handleChange} error={errors.title} />
                <Input name="description" label="Descripción:" type="text" value={formData.description} onChange={handleChange} error={errors.description} />
                <Input name="date" label="Fecha:" type="text" value={formData.date} onChange={handleChange} error={errors.date} />
                <Input name="time" label="Hora:" type="text" value={formData.time} onChange={handleChange} error={errors.time} />
                <Input name="img" label="URL Imagen:" type="text" value={formData.img} onChange={handleChange} error={errors.img} />

                <div className="modal-buttons">
                    <button className="button cancel" onClick={onClose}>Cancelar</button>
                    <button className="button create" onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default EventModal;
