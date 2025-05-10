import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, VideoIcon, HelpCircleIcon, ExternalLinkIcon } from 'lucide-react'; // Ensure lucide-react is installed

const GettingStartedGuide = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-12 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
          Getting Started Guide
        </h1>
        <p className="text-lg text-gray-300">
          Learn how to use our AI-powered tools effectively to optimize your agricultural practices. Follow the steps below to get started.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Step 1 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-2xl p-6">
          <BookOpenIcon className="h-12 w-12 text-green-400 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-4 text-center">Step 1: Create an Account</h2>
          <p className="text-gray-300 mb-4">
            Sign up for an account to access our AI tools. Provide your details and verify your email or phone number.
          </p>
          <Link to="/signup">
            <p className="text-green-400 font-medium hover:underline text-center">
              Sign Up Now →
            </p>
          </Link>
        </div>

        {/* Step 2 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-2xl p-6">
          <VideoIcon className="h-12 w-12 text-green-400 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-4 text-center">Step 2: Watch Tutorials</h2>
          <p className="text-gray-300 mb-4">
            Watch our video tutorials to understand how to input parameters and interpret predictions.
          </p>
          <Link to="/video-tutorials">
            <p className="text-green-400 font-medium hover:underline text-center">
              Watch Tutorials →
            </p>
          </Link>
        </div>

        {/* Step 3 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-2xl p-6">
          <HelpCircleIcon className="h-12 w-12 text-green-400 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-green-400 mb-4 text-center">Step 3: Explore FAQs</h2>
          <p className="text-gray-300 mb-4">
            Have questions? Check out our FAQs to find answers to common queries about our tools.
          </p>
          <Link to="/faqs">
            <p className="text-green-400 font-medium hover:underline text-center">
              View FAQs →
            </p>
          </Link>
        </div>
      </div>

      {/* External Resources Section */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-2xl p-8 mb-12">
        <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">External Resources</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <ExternalLinkIcon className="h-6 w-6 text-green-400 mr-4" />
            <a
              href="https://www.fao.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 font-medium"
            >
              Food and Agriculture Organization (FAO)
            </a>
          </li>
          <li className="flex items-center">
            <ExternalLinkIcon className="h-6 w-6 text-green-400 mr-4" />
            <a
              href="https://www.agriculture.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 font-medium"
            >
              Agriculture.com
            </a>
          </li>
          <li className="flex items-center">
            <ExternalLinkIcon className="h-6 w-6 text-green-400 mr-4" />
            <a
              href="https://www.agriculture.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 font-medium"
            >
              U.S. Department of Agriculture
            </a>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-green-400 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-300 mb-6">
          Sign up today and start optimizing your agricultural practices with our AI-powered tools.
        </p>
        <Link to="/signup">
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 shadow-lg transform hover:scale-105 transition-transform duration-300">
            Sign Up Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GettingStartedGuide;