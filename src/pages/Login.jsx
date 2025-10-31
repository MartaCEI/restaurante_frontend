import { useState } from "react";
import Input from "@/components/forms/Input";
// import '@/css/form.css'
import { useUser } from "@/hooks/useUser";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState({});
    const { login } = useUser();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.username?.trim()) newErrors.username = "El email es obligatorio";
        if (!formData.password) newErrors.password = "La contraseña es obligatoria";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        login(formData);
        navigate("/")
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2 className="form-h2">Login</h2>
            <Input
                divClassName="form-labels"
                inputClassName="input"
                labelClassName="form-label"
                spanLabel="input-label"
                name="username"
                label="Nombre*"
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
                <button className="form-button" type="submit">LogIn</button>
            <div className="form-btns">
                <p>Todavia no tienes cuenta</p>
                <Link to="/register" type="button" className="form-button">Regítrate</Link>
            </div>
        </form>
    );
}

export default Login;