const VITE_FRONTEND_IMG = import.meta.env.VITE_FRONTEND_IMG;

const Footer = () => {
    return (

        <div className="footer-container">
            <div className="footer-line"></div>
            <div className="footer-inner">
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
                    <div className="footer-imgdiv">
                        <img src={`${VITE_FRONTEND_IMG}/logo.png`} alt="logo" className="footer-img" />
                    </div>
                </div>
            </div>
            <p className="footer-p">© 2024 Restaurante Full Stack. Todos los derechos reservados.</p>
        </div>
    );
}

export default Footer;