import React from 'react';

const Support = () => {
  return (
    <div className="bg-[url('/assets/img/crop_1.jpg')] min-h-screen py-12 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Support</h1>
        <p className="text-lg text-gray-900">
          Need help? We're here to assist you. Reach out to us through the contact information below or send us an email.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> +251-123-456-789
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> support@blihgebere.com
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> Addis Ababa, Ethiopia
          </p>
        </div>

        {/* Send Us an Email Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Send Us an Email</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Additional Support Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Need More Help?</h2>
        <p className="text-gray-600 mb-4">
          Visit our <a href="/faqs" className="text-green-800 font-medium hover:underline">FAQs</a> page or contact our support team for further assistance.
        </p>
      </div>
    </div>
  );
};

export default Support;