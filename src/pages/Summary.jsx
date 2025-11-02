import { useLocation, Link } from "react-router-dom";

const Summary = () => {
    const location = useLocation();
    // useLocation nos permite acceder al state pasado por navigate en la página Cart.jsx
    const { order } = location.state || {}; // obtenemos el pedido pasado por navigate

    if (!order) {
        return (
            <div>
                <h2>No hay pedido para mostrar</h2>
                <Link to="/takeout">Volver al menú</Link>
            </div>
        );
    }

    return (
        <div className="cart-flex">
            <h2 className="cart-title">¡Gracias por tu pedido!</h2>
            <p className="summary-text">Resumen del pedido:</p>
            {/** Sección de resumen del pedido. mapeamos los items del pedido */}
            <ul className="cart-ul">
                {order.items.map((item, index) => (
                    <li key={index} className="summary-item">
                        {item.item.name} x {item.quantity} = ${item.quantity * item.item.price}
                    </li>
                ))}
            </ul>
            <h3>Total: ${order.totalPrice}</h3>
            <Link to="/takeout">
                <button className="cart-a">Volver al menú</button>
            </Link>
        </div>
    );
};

export default Summary;