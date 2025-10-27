import { useUser } from "@/contexts/useUser";
import Register from "@/pages/Register";

export const PrivateRoute = ({ children }) => {
    const { user } = useUser();

    return user ?
        children
        :
        <>
            <p className="text-red-600">No tienes permiso para ver esta página</p>
            <Register />
        </>;
}