import { NavLink, Link } from "react-router-dom";
// Aquí se muestran las opciones que solo estan avaiable cuando el user NO está conectado. 
// Boton de login/takeout NO página TakeOut. 
const MainHeader = () => {

    return (
        <div className="header-inner">
            <nav className="nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <NavLink to="/menu" className="nav-a">MENU</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/events" className="nav-a">EVENTOS</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header-buttons">
                <Link to="/login" className="home-button">TakeOut</Link>
                <Link to="/login" className="home-button">Login</Link>
            </div>
        </div>
    );
}

export default MainHeader;