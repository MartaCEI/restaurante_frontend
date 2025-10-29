import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const urlBackend = import.meta.env.VITE_BACKEND_URL;
    const urlStatic = import.meta.env.VITE_STATIC_URL;
    const [dishes, setDishes] = useState(null);
    const [dish, setDish] = useState(null)
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null)

    // Users CRUD
    // router.get('/admin/users', authMiddleware, getAllUsers); // getAllUsers()
    const getAllUsers = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/users`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}` // Enviar el token JWT en el header
            }
        });
            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                setUsers(null);
                return;
            }
            setUsers(response.data);
            setError(null);
            console.log("[getAllUsers] Usuarios encontrados:", response);
        } catch (error) {
            console.log("[getAllUsers] Error:", error);
            setError("Hubo un error al obtener los usuarios.");
            setUsers(null);
        }
    }

    // Menu: CRUD
    // router.get('/admin/dishes',authMiddleware, getAllDishes) // getAllDishes()
    const getAllDishes = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/dishes`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}` // Enviar el token JWT en el header
            }
        });
            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                setDishes(null);
                return;
            }
            setDishes(response.data);
            setError(null);
            console.log("[getAllDishes] Platos encontrados:", response);
        } catch (error) {
            console.log("[getAllDishes] Error:", error);
            setError("Hubo un error al obtener los platos.");
            setDishes(null);
        }
    }

    useEffect(() => {
        getAllDishes();
        getAllUsers();
    }, [])

    // router.post('admin/dishes', authMiddleware, createDish) // createDish(dishData)
    const createDish = async (newDish) => {
        try {
            const res = await fetch(`${urlBackend}/register`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newDish),
            });
            const response = await res.json();

            if (response.status === "error") {
                setError(response.msg);
                setDish(null);
                return;
            };
            // El backend se encarga de guardar el nuevo plato en la BBDD. 
            setDish(response.data);
            setError(null);
        } catch (error) {
            setError("Hubo un error al intentar crear el plato.");
            setDish(null);
        }
    }

    // router.patch('/dishes/deletedAt/:id', authMiddleware, updateDishdeletedAt) // updateDish(id)
    const updateDishdeletedAt = async () => {
        try {

        } catch (error) {

        }
    }
    // router.patch('/dishes/updateField/:id', authMiddleware, updateDishField) // updateDishField(id), (key, value)
    const updateDishField = async () => {
        try {

        } catch (error) {

        }
    }
    // router.delete('/dishes', authMiddleware, deleteDish) // deleteDish(id)
    const deleteDish = async () => {
        try {

        } catch (error) {

        }
    }
    //     // ORDERS: CRUD

    return (
        <AdminContext.Provider value={{ users, dishes, error, createDish }}>
            {children}
        </AdminContext.Provider>
    )
}

export const useAdmin = () => useContext(AdminContext);