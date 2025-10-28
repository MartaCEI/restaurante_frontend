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
    const [filteredDishes, setFilteredDishes] = useState(null);
    const [singleDish, setSingleDish] = useState(null);
    const [error, setError] = useState(null);

    // router.get('/dishes', getAllDishes) // getAllDishes()
    const getAllDishes = async () => {
        try {
            const res = await fetch(`${URL}/dishes`);
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

    return (
        <MenuContext.Provider value={{}}>
            {children}
        </MenuContext.Provider>
    )
};

export const useMenu = () => useContext(MenuContext);