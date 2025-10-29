import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {

    const urlBackend = import.meta.env.VITE_BACKEND_URL;
    const urlStatic = import.meta.env.VITE_STATIC_URL;

    const [filteredDishes, setFilteredDishes] = useState(null);
    const [singleDish, setSingleDish] = useState(null);
    const [error, setError] = useState(null);

    // router.get('/dishes/id/:id', getDishById) // getDishById(id)
    const getSingleDish = async (dishId) => {
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

            // Filtrar solo los platos activos
            const activeDishes = response.data.filter(dish => !dish.deletedAt);

            setFilteredDishes(activeDishes);
            setError(null);
            console.log("[getDishesByType]: Platos activos encontrados:", activeDishes);
        } catch (error) {
            console.log("[getDishesByType]: Error:", error);
            setError("Hubo un error al obtener los platos.");
            setDishes(null);
        }
    }

    return (
        <MenuContext.Provider value={{
            filteredDishes,
            singleDish,
            error,
            getSingleDish,
            getDishesByType
        }}>
            {children}
        </MenuContext.Provider>
    )
};

export const useMenu = () => useContext(MenuContext);