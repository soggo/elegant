import { useState, useContext } from 'react';
import CartContext from '/src/context/CartContext';
import { useParams } from 'react-router';
import { products } from '/src/data/productinfo'; 

const Product = () => {
  const [reviews, setReviews] = useState([
    {id:1, proifle:'/avatar.png', review:'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident',rname:'Sofia Harvertsz', date: '2023-05-15', likes: 12},
    {id:2, proifle:'/avatar.png', review:'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident',rname:'Sofia Harvertsz', date: '2023-06-20', likes: 8},
    {id:3, proifle:'/avatar.png', review:'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident',rname:'Sofia Harvertsz', date: '2023-07-10', likes: 5}
  ]);
  
  const [reviewText, setReviewText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Newest');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  // Review functionality
  const handlePostReview = () => {
    if (!reviewText.trim()) return;
    
    const newReview = {
      id: reviews.length + 1,
      proifle: '/avatar.png',
      review: reviewText,
      rname: 'You',
      date: new Date().toISOString(),
      likes: 0
    };

    setReviews([newReview, ...reviews]);
    setReviewText('');
  };

  const handleLikeReview = (reviewId) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, likes: review.likes + 1 } 
        : review
    ));
  };

  const getSortedReviews = () => {
    switch(selectedOption) {
      case 'Newest':
        return [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'Oldest':
        return [...reviews].sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'Most Liked':
        return [...reviews].sort((a, b) => b.likes - a.likes);
      default:
        return reviews;
    }
  };

  // Product functionality
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
        Product not found. Check the link address?
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
                  <img src={"/"+product.image} alt="" />
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

                    <p>Measurements</p>
                    <p>17 1/2x20 5/8</p>
                    <p>choose color &gt;</p>
                    <p>Black</p>

                    <div className="flex md:w-[314px] h-[72px] gap-3 ">
                      <img src="/stable4.jpeg" alt="" className="w-full h-full object-contain"/>
                      <img src="/stable4.jpeg" alt="" className="w-full h-full object-contain"/>
                      <img src="/stable4.jpeg" alt="" className="w-full h-full object-contain"/>
                      <img src="/stable4.jpeg" alt="" className="w-full h-full object-contain"/>  
                    </div>     

                    <div className="grid grid-cols-[1fr_2fr] md:w-[508px] gap-3 my-3">
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

        {/* Reviews Section */}
        <div className="mt-10 w-full">
          <p className="text-3xl mb-6">Customer Reviews</p>
          
          <div className="flex flex-col md:flex-row items-center gap-2 w-full mb-8">
            <input 
              type="text"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write a review..."
              className="w-full md:flex-grow px-4 py-2 border rounded-full focus:outline-none"
            />
            <button 
              onClick={handlePostReview}
              disabled={!reviewText.trim()}
              className={`w-full md:w-52 rounded-full px-10 py-2 font-medium transition-colors ${
                reviewText.trim() 
                  ? 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Post Review
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative">
            <p className="text-2xl mb-4 md:mb-0">{reviews.length} reviews</p>
            
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-40 px-4 py-2 text-sm border rounded-md focus:outline-none"
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
                <ul className="absolute right-0 z-10 w-40 mt-1 bg-white border rounded-md shadow-lg">
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
          </div>

          <div className="space-y-6">
            {getSortedReviews().map((reviewItem) => (
              <div key={reviewItem.id} className="flex gap-4 border-b border-b-gray-400 pb-3">
                <div className="w-16 h-16 flex-shrink-0">
                  <img src={reviewItem.proifle} alt="Profile" className="w-full h-full object-cover rounded-full" />
                </div>
                
                <div className="flex-1">
                  <p className="text-xl font-medium">{reviewItem.rname}</p>
                  <div className="flex gap-1 mb-2">★★★★★</div>
                  <p className="text-gray-600 mb-2">{reviewItem.review}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <button 
                      onClick={() => handleLikeReview(reviewItem.id)}
                      className="hover:text-gray-700 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {reviewItem.likes}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>   
  );
};

export default Product;