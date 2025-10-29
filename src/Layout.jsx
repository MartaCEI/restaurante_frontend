import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import '@/css/cabeceras.css'
import '@/css/menu.css'

function Layout() {


  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
