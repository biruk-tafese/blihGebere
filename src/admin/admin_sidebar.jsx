import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextInstance';

const AdminSidebar = () => {
  // Get user info from context or localStorage
  const { user } = useContext(AuthContext);
  const userInfo = user || JSON.parse(localStorage.getItem('userInfo')) || {};

  return (
    <aside className="h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col py-8 px-6 shadow-2xl rounded-r-2xl">
      <div className="flex flex-col items-center mb-10">
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-3xl font-bold mb-3 shadow-lg">
          {userInfo.full_name ? userInfo.full_name[0] : 'A'}
        </div>
        <div className="font-semibold text-xl">{userInfo.full_name || 'Admin'}</div>
        <div className="text-sm text-gray-300">{userInfo.phone_number || ''}</div>
        <span className="mt-2 px-3 py-1 bg-green-700 text-xs rounded-full font-semibold">Admin</span>
      </div>
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin/view-users"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 rounded-lg font-semibold transition ${
              isActive
                ? 'bg-green-600 text-white shadow'
                : 'hover:bg-gray-700 hover:text-green-300'
            }`
          }
        >
          <span className="material-icons">group</span>
          View All Users
        </NavLink>
        <NavLink
          to="/admin/createuser"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 rounded-lg font-semibold transition ${
              isActive
                ? 'bg-green-600 text-white shadow'
                : 'hover:bg-gray-700 hover:text-green-300'
            }`
          }
        >
          <span className="material-icons">person_add</span>
          Create New User
        </NavLink>
      </nav>
      <div className="mt-auto pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Admin Dashboard
      </div>
    </aside>
  );
};

export default AdminSidebar;