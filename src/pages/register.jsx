import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextInstance';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    register({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
    });
    alert('Registration successful!');
    navigate('/login', { state: { phoneNumber: formData.phoneNumber } });
    setFormData({
      fullName: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    });
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
              name="fullName"
              value={formData.fullName}
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
              name="phoneNumber"
              value={formData.phoneNumber}
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

          {/* Terms and Policies */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 border-gray-300 rounded focus:ring-green-500"
              required
            />
            <label className="text-sm text-gray-300">
              I agree to the{' '}
              <a
                href="/terms"
                className="text-green-400 hover:underline focus:outline-none"
              >
                Terms and Policies
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-6">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-green-400 font-medium hover:underline focus:outline-none"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;