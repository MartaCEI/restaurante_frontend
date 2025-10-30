import React from "react";

const TakeOutCard = ({ item, cantidad, agregarItem, quitarItem }) => {
    return (
        <article className="menu-card">
            <img
                src={item.imageUrl || "https://picsum.photos/300/100"}
                alt={item.name}
                className="menu-card-img"
            />

            <div className="card">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-price">${item.price}</p>
            </div>

            <p className="card-desc">{item.description}</p>

            <div className="counter">
                Añadido al carrito: <span>{cantidad}</span>
            </div>

            <div className="card-buttons">
                <button className="button" onClick={() => agregarItem(item)}>
                    Añadir al carrito
                </button>
            </div>
        </article>
    );
};

export default TakeOutCard;
