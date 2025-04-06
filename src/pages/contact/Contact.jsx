const Contact = () => {
  return(
      <main className="w-81 md:w-280  flex flex-col items-center mx-auto">
      <div className="self-start mb-10">
          <p className="text-5xl w-full font-medium">
          We believe in sustainable decor. <br /> We're passionate about <br /> life at home.
          </p>
          <p>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which <br /> can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, <br />faithful to the shapes of each period, with a touch of the present</p>
          </div>

          <section className="flex flex-col md:flex-row items-center gap-15  bg-gray-200">
              <img src="close2.png" alt="" className="md:w-140"/>
              <div className="flex flex-col gap-5">
                  <h3 className='text-3xl'>About Us</h3>
                 
                  <p>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
                  Our customer service is always prepared to support you 24/7</p>

                  <p>Shop Now →</p>
              </div>
          </section>
          <p className="text-3xl text-center m-5">Contact Us</p>

          <div className="flex flex-col md:flex-row gap-3">

              <div className="bg-gray-300 md:w-90 h-35 flex flex-col items-center pt-2">
                  <img src="store.png" alt="" />
                  <p>Address</p>
                  <p className="text-center">234 Hai Trieu, Ho Chi Minh City, 
                  Viet Nam</p>
              </div>
              <div className="bg-gray-300 md:w-90 h-35 flex flex-col items-center pt-2">
                  <img src="phone.png" alt="" />
                  <p>Contact Us</p>
                  <p>+84 234 567 890</p>

              </div>
              <div className="bg-gray-300 md:w-90 h-35 flex flex-col items-center pt-2">
                  <img src="mail.png" alt="" />
                  <p>EMAIL</p>
                  <p>hello@3legant.com</p>
              </div>
          </div>

          <form className="space-y-4 md:space-y-6 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
<div>
  <label htmlFor="fullName" className="block mb-1 text-xs font-medium text-gray-700 uppercase tracking-wider">
    FULL NAME
  </label>
  <input
    type="text"
    id="fullName"
    name="fullName"
    placeholder="Your Name"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm"
  />
</div>

<div>
  <label htmlFor="emailAddress" className="block mb-1 text-xs font-medium text-gray-700 uppercase tracking-wider">
    EMAIL ADDRESS
  </label>
  <input
    type="email"
    id="emailAddress"
    name="emailAddress"
    placeholder="Your Email"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm"
  />
</div>

<div>
  <label htmlFor="message" className="block mb-1 text-xs font-medium text-gray-700 uppercase tracking-wider">
    MESSAGE
  </label>
  <textarea
    id="message"
    name="message"
    placeholder="Your message"
    rows="4"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm resize-none"
  />
</div>

<div>
  <button
    type="submit"
    className="w-auto px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors duration-200 text-sm"
  >
    Send Message
  </button>
</div>
</form>

      </main>
  )
}

export default Contact