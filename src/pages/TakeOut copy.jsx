import { useState, useEffect } from "react";
import TopPictures from "@/components/TopPictures";
import MenuButtons from "@/components/menu/MenuButtons";
import TakeOutCard from "@/components/takeout/TakeOutCard";
import { useMenu } from "@/hooks/useMenu";
import { useCarrito } from "@/hooks/useCarrito";

const TakeOut = ({ userId }) => {
    const { filteredDishes, getDishesByType } = useMenu();
    const [selectedType, setSelectedType] = useState("entrantes");
    const [displayDishes, setDisplayDishes] = useState([]);
    const { items, agregarItem, quitarItem } = useCarrito(userId);

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
                <h2 className="menu-h2">{selectedType}</h2>
                <div className="menu-grid">
                    {displayDishes.map(dish => (
                        <TakeOutCard key={dish._id} {...dish} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default TakeOut;
