import { useState } from "react";
import Table from "@/components/Table";
import OrderModal from "@/components/modals/OrderModal";
import { useOrder } from "@/hooks/useOrders";

const AdminOrders = () => {
    const { orders, updateOrderStatus, deleteOrderPermanently } = useOrder();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingOrder, setEditingOrder] = useState(null);

    // 
    const statusList = [
        { value: "pending", label: "Pending" },
        { value: "preparing", label: "En preparación" },
        { value: "completed", label: "Completado" },
        { value: "cancelled", label: "Cancelado" }
    ];


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

    const handleUpdateClick = (orderId) => {
        const order = formattedOrders.find(o => o._id === orderId);
        if (order) {
            setEditingOrder(order);
            setIsModalOpen(true);
        }
    };

    const handleModalSubmit = async (updatedOrder) => {
        await updateOrderStatus(updatedOrder._id, updatedOrder.orderStatus);
        setIsModalOpen(false);
        setEditingOrder(null);
    };

    return (
        <section className="tables-flex">
            <Table
                data={formattedOrders}
                columns={["email", "orderStatus"]}
                onUpdate={handleUpdateClick}
                onDelete={deleteOrderPermanently}
            />

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
