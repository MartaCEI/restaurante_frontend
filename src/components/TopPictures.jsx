
const TopPictures = ({ pageInfo }) => {
    const VITE_FRONTEND_IMG = import.meta.env.VITE_FRONTEND_IMG;
    const { pageName, title, subtitle, image, homeImages } = pageInfo || {};

    if (!pageInfo) return null; 

    return (
        <>
            <div className="top-div">
                <img
                    className="top-img"
                    src={`${VITE_FRONTEND_IMG}/${image}`}
                    alt={title || pageName || "imagen"}
                />
                <h1 className="top-h1">{pageName}</h1>
            </div>

            {(title || subtitle) && (
                <div className="top-titles">
                    {title && <h2 className="top-h2">{title}</h2>}
                    {subtitle && <p>{subtitle}</p>}
                </div>
            )}
        </>
    );
};

export default TopPictures;