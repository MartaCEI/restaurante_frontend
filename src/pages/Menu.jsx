import { useState, useEffect } from "react";
import { useMenu } from "@/hooks/useMenu";
import TopPictures from "@/components/TopPictures";
import MenuCard from "@/components/menu/MenuCard";
import MenuButtons from "@/components/menu/MenuButtons";

const Menu = () => {
    const { filteredDishes, getDishesByType } = useMenu();
    const [selectedType, setSelectedType] = useState("entrantes");
    const [displayDishes, setDisplayDishes] = useState([]);

    // Cargar los platos según el tipo seleccionado
    useEffect(() => {
        if (selectedType) {
            getDishesByType(selectedType);
        }
    }, [selectedType]);

    // Actualizar displayDishes con los platos filtrados
    useEffect(() => {
        setDisplayDishes(filteredDishes || []);
    }, [filteredDishes]);

    return (
        <>
            <TopPictures />
            <MenuButtons setType={setSelectedType} />

            <section className="menu-flex">
                <h2 className="dish-h2">{selectedType}</h2>
                <div className="menu-grid">
                    {displayDishes.map(dish => (
                        <MenuCard key={dish._id} {...dish} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Menu;
