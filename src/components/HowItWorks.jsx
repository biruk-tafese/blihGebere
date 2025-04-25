import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 p-6 rounded-full mb-4">
            <span className="text-green-800 text-4xl font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Register</h3>
          <p className="text-gray-600">
            Create an account to get started and access our AI-powered crop prediction tools.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 p-6 rounded-full mb-4">
            <span className="text-green-800 text-4xl font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Enter Parameters</h3>
          <p className="text-gray-600">
            Provide key parameters like temperature, humidity, and soil data for analysis.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 p-6 rounded-full mb-4">
            <span className="text-green-800 text-4xl font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">See Predicted Result</h3>
          <p className="text-gray-600">
            Get accurate predictions and insights to optimize your agricultural practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;