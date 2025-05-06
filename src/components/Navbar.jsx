import { Link, useLocation } from "react-router"; 
import { useState, useEffect, useRef, useContext } from 'react';
import CartContext from '/src/context/CartContext';

function Navbar() {
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((currentTotal, item) => {
    return currentTotal + item.quantity;
  }, 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const btnRef = useRef(null);
 
  const location = useLocation();
  const hidePaths = ['/login', '/signup'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const closeMenu = () => {
    if (isMenuOpen) { 
      setIsMenuOpen(false);
    }
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
    <nav className="w-full sticky top-0 z-50 bg-white mb-4 shadow-sm"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <button
            ref={btnRef}
            id="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen} 
            aria-controls="menu" 
            className="block hamburger md:hidden focus:outline-none z-20"
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>

          <div className="pt-2">
            <Link to="/" onClick={closeMenu}> 
              <h1 className="text-3xl font-semibold">3elegant.</h1>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-gray-500">Home</Link>
            <Link to="/shop" className="hover:text-gray-500">Shop</Link>
            <Link to="/shop" className="hover:text-gray-500">Products</Link> 
            <Link to="/contact" className="hover:text-gray-500">Contact Us</Link>
          </div>

          <div className="flex gap-3 items-center"> 
            <button className="hidden md:block p-1 hover:bg-gray-100 rounded-full" aria-label="Search"> 
              <img className="h-6 w-6" src="/search.png" alt="Search" />
            </button>
            <button className="hidden md:block p-1 hover:bg-gray-100 rounded-full" aria-label="User profile">
              <img className="h-6 w-6" src="/usercircle.png" alt="User Profile" />
            </button>

            <Link to='/cart' className="flex items-center relative p-1 hover:bg-gray-100 rounded-full"> 
              <img className="h-6 w-6" src="/cart.png" alt="Shopping Cart" />
              {numberOfCartItems > 0 && (
                <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-black w-[20px] h-[20px] rounded-full text-white text-xs flex items-center justify-center font-bold">
                  {numberOfCartItems}
                </div>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
         
            id="menu"
            className={`fixed inset-0 top-[80px] flex-col items-start px-6 py-8 space-y-4 font-bold bg-white z-10 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}
          >
            <div className="relative w-full mx-auto mb-4"> 
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500" aria-label="Search submit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

      
            <Link to="/" className="hover:text-red-500 py-3 border-b border-gray-200 w-full block text-lg" onClick={closeMenu}>Home</Link>
            <Link to="/shop" className="hover:text-red-500 py-3 border-b border-gray-200 w-full block text-lg" onClick={closeMenu}>Shop</Link>
            <Link to="/shop" className="hover:text-red-500 py-3 border-b border-gray-200 w-full block text-lg" onClick={closeMenu}>Products</Link>
            <Link to="/contact" className="hover:text-red-500 py-3 border-b border-gray-200 w-full block text-lg" onClick={closeMenu}>Contact Us</Link>

            <div className="w-full mt-auto pt-8 space-y-2">
              <Link to="/cart" className="hover:text-red-500 py-3 border-b border-gray-200 w-full block text-lg" onClick={closeMenu}>Cart</Link>
              <Link to="/wishlist" className="hover:text-red-500 py-3 border-b border-gray-200 w-full block text-lg" onClick={closeMenu}>Wishlist</Link>
              <Link to="/login" className="block w-full mt-6" onClick={closeMenu}>
                <button className="bg-black text-white w-full py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 text-lg">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;