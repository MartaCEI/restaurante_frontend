const EventsCard = ({ title, description, date, time, image }) => {
        const urlStatic = import.meta.env.VITE_STATIC_URL;
    return (
        <article className="events-article">
            <div className="event-container">
                <img className="event-img" src={`${urlStatic}/img/${image}`} alt={title} />
                <div className="event-title">
                    <h2 className="event-h2">{title}</h2>
                    <h3 className="event-date">{date} de {time}</h3>
                </div>
            </div>
            <p className="event-desc">{description}</p>
        </article>
    );
}

export default EventsCard;