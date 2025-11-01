import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import ModalButtons from "@/components/modals/ModalButtons";

const EventModal = ({ isOpen, onClose, onSubmit, initialData }) => {
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
        if (!formData.title?.trim()) newErrors.title = "El título es obligatorio";
        if (!formData.description?.trim()) newErrors.description = "La descripción es obligatoria";
        if (!formData.date?.trim()) newErrors.date = "La fecha es obligatoria";
        if (!formData.time?.trim()) newErrors.time = "La hora es obligatoria";
        if (!formData.img?.trim()) newErrors.img = "La URL de la imagen es obligatoria";

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
                <div className="modal-body">
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="title"
                        label="Título*"
                        type="text"
                        value={formData.title}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.title}
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
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="date"
                        label="Fecha (dd/mm/aaaa)*"
                        type="text"
                        value={formData.date}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.date}
                        inputError="input--error"
                    />
                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="time"
                        label="Horario*"
                        type="text"
                        value={formData.time}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.time}
                        inputError="input--error"
                    />

                    <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="img"
                        label="Imagen nombre.ext*"
                        type="text"
                        value={formData.img}
                        onChange={handleOnChange}
                        placeholder="Introduce tu email"
                        error={errors.img}
                        inputError="input--error"
                    />
                </div>
                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default EventModal;
