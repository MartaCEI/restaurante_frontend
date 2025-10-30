import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children, userId }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const urlBackend = import.meta.env.VITE_BACKEND_URL;

    const getAllOrders = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${urlBackend}/orders/all`);
            const data = await res.json();
            if (data.status === "ok") {
                setOrders(data.data);
            } else {
                setError(data.msg || "Error cargando pedidos");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    const fetchOrders = async () => {
        if (!userId) return;
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${urlBackend}/orders/${userId}`);
            const data = await res.json();
            if (data.status === "ok") {
                setOrders(data.data);
            } else {
                setOrders([]);
                setError(data.msg || "Error al obtener pedidos");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const createOrder = async (order) => {
        setError(null);
        try {
            const res = await fetch(`${urlBackend}/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order)
            });
            const data = await res.json();
            if (data.status === "ok") {
                setOrders(prev => [...prev, data.data]);
            } else {
                setError(data.msg || "Error al crear pedido");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const updateOrderStatus = async (orderId, status) => {
        setError(null);
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/orders/${orderId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ orderStatus: status })
            });
            const data = await res.json();
            if (data.status === "ok") {
                setOrders(prev => prev.map(o => o._id === data.data._id ? data.data : o));
            } else {
                setError(data.msg || "Error al actualizar pedido");
            }
            getAllOrders();
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteOrderPermanently = async (orderId) => {
        setError(null);
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/orders/${orderId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`,
                    }
                });
            const data = await res.json();
            if (data.status === "ok") {
                setOrders(prev => prev.filter(o => o._id !== orderId));
            } else {
                setError(data.msg || "Error al eliminar pedido");
            }
            getAllOrders();
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        getAllOrders();
    }, []);

    useEffect(() => {
        fetchOrders();
    }, [userId]);

    return (
        <OrderContext.Provider value={{ orders, loading, error, fetchOrders, createOrder, updateOrderStatus, deleteOrderPermanently }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => useContext(OrderContext);
