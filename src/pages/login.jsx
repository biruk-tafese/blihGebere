import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextInstance';
import { Link } from 'react-router-dom';

const Login = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation(); // Access data passed from Register
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: location.state?.email || '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Simulate login validation
    if (
      (formData.emailOrPhone === user?.email || formData.emailOrPhone === user?.phoneNumber) &&
      formData.password === 'password123' // Replace with actual password validation logic
    ) {
      setSuccess('Login successful!');
      setTimeout(() => {
        navigate('/crop-prediction'); // Redirect to /prediction
      }, 1000);
    } else {
      setError('phone number or password!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/img/crop_1.jpg')] bg-cover bg-center">
      <div className="bg-gradient-to-br from-green-800 to-green-700 shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email/Phone Number Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
             Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Enter your email or phone number"
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