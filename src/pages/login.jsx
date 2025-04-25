import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Login</h1>
        <form>
          {/* Email/Phone Number Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email or Phone Number</label>
            <input
              type="text"
              placeholder="Enter your email or phone number"
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

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                className="mr-2 border-gray-300 rounded focus:ring-green-500"
              />
              Remember Me
            </label>
            <a href="/forgot-password" className="text-sm text-green-800 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            tsype="submit"
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-700 mt-6">
          Don't have an account?{' '}
          <a href="/signup" className="text-green-800 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;