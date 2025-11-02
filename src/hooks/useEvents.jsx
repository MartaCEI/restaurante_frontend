import { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const urlBackend = import.meta.env.VITE_BACKEND_URL;
    const [events, setEvents] = useState(null);
    const [error, setError] = useState(null);

    // router.get("/events", getAllEvents) // Obtener todos los eventos
    const getEvents = async () => {
        try {
            const res = await fetch(`${urlBackend}/events`);
            const response = await res.json();
            if (response.status === "error") {
                setError(response.msg);
                setEvents(null);
                return;
            }
            // Filtrar eventos activos (deletedAt === null)
            const activeEvents = response.data.filter(event => event.deletedAt === null);
            setEvents(activeEvents);
            setError(null);
            console.log("[getEvents]: Eventos encontrados:", activeEvents);
        } catch (error) {
            console.log("[getEvents] Error:", error);
            setError("Hubo un error al obtener los eventos.");
            setEvents(null);
        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <EventContext.Provider value={{
            events,
            error,
        }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEvents = () => useContext(EventContext);
