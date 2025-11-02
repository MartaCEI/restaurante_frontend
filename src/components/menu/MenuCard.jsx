const MenuCard = ({ name, description, price }) => {
    return (
        <article className="menu-card">
            <div className="card">
                <h3 className="card-title">{name}</h3>
                <p className="card-price">{price}</p>
            </div>
            <p className="card-desc">{description}</p>
        </article>
    );
}

export default MenuCard;