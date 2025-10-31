const EventsCard = ({ title, description, date, time, img }) => {
    return (
        <article className="events-article">
            <div className="event-container">
                <img className="event-img" src="https://picsum.photos/200/300" alt={title} />
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