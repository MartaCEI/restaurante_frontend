import { useState } from "react";
import Table from "@/components/Table";
import OrderModal from "@/components/modals/OrderModal";
import { useOrder } from "@/hooks/useOrders";

const AdminOrders = () => {
    const { orders, updateOrderStatus, deleteOrderPermanently } = useOrder();
    const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal está abierto
    const [editingOrder, setEditingOrder] = useState(null); // Orden que se está editando

    // Lista de posibles estados de las órdenes
    const statusList = [
        { value: "pending", label: "Pending" },
        { value: "preparing", label: "En preparación" },
        { value: "completed", label: "Completado" },
        { value: "cancelled", label: "Cancelado" }
    ];

    // Formatea las órdenes para mostrarlas en la tabla
    const formattedOrders = orders.map(o => ({
        _id: o._id,
        user: o.userId?.name || "Sin usuario",
        email: o.userId?.username || "Sin email",
        items: o.items.map((i, index) => (
            <span key={index}>
                {i.menuId?.name || "Plato desconocido"} (x{i.quantity})
                <br />
            </span>
        )),
        totalPrice: o.totalPrice,
        orderStatus: o.orderStatus,
        createdAt: new Date(o.createdAt).toLocaleString(),
    }));

    // Abrir modal para actualizar el estado de una orden
    const handleUpdateClick = (orderId) => {
        const order = formattedOrders.find(o => o._id === orderId);
        if (order) {
            setEditingOrder(order);
            setIsModalOpen(true);
        }
    };

    // Maneja el submit del modal y actualiza la orden
    const handleModalSubmit = async (updatedOrder) => {
        await updateOrderStatus(updatedOrder._id, updatedOrder.orderStatus);
        setIsModalOpen(false);
        setEditingOrder(null);
    };

    return (
        <section className="tables-flex">
            {/* Tabla de órdenes */}
            <Table
                data={formattedOrders}
                columns={["email", "orderStatus"]}
                onUpdate={handleUpdateClick}
                onDelete={deleteOrderPermanently}
            />

            {/* Modal para actualizar orden */}
            <OrderModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleModalSubmit}
                initialData={editingOrder}
                statusList={statusList}
            />
        </section>
    );
};

export default AdminOrders;
