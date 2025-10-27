import "@/css/headers.css"
import logo from '@/assets/react.svg'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-right">
                    <p className="footer-title">Visit us:</p>
                    <p className="footer-content">Calle Mi Calle 8</p>
                    <p className="footer-content">El Saler, Valencia 46000</p>
                </div>
                <div className="footer-center">
                    <p className="footer-title">Hours:</p>
                    <p className="footer-content">Lunes Cerrado</p>
                    <p className="footer-content">Martes - Jueves  12:30 - 23:00</p>
                    <p className="footer-content">Vienes - Domingo  12:00 - 1:00</p>
                </div>
                <div className="footer-left">
                    <p className="footer-title">Social:</p>
                    <ul className="footer-ul">
                        <li className="footer-li">
                            <img src={logo} alt="Facebook" className="social-img" />
                        </li>
                        <li className="footer-li">
                            <img src={logo} alt="Facebook" className="social-img" />
                        </li>
                        <li className="footer-li">
                            <img src={logo} alt="Facebook" className="social-img" />
                        </li>
                    </ul>
                    <Link to="/register" className="social-button">Register</Link>
                </div>
            </div>
            <p>© 2024 Restaurante Full Stack. Todos los derechos reservados.</p>
        </div>
    );
}

export default Footer;