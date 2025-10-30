import { useNavigate, Link } from "react-router-dom";
import { useCarrito } from "../hooks/useCarrito";

const Cart = ({ userId }) => {
    const navigate = useNavigate();
    const {
        carritoArray,
        totalItems,
        totalPrice,
        agregarItem,
        quitarItem,
        limpiarCarrito,
        checkout,
        loading,
        error
    } = useCarrito(userId);

    const handleCheckout = async () => {
        const orderCreated = await checkout();
        if (orderCreated) {
            navigate("/summary", { state: { order: orderCreated } });
        }
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Carrito de Compras</h2>

            <div className="cart-grid">
                <div className="cart-content">
                    <h3 className="cart-subtitle">Mi Carrito</h3>

                    {carritoArray.length === 0 ? (
                        <p className="cart-empty">El carrito está vacío</p>
                    ) : (
                        <ul className="cart-list">
                            {carritoArray.map(producto => (
                                <li key={producto.menuId} className="cart-item">
                                    <span className="cart-item-info">
                                        {producto.item?.name || "Producto"} x {producto.quantity} = $
                                        {producto.item?.price * producto.quantity || 0}
                                    </span>
                                    <div className="cart-item-buttons">
                                        <button
                                            onClick={() => quitarItem(producto.menuId)}
                                            className="button cart-button"
                                        >
                                            -
                                        </button>
                                        <button
                                            onClick={() => agregarItem(producto.item)}
                                            className="button cart-button"
                                        >
                                            +
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="cart-summary">
                        <h4>Total Items: {totalItems}</h4>
                        <h4>Total: ${totalPrice}</h4>
                    </div>

                    {error && <p className="cart-error">{error}</p>}

                    <button
                        onClick={handleCheckout}
                        disabled={loading || carritoArray.length === 0}
                        className="button cart-checkout"
                    >
                        {loading ? "Procesando..." : "Realizar Pedido"}
                    </button>

                    {carritoArray.length > 0 && (
                        <button className="button cart-clear" onClick={limpiarCarrito}>
                            Limpiar Carrito
                        </button>
                    )}

                    <Link to="/takeout" className="cart-link">
                        Volver al menú
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;