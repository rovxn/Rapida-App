import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useState } from 'react';

export default function Profile() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [form, setForm] = useState(user || { name: '', email: '', phone: '' });

  const handleSave = () => {
    localStorage.setItem('foodieUser', JSON.stringify(form));
    dispatch(login(form));
    alert('Profile updated!');
  };

  return (
    <div className="pt-24 min-w-screen min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          My Profile
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2 rounded w-full mb-3 focus:ring-2 focus:ring-peach-500 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2 rounded w-full mb-3 focus:ring-2 focus:ring-peach-500 outline-none"
        />
        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2 rounded w-full mb-4 focus:ring-2 focus:ring-peach-500 outline-none"
        />

        <button
          onClick={handleSave}
          className="w-full bg-peach-600 hover:bg-peach-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
