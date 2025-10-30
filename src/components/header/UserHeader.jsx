import { NavLink, Link, useNavigate } from "react-router-dom";
import { useUser } from "@/hooks/useUser";
// Aquí se muestran todas las opciones del nav más la opcion de takeout. 
// Tambien muestra el boton del carrito, logout y el saludo. 
const UserHeader = ({user}) => {
    const {logout} = useUser();

    return (
        <div className="header-inner">
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <NavLink to="/menu" className="nav-a">Home</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/menu" className="nav-a">MENU</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/events" className="nav-a">EVENTOS</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/takeOut" className="nav-a">TAKEOUT</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header-buttons">
                <p>{user.name}</p>
                <Link to="/cart" className="header-button">carrito</Link>
                <Link onClick={logout} className="header-button">Salir</Link>
            </div>
        </div>
    );
}

export default UserHeader;