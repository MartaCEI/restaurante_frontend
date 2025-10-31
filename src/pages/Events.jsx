import TopPictures from "@/components/TopPictures";
import EventsCard from "@/components/EventsCard";
import { useEvents } from "@/hooks/useEvents";
import { usePageInfo } from "@/hooks/usePageInfo";
import { useEffect } from "react";


const Events = () => {
    const {events, error} = useEvents();
        const { pageInfo, fetchPageInfo } = usePageInfo();

        useEffect(() => {
            fetchPageInfo("events");
        }, []);
    
    return (
        <>
            {pageInfo && <TopPictures pageInfo={pageInfo} />}
            <section className="event-flex">
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