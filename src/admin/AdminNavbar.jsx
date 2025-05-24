import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContextInstance';

// --- DashboardNavbar Component ---
const DashboardNavbar = () => {
  const { user } = useContext(AuthContext);
  const userInfo = user || JSON.parse(localStorage.getItem('userInfo')) || {};

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold flex items-center gap-3">
        <span className="material-icons text-green-400 text-3xl">dashboard</span>
        Admin Dashboard
      </div>
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search anything..."
            className="p-2 pl-10 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 w-48 transition-all duration-300 focus:w-64"
          />
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
        </div>

        {/* Notifications */}
        <button className="relative text-green-400 hover:text-green-300 transition">
          <span className="material-icons text-3xl">notifications</span>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center -mt-1 -mr-1">3</span>
        </button>

        {/* User Profile Info */}
        <div className="flex items-center gap-2">
          <span className="material-icons text-green-400 text-3xl">account_circle</span>
          <span className="font-medium hidden sm:inline">{userInfo.full_name || 'Admin User'}</span>
        </div>
      </div>
    </nav>
  );
};


export default DashboardNavbar;