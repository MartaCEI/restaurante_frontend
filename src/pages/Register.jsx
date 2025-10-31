import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Input from "@/components/forms/Input";
// import '@/css/form.css'
import { useUser } from "@/hooks/useUser";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        street: "",
        city: "",
        cp: "",
        termsAndCond: false
    });
    const { register } = useUser();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name?.trim()) newErrors.name = "El nombre es obligatorio.";
        if (!formData.username) newErrors.username = "El email es obligatorio.";
        if (!formData.password) newErrors.password = "La contraseña es obligatoria.";
        if (!formData.street?.trim()) newErrors.street = "La calle es obligatoria.";
        if (!formData.city?.trim()) newErrors.city = "La ciudad es obligatoria.";
        if (!formData.cp) newErrors.cp = "El código postal es obligatorio.";
        if (!formData.termsAndCond) newErrors.termsAndCond = "Acepta los terminos y condiciones.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        register(formData);
        setFormData({ name: "", username: "", password: "", street: "", city: "", cp: "", termsAndCond: false });
        navigate("/");
    };

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2 className="form-h2">Regístrate</h2>
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
                name="password"
                label="Contraseña*"
                type="password"
                value={formData.password}
                onChange={handleOnChange}
                placeholder="Introduce tu email"
                error={errors.password}
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

            <Input
                divClassName="checkbox-labels"
                inputClassName="checkbox-input"
                labelClassName="checkbox-label"
                spanLabel="input-label"
                name="termsAndCond"
                label="Terminos y condiciones*"
                type="checkbox"
                value={formData.termsAndCond}
                onChange={handleOnChange}
                placeholder="Introduce tu email"
                error={errors.termsAndCond}
                inputError="input--error" 
                />

            <button className="form-button" type="submit">Registrarse</button>
        </form>
    );
};

export default Register;