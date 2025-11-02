import { useState, useEffect } from "react";
import Table from "@/components/Table";
import EventModal from "@/components/modals/EventModal";
import { useAdmin } from "@/hooks/useAdmin";

const AdminEvents = () => {
    const { events, getEventById, updateEvent, createEvent, softDeleteEvent, getAllEventsAdmin } = useAdmin();

    const emptyEvent = { title: "", description: "", date: "", time: "", image: "" };
    const [isModalOpen, setIsModalOpen] = useState(false); // Control del modal
    const [editingEvent, setEditingEvent] = useState(emptyEvent); // Evento que se está editando
    const [isCreating, setIsCreating] = useState(false); // Controla si se está creando un evento

    // Cargar eventos al montar el componente
    useEffect(() => {
        getAllEventsAdmin();
    }, [])

    // Crear nuevo evento
    const handleCreateClick = () => {
        setEditingEvent(emptyEvent);
        setIsCreating(true);
        setIsModalOpen(true);
    };

    // Editar evento existente
    const handleUpdateClick = async (eventId) => {
        const event = await getEventById(eventId);
        if (event) {
            setEditingEvent(event);
            setIsCreating(false);
            setIsModalOpen(true);
        }
    };

    // Guardar cambios del evento
    const handleSubmit = async (eventData) => {
        // Forzar valor por defecto si image está vacío
        const dataToSend = {
            ...eventData,
            image: eventData.image || "imagen.jpg"
        };
        if (isCreating) {
            await createEvent(dataToSend); // crear nuevo evento
        } else if (dataToSend._id) {
            await updateEvent(dataToSend._id, dataToSend); // actualizar existente
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

            {/* Tabla de eventos */}
            <Table
                data={events}
                columns={["title", "date", "time"]}
                onUpdate={handleUpdateClick}
                onDelete={softDeleteEvent}
            />

            {/* Modal para crear/editar evento */}
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
