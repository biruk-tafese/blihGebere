import React, { useEffect, useState, useContext } from 'react';
import { PencilIcon, Trash2Icon } from 'lucide-react';
import { AuthContext } from '../context/AuthContextInstance';

const View_users = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // const adminUsers = users.filter(u => u.user_type === 'admin');
  // console.log('Admin Users:', adminUsers);
  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5000/admin/users', {
          headers: { Authorization: `Bearer ${user?.token}` },
        });
        const data = await res.json();
        console.log('Fetched Users:', data);
        if (!res.ok) throw new Error(data.error || 'Failed to fetch users');
        setUsers(data.users || []);
      } catch (err) {
        setError(err.message || 'Failed to fetch users');
      }
    };
    if (user?.token) fetchUsers();
  }, [user]);

  // Handle delete user
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    setError('');
    setMessage('');
    try {
      const res = await fetch(`http://127.0.0.1:5000/admin/delete-user/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to delete user');
      setUsers(users.filter(u => u.id !== id));
      setMessage('User deleted successfully!');
    } catch (err) {
      setError(err.message || 'Failed to delete user');
    }
  };

  // Handle update user (navigate to edit page)
  const handleEdit = (id) => {
    window.location.href = `/admin/edit-user/${id}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">All Users</h2>
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        {message && <div className="mb-4 text-green-600 text-center">{message}</div>}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Full Name</th>
                <th className="py-2 px-4 border-b">Phone Number</th>
                <th className="py-2 px-4 border-b">User Type</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-400">No users found.</td>
                </tr>
              ) : (
                users.map(u => (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{u.id}</td>
                    <td className="py-2 px-4 border-b">{u.full_name}</td>
                    <td className="py-2 px-4 border-b">{u.phone_number}</td>
                    <td className="py-2 px-4 border-b">{u.user_type}</td>
                    <td className="py-2 px-4 border-b flex gap-2 justify-center">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        title="Edit"
                        onClick={() => handleEdit(u.id)}
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                        onClick={() => handleDelete(u.id)}
                      >
                        <Trash2Icon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default View_users;