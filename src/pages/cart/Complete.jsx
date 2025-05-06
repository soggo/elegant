// Complete.js
import React, { useContext } from 'react'; // Removed useState if not needed
import CartContext from '../../context/CartContext';
import { Link } from 'react-router';

const Complete = () => {
  // Get totalAmount (subtotal), selectedShippingCost, and finalTotal from context
  const { items, totalAmount, selectedShippingCost, finalTotal } = useContext(CartContext);
  // const total = totalAmount; // OLD: This was just the subtotal.

  // Get current date for display
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });


  return (
    <div className="max-w-[1120px] mx-auto ">
      {/* ... (Page Title and Progress Indicator remain the same) */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Complete!</h1>
         <section className="flex justify-center gap-4 md:gap-16 mb-10 md:mb-12">
                 <Link to={'/cart'}>
                     <div className="hidden md:flex items-center gap-3 border-b border-green-500 py-5 ">
                         <div className="bg-green-400 h-8 w-8 rounded-full text-white flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                         <p className="text-sm text-green-400">Shopping Cart</p>
                     </div>
                 </Link>
                 <Link to={'/checkout'}>
                     <div className="hidden md:flex items-center gap-3 border-b border-green-500 py-5">
                         <div className="bg-green-400 h-8 w-8 rounded-full text-white flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                         <p className="text-sm text-green-400">Checkout Details</p>
                     </div>
                 </Link>
                 <div className="flex items-center gap-3 border-b border-black py-5">
                     <div className="bg-black h-8 w-8 rounded-full text-white flex items-center justify-center"><p className="flex self-center">3</p></div>
                     <p className="text-sm font-semibold">Order complete</p>
                 </div>
         </section>


      <section className="flex flex-col items-center pb-15">
        <p className="text-3xl">Thank You</p>
        <p className="text-4xl text-center">Your Order has been <br /> received </p>

        <div className='flex gap-10 mt-4'>
          {items.map((item) => (
            <div key={item.id} className="flex flex-row">
              <div className='flex flex-row relative'> {/* Added relative for positioning quantity badge */}
                <img src={item.image} alt={item.name} className='w-20 h-20 md:w-24 md:h-24 object-cover rounded' /> {/* Adjusted image size */}
                <h2 className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-white flex justify-center items-center text-xs'>
                  {item.quantity}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col md:w-[548px] mt-8 gap-3 items-center border p-6 rounded-lg shadow-sm'>
          <div className='flex flex-col md:flex-row md:justify-between w-full md:w-80'>
            <p className="font-medium">Order Code:</p>
            <p>#00239_2992</p> {/* Example, you might generate this dynamically */}
          </div>

          <div className='flex flex-col md:flex-row md:justify-between w-full md:w-80'>
            <p className="font-medium">Date:</p>
            <p>{currentDate}</p> {/* Display current date */}
          </div>

          <div className='flex flex-col md:flex-row md:justify-between w-full md:w-80'>
            <p className="font-medium">Subtotal:</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>

          <div className='flex flex-col md:flex-row md:justify-between w-full md:w-80'>
            <p className="font-medium">Shipping:</p>
            <p>${selectedShippingCost.toFixed(2)}</p>
          </div>

          <div className='flex flex-col md:flex-row md:justify-between w-full md:w-80 font-bold text-lg border-t pt-2 mt-2'>
            <p>Total:</p>
            <p>${finalTotal.toFixed(2)}</p> {/* Use finalTotal from context */}
          </div>

          <div className='flex flex-col md:flex-row md:justify-between w-full md:w-80'>
            <p className="font-medium">Payment method:</p>
            {/* This should ideally come from the checkout process state as well */}
            <p>Credit Card</p>
          </div>
        </div>
       <button className='mt-6 bg-black w-1/4 h-10 rounded-2xl text-white'> <a href="/">Back home</a></button>

      </section>
    
    </div>
  );
};

export default Complete;