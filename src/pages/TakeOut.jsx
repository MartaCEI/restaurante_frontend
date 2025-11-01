import { useState, useEffect } from "react";
import TopPictures from "@/components/TopPictures";
import MenuButtons from "@/components/menu/MenuButtons";
import TakeOutCard from "@/components/takeout/TakeOutCard";
import { useMenu } from "@/hooks/useMenu";
import { useCarrito } from "@/hooks/useCarrito";
import { usePageInfo } from "@/hooks/usePageInfo";

const TakeOut = ({ userId }) => {
    const { filteredDishes, getDishesByType } = useMenu();
    const [selectedType, setSelectedType] = useState("entrantes");
    const [displayDishes, setDisplayDishes] = useState([]);
    const { items, agregarItem, quitarItem } = useCarrito(userId);
    const { pageInfo, fetchPageInfo } = usePageInfo();

    useEffect(() => {
        fetchPageInfo("takeout");
    }, []);

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
            {pageInfo && <TopPictures pageInfo={pageInfo} />}
            <MenuButtons setType={setSelectedType} />

            <section className="menu-flex">
                <h2 className="menu-h2">{selectedType}</h2>
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
        </>
    );
};

export default TakeOut;
