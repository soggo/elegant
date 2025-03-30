import React, { useState, useContext } from 'react';
import CartContext from '/src/context/CartContext'; 
const Homepage = () => {

    const {addItem} = useContext(CartContext)
    const products = [
        { id: 1, name: 'Loveseat Sofa', price: 199.00, oldPrice: 340.00, image: 'src/assets/a1.png' },
        { id: 2, name: 'Table Lamp', price: 24.99, image: 'src/assets/a2.jpeg' },
        { id: 3, name: 'Beige Table Lamp', price: 24.99, image: 'src/assets/a3.jpeg' },
        { id: 4, name: 'Bamboo basket', price: 24.99, image: 'src/assets/a4.jpeg' },
        { id: 5, name: 'Toaster', price: 224.99, image: 'src/assets/a2.jpeg' }
      ];

      const [favorites, setFavorites] = useState({});
      const handleDirectAddToCart = (products) => {
        console.log("Adding product directly from Shop:", products);
        addItem({
          ...products,
          quantity:1
        })
    }

      const toggleFavorite = (id) => {
        setFavorites(prev => ({
          ...prev,
          [id]: !prev[id]
        }));
      };
    return (
        <div className="overflow-x-hidden"> 
            {/* Hero section */}
            <section id="hero" className="px-4 py-8 md:px-6 lg:px-8 max-w-7xl mx-auto">
            
                <div className="w-full flex justify-center">
                    <div className="max-w-[311px] md:max-w-[600px] lg:max-w-[800px] mx-auto relative border border-gray-200">
                        <img src="src/assets/Heroimg.png" alt="Hero" className="w-full h-auto object-cover"/>
                        <div className="absolute bottom-10 w-full flex justify-center">
                            <div className="btncontainer flex gap-3 items-center">
                                <button className="rounded-2xl bg-white w-8 h-3"></button>
                                <button className="rounded-2xl bg-white w-2 h-2"></button>
                                <button className="rounded-2xl bg-white w-2 h-2"></button>
                            </div>
                        </div>
                    </div>
                </div>
                
           
                <div className="mt-8 w-full">
                    <div className="flex flex-col md:flex-row gap-3.5 justify-between items-center">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Simply Unique/ <br />
                            Simply Better.
                        </h1>

                        <p className="text-base md:text-lg mt-4 md:mt-0">
                            3legant is a gift & decorations store based in HCMC, <br /> 
                            Vietnam. Est since 2019.
                        </p>
                    </div>
                </div>
            </section>

    
            <section className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto mt-12">
                <div className="grid gap-3 md:grid-cols-2 md:gap-4">
     
                    <img src="src/assets/g1.png" alt="Image 1" className="w-full h-auto"/>

                    <div className="grid gap-2 md:grid-rows-2 md:gap-4">
                        <img src="src/assets/g2.png" alt="Image 2" className="w-full h-auto"/>
                        <img src="src/assets/g3.png" alt="Image 3" className="w-full h-auto"/>
                    </div>
                </div>
            </section>


            {/* new arivals */}
            <section>
                <div className="flex items-end justify-between">
                <h1 className="text-3xl" >New Arrivals</h1>
                <p> More products</p>
                </div>
               
     <div className="w-full max-w-6xl mx-auto">
        <div className="relative">
     
            <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-none">
            {products.map((product) => (
                <div key={product.id} className="flex-none w-48 mx-2 relative group">
      
                <div className="absolute top-0 left-0 z-10 flex flex-col items-start">
                    <span className="bg-gray-800 text-white text-xs px-2 py-1">NEW</span>
                    <span className="bg-green-500 text-white text-xs px-2 py-1">-50%</span>
                </div>
                
                {/* Product image */}
                <div className="relative overflow-hidden p-5 w-60 h-80">
                    <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end">
                    <button
                  onClick={() => handleDirectAddToCart(product)}
                     className="bg-black text-white py-2 px-4 text-sm w-3/4">
                        Add to cart
                    </button>
                    <button 
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-2 right-2 text-black"
                    >
                        {favorites[product.id] ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-red-500" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        )}
                    </button>
                    </div>
                </div>
                
                {/* Product info */}
                <div className="mt-2">
                    <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                    </div>
                    <h3 className="text-sm font-medium mt-1">{product.name}</h3>
                    <div className="flex items-center mt-1">
                    <span className="font-bold text-sm">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                        <span className="ml-2 text-gray-500 text-xs line-through">${product.oldPrice.toFixed(2)}</span>
                    )}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
            </section>



            {/* cahsback */}

            <div className="grid grid-cols-2 grid-rows-1 gap-2 md:flex justify-center md:gap-4">
                <img src="/src/assets/card2.png" alt="" />
                <img src="/src/assets/card2.png" alt="" />
                <img src="/src/assets/card2.png" alt="" />
                <img src="/src/assets/card2.png" alt="" />
            </div>

            {/* lower prices */}

            <section className="flex flex-col md:flex-row items-center gap-15 bg-gray-200">
                <img src="/src/assets/close2.png" alt="" />
                <div className="flex flex-col gap-5">
                    <h3 className='text-2xl text-blue-400'>Save up to 35% OFF</h3>
                    <h1 className='text-4xl'>HUNDREDS OF <br /> New lower prices!</h1>
                    <p>It's more affordable tahn ever to give every room in your home a stylish makeover</p>
                </div>
            </section>


            {/* articles */}

            <section className='flex flex-col border border-amber-500 '>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl" >Articles</h1>
                <p> More Articles</p>
                </div>
                <div className="container self-center flex flex-col items-center justify-center md:flex-row md gap-4 ">
                    <div className="flex flex-col">
                        <img src="/src/assets/article.png" alt="" />
                        <h3 className='text-2xl'> 7 ways to decor your home</h3>
                        <p>Read more</p>
                    </div>


                    <div className="flex flex-col">
                        <img src="/src/assets/article.png" alt="" />
                        <h3 className='text-2xl'> Kitchen organization</h3>
                        <p>Read more</p>
                    </div>

                    <div className="flex flex-col">
                        <img src="/src/assets/article.png" alt="" />
                        <h3 className='text-2xl'>Decor your bedroom</h3>
                        <p>Read more</p>
                    </div>
                    </div>
            </section>

            {/* News Letter */}
            <div className="flex flex-col items-center justify-center p-10 text-center">
                <h1 className="text-3xl">   
                    Join Our news letter
                </h1>
                <p>Sign up for deals, new products and promotions</p>

                <form action="" method="post">
                    <input type="text"  placeholder='Email address' className=' border-b-1'/>
                </form>
            </div>
        </div>
    );
};

export default Homepage;