import { useEffect, useState } from "react";
import Table from "@/components/Table";
import UserModal from "@/components/modals/UserModal";
import { useAdmin } from "@/hooks/useAdmin";

const AdminUsers = () => {
    const { users, getUserById, updateUser, deleteUserPermanently, getAllUsers } = useAdmin();
    const isAdminList = [
        { value: "true", label: "true" },
        { value: "false", label: "false" },
    ];
    // Estado para almacenar un usuario vacío para inicializar el modal
    const emptyUser = { name: "", username: "", street: "", city: "", cp: "", isAdmin: "false" };
    // Estado para controlar si el modal está abierto o cerrado
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(emptyUser);

    useEffect(()=> {
        getAllUsers()
    },[])

    // Función que se ejecuta cuando se hace click en "Actualizar" de un usuario
    const handleUpdateClick = async (userId) => {
        const user = await getUserById(userId);
        if (user) {
            // Si el usuario existe, se setea en el estado editingUser
            setEditingUser(user);
            // Abrir el modal para editar el usuario
            setIsModalOpen(true);
        }
    };

    // Función que se ejecuta al enviar el modal con los datos del usuario
    const handleSubmit = async (userData) => {
        if (userData._id) {
            await updateUser(userData._id, userData);
        }
        // Cerrar el modal
        setIsModalOpen(false);
        // Resetear
        setEditingUser(emptyUser);
    };

    return (
        <section className="tables-flex">
            <Table
                data={users} // Datos a mostrar
                columns={["name", "username"]} // Columnas a mostrar
                onUpdate={handleUpdateClick} // Función al hacer click en actualizar
                onDelete={deleteUserPermanently} // Función al hacer click en eliminar
            />

            <UserModal
                isOpen={isModalOpen} // Controla si el modal está abierto
                onClose={() => setIsModalOpen(false)} // Función para cerrar el modal
                onSubmit={handleSubmit} // Función al enviar los datos del modal
                initialData={editingUser} // Datos iniciales del modal (usuario a editar)
                isAdminList={isAdminList} // Lista de opciones para el campo isAdmin
            />
        </section>
    );
};

export default AdminUsers;
