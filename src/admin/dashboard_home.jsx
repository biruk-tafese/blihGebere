// src/pages/DashboardHome.jsx
import React from 'react';

const DashboardHome = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl animate-fade-in">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-2 pb-4 border-green-200">
        Dashboard Overview <span className="material-icons text-green-500 text-4xl align-bottom ml-2">insights</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Card 1: Total Users */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">Total Users</div>
            <div className="text-5xl font-extrabold">1,234</div>
          </div>
          <p className="text-sm opacity-80 mt-2">+12% from last month</p>
        </div>

        {/* Card 2: New Registrations */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">New Registrations (7 days)</div>
            <div className="text-5xl font-extrabold">87</div>
          </div>
          <p className="text-sm opacity-80 mt-2">Recently joined members</p>
        </div>

        {/* Card 3: Active Sessions */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium opacity-90">Active Sessions</div>
            <div className="text-5xl font-extrabold">245</div>
          </div>
          <p className="text-sm opacity-80 mt-2">Currently online</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities Section */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="material-icons mr-2 text-blue-500">receipt_long</span>
            Recent Activities
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="material-icons text-green-500 text-lg">check_circle</span>
              <span className="font-medium">User "John Doe"</span> registered an account. <span className="text-sm text-gray-500 ml-auto">5 mins ago</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons text-orange-500 text-lg">warning</span>
              <span className="font-medium">Admin "Jane Smith"</span> updated system settings. <span className="text-sm text-gray-500 ml-auto">1 hour ago</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons text-red-500 text-lg">report_problem</span>
              <span className="font-medium">Error log:</span> Database connection issue. <span className="text-sm text-gray-500 ml-auto">3 hours ago</span>
            </li>
          </ul>
        </div>

        {/* Quick Actions / Important Metrics */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="material-icons mr-2 text-yellow-600">flash_on</span>
            Quick Actions
          </h2>
          <div className="flex flex-col gap-4">
            <button className="bg-green-500 text-white py-3 px-5 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200 flex items-center justify-center text-lg">
              <span className="material-icons mr-2">add_circle</span>
              Add New Admin
            </button>
            <button className="bg-indigo-500 text-white py-3 px-5 rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center text-lg">
              <span className="material-icons mr-2">file_download</span>
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;