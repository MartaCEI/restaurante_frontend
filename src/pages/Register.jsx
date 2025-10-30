import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import '@/css/form.css'
import { useUser } from "@/hooks/useUser";

const Register = () => {
    const [newUser, setNewUser] = useState({
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

    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        setCanSubmit(
            newUser.name &&
            newUser.username &&
            newUser.password &&
            newUser.street &&
            newUser.city &&
            newUser.cp &&
            newUser.termsAndCond
        );
    }, [newUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        register(newUser);
        setNewUser({ name: "", username: "", password: "", street: "", city: "", cp: "", termsAndCond: false });
        navigate("/");
    };

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewUser((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="label">
                Nombre:
                <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleOnChange}
                    className="input"
                    placeholder="nombre"
                />
            </label>
            <label className="label">
                Username:
                <input
                    type="text"
                    name="username"
                    value={newUser.username}
                    onChange={handleOnChange}
                    className="input"
                    placeholder="email"
                />
            </label>
            <label className="label">
                Password:
                <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleOnChange}
                    className="input"
                    placeholder="contraseña"
                />
            </label>
            <label className="label">
                Dirección:
                <input
                    type="text"
                    name="street"
                    value={newUser.street}
                    onChange={handleOnChange}
                    className="input"
                    placeholder="Dirección"
                />
            </label>
            <label className="label">
                <input
                    type="text"
                    name="city"
                    value={newUser.city}
                    onChange={handleOnChange}
                    className="input"
                    placeholder="Ciudad"
                />
            </label>
            <label className="label">
                <input
                    type="text"
                    name="cp"
                    value={newUser.cp}
                    onChange={handleOnChange}
                    className="input"
                    placeholder="Codigo Postal"
                />
            </label>
            <label className="label">
                Terminos y condiciones
                <input
                    type="checkbox"
                    name="termsAndCond"
                    checked={newUser.termsAndCond}
                    onChange={handleOnChange}
                    className="input"
                />
            </label>

            {canSubmit ? (
                <button className="button" type="submit">Registrarse</button>
            ) : (
                <button className="button disabled" disabled>Registrarse</button>
            )}
        </form>
    );
};

export default Register;