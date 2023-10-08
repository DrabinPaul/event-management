import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/Home/ServiceDetails/ServiceDetails";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import Gallery from "../pages/Gallery/Gallery";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path:"/gallery",
                element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
            },
            {
                path:"/aboutUs",
                element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
            
        ]
    }
])

export default router;