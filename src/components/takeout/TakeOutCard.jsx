
const TakeOutCard = ({ item, cantidad, agregarItem }) => {
    return (
        <article className="menu-card">
            <div className="card">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-price">${item.price}</p>
            </div>

            <p className="card-desc">{item.description}</p>

            <div className="counter">
                Añadido al carrito: <span>{cantidad}</span>
            </div>

            <div className="cart-buttons">
                <button className="cart-button" onClick={() => agregarItem(item)}>
                    Añadir al carrito
                </button>
            </div>
        </article>
    );
};

export default TakeOutCard;
