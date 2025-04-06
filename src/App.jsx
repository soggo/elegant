import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/home/Home";
import Layout from "../Layout";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import Login from "./pages/accesspage/Login";
import Signup from "./pages/accesspage/Signup";
import Product from "./pages/productPages/Product";
import CartProvider from './context/CartProvider'; 
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/cart/Checkout";
import Complete from "./pages/cart/Complete";


function App(){
  return(
    <CartProvider>
      <BrowserRouter>

      <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='shop' element={<Shop/>}/> 
        <Route path='blog' element={<Blog/>}/> 
        <Route path='login' element={<Login/>}/> 
        <Route path='signup' element={<Signup/>}/> 
        <Route path='product' element={<Product/>}/>  
        <Route path="/product/:productId" element={<Product />} />
        <Route path="cart" element={<Cart/>} /> 
        <Route path="checkout" element={<Checkout/>} /> 
        <Route path="complete" element={<Complete/>} /> 


        <Route path="contact" element={<Contact/>} /> 

      </Route>
      </Routes>
      
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;