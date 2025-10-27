import "@/css/headers.css"
import logo from '@/assets/react.svg'
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";


const Header = () => {
    const { user, logout } = useUser();
    // const navigate = useNavigate();
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-imgdiv">
                    <img src={logo} alt="logo" className="header-img" />
                </div>
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
                            {user && (
                                <li className="nav-li">
                                    <NavLink to="/takeOut" className="nav-a">TAKEOUT</NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                    {user ?
                        (<div className="social">
                            <p>Hola {user.name}</p>
                            <Link to="/cart" className="social-button">carrito</Link>
                            <Link onClick={logout} className="social-button">Salir</Link>
                        </div>)
                        :
                        (<div className="social">
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
                        </div>)
                    }

                </div>
            </div>
        </header>
    );
}

export default Header;