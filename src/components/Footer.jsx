import { useLocation} from "react-router";
import { Link } from "react-router";
const Footer = () => {
  const location = useLocation();
const hidePaths = ['/login', '/signup'];

  if (hidePaths.includes(location.pathname)) {
    return null;
  }
 
    return (
      <section className="footercontainer mt-20">
      <footer className="bg-black">
        <div className="container flex flex-col items-center justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0 border-b-1 border-white ">
          <div className="flex flex-col md:flex-row gap-3 items-center ">
          <h1 className="text-2xl text-white">3elegant</h1>
          <hr className="w-px h-full bg-white border-none transform rotate-180 " />
          <p className="text-white">Gift and decoration store</p>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-6">
            <Link to="/" className="text-white hover:text-gray-500">Home</Link>
            <Link to="/shop" className="text-white hover:text-gray-500">Shop</Link>
            <Link to="/product" className="text-white hover:text-gray-500">Product</Link>
            <Link to="/blog" className="text-white hover:text-gray-500">Blog</Link>
            <Link to="/contact" className="text-white hover:text-gray-500">Contact Us</Link>
          </div>      
        </div>

       <div className="container flex flex-col items-center justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="">
        <p className="text-white"> &copy; 2025 3elegant All Rights Resrved </p>
        <p>Priacy policy</p>
        </div>

        <img src="/src/assets/FB.png" alt="" />
       
       </div>
      </footer>
      </section>
    );
  };
  
  export default Footer;