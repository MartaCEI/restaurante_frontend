import Table from "@/components/Table";
import { useAdmin } from "@/hooks/useAdmin";

const AdminUsers = () => {
    const {users} = useAdmin();

    return (
        <section className="tables-flex">
            <Table data={users} columns={["name", "username"]} />
        </section>
    );
}

export default AdminUsers;
