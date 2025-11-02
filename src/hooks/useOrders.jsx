import { createContext, useContext, useEffect, useState } from "react";

// Creamos el contexto para los pedidos
const OrderContext = createContext();

// Proveedor del contexto que envuelve la aplicación o componentes que necesiten acceder a los pedidos
export const OrderProvider = ({ children, userId }) => {
    const [orders, setOrders] = useState([]); // Estado que almacena los pedidos
    const [error, setError] = useState(null); // Estado para almacenar errores
    const urlBackend = import.meta.env.VITE_BACKEND_URL; // URL del backend desde variables de entorno

    // Función para obtener todos los pedidos (para admin)
    const getAllOrders = async () => {
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
        }
    };

    // Función para obtener los pedidos de un usuario específico
    const getOrderById = async () => {
        if (!userId) return;
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
        }
    };

    // Función para crear un nuevo pedido
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

    // Función para actualizar el estado de un pedido (por ejemplo: "en preparación", "entregado")
    const updateOrderStatus = async (orderId, status) => {
        setError(null);
        try {
            const token = localStorage.getItem("token"); // Obtener token del localStorage para autenticación
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
                // Actualizamos el pedido modificado en el estado
                setOrders(prev => prev.map(o => o._id === data.data._id ? data.data : o));
            } else {
                setError(data.msg || "Error al actualizar pedido");
            }
            getAllOrders(); // Refrescamos todos los pedidos
        } catch (err) {
            setError(err.message);
        }
    };

    // Función para eliminar un pedido permanentemente
    const deleteOrderPermanently = async (orderId) => {
        setError(null);
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${urlBackend}/orders/${orderId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                }
            });
            const data = await res.json();
            if (data.status === "ok") {
                // Eliminamos el pedido del estado local
                setOrders(prev => prev.filter(o => o._id !== orderId));
            } else {
                setError(data.msg || "Error al eliminar pedido");
            }
            getAllOrders(); // Refrescamos todos los pedidos
        } catch (err) {
            setError(err.message);
        }
    };

    // Obtener todos los pedidos al montar el componente (solo admins)
    useEffect(() => {
        getAllOrders();
    }, []);

    // Obtener pedidos del usuario cuando cambie el userId
    useEffect(() => {
        getAllOrders();
    }, []);

    // Fetch orders for the specific user
    useEffect(() => {
        getOrderById();
    }, [userId]);
    return (
        <OrderContext.Provider value={{
            orders,
            error,
            getOrderById,
            createOrder,
            updateOrderStatus,
            deleteOrderPermanently
        }}>
            {children}
        </OrderContext.Provider>
    );
};

// Hook para acceder fácilmente al contexto desde cualquier componente
export const useOrder = () => useContext(OrderContext);
