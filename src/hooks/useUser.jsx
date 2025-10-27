import { useContext, useState, useEffect, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const urlBackend = import.meta.env.VITE_BACKEND_URL;
    const urlStatic = import.meta.env.VITE_STATIC_URL;

    // Ver si ya estoy logeado. 
    // Cuando cargo la app pregubto a localStorege si existe user.
    // Si existe lo guardo en setUser. 
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    },[])

// Funcion register
const register = async (newUser) => {
        try {
            const res = await fetch(`${urlBackend}/register`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newUser),
            });
            const response = await res.json();

            if (response.status === "error") {
                setError(response.msg);
                setUser(null);
                return;
            }
            // El backend me devuelve la info menos el password y guardo en localstorage
            // NOTA: localStoreage no guarda objetos, SOLO STRINGS.
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("token", response.data.token); // Guardar token JWT
            setError(null);
        } catch (error) {
            setError("Hubo un error en el login");
            setUser(null);
        }
    }

     // Funcion login
    const login = async (userData) => {
        try {
            const res = await fetch(`${urlBackend}/login`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(userData),
            });
            const response = await res.json();

            if (response.status === "error") {
                setError(response.msg);
                setUser(null);
                return;
            }
            // El backend me devuelve la info menos el password y guardo en localstorage
            // NOTA: localStoreage no guarda objetos, SOLO STRINGS.
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("token", response.data.token); // Guardar token JWT
            setError(null);
        } catch (error) {
            setError("Hubo un error en el login");
            setUser(null);
        }
    };

    // Funcion logout
    const logout = () => {
        console.log("Estoy en logout")
        // borrar localstorage
        localStorage.removeItem("user")
        localStorage.removeItem("token"); // Borrar token JWT
        setUser(null)
    }

    return (
        <UserContext.Provider value={{  user, 
                                        error,
                                        register,
                                        login,
                                        logout
                                    }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);