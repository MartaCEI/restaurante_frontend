
import { useUser } from "@/hooks/useUser";
import MainHeader from "@/components/header/MainHeader";
import UserHeader from "@/components/header/UserHeader";
import AdminHeader from "@/components/header/AdminHeader";
import { NavLink } from "react-router-dom";


const Header = () => {
    const { user, logout } = useUser();
    const VITE_FRONTEND_IMG = import.meta.env.VITE_FRONTEND_IMG;

    return (
        <header className="header-container">
            <div className="header-imgdiv">
                <NavLink to="/" >
                    <img src={`${VITE_FRONTEND_IMG}/logo.png`} alt="logo" className="header-img" />
                </NavLink>
            </div>
            {/* Segun si el User existe, no existe o es Admin enseña un nav diferente.  */}
            {!user && <MainHeader />}
            {(user && !user.admin) && <UserHeader user={user} />}
            {(user && user.admin) && <AdminHeader user={user} />}
        </header>

    );
}

export default Header;