
import logo from '@/assets/react.svg'
import { useUser } from "@/hooks/useUser";
import MainHeader from "@/components/header/MainHeader";
import UserHeader from "@/components/header/UserHeader";
import AdminHeader from "@/components/header/AdminHeader";


const Header = () => {
    const { user, logout } = useUser();
    // const navigate = useNavigate();
    return (
            <header className="header-container">
                <div className="header-imgdiv">
                    <img src={logo} alt="logo" className="header-img" />
                </div>

                {/* Segun si el User existe, no existe o es Admin enseña un nav diferente.  */}
                {!user && <MainHeader />}
                {(user && !user.admin) && <UserHeader user={user} />}
                {(user && user.admin) && <AdminHeader user={user} />}
            </header>

    );
}

export default Header;