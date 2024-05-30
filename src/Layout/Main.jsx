import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar";


const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Main;