import { createContext, useContext, useState } from "react";
import { useUser } from "@/hooks/useUser";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const { user } = useUser(); // Obtengo el usuario logeado
    const [items, setItems] = useState({}); // Estado que almacena los items en el carrito
    const [totalItems, setTotalItems] = useState(0); // Total de items en el carrito
    const [totalPrice, setTotalPrice] = useState(0); // Precio total del carrito
    const [error, setError] = useState(null); // Estado para errores
    const urlBackend = import.meta.env.VITE_BACKEND_URL; // URL del backend desde variables de entorno

    // Función para calcular totales (cantidad total y precio total)
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

    // Agregar item al carrito
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

    // Quitar item del carrito
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

    // Limpiar carrito
    const limpiarCarrito = () => {
        setItems({});
        setTotalItems(0);
        setTotalPrice(0);
    };

    // Crear un array de items a partir del objeto items para enviar al backend
    const carritoArray = Object.values(items).map(({ item, quantity }) => ({
        menuId: item._id,
        quantity,
        item // Mantener referencia al item completo
    }));

    // Checkout: crea un pedido en el backend con los items del carrito
    const checkout = async () => {
        if (!user || !user._id) {
            setError("Usuario no definido");
            return null;
        }

        if (carritoArray.length === 0) {
            setError("El carrito está vacío");
            return null;
        }

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
                // Aquí puedes limpiar el carrito tras crear el pedido
                limpiarCarrito();
                return data.data; // Devolver el pedido creado
            } else {
                setError(data.msg || "Error al crear pedido");
                return null;
            }
        } catch (err) {
            setError(err.message);
            return null;
        }
    };

    return (
        <CarritoContext.Provider value={{
            items,
            totalItems,
            totalPrice,
            error,
            agregarItem,
            quitarItem,
            limpiarCarrito,
            checkout
        }}>
            {children}
        </CarritoContext.Provider>
    );
};
export const useCarrito = () => useContext(CarritoContext);