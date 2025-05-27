// DashboardHome.jsx (Looks mostly correct for relative paths)
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import AdminSidebar from './admin_sidebar'; // Correct path if needed
import View_users from './View_users'; // Correct path if needed
import Create_user from './Create_user'; // Correct path if needed

const DashboardHome = () => {
  return (
    <div className="flex h-screen w-full">
      <AdminSidebar />
      <main className="flex-1 overflow-auto bg-gray-100 p-8">
        <Routes>
          {/* These paths are relative to "/admin/" because DashboardHome is rendered at "/admin/*" */}
          <Route path="view-users" element={<View_users />} />
          <Route path="createuser" element={<Create_user />} />
          {/* Add a default route or redirect if needed */}
          <Route path="/" element={<Navigate to="view-users" replace />} /> {/* Redirects /admin/ to /admin/view-users */}
        </Routes>
      </main>
    </div>
  );
};

export default DashboardHome;