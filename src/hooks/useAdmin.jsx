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
    }, []);

    // router.post('admin/dishes', authMiddleware, createDish) // createDish(dishData)
    const createDish = async (newDish) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/dishes`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
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
            getAllDishes();
        } catch (error) {
            setError("Hubo un error al intentar crear el plato.");
            setDish(null);
        }
    }

    // router.get('/admin/dishes/id/:id', authMiddleware, getDishById); // getDishById(id)
    const getDishById = async (dishId) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/dishes/${dishId}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const response = await res.json();
            if (response.status === "error") throw new Error(response.msg);
            return response.data; // Retorna los datos para el frontend
        } catch (error) {
            console.error("[getDishById] Error:", error);
            setError("Hubo un error al obtener el plato.");
            return null;
        }
    };

    // router.patch('/admin/dishes/deletedAt/:id', authMiddleware, updateDishdeletedAt) // updateDish(id)
    const softDeleteDish = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/dishes/deletedAt/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const response = await res.json();
            if (response.status === "ok") {
                getAllDishes(); // refresca la tabla
            } else {
                console.error(response.msg);
            }
        } catch (error) {
            setError("Error al actualizar el plato");
        }
    }

    // router.patch('/admin/dishes/:id', authMiddleware, updateDish) // updateDish(id, dishData)
    const updateDish = async (id, newData) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/admin/dishes/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newData),
            });

            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                return;
            }
            getAllDishes();
            setError(null);
        } catch (error) {
            setError("Error al actualizar el plato");
        }
    }

    // router.delete('/admin/dishes/:id', authMiddleware, deleteDish) // deleteDish(id)
    const deleteDish = async (id) => {
        try {
            const res = await fetch(`${urlBackend}/admin/dishes/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                return;
            }
            getAllDishes();
            setError(null);
        } catch (error) {
            setError("Error al borrar el plato");
        }
    }
    //     // ORDERS: CRUD

    return (
        <AdminContext.Provider value={{ users, dishes, error, createDish, updateDish, deleteDish, getDishById, softDeleteDish }}>
            {children}
        </AdminContext.Provider>
    )
}

export const useAdmin = () => useContext(AdminContext);