import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AUTH } from '../api/index.js'; // Import AUTH from api_endpoints.js

const Login = () => {
  const location = useLocation(); // Access data passed from Register
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: location.state?.phoneNumber || '', // Pre-fill phone number if passed from Register
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Send POST request to backend for login
      const response = await axios.post(AUTH.LOGIN, {
        phone_number: formData.phone,
        password: formData.password,
      });

      // Handle successful login
      if (response.status === 200) {
        setSuccess('Login successful!');
        
        // Optional: Save token to localStorage or context for authentication
        const { token } = response.data; // Assuming backend returns a JWT token
        localStorage.setItem('authToken', token);

        // Redirect to crop prediction page
        setTimeout(() => {
          navigate('/crop-prediction');
        }, 1000);
      }
    } catch (error) {
      // Handle login errors
      if (error.response && error.response.data) {
        setError(`Error: ${error.response.data.message}`);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/img/crop_1.jpg')] bg-cover bg-center">
      <div className="bg-gradient-to-br from-green-800 to-green-700 shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-500"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Success Message */}
          {success && <p className="text-green-400 text-sm">{success}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-300 mt-6">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-green-400 font-medium hover:underline focus:outline-none"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;