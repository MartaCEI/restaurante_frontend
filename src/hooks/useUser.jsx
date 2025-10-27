import { useContext, useState, useEffect, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

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
    const register = (newUser) => {
        console.log("Estoy en register")
        // fetch al backend
        const response = newUser;
        // El backend me devuelve la info menos el password y guardo en localstorage
        // NOTA: localStoreage no guarda objetos, SOLO STRINGS.
        localStorage.setItem("user", JSON.stringify(response))
        setUser(newUser);
    }

     // Funcion login
    const login = (userData) => {
        console.log("Estoy en login")
        // fetch al backend
        const response = userData;
        // El backend me devuelve la info menos el password y guardo en localstorage
        // NOTA: localStoreage no guarda objetos, SOLO STRINGS.
        localStorage.setItem("user", JSON.stringify(response))
        setUser(userData);
    }
    
    // Funcion logout
    const logout = () => {
        console.log("Estoy en logout")
        // borrar localstorage
        localStorage.removeItem("user")
        setUser(null)
    } 

    return (
        <UserContext.Provider value={{  user, 
                                        setUser,
                                        register,
                                        login,
                                        logout
                                    }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);