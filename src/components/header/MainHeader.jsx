import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from '@/assets/react.svg'
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
                        <NavLink to="/reservations" className="nav-a">RESERVAS</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/events" className="nav-a">EVENTOS</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="social">
                <ul className="social-ul">
                    <li className="social-li">
                        <img src={logo} alt="Facebook" className="social-img" />
                    </li>
                    <li className="social-li">
                        <img src={logo} alt="Tweeter" className="social-img" />
                    </li>
                    <li className="social-li">
                        <img src={logo} alt="Instagram" className="social-img" />
                    </li>
                </ul>
                <Link to="/login" className="social-button">TakeOut</Link>
            </div>
        </div>
    );
}

export default MainHeader;