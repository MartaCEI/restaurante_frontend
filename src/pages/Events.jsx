import TopPictures from "@/components/TopPictures";
import EventsCard from "../components/EventsCard";
import { useEvents } from "../hooks/useEvents";


const Events = () => {
    const {events, error} = useEvents();
    return (
        <>
            <TopPictures />
            <section className="event-flex">
                <h2>NUESTROS EVENTOS</h2>
                <p>Un restaurante magnifico que te dejara con la boca abierta de los apetitoso y delicioso que es todo. No solo ofrecemos comida pero tambien cenas de gruppos, eventos en fechas especiales...</p>
                <div className="event-grid">
                    { events &&
                        events.map((e => 
                            <EventsCard key={e._id} {...e}/>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Events;