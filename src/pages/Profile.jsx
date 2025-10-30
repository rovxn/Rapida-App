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
    <div className="pt-24 max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 rounded w-full mb-3"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 rounded w-full mb-3"
      />
      <input
        type="text"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="border p-2 rounded w-full mb-3"
      />
      <button
        onClick={handleSave}
        className="bg-peach-600 text-white px-5 py-2 rounded-lg"
      >
        Save Changes
      </button>
    </div>
  );
}
