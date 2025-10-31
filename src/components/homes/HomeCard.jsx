import { Link } from "react-router-dom";

const HomeCard = ({title, link, button, image}) => {
    const VITE_FRONTEND_IMG = import.meta.env.VITE_FRONTEND_IMG;
    return (
        <div className="home-grid">
            <div className="home-containers">
                <img
                    className="top-img"
                    src={`${VITE_FRONTEND_IMG}/${image}`}
                    alt={button || "imagen"}
                />
            </div>
            <div className="home-containers">
                <h2 className="home-h2">{title}</h2>
                <Link to={link} className="home-button">{button}</Link>
            </div>
        </div>
    );
}

export default HomeCard;