import { useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import ModalButtons from "@/components/modals/ModalButtons";

const EventModal = ({ isOpen, onClose, onSubmit, initialData }) => {
    const urlBackend = import.meta.env.VITE_BACKEND_URL;
    const [formData, setFormData] = useState(initialData);
    // const [imageFile, setImageFile] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(initialData);
        setErrors({});
    }, [initialData]);

    // const uploadImage = async (file) => {
    //     try {
    //         // Aquí va el código original de subida si hay archivo
    //         const formData = new FormData();
    //         formData.append("image", file);

    //         const res = await fetch(`${urlBackend}/upload`, {
    //             method: "POST",
    //             body: formData
    //         });

    //         const response = await res.json();
    //         if (response.status === "error") {
    //             throw new Error(response.msg);
    //         }
    //         console.log("Imagen subida:", response.data);
    //         return response.data.url;

    //     } catch (error) {
    //         console.error("Error al subir la imagen:", error);
    //         // Si hay error, se envia una imagen por defecto
    //         return "https://img.freepik.com/vector-gratis/concepto-feliz-cumpleanos_23-2148484501.jpg";
    //     }
    // };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.title?.trim()) newErrors.title = "El título es obligatorio";
        if (!formData.description?.trim()) newErrors.description = "La descripción es obligatoria";
        if (!formData.date?.trim()) newErrors.date = "La fecha es obligatoria";
        if (!formData.time?.trim()) newErrors.time = "La hora es obligatoria";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // // Si hay imagen nueva, la subimos antes de crear el evento
        // let imageUrl = formData.image || null;
        // if (imageFile) {
        //     const uploadedUrl = await uploadImage(imageFile);
        //     if (!uploadedUrl) {
        //         setErrors({ image: "Error al subir la imagen" });
        //         return;
        //     }
        //     imageUrl = uploadedUrl;
        // }
        // Forzar imagen por defecto si está vacía
        const dataToSubmit = {
            ...formData,
            image: formData.image || "imagen.jpg" // <-- valor por defecto
        };

        onSubmit(dataToSubmit);
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
                        placeholder="Nombre del evento"
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
                        placeholder="Descripción"
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
                        placeholder="Fecha"
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
                        placeholder="Hora del evento"
                        error={errors.time}
                        inputError="input--error"
                    />
                    {/* <Input
                        divClassName="form-labels"
                        inputClassName="input"
                        labelClassName="form-label"
                        spanLabel="input-label"
                        name="image"
                        label="Image*"
                        type="file"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        error={errors.image}
                        inputError="input--error"
                    /> */}
                </div>
                <ModalButtons handleSubmit={handleSubmit} onClose={onClose} />
            </div>
        </div>
    );
};

export default EventModal;
