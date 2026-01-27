import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Veryfy from "@/pages/Veryfy";
import { createBrowserRouter } from "react-router";
import DeluxeError from "@/components/ErrorComponent/Error";
import OrderTrack from "@/pages/User/OrderTrack/Ordertack";
import Help from "@/pages/Help/Help";
import OrderSuccessPage from "@/components/layout/OrderSuccess/OrderSuccessPage";


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
                path: "thankyou",
                Component: OrderSuccessPage,
            }, 
            {
                path: "/",
                Component: Home,
            },
            {
                path:"ordertrack",
                Component:OrderTrack
            },
            {
                path:"help",
                Component:Help
            }
        ]
    }
    ,
    
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