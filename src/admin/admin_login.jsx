import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContextInstance';
import AdminSidebar from './admin_sidebar';

const AdminLogin = () => {
  const { login } = useContext(AuthContext);
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSidebar, setShowSidebar] = useState(
    localStorage.getItem('isAdminAuthenticated') === 'true'
  );
  const [token, setToken] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone_number, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      await login(data.token);
      setToken(data.token);
      if (data.user_type !== 'admin') {
        setError('You are not authorized as admin.');
        localStorage.setItem('isAdminAuthenticated', 'false');
        return;
      }
      setShowSidebar(true);
      localStorage.setItem('isAdminAuthenticated', 'true');
    } catch (err) {
      setError(err.message || 'Login failed');
      localStorage.setItem('isAdminAuthenticated', 'false');
    }
  };

  if (showSidebar) {
    // Show only the sidebar as the main content after successful login
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
        <AdminSidebar />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              value={phone_number}
              onChange={e => setPhoneNumber(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 shadow"
          >
            Login
          </button>
        </form>
        {token && (
          <div className="mt-4 text-xs text-gray-500 break-all">
            <strong>Token:</strong> {token}
          </div>
        )}
        {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
      </div>
    </div>
  );
};

export default AdminLogin;