import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";


const Root = () => {
    return (
        <div className="">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;