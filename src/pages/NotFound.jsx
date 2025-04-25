import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-green-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-500 transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;