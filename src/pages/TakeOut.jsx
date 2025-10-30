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
        <main className="main">
            <TopPictures />

            <div className="menu-buttons">
                <MenuButtons setType={setSelectedType} />
            </div>

            <section className="menu-flex">
                <h2 className="dish-h2">{selectedType}</h2>
                <div className="menu-grid">
                    {displayDishes.map(dish => (
                        <TakeOutCard
                            key={dish._id}
                            item={dish}
                            cantidad={items[dish._id]?.quantity || 0}
                            agregarItem={agregarItem}
                            quitarItem={quitarItem}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default TakeOut;
