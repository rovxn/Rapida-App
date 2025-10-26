import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('All fields are required!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('foodieUsers')) || [];
    const userExists = users.some((u) => u.email === form.email);
    if (userExists) {
      setError('User already exists!');
      return;
    }

    dispatch(signup(form));
    alert('Signup successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="pt-20 flex justify-center items-center">
      <form
        onSubmit={handleSignup}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full mb-3"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full mb-3"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded w-full mb-3"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="bg-gray-900 text-white w-full py-2 rounded hover:bg-gray-700"
        >
          Sign Up
        </button>
        <p className="text-sm text-center mt-3">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
