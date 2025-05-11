import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AUTH } from '../api/index.js'; // Import AUTH endpoints
import { AuthContext } from '../context/AuthContextInstance';

const Register = () => {
  const { register } = useContext(AuthContext); // Use register from AuthContext
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Send POST request to the backend
      const response = await axios.post(AUTH.REGISTER, {
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        password: formData.password,
        user_type: "user",
      });

      // Handle successful registration
      if (response.status === 201) {
        const { token } = response.data; // Assuming backend returns token
        register(token, formData.fullName); // Save token and user details
        alert('Registration successful!');
        navigate('/crop-prediction'); // Redirect to crop prediction page
      }
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/img/crop_1.jpg')] bg-cover bg-center">
      <div className="bg-gradient-to-br from-green-800 to-green-700 shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-500"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
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

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg p-4 focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;