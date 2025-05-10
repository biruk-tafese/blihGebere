import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-[url('/assets/img/crop_1.jpg')] bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text visibility */}
      <div className="relative z-10 p-8 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to BlihGebere</h1>
        <p className="text-lg text-green-600 mb-8">Your one-stop solution for crop prediction and resources.</p>
        <p className="text-md text-green-600 mb-4">Harness the power of AI to optimize your agricultural practices.</p>
        <Link to="/login"> 
        <p 
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >Get Started</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;