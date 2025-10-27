import { useState } from "react";
import '@/css/form.css'
import { useUser } from "@/hooks/useUser";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormdata] = useState ({
        username:"",
        password: "",
    })
    const {login} = useUser();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
        navigate("/takeOut")
    }

    const handleOnChange = (e) => {
        let {name, value} = e.target;
        setFormdata((prevData) => ({...prevData, [name]:value}));
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="label">
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleOnChange}
                    className="input"
                    placeholder=" email" 
                    required/>
            </label>
            <label className="label">
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleOnChange}
                    className="input" 
                    placeholder=" password" 
                    required/>
            </label>
            <button className="button" type="submit">LogIn</button>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <p>Todavia no tienes cuenta</p>
            <Link to="/register" type="button" className="button">Regítrate</Link>
        </form>
    );
}

export default Login;