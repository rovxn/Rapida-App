import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../store/productsSlice';
import { useState } from 'react';

export default function Admin() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.all);
  const [form, setForm] = useState({ name: '', price: '', category: '' });

  const handleAdd = () => {
    if (!form.name || !form.price || !form.category)
      return alert('All fields required!');
    dispatch(
      addProduct({ id: Date.now(), ...form, image: '/images/default.jpg' })
    );
    setForm({ name: '', price: '', category: '' });
  };

  const inputStyle =
    'font-poppins bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow w-full';

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8">
          Admin Dashboard
        </h2>

        {/* Add Product Form - Styled like a domain card */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
            Add New Product
          </h3>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <input
                placeholder="Name"
                className={inputStyle}
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <input
                placeholder="Price"
                type="number"
                className={inputStyle}
                value={form.price}
                onChange={e => setForm({ ...form, price: e.target.value })}
              />
              <input
                placeholder="Category"
                className={inputStyle}
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
              />
              <button
                onClick={handleAdd}
                className="bg-yellow-600 text-white px-5 py-3 rounded-lg font-poppins font-medium hover:bg-yellow-700 transition-colors w-full"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>

        {/* Manage Products List */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
            Manage Existing Products
          </h3>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {products.map(p => (
              <li
                key={p.id}
                className="p-6 flex justify-between items-center"
              >
                <div>
                  <span className="font-poppins font-medium text-gray-800 dark:text-gray-200">
                    {p.name}
                  </span>
                  <span className="font-poppins text-gray-600 dark:text-gray-400">
                    {' '}
                    — ₹{p.price} ({p.category})
                  </span>
                </div>
                <button
                  onClick={() => dispatch(deleteProduct(p.id))}
                  className="font-poppins text-sm font-semibold text-red-600 hover:text-red-800 transition-colors"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}