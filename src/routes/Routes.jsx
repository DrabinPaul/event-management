import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/Home/ServiceDetails/ServiceDetails";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import Gallery from "../pages/Gallery/Gallery";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/serviceDetails/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch('/services.json')
            },
            {
                path:"/gallery",
                element:<Gallery></Gallery>
            },
            {
                path:"/aboutUs",
                element:<AboutUs></AboutUs>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
            
        ]
    }
])

export default router;