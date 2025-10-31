import { useState, useEffect } from "react";
import Table from "@/components/Table";
import EventModal from "@/components/modals/EventModal";
import { useAdmin } from "@/hooks/useAdmin";

const AdminEvents = () => {
    const { events, getEventById, updateEvent, createEvent, softDeleteEvent, getAllEventsAdmin } = useAdmin();

    const emptyEvent = { title: "", description: "", date: "", time: "", img: "" };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState(emptyEvent);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(()=> {
        getAllEventsAdmin();
    },[events])

    const handleCreateClick = () => {
        setEditingEvent(emptyEvent);
        setIsCreating(true);
        setIsModalOpen(true);
    };

    const handleUpdateClick = async (eventId) => {
        const event = await getEventById(eventId);
        if (event) {
            setEditingEvent(event);
            setIsCreating(false);
            setIsModalOpen(true);
        }
    };

    const handleSubmit = async (eventData) => {
        if (isCreating) {
            await createEvent(eventData); // crear nuevo evento
        } else if (eventData._id) {
            await updateEvent(eventData._id, eventData); // actualizar existente
        }
        setIsModalOpen(false);
        setEditingEvent(emptyEvent);
    };

    return (
        <section className="tables-flex">
            <div className="modal-buttons">
                <p>Crear evento:</p>
                <button className="form-button actualizar" onClick={handleCreateClick}>nuevo</button>
            </div>

            <Table
                data={events}
                columns={["title", "date", "time"]}
                onUpdate={handleUpdateClick}
                onDelete={softDeleteEvent}
            />

            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                initialData={editingEvent}
            />
        </section>
    );
};

export default AdminEvents;
