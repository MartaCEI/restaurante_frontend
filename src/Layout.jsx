import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import brickWall from '@/assets/images/brick-wall.jpg';


function Layout() {


  return (
    <div className="container" style={{ backgroundImage: `url(${brickWall})` }}>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
