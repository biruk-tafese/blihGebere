import React from 'react';
import { Link } from 'react-router-dom';

const Resource = () => {
  return (
    <div className="bg-[url('/assets/img/crop_2.jpeg')] bg-cover bg-center bg-fixed min-h-screen py-12 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Resources</h1>
      <p className="text-lg text-center text-gray-700 mb-12">
        Explore our resources to learn how to use our AI-powered tools effectively and optimize your agricultural practices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Resource 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Getting Started Guide</h2>
          <p className="text-gray-600 mb-4">
            Learn how to create an account, enter parameters, and get predictions using our AI tools.
          </p>
          <Link to="/getting-started">  
            <p className="text-green-800 font-medium hover:underline">
              Read More →
            </p>
          </Link>
        </div>

        {/* Resource 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Video Tutorials</h2>
          <p className="text-gray-600 mb-4">
            Watch step-by-step video tutorials to understand how to use our platform effectively.
          </p>
          <Link to="/video-tutorials">

                <p className='text-green-800 font-medium hover:underline'>
                  Watch Now →
                </p>
            </Link>
        </div>

        {/* Resource 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">FAQs</h2>
          <p className="text-gray-600 mb-4">
            Find answers to frequently asked questions about our AI tools and services.
          </p>
          <Link to="/faqs">
            <p
              
              className="text-green-800 font-medium hover:underline"
            >
              View FAQs →
            </p>
          </Link>
        </div>

        {/* Resource 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Best Practices</h2>
          <p className="text-gray-600 mb-4">
            Discover best practices for collecting data and using our AI tools for accurate predictions.
          </p>
         <Link to="/best-practices">
            <p className="text-green-800 font-medium hover:underline">
              Learn More →
            </p>
          </Link>

        </div>

        {/* Resource 5 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Community Forum</h2>
          <p className="text-gray-600 mb-4">
            Join our community forum to connect with other users and share insights.
          </p>
          <Link to="/community-forum">
            <p className="text-green-800 font-medium hover:underline">
              Join Now →
            </p>
          </Link>
        </div>

        {/* Resource 6 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Contact Support</h2>
          <p className="text-gray-600 mb-4">
            Need help? Contact our support team for assistance with any issues or questions.
          </p>
           <Link to="/support">
            <p className="text-green-800 font-medium hover:underline">
              Get Support →
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resource;