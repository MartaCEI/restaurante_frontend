import { useState } from "react";
import Table from "@/components/Table";
import UserModal from "@/components/modals/UserModal";
import { useAdmin } from "@/hooks/useAdmin";

const AdminUsers = () => {
    const { users, getUserById, updateUser, deleteUserPermanently } = useAdmin();

    const isAdminList = [
        { value: "true", label: "true" },
        { value: "false", label: "false" },
    ];

    const emptyUser = { name: "", username: "", street: "", city: "", cp: "", isAdmin: "false" };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(emptyUser);

    const handleUpdateClick = async (userId) => {
        const user = await getUserById(userId);
        if (user) {
            setEditingUser(user);
            setIsModalOpen(true);
        }
    };

    const handleSubmit = async (userData) => {
        if (userData._id) {
            await updateUser(userData._id, userData);
        }
        setIsModalOpen(false);
        setEditingUser(emptyUser);
    };

    return (
        <section className="tables-flex">
            <Table
                data={users}
                columns={["name", "username"]}
                onUpdate={handleUpdateClick}
                onDelete={deleteUserPermanently}
            />

            <UserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                initialData={editingUser}
                isAdminList={isAdminList}
            />
        </section>
    );
};

export default AdminUsers;
