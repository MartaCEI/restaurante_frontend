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
        <section className="cart-flex">
            <h2 className="cart-title">Carrito de Compras</h2>
            {carritoArray.length === 0 ? (
                <p className="cart-empty">El carrito está vacío</p>
            ) : (
                <ul className="cart-ul">
                    {carritoArray.map(producto => (
                        <li key={producto.menuId} className="cart-li">
                            <span className="cart-info">
                                {producto.item?.name} x {producto.quantity} = $
                                {producto.item?.price * producto.quantity || 0}
                            </span>
                            <div className="cart-buttons">
                                <button
                                    onClick={() => quitarItem(producto.menuId)}
                                    className="cart-smallButton"
                                >
                                    -
                                </button>
                                <p>{producto.quantity}</p>
                                <button
                                    onClick={() => agregarItem(producto.item)}
                                    className="cart-smallButton"
                                >
                                    +
                                </button>
                            </div>
                        </li>
                    ))}
                    <li className="cart-summary">
                        <h4>Total Items: {totalItems}</h4>
                    </li>
                    <li className="cart-summary">
                        <h4>Total: ${totalPrice}</h4>
                    </li>
                </ul>
            )
            }



            {error && <p className="cart-error">{error}</p>}
            <div className="cart-buttons">
                <button
                    onClick={handleCheckout}
                    disabled={loading || carritoArray.length === 0}
                    className="cart-button"
                >
                    {loading ? "Procesando..." : "Realizar Pedido"}
                </button>

                {carritoArray.length > 0 && (
                    <button className="cart-button" onClick={limpiarCarrito}>
                        Limpiar Carrito
                    </button>
                )}
            </div>
            <Link to="/takeout" className="cart-a">
                Volver al menú
            </Link>
        </section >
    );
};

export default Cart;