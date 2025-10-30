import { createContext, useContext, useState } from "react";
import { useUser } from "@/hooks/useUser";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const { user } = useUser(); // obtengo el usuario logeado
    const [items, setItems] = useState({});
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const urlBackend = import.meta.env.VITE_BACKEND_URL;

    // 🔹 Calcular totales
    const calcularTotales = (nuevoItems) => {
        let totalCantidad = 0;
        let totalDinero = 0;

        for (const key in nuevoItems) {
            const item = nuevoItems[key];
            totalCantidad += item.quantity;
            totalDinero += item.item.price * item.quantity;
        }

        setTotalItems(totalCantidad);
        setTotalPrice(totalDinero);
    };

    // 🔹 Agregar item
    const agregarItem = (menuItem) => {
        setItems(prev => {
            const currentQuantity = prev[menuItem._id]?.quantity || 0;
            const nuevoItems = {
                ...prev,
                [menuItem._id]: { item: menuItem, quantity: currentQuantity + 1 }
            };
            calcularTotales(nuevoItems);
            return nuevoItems;
        });
    };

    // 🔹 Quitar item
    const quitarItem = (menuId) => {
        setItems(prev => {
            const item = prev[menuId];
            if (!item) return prev;

            const nuevaCantidad = item.quantity - 1;
            let nuevoItems;

            if (nuevaCantidad <= 0) {
                const { [menuId]: _, ...rest } = prev;
                nuevoItems = rest;
            } else {
                nuevoItems = { ...prev, [menuId]: { ...item, quantity: nuevaCantidad } };
            }

            calcularTotales(nuevoItems);
            return nuevoItems;
        });
    };

    // 🔹 Limpiar carrito
    const limpiarCarrito = () => {
        setItems({});
        setTotalItems(0);
        setTotalPrice(0);
    };
    const carritoArray = Object.values(items).map(({ item, quantity }) => ({
        menuId: item._id,
        quantity,
        item // <-- mantener referencia al item completo
    }));

    const storedUser = localStorage.getItem("user");
    const userId = storedUser ? JSON.parse(storedUser)._id : null;

    const checkout = async () => {
        if (!user || !user._id) {
            setError("Usuario no definido");
            return null; // <-- devolver null si falla
        }

        if (carritoArray.length === 0) {
            setError("El carrito está vacío");
            return null;
        }

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${urlBackend}/orders`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user._id,
                    items: carritoArray,
                    totalPrice
                })
            });

            const data = await res.json();

            if (data.status === "ok") {
                limpiarCarrito();
                return data.data; // <-- devolver el pedido creado
            } else {
                setError(data.msg || "Error al crear el pedido");
                return null;
            }
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return (
        <CarritoContext.Provider
            value={{
                items,
                carritoArray,
                totalItems,
                totalPrice,
                loading,
                error,
                agregarItem,
                quitarItem,
                limpiarCarrito,
                checkout
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
};

// Hook para usar el contexto fácilmente
export const useCarrito = () => useContext(CarritoContext);
