import React, { useContext, useState } from 'react';
import { Link } from 'react-router'; 
import { products } from '/src/data/productinfo';
import CartContext from '/src/context/CartContext';


const Shop = () => {
   
    const [favorites, setFavorites] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('Living Room');
    const [priceRange, setPriceRange] = useState('All Price');
    const {addItem} = useContext(CartContext)
    const toggleFavorite = (id) => {
        setFavorites(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };


    const handleDirectAddToCart = (product) => {
    console.log("Adding product directly from Shop:", product);
    addItem({
      ...product,
      quantity:1
    })

      
    };

    const categories = [
        'All Rooms',
        'Living Room',
        'Bedroom',
        'Kitchen',
        'Bathroom',
        'Dining',
        'Outdoor'
    ];

    const priceRanges = [
        'All Price',
        '$0.00 - $99.99',
        '$100.00 - $199.99',
        '$200.00 - $299.99',
        '$300.00 - $399.99',
        '$400.00 +'
    ];
    
 
    return (
      <div className="font-sans flex flex-col items-center w-full">
        {/* Hero Section */}
        <div className="relative text-center mb-10 w-[310px] md:w-[1120px]">
          <img
            src="/src/assets/shop.png"
            alt="Shop Banner"
            className="w-full h-[308px] object-cover md:h-[392px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
            <p className="text-sm mb-2">Home &gt; Shop</p>
            <h1 className="text-3xl font-bold mb-2 md:text-4xl">Shop Page</h1>
            <p className="text-sm">
              Let's design the place you always imagined
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[310px] md:w-[1120px] px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-lg font-bold">Filter</h1>
                <div className="flex gap-2">
                  <button className="p-1">
                    <img
                      src="/src/assets/sideby.png"
                      alt="Grid view"
                      className="w-5 h-5"
                    />
                  </button>
                  <button className="p-1">
                    <img
                      src="/src/assets/upby.png"
                      alt="List view"
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="font-bold mb-3 text-sm">CATEGORIES</h2>
                <ul className="space-y-2 text-sm">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer hover:font-medium ${category === selectedCategory ? "font-bold" : ""}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-bold mb-3 text-sm">PRICE</h2>
                <ul className="space-y-2 text-sm">
                  {priceRanges.map((range, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer hover:font-medium ${range === priceRange ? "font-bold" : ""}`}
                      onClick={() => setPriceRange(range)}
                    >
                      {range}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">{selectedCategory}</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Sort by:</span>
                    <select className="border p-1 rounded text-sm">
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest</option>
                    </select>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-1 border rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                    <button className="p-1 border rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Products - */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
             
                    <Link to={`/product/${product.id}`}>
                      {/* Image Container */}
                      <div className="relative mb-3 h-64 overflow-hidden">
                        {/* Product image */}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 space-y-1">
                          {product.isNew && (
                            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                              NEW
                            </div>
                          )}
                          {product.discount && (
                            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                              -{product.discount}%
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div>
                        <div className="flex mb-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-3 h-3 text-black fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <h3 className="font-medium text-sm">{product.name}</h3>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-bold">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.oldPrice && (
                            <span className="text-gray-500 text-xs line-through">
                              ${product.oldPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>

                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${favorites[product.id] ? "fill-red-500" : "stroke-black stroke-2 fill-white"}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>

                    <button 
                      onClick={() => handleDirectAddToCart(product)}
                      className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-10 rounded-md text-sm opacity-0 group-hover:opacity-100 whitespace-nowrap hover:cursor-pointer z-10">
                      Add to cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Shop;