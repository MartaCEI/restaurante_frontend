import { useState } from "react";
import Table from "@/components/Table";
import DishModal from "@/components/modals/DishModal";
import { useAdmin } from "@/hooks/useAdmin";

const AdminMenu = () => {
    const { dishes, createDish, updateDish, getDishById, softDeleteDish } = useAdmin();
    
    const typeList = [
        { value: "entrantes", label: "entrantes" },
        { value: "arroces", label: "arroces" },
        { value: "pescados", label: "pescados" },
        { value: "carnes", label: "carnes" },
        { value: "postres", label: "postres" },
        { value: "bebidas", label: "bebidas" },
        { value: "vinos", label: "vinos" }
    ];

    const emptyDish = { name: "", price: "", description: "", type: "", imageUrl: "https://picsum.photos/200" };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDish, setEditingDish] = useState(emptyDish);

    // Carga datos vvacios para crear el plato
    const handleCreateClick = () => {
        setEditingDish(emptyDish);
        setIsModalOpen(true);
    }

    // Editar plato: obtiene datos desde el backend
    const handleUpdateClick = async (dishId) => {
        const dish = await getDishById(dishId);
        if (dish) {
            setEditingDish(dish);
            setIsModalOpen(true);
        }
    };

    const handleSubmit = async (dishData) => {
        if (dishData._id) {
            await updateDish(dishData._id, dishData);
        } else {
            await createDish(dishData);
        }
        setIsModalOpen(false);
        setEditingDish(emptyDish);
    };

    return (
        <section className="tables-flex">
            <div className="tables-create">
                <p>Insertar un nuevo plato: </p>
                <button className="button" onClick={handleCreateClick}>Insertar</button>
            </div>

            <Table
                data={dishes}
                columns={["name", "price"]}
                onUpdate={handleUpdateClick}
                onDelete={softDeleteDish}
                actions={(dish) => (
                    <>
                        <button className="button" onClick={() => handleUpdateClick(dish._id)}>Update</button>
                        <button className="button delete" onClick={() => softDeleteDish(dish._id)}>Eliminar</button>
                    </>
                )}
            />

            <DishModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                initialData={editingDish}
                typeList={typeList}
            />
        </section>
    );
}

export default AdminMenu;
