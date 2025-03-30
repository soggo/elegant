import React, { useState } from 'react';
import { Link} from "react-router";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-h-screen flex flex-col md:flex-row">
      {/* Left side image */}
      <div className="md:block md:w-1/2">
        <img 
          src="/src/assets/log.png" 
          alt="Signup illustration" 
          className="w-full h-[430px] object-cover"
        />
      </div>
      
      {/* Sign Up Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-start">Sign Up</h2>
          
          <div className="mb-4">
            
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="mb-4">
            <input 
              type="text" 
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Choose a username"
              required
            />
          </div>
          
          <div className="mb-4">
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-4">
            <div className="relative">
              <input 
                type="password" 
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
                required
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                👁️
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <span className="text-sm">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:underline">Terms of Use</a>
              </span>
            </label>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </button>
          
          <p className="text-center mt-4 text-sm"> Don't have an account yet? 
            <Link to="/login" className="text-green-400 hover:underline"> Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;