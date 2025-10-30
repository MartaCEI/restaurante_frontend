
import { useLocation, Link } from "react-router-dom";

const Summary = () => {
    const location = useLocation();
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
        <div className="summary">
            <h2 className="summary-title">¡Gracias por tu pedido!</h2>
            <p className="summary-text">Resumen del pedido:</p>

            <ul className="summary-list">
                {order.items.map((item, index) => (
                    <li key={index} className="summary-item">
                        {item.item.name} x {item.quantity} = ${item.quantity * item.item.price}
                    </li>
                ))}
            </ul>

            <h3 className="summary-total">Total: ${order.totalPrice}</h3>

            <Link to="/takeout">
                <button className="button">Volver al menú</button>
            </Link>
        </div>
    );
};

export default Summary;