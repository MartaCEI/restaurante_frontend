import { useUser } from "@/hooks/useUser";
import { NavLink, Link, useNavigate } from "react-router-dom";

// Aqui se muestran solo las funciones de los controllers del back que son privadas y necesita authorization
// Para leer/cambiar/borrar el menu, ordenes y users (no Password). Un boton para cada opcion en el nav. 
const AdminHeader = ({user}) => {
    const {logout} = useUser();

    return (
        <div className="header-inner">
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <NavLink to="/" className="nav-a">HOME</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/admin/users" className="nav-a">USERS</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/admin/menu" className="nav-a">MENU</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/admin/events" className="nav-a">EVENTOS</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/admin/orders" className="nav-a">ORDERS</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header-buttons">
                <p className="header-user">Admin: {user.name}</p>
                <Link onClick={logout} className="home-button">Salir</Link>
            </div>
        </div>
    );
};

export default AdminHeader;