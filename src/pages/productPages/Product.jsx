import { useState, useContext } from 'react';
import CartContext from '/src/context/CartContext';
import { useParams } from 'react-router';
import { products } from '/src/data/productinfo'; 



const Product = () => {
  const reviews = [
    {id:1, proifle:'/avatar.png', review:'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident',rname:'Sofia Harvertsz'},
    {id:1, proifle:'/avatar.png', review:'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident',rname:'Sofia Harvertsz'},
    {id:1, proifle:'/avatar.png', review:'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident',rname:'Sofia Harvertsz'}
  ]
  const [review, setReview] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Newest');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
};

const decreaseQuantity = () => {
  setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

};

const handleAddToCart = () => {
  console.log(`Adding ${quantity} of ${product.name} to cart!`);
  addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: quantity
});
};
const { productId } = useParams();
  console.log("Product ID from URL:", productId);

  const product = products.find(p => p.id === Number(productId));
  console.log("Found Product:", product);
  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
         Wayo! Product not found. Check the link address?
      </div>
    );
  }
  const options = ['Newest', 'Oldest', 'Most Liked'];
    return (
      <>
      <div className="flex flex-col w-[311px] mx-auto   md:w-[1120px]">
          <div className="flex  md:flex-row ">
            <div className="flex flex-col">
              <p>Home &gt; Shop &gt; Living Room &gt; Product</p>

              <div className="flex flex-col md:flex-row">
                  <div className="flex">
                  <img src={product.image} alt="" />
                  </div>


                  <div className="flex flex-col">
                    <h1 className="text-4xl">{product.name}</h1>
                    <p>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>

                    <div className="flex items-baseline gap-3">
                    <p className="text-3xl font-bold">${product.price}</p> 
                    {product.oldPrice && (
                       <p className="text-lg text-gray-400 line-through">${product.oldPrice}</p>
                    )}
                 </div>
                    <hr />

                    <p>Offer expires in:</p>
                    <div className="bg-red-100 w-12 h-12"></div>
                    <p>Measurements</p>
                    <p>17 1/2x20 5/8</p>
                    <p>choose color &gt;</p>
                    <p>Black</p>

                    <div className="flex md:w-[314px] h-[72px] border gap-3 ">
                      <img src="/stable4.jpeg" alt="" className="w-full h-full object-contain"/>
                      <img src="/stable4.jpeg" alt="" className="w-full h-full object-contain"/>
                      <img src="/stable4.jpeg" alt="" className="w-full h-full object-contain"/>
                      <img src="/stable4.jpeg" alt="" className="w-full h-full object-contain"/>  
                    </div>     

                    <div className="grid grid-cols-[1fr_2fr] md:w-[508px] gap-2">
                      <div className="bg-gray-300 h-13 flex items-center justify-around">
                        <div className="text-lg">
                          <button 
                          onClick={decreaseQuantity}
                          className='cursor-pointer'>
                          -
                          </button>
                          </div>
                        <div className="text-lg">{quantity}</div>
                        <div className="text-lg">
                          <button
                           onClick={increaseQuantity}
                            className='cursor-pointer'
                          >
                          +
                          </button>
                          </div>
                      </div>
                      <div className="h-13 flex justify-center items-center gap-3">
                       
                         <button className="h-12 w-40 border rounded flex justify-center items-center gap-2 text-gray-700 hover:bg-gray-100 col-span-3 mt-2">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                       <span>Wishlist</span>
                    </button>
                     
                      </div>
                     <button
                          onClick={handleAddToCart} 
                          className="bg-black text-white h-12 md:h-13 col-span-2 w-full flex justify-center items-center font-bold text-lg rounded hover:bg-gray-100 hover:text-black hover:border cursor-pointer  ">
                          Add to Cart
                      </button>
                    </div>

                  </div>
              </div>
            </div>
          </div>

            <p className="text-3xl">Customer Reviews</p>

            
            <div className="flex items-center space-x-2 bg-white rounded-full shadow-md p-2 border">
                <input 
                  type="text"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Write a review..."
                  className="flex-grow px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <button 
                  className="bg-black text-white rounded-full px-4 py-2 font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Write Review
                </button>
              </div>
            
            <div className="flex flex-col justify-between md:flex-row">
              <p className="text-2xl">11 reviews</p>
              <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-32 px-4 py-2 text-sm border rounded-md focus:outline-none"
                >
                  {selectedOption}
                  <svg 
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <ul className="absolute z-10 w-32 mt-1 bg-white border rounded-md shadow-lg">
                    {options.map((option) => (
                      <li 
                        key={option}
                        onClick={() => {
                          setSelectedOption(option);
                          setIsOpen(false);
                        }}
                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
            </div>

                {reviews.map((i)=>{
                  return(
                    <div className="flex flex-col gap-2 md:flex-row">
                         <div key={i.id} className='w-30'>
                            <img src={i.proifle} alt="" />
                          </div>
                    
                        <div className="flex flex-col">
                          <p className="text-2xl">{i.rname}</p>
                          <p>xxxxx</p>
                          <p>{i.review}</p>
                          <div className="flex gap-2">
                            <p>Like</p>
                            <p>Reply</p>
                          </div>
                          
                        </div>
                    </div>

                   

                    
                  )
                })}
            </div>
      
      </>   
    );
  };
  
  export default Product;