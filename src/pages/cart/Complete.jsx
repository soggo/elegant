import React, { useState, useContext } from 'react';
import CartContext from '../../context/CartContext'; 
import { Link } from 'react-router';
const Complete = () => {
 const { items, totalAmount} = useContext(CartContext);
 const total = totalAmount;
    return (
    <div className="max-w-[1120px] mx-auto ">
        {/* Page Title */}
         <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Complete!</h1>

        {/* Progress Indicator */}
        <section className="flex justify-center gap-4 md:gap-16 mb-10 md:mb-12">
                {/* Step 1 */}
                <Link to={'/cart'}>
                    <div className="hidden md:flex items-center gap-3 border-b border-green-500 py-5 ">
                        <div className="bg-green-400 h-8 w-8 rounded-full text-white flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                        <p className="text-sm text-green-400">Shopping Cart</p>
                    </div>
                </Link>
                {/* Step 2 */}
                <Link to={'/checkout'}>
                    <div className="hidden md:flex items-center gap-3 border-b border-green-500 py-5">
                        <div className="bg-green-400 h-8 w-8 rounded-full text-white flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                        <p className="text-sm text-green-400">Checkout Details</p>
                    </div>
                </Link>
                {/* Step 3 */}
                <div className="flex items-center gap-3 border-b border-black py-5">
                    <div className="bg-black h-8 w-8 rounded-full text-white flex items-center justify-center"><p className="flex self-center">3</p></div>
                    <p className="text-sm font-semibold">Order complete</p>
                </div>
        </section>


        <section className="flex flex-col items-center pb-15">
            <p className="text-3xl">Thank You</p>
            <p className="text-4xl text-center">Your Order has been <br /> received </p>

            <div className='flex gap-10 mt-4  '>
                {items.map((item) =>(
                    <div key={item.id} className= "flex flex-row">
                            <div className='flex flex-row' >
                                 <img src={item.image} alt="" className='w-45' />
                                 <h2 className='w-5 h-5 rounded-full bg-black text-white flex justify-center items-center'>{item.quantity} </h2>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col md:w-[548px] mt-4 gap-3 items-center '>
                <div className='flex flex-col md:flex-row  md:justify-between  w-80'>
                    <p>Order Code:</p>
                    <p>00239_2992</p>     
                </div>

                <div className='flex flex-col md:flex-row md:justify-between  w-80'>
                    <p className>Date:</p>
                    <p>April 5, 2025</p>     
                </div>

                <div className='flex flex-col md:flex-row  md:justify-between  w-80'>
                    <p>Total:</p>
                    <p>${total}</p>     
                </div>

                <div className='flex flex-col md:flex-row md:justify-between  w-80'>
                    <p>Payment method:</p>
                    <p>Credit Card</p>     
                </div>
                </div>
        </section>




    </div>
    )
  }
  
  export default Complete