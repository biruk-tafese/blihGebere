import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[url('/src/assets/img/crop_1.jpg')] bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text visibility */}
      <div className="relative z-10 p-8 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to BlihGebere</h1>
        <p className="text-lg text-green-600 mb-8">Your one-stop solution for crop prediction and resources.</p>
        <p className="text-md text-green-600 mb-4">Harness the power of AI to optimize your agricultural practices.</p>
        <button className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;