import { createBrowserRouter } from "react-router-dom";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import TakeOut from "@/pages/TakeOut";
import Events from "@/pages/Events";
import Reservations from "@/pages/Reservations";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Cart from "@/pages/Cart";
import Admin from "@/pages/Admin";
import IndividualProduct from "@/pages/IndividualProduct";
import ErrorPage from "@/ErrorPage";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children:[
        {
            index: true,
            element: <Home />
        },
        {
            path: "/menu",
            element: <Menu />
        },
        {
            path: "/takeOut",
            element: <TakeOut />
        },
        {
            path: "/events",
            element: <Events />
        },
        {
            path: "/reservations",
            element: <Reservations />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/admin",
            element: <Admin />
        },
        {
            path: "/menu/:id",
            element: <IndividualProduct />
        },
        {
            path: "*",
            element: <ErrorPage />
        }
    ]
}]);

export default router;
