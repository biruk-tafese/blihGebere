import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContextInstance';

const Create_user = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    full_name: '',
    phone_number: '',
    password: '',
    user_type: 'user',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage('');
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const res = await fetch('http://127.0.0.1:5000/admin/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create user');
      setMessage('User created successfully!');
      setForm({
        full_name: '',
        phone_number: '',
        password: '',
        user_type: 'user',
      });
    } catch (err) {
      setError(err.message || 'Failed to create user');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Create New User</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400"
              placeholder="Enter full name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              value={form.phone_number}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400"
              placeholder="Enter password"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">User Type</label>
            <select
              name="user_type"
              value={form.user_type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 shadow"
          >
            Create User
          </button>
        </form>
        {message && <div className="mt-4 text-green-600 text-center">{message}</div>}
        {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
      </div>
    </div>
  );
};

export default Create_user;