import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {

    // router.get('/dishes/:id', getDishById) // getDishById(id)
    // router.get('/dishes/:type', getDishesByType) // getDishesByType(type)
    // router.post('/dishes', createDish) // createDish(dishData)
    // router.patch('/dishes/deletedAt/:id', updateDishdeletedAt) // updateDish(id)
    // // router.patch('/dishes/updateField/:id', updateDishField) // updateDishField (id, campo, valor)
    // router.delete('/dishes', deleteDish) //deleteDish(id)
    const urlBackend = import.meta.env.VITE_BACKEND_URL;
    const urlStatic = import.meta.env.VITE_STATIC_URL;

    const [dishes, setDishes] = useState(null);
    const [filteredDishes,setFilteredDishes] = useState(null);
    const [singleDish, setSingleDish] = useState(null);
    const [error, setError] = useState(null);

    // router.get('/dishes', getAllDishes) // getAllDishes()
    const getAllDishes = async () => {
        try {
            const res = await fetch(`${urlBackend}/dishes`);
            // Comprobamos que la respuesta sea OK (200-299)
        if (!res.ok) {
            throw new Error(`Error en la petición: ${res.status}`);
        }
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

        // Mensaje más detallado si recibimos HTML en vez de JSON
        if (error instanceof SyntaxError) {
            setError("La respuesta del servidor no es JSON. Revisa la URL del backend.");
        } else {
            setError("Hubo un error al obtener los platos.");
        }

        setDishes(null);
        }
    }

    // router.get('/dishes/id/:id', getDishById) // getDishById(id)
    const getDishById = async (dishId) => {
        try {
            const res = await fetch(`${urlBackend}/dishes/id/${dishId}`);
            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                setDishes(null);
                return;
            }
            setSingleDish(response.data);
            setError(null)
            console.log("[getDishById]: Plato encontrado:", response);
        } catch (error) {
            console.log("[getDishById] Error:", error);
            setError("Hubo un error al obtener los platos.");
            setDishes(null);
        }
    }

    // router.get('/dishes/type/:type', getDishesByType) // getDishesByType(type);
    const getDishesByType = async (dishType) => {
        try {
            const res = await fetch(`${urlBackend}/dishes/type/${dishType}`);
            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg)
                setFilteredDishes(null)
                console.log("[getDishesByType]: Platos encontrados:", response);
            }
            setFilteredDishes(response.data);
            setError(null);
        } catch (error) {
            console.log("[getDishesByType]: Error:", error);
            setError("Hubo un error al obtener los platos.");
            setDishes(null);
        }
    }

    return (
        <MenuContext.Provider value={{
                                dishes,
                                filteredDishes,
                                singleDish,
                                error,
                                getAllDishes,
                                getDishById,
                                getDishesByType
                            }}>
            {children}
        </MenuContext.Provider>
    )
};

export const useMenu = () => useContext(MenuContext);