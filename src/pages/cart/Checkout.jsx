// Checkout.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router';
import CartContext from '../../context/CartContext';

const Checkout = () => {
  // Destructure all necessary values from CartContext
  const { items, totalAmount, removeItem, updateQuantity, selectedShippingCost, finalTotal } = useContext(CartContext);

  const [firstName, setFirstName] = useState('');
  // ... other form states remain the same
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('Netherlands');
  const [city, setCity] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [useDifferentBilling, setUseDifferentBilling] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  // const [selectedShippingCost, setSelectedShippingCost] = useState(0); // REMOVE this local state

  const handlePaymentMethodChange = (event) => {
    console.log("Payment method changed to:", event.target.value);
    setSelectedPaymentMethod(event.target.value);
  };

  // const finalTotal = totalAmount + selectedShippingCost; // REMOVE this local calculation, use finalTotal from context

  return (
    <div className="max-w-[1120px] mx-auto px-4 py-8 md:py-12">
      {/* ... (header and progress bar remain the same) */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Check Out</h1>

       <section className="flex justify-center gap-4 md:gap-16 mb-10 md:mb-12">
         <Link to={'/cart'}>
           <div className="hidden md:flex items-center gap-3  border-b border-green-500 py-5 ">
             <div className="bg-green-400 h-8 w-8 rounded-full text-white flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
             <p className="text-sm text-green-400">Shopping Cart</p>
           </div>
         </Link>
         <div className="flex items-center gap-3 border-b mr-3 border-black py-5">
           <div className="bg-black h-8 w-8 rounded-full text-white flex items-center justify-center"><p className="flex self-center font-semibold">2</p></div>
           <p className="text-sm font-semibold">Checkout details</p>
         </div>
         <div className="flex items-center gap-3 opacity-60">
           <div className="bg-gray-400 h-8 w-8 rounded-full text-white flex items-center justify-center"><p className="flex self-center">3</p></div>
           <p className="text-sm hidden md:block">Order complete</p>
         </div>
       </section>

      <form className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* ... (form fields remain the same) */}
        <div className="w-full md:w-2/3 space-y-8">
           <div className="bg-white p-6 rounded-lg shadow-sm border">
             <h2 className="text-lg font-semibold mb-4 border-b pb-2">Contact Information</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
               <div>
                 <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
                 <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm" required />
               </div>
               <div>
                 <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
                 <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm" required />
               </div>
               <div className="sm:col-span-2">
                 <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Phone Number <span className="text-gray-400">(Optional)</span></label>
                 <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+234 ..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm" />
               </div>
               <div className="sm:col-span-2">
                 <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                 <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm" required />
               </div>
             </div>
           </div>

           <div className="bg-white p-6 rounded-lg shadow-sm border">
             <h2 className="text-lg font-semibold mb-4 border-b pb-2">Shipping Address</h2>
             <div className="space-y-4">
               <div>
                 <label htmlFor="streetAddress" className="block text-xs font-medium text-gray-700 mb-1">Street Address</label>
                 <input type="text" id="streetAddress" name="streetAddress" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} placeholder="123 Example Street, Apt 4B" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm" required />
               </div>
               <div>
                 <label htmlFor="country" className="block text-xs font-medium text-gray-700 mb-1">Country</label>
                 <select id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm bg-white" required>
                   <option value="Netherlands">Netherlands</option>
                   <option value="Nigeria">Nigeria</option>
                   <option value="USA">USA</option>
                   <option value="UK">UK</option>
                 </select>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                 <div>
                   <label htmlFor="city" className="block text-xs font-medium text-gray-700 mb-1">Town / City</label>
                   <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Lagos" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm" required />
                 </div>
                 <div>
                   <label htmlFor="stateProvince" className="block text-xs font-medium text-gray-700 mb-1">State / Province</label>
                   <select id="stateProvince" name="stateProvince" value={stateProvince} onChange={(e) => setStateProvince(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm bg-white" required>
                     <option value="">Select State/Province</option>
                     <option value="North Holland">North Holland</option>
                     <option value="Lagos">Lagos</option>
                     <option value="California">California</option>
                   </select>
                 </div>
               </div>
               <div>
                 <label htmlFor="zipCode" className="block text-xs font-medium text-gray-700 mb-1">ZIP / Postal Code</label>
                 <input type="text" id="zipCode" name="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="e.g. 100001" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm" required />
               </div>
               <div className="flex items-center mt-4">
                 <input type="checkbox" id="differentBilling" name="differentBilling" checked={useDifferentBilling} onChange={(e) => setUseDifferentBilling(e.target.checked)} className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black" />
                 <label htmlFor="differentBilling" className="ml-2 block text-sm text-gray-900 cursor-pointer">Use a different billing address (Optional)</label>
               </div>
             </div>
           </div>

           <div className="bg-white p-6 rounded-lg shadow-sm border">
             <h2 className="text-lg font-semibold mb-4 border-b pb-2">Payment method</h2>
             <div className="space-y-3">
               <div className="flex items-center p-3 border rounded-md has-[:checked]:bg-blue-50 has-[:checked]:border-black">
                 <input type="radio" id="paymentCard" name="paymentMethod" value="card" checked={selectedPaymentMethod === 'card'} onChange={handlePaymentMethodChange} className="h-4 w-4 text-black focus:ring-black border-gray-300 mr-3"/>
                 <label htmlFor="paymentCard" className="text-sm font-medium text-gray-900 cursor-pointer">Pay by Card Credit</label>
               </div>
               <div className="flex items-center p-3 border rounded-md has-[:checked]:bg-blue-50 has-[:checked]:border-black">
                 <input type="radio" id="paymentPaypal" name="paymentMethod" value="paypal" checked={selectedPaymentMethod === 'paypal'} onChange={handlePaymentMethodChange} className="h-4 w-4 text-black focus:ring-black border-gray-300 mr-3"/>
                 <label htmlFor="paymentPaypal" className="text-sm font-medium text-gray-900 cursor-pointer">Paypal</label>
               </div>
               {selectedPaymentMethod === 'card' && (
                 <div className="mt-6 pt-4 border-t space-y-4">
                   <h3 className="text-sm font-medium text-gray-800 mb-2">Card Details</h3>
                   <div>
                     <label htmlFor="cardNumber" className="block text-xs font-medium text-gray-700 mb-1">Card Number</label>
                     <input type="text" id="cardNumber" name="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="0000 0000 0000 0000" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm" required={selectedPaymentMethod === 'card'}/>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label htmlFor="expiryDate" className="block text-xs font-medium text-gray-700 mb-1">Expiration Date</label>
                       <input type="text" id="expiryDate" name="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM / YY" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm" required={selectedPaymentMethod === 'card'}/>
                     </div>
                     <div>
                       <label htmlFor="cvc" className="block text-xs font-medium text-gray-700 mb-1">CVC</label>
                       <input type="text" id="cvc" name="cvc" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="123" maxLength="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm" required={selectedPaymentMethod === 'card'}/>
                     </div>
                   </div>
                 </div>
               )}
             </div>
           </div>

           <div className="mt-8">
             <Link to={'/complete'}>
               <button type="submit" className="w-full py-3 px-6 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors duration-200">
                 Place Order
               </button>
             </Link>
           </div>
         </div>


        {/* Order Summary */}
        <div className="w-full md:w-1/4 lg:w-1/3">
          <div className=" p-6 rounded-lg shadow-sm border sticky top-28">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">Order summary</h2>
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
              {items.map((item) => (
                // ... (item mapping remains the same, ensure removeItem and updateQuantity are correctly used)
                 <div key={item.id} className="flex items-center justify-between gap-3 text-sm">
                   <div className="flex items-center gap-3 flex-grow min-w-0">
                     <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded flex-shrink-0"/>
                     <div className="flex flex-col flex-grow min-w-0">
                       <span className="font-medium truncate block">{item.name}</span>
                       <span className="text-xs text-gray-600">${item.price.toFixed(2)}</span>
                       <button onClick={() => removeItem(item.id)} className="text-red-500 text-xs text-left w-fit mt-1 hover:underline">Remove</button>
                     </div>
                   </div>
                   <div className="flex-shrink-0">
                     <div className="border inline-flex items-center justify-around p-0.5 rounded bg-white text-sm">
                       <button onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)} className='text-base px-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed' disabled={item.quantity <= 1}>-</button>
                       <div className="font-medium w-5 text-center text-sm">{item.quantity}</div>
                       <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className='text-base px-1.5 cursor-pointer'>+</button>
                     </div>
                   </div>
                 </div>
              ))}
            </div>

            <div className="mb-4 pt-4 border-t ">
              {/* ... (coupon code section remains the same) */}
              <label htmlFor="coupon" className="block text-xs font-medium text-gray-700 mb-1">Coupon Code</label>
               <div className="flex">
                 <input type="text" id="coupon" name="coupon" placeholder="Enter coupon" className="flex-grow  py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm"/>
                 <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-300 text-sm font-medium">Apply</button>
               </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalAmount.toFixed(2)}</span> {/* Subtotal from context */}
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${selectedShippingCost.toFixed(2)}</span> {/* Shipping cost from context */}
              </div>
              <div className="flex justify-between text-base font-bold border-t border-gray-300 pt-2 mt-2">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span> {/* Final total from context */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;