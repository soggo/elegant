// Cart.js
import React, { useContext } from 'react'; // Removed useState if no longer needed for other purposes
import { Link } from 'react-router';
import CartContext from '/src/context/CartContext';

const Cart = () => {
  // Destructure new values and functions from context
  const { items, totalAmount, removeItem, updateQuantity, selectedShippingCost, updateShippingCost, finalTotal } = useContext(CartContext);
  // const [selectedShippingCost, setSelectedShippingCost] = useState(0) // REMOVE this local state

  const handleShippingChange = (event) => {
    const cost = Number(event.target.value);
    updateShippingCost(cost); // Use context's update function
  };

  // const finalTotal = totalAmount + selectedShippingCost; // REMOVE this local calculation, use finalTotal from context

  return (
    <main className="px-auto flex flex-col items-center gap-5 mb-19.5">
      <p className="text-3xl">Cart</p>
      {items.length === 0 ? (
        // ... (empty cart UI remains the same)
         <div className="text-center py-10 border rounded-md w-full max-w-md">
           <p className="text-xl text-gray-600 mb-4">Your cart is currently empty.</p>
           <Link to="/shop" className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800">
             Continue Shopping
           </Link>
         </div>
      ) : (
        <>
          {/* ... (progress indicator remains the same) */}
          <section className="flex gap-40 md:gap-25">
             <div className="flex items-center gap-5 border-b border-black py-5">
               <div className="bg-black h-8 w-8 rounded-full text-white flex justify-center">
                 <p className="flex self-center">1</p>
               </div>
               <p>Shopping Cart</p>
             </div>
             <div className="flex items-center gap-5 opacity-60">
               <div className="bg-black h-8 w-8 rounded-full text-white flex justify-center">
                 <p className="flex self-center">2</p>
               </div>
               <p className='hidden md:block'>Checkout Details</p>
             </div>
             <div className="hidden md:flex md:items-center md:gap-5 md:opacity-60">
               <div className="bg-black h-8 w-8 rounded-full text-white flex justify-center">
                 <p className="flex self-center">3</p>
               </div>
               <p>Order Complete</p>
             </div>
           </section>


          <section className="flex flex-col md:flex-row md:gap-10">
            {/* ... (item listing remains the same, ensure updateQuantity and removeItem are correctly used) */}
            <div className="md:hidden">
               <div className=" bg-gray-100 w-94 h-100">
                 <div className="flex items-center p-4 border-b font-medium">
                   <div className="flex-1">Product</div>
                 </div>
                 {items.map((item) => (
                   <div key={item.id} className="border-b py-4 px-4 text-sm flex justify-between ">
                     <div className="col-span-1 flex items-center gap-3">
                         {item.image && <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded"/>}
                         <div className="flex flex-col">
                             <span className="font-medium">{item.name}</span>
                             <div className="text-center">
                         <div className="border inline-flex items-center justify-around p-1 rounded">
                             <button
                                 onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}
                                 className='text-base px-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                                 disabled={item.quantity <= 1}
                                 aria-label={`Decrease quantity of ${item.name}`}
                             >
                                -
                             </button>
                             <div className="font-medium w-6 text-center">{item.quantity}</div>
                             <button
                                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                 className='text-base px-2 cursor-pointer'
                                 aria-label={`Increase quantity of ${item.name}`}
                             >
                                +
                             </button>
                         </div>
                     </div>
                 </div>
              </div>
                     <div className="flex flex-col">
                         <div className="text-right text-gray-700">${item.price}</div>
                         <div className="text-right font-semibold"> <button onClick={() => removeItem(item.id)} className=' hover:text-red-700  cursor-pointer mt-1 text-left text-xl'>X</button>
                         </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="md:block hidden">
               <div className="  w-155 h-100 ">
                 <div className="flex items-center p-4 border-b font-medium">
                   <div className="flex-1">Product</div>
                   <div className="w-24 text-center">Quantity</div>
                   <div className="w-20 text-right">Price</div>
                   <div className="w-20 text-right">Subtotal</div>
                 </div>
                 {items.map((item) => (
                   <div key={item.id} className="grid grid-cols-4 gap-4 items-center border-b py-4 text-sm">
                     <div className="col-span-1 flex items-center gap-3">
                         {item.image && <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded"/>}
                         <div className="flex flex-col">
                             <span className="font-medium">{item.name}</span>
                             <button onClick={() => removeItem(item.id)} className='text-red-500 hover:text-red-700 text-xs cursor-pointer mt-1 text-left'>Remove</button>
                         </div>
                     </div>
                     <div className="text-center">
                         <div className="border inline-flex items-center justify-around p-1 rounded">
                             <button
                                 onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}
                                 className='text-base px-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                                 disabled={item.quantity <= 1}
                                 aria-label={`Decrease quantity of ${item.name}`}
                             >
                                -
                             </button>
                             <div className="font-medium w-6 text-center">{item.quantity}</div>
                             <button
                                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                 className='text-base px-2 cursor-pointer'
                                 aria-label={`Increase quantity of ${item.name}`}
                             >
                                +
                             </button>
                         </div>
                     </div>
                     <div className="text-right text-gray-700">${item.price}</div>
                     <div className="text-right font-semibold">${(item.price * item.quantity)}</div>
                   </div>
                 ))}
               </div>
             </div>

            {/* Cart Summary */}
            <div className=" border w-94 md:w-100  p-3">
              <p className='text-2xl'>Cart Summary</p>
              <div className="">
                {/* Shipping Options - Use selectedShippingCost from context for checked state */}
                <div className="space-y-2">
                  <div className="flex items-center border p-4">
                    <input
                      type="radio"
                      id="free-shipping"
                      name="shipping"
                      value='0'
                      checked={selectedShippingCost === 0} // Use context value
                      onChange={handleShippingChange}
                      className="mr-2 accent-black cursor-pointer"
                    />
                    <p>Free shipping</p>
                    <p className='ml-auto'>$0.00</p>
                  </div>
                  <div className="flex items-center border p-4">
                    <input
                      type="radio"
                      id="express-shipping" // Changed id for uniqueness
                      name="shipping"
                      value="15"
                      checked={selectedShippingCost === 15} // Use context value
                      className="mr-2 accent-black cursor-pointer"
                      onChange={handleShippingChange}
                    />
                    <p>Express Shipping</p>
                    <p className='ml-auto'>+$15.00</p>
                  </div>
                  <div className="flex items-center border p-4">
                    <input
                      type="radio"
                      id="pickup-shipping" // Changed id for uniqueness
                      name="shipping"
                      value="21"
                      checked={selectedShippingCost === 21} // Use context value
                      onChange={handleShippingChange}
                      className="mr-2 accent-black cursor-pointer"
                    />
                    <p>Pick Up</p>
                    <p className='ml-auto'>+$21.00</p> {/* Ensure consistency in currency display */}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">${totalAmount.toFixed(2)}</span> {/* Use totalAmount (subtotal) from context */}
                  </div>
                  <hr className='w-full my-1' /> {/* Use w-full and my-1 for better hr styling */}
                  <div className="flex justify-between">
                    <span className="text-sm">Total</span>
                    <span className="text-lg">${finalTotal.toFixed(2)}</span> {/* Use finalTotal from context */}
                  </div>
                </div>

                <Link to={"/checkout"}>
                  <button className="w-full py-2 mt-4 bg-black text-white rounded-lg hover:bg-gray-800">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Cart;