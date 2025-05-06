import { Link , useLocation} from "react-router";
import { useState, useEffect, useRef, useContext } from 'react';
import CartContext from '/src/context/CartContext';


function Navbar() {
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((currentTotal, item) => {
    return currentTotal + item.quantity; 
  }, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const btnRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();
  const hidePaths = ['/login', '/signup'];

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (btnRef.current) {
      if (isMenuOpen) {
        btnRef.current.classList.add('open');
      } else {
        btnRef.current.classList.remove('open');
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden"); 
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); 
    };
  }, [isMenuOpen]);

  if (hidePaths.includes(location.pathname)) {
    return null;
  }

 
  return (
    <nav className="w-full sticky top-0 z-50 bg-white mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <button 
            ref={btnRef}
            id="menu-btn" 
            className="block hamburger md:hidden focus:outline-none z-20"
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
          
          <div className="pt-2">
          <Link to="/"> <h1 className="text-3xl font-semibold">3elegant.</h1></Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-500">Home</Link>
            <Link to="/shop" className="hover:text-gray-500">Shop</Link>
            <Link to="/shop" className="hover:text-gray-500">Product</Link>
            <Link to="/contact" className="hover:text-gray-500">Contact Us</Link>
          </div>
          
         
         <div className="flex gap-2">
          
            <img className="hidden md:block" src="/search.png" alt="" />
            <img className="hidden md:block" src="/usercircle.png" alt="" />
          
            {/* cart cmpnent */}
            <Link to='/cart' className="flex items-center relative">
            <img className="h-6 w-6" src="/cart.png" alt="Shopping Cart" />
            {numberOfCartItems > 0 && (
 
            <div className="ml-1 bg-black w-[20px] h-[20px] rounded-full text-white text-xs flex items-center justify-center font-bold">
                {numberOfCartItems}
            </div>
        )}
            

            </Link>
         </div>
        </div>

    
        <div className="md:hidden">
          <div 
            ref={navRef}
            id="menu" 
            className={`fixed inset-0 top-[80px] flex-col items-start px-4 py-8 space-y-6 font-bold bg-white z-10 ${isMenuOpen ? 'flex' : 'hidden'}`}
            
          >
   
            <div className="relative w-full mx-auto mb-2">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <button className="absolute right-3 top-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <Link to="/" className="hover:text-gray-500 py-3 border-b border-gray-300 w-full">Home</Link>
            <Link to="/shop" className="hover:text-gray-500 py-3 border-b border-gray-300 w-full">Shop</Link>
            <Link to="/shop" className="hover:text-gray-500 py-3 border-b border-gray-300 w-full">Product</Link>
            <Link to="/contact" className="hover:text-gray-500 py-3 border-b border-gray-300 w-full">Contact Us</Link>

            <div className="w-full mt-auto pt-10">
              <Link to="/cart" className="hover:text-gray-500 py-3 border-b border-gray-300 w-full block">Cart</Link>
              <Link to="/wishlist" className="hover:text-gray-500 py-3 border-b border-gray-300 w-full block">Wishlist</Link> 
              <Link to="/login"> <button className="bg-black text-white w-full h-14 mt-4 rounded-sm cursor-pointer">Login</button> </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;