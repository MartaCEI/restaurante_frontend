const MenuButtons = ({ setType }) => {
    const types = ["entrantes", "arroces", "pescados", "carnes", "postres", "bebidas", "vinos"];

    return (
        <section className="menu-buttons">
            {types.map((type, index) => (
                <button key={index} onClick={() => setType(type)} className="menu-button">
                    {type === null ? "Menu" : type}
                </button>
            ))}
        </section>
    );
};

export default MenuButtons;