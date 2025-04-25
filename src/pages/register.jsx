import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Register</h1>
        <form>
          {/* Full Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Terms and Policies */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              className="mr-2 border-gray-300 rounded focus:ring-green-500"
              required
            />
            <label className="text-sm text-gray-700">
              I agree to the <a href="/terms" className="text-green-800 hover:underline">Terms and Policies</a>.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-700 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-green-800 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;