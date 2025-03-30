import { Outlet } from "react-router"
import Navbar from './src/components/Navbar'
import Footer from "./src/components/Footer";

const Layout = () =>{
    return (
    <>
    <Navbar/>
    <Outlet/> 
    <Footer/>
    </>
    );
}

export default Layout