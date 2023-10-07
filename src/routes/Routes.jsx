import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/Home/ServiceDetails/ServiceDetails";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import Gallery from "../pages/Gallery/Gallery";


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
            }
            
        ]
    }
])

export default router;