import { createBrowserRouter } from "react-router-dom";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import TakeOut from "@/pages/TakeOut";
import Events from "@/pages/Events";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Cart from "@/pages/Cart";
import ErrorPage from "@/ErrorPage";
import AdminUsers from "@/pages/AdminUsers";
import AdminMenu from "@/pages/AdminMenu";
import AdminEvents from "@/pages/AdminEvents";
import AdminOrders from "@/pages/AdminOrders";
import Summary from "@/pages/Summary";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children:[
        {
            index: true,
            element: <Home />
        },
        {
            path: "menu",
            element: <Menu />
        },
        {
            path: "takeOut",
            element: <TakeOut />
        },
        {
            path: "events",
            element: <Events />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "cart",
            element: <Cart />
        },
        {
            path: "summary",
            element: <Summary />
        },
        {
            path: "admin/users",
            element: <AdminUsers />
        },
        {
            path: "admin/menu",
            element: <AdminMenu />
        },
        {
            path: "admin/events",
            element: <AdminEvents />
        },
        {
            path: "admin/orders",
            element: <AdminOrders />
        },
        {
            path: "*",
            element: <ErrorPage />
        }
    ]
}]);

export default router;
