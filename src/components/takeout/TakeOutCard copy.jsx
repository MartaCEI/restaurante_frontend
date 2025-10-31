import React from "react";

const TakeOutCard = ({ _id, name, description, price, agregarItem }) => {
    return (
        <article className="menu-card">
            <div className="card">
                <h3 className="card-title">{name}</h3>
                <p className="card-price">{price}</p>
            </div>
            <p className="card-desc">{description}</p>

            <div className="cart-buttons">
                <button className="cart-button" onClick={() => agregarItem(item)}>
                    Añadir al carrito
                </button>
            </div>
        </article>

    )
};

export default TakeOutCard;
