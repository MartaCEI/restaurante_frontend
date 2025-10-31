import { Link } from "react-router-dom";

const HomeCard = ({title, link, button, image}) => {
    const VITE_FRONTEND_IMG = import.meta.env.VITE_FRONTEND_IMG;
    return (
        <article className="home-article">
            <div className="home-containers">
                <img
                    className="home-img"
                    src={`${VITE_FRONTEND_IMG}/${image}`}
                    alt={button || "imagen"}
                />
            </div>
            <div className="home-containers">
                <h2 className="home-h2">{title}</h2>
                <Link to={link} className="home-button">{button}</Link>
            </div>
        </article>
    );
}

export default HomeCard;