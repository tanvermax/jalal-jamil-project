import App from "@/App";
// import AddProduct from "@/components/layout/AdminLayoute/AddProduct/AddProduct";
// import User from "@/components/layout/AdminLayoute/User";
import DashbordLayout from "@/components/layout/DashbordLayout";
import About from "@/pages/About";
// import Analytic from "@/pages/Admin/Analytic";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Veryfy from "@/pages/Veryfy";
import { genarateRoutes } from "@/utils/genarateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItem } from "./adminSideberitem";
import { userSidebarItem } from "./userSIdebarItem";
import DeluxeError from "@/components/ErrorComponent/Error";
import ProductDetails from "@/components/layout/HomeLayout/ProductCard/ProductDetails";
import Shope from "@/components/Shop/Shope";
import CartPage from "@/components/layout/HomeLayout/Cart/Cart";
import OrderTrack from "@/pages/User/OrderTrack/Ordertack";


const router = createBrowserRouter([
    {
        Component: App,
        errorElement: <DeluxeError />,
        path: "/",
        children: [
            {
                path: "about",
                Component: About,
            },
            {
                path: "shop",
                Component: Shope,
            }, 
            {
                path: "cart",
                Component: CartPage,
            }, 
            {
                path: "/",
                Component: Home,
            },
            {
                path:"product/:id",
                Component:ProductDetails
            },
            {
                path:"ordertrack",
                Component:OrderTrack
            }


        ]
    }
    ,
    {
        Component: DashbordLayout,
        path: "/admin",
        children: [...genarateRoutes(adminSidebarItem)],
        errorElement: <DeluxeError />,

    },
    {
        Component: DashbordLayout,
        path: "/user",
        children: [...genarateRoutes(userSidebarItem)],
        errorElement: <DeluxeError />,


    },
    {
        Component: Login,
        path: "/login",
        errorElement: <DeluxeError />,

    },
    {
        Component: Register,
        path: "/register",
        errorElement: <DeluxeError />,

    },
    {
        Component: Veryfy,
        path: "/verify",
        errorElement: <DeluxeError />,

    }
    ,
    

])


export default router;