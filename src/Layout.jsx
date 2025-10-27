import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
