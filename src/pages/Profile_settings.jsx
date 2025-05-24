import React, { useState, useEffect, useContext } from 'react';
import { PencilIcon, SaveIcon, XIcon, KeyIcon, UserIcon, PhoneIcon } from 'lucide-react';
import { AuthContext } from '../context/AuthContextInstance';

const Profile_settings = () => {
  const { user, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState({ full_name: '', phone_number: '' });
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwords, setPasswords] = useState({ old_password: '', new_password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5000/profile', {
          headers: { Authorization: `Bearer ${user?.token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch profile');
        const data = await res.json();
        setProfile(data.user);
      } catch (err) {
        setError('Could not load profile.');
      }
    };
    if (user?.token) fetchProfile();
  }, [user]);

  // Handle edit icon click
  const handleEdit = (field) => {
    setEditField(field);
    setEditValue(profile[field]);
    setMessage('');
    setError('');
  };

  // Handle save for name/phone
  const handleSave = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5000/update_profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ [editField]: editValue }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Update failed');
      setProfile(data.user);
      setEditField(null);
      setMessage('Profile updated!');
    } catch (err) {
      setError(err.message || 'Update failed');
    }
  };

  // Handle password update
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const res = await fetch('http://127.0.0.1:5000/update_password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(passwords),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Password update failed');
      setShowPasswordModal(false);
      setPasswords({ old_password: '', new_password: '' });
      setMessage('Password updated!');
    } catch (err) {
      setError(err.message || 'Password update failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Profile Settings</h2>
        {/* Name */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-gray-700">Full Name:</span>
          </div>
          {editField === 'full_name' ? (
            <div className="flex items-center gap-2">
              <input
                className="border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-green-400"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                autoFocus
              />
              <button
                className="text-green-600 hover:text-green-800"
                onClick={handleSave}
                title="Save"
              >
                <SaveIcon className="w-5 h-5" />
              </button>
              <button
                className="text-gray-400 hover:text-red-500"
                onClick={() => setEditField(null)}
                title="Cancel"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>{profile.full_name}</span>
              <button
                className="text-gray-400 hover:text-green-600"
                onClick={() => handleEdit('full_name')}
                title="Edit"
              >
                <PencilIcon className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
        {/* Phone */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-gray-700">Phone:</span>
          </div>
          {editField === 'phone_number' ? (
            <div className="flex items-center gap-2">
              <input
                className="border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-green-400"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                autoFocus
              />
              <button
                className="text-green-600 hover:text-green-800"
                onClick={handleSave}
                title="Save"
              >
                <SaveIcon className="w-5 h-5" />
              </button>
              <button
                className="text-gray-400 hover:text-red-500"
                onClick={() => setEditField(null)}
                title="Cancel"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>{profile.phone_number}</span>
              <button
                className="text-gray-400 hover:text-green-600"
                onClick={() => handleEdit('phone_number')}
                title="Edit"
              >
                <PencilIcon className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
        {/* Password */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <KeyIcon className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-gray-700">Password:</span>
          </div>
          <button
            className="text-gray-400 hover:text-green-600 flex items-center gap-1"
            onClick={() => { setShowPasswordModal(true); setMessage(''); setError(''); }}
            title="Change Password"
          >
            <PencilIcon className="w-5 h-5" />
            <span className="text-xs">Change</span>
          </button>
        </div>
        {/* Logout */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 shadow"
            onClick={logout}
          >
            Logout
          </button>
        </div>
        {/* Messages */}
        {message && <div className="mt-4 text-green-600 text-center">{message}</div>}
        {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              onClick={() => setShowPasswordModal(false)}
            >
              <XIcon className="w-6 h-6" />
            </button>
            <h3 className="text-lg font-bold text-green-700 mb-4">Change Password</h3>
            <form onSubmit={handlePasswordUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Old Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400"
                  value={passwords.old_password}
                  onChange={e => setPasswords(p => ({ ...p, old_password: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400"
                  value={passwords.new_password}
                  onChange={e => setPasswords(p => ({ ...p, new_password: e.target.value }))}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 shadow"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile_settings;