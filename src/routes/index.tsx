import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
// import Veryfy from "@/pages/Veryfy";
import { createBrowserRouter } from "react-router";
import DeluxeError from "@/components/ErrorComponent/Error";
import HService from "@/pages/Service/HService";
import Companies from "@/pages/Home/Companies";
import Contact from "@/pages/Home/Contact";


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
                path:"companies",
                Component:Companies
            },
            {
                path:"service",
                Component:HService
            },
            {
                path:"contact",
                Component:Contact
            },
            
            {
                path: "/",
                Component: Home,
            },
            
            
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
    // {
    //     Component: Veryfy,
    //     path: "/verify",
    //     errorElement: <DeluxeError />,

    // }
    // ,
 
])


export default router;