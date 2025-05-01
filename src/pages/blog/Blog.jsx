const Blog = () => {
 

    const bItems = [
        {id:1, title:'7 ways to decor your home like a professional', dat:'October 16,2023', image:'blog.png'},
        {id:2, title:'7 ways to decor your home like a professional', dat:'October 16,2023', image:'blog.png'},
        {id:3, title:'7 ways to decor your home like a professional', dat:'October 16,2023', image:'blog.png'},
        {id:4, title:'7 ways to decor your home like a professional', dat:'October 16,2023', image:'blog.png'},
        {id:5, title:'7 ways to decor your home like a professional', dat:'October 16,2023', image:'blog.png'},
        {id:6, title:'7 ways to decor your home like a professional', dat:'October 16,2023', image:'blog.png'},
        {id:7, title:'7 ways to decor your home like a professional', dat:'October 16,2023', image:'blog.png'},
        {id:8, title:'7 ways to decor your home like a professional', dat:'October 16,2023', image:'blog.png'},
        {id:9, title:'7 ways to decor your home like a professional', dat:'October 16,2023', image:'blog.png'},      

    ]
    return (
        <div className="font-sans flex flex-col items-center w-full">
        {/* Hero Section */}
                <div className="relative text-center mb-10 w-[310px] md:w-[1120px]">
                    <img 
                        src="/shop.png" 
                        alt="Shop Banner" 
                        className="w-full h-[308px] object-cover md:h-[392px]"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
                        <p className="text-sm mb-2">Home &gt; Blog</p>
                        <h1 className="text-3xl font-bold mb-2 md:text-4xl">Our Blog</h1>
                        <p className="text-sm">Home Ideas and design inspo</p>
                    </div>

                    

                </div>
                <div className="w-[310px] md:w-[1120px]">
                       

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {bItems.map((i)=>{
                                return(
                                    <div key={i.id} className="flex flex-col items-start">
                                        <img src={i.image} alt="" /> 
                                        <p className="text-lg">{i.title}</p>
                                        <p className="text-sm">{i.dat}</p>

                                    </div>             
                                )
                            })}
                            </div>     
                        </div>
                    </div>
                 
    

    );
  };
  
  export default Blog;