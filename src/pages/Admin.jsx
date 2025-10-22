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

  // Updated inputStyle with a neutral focus ring
  const inputStyle =
    'font-poppins bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-shadow w-full';

  return (
    // Added standard page background
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight font-poppins text-center mb-16">
          Admin Dashboard
        </h2>

        {/* Add Product Form - Styled like a domain card */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden mb-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 font-poppins">
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
              {/* Updated Button to be neutral */}
              <button
                onClick={handleAdd}
                className="bg-gray-900 text-white px-5 py-3 rounded-lg font-poppins font-semibold 
                           hover:bg-gray-700 shadow-md 
                           dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 
                           transition-all duration-300 w-full"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>

        {/* Manage Products List */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 font-poppins">
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
                {/* Updated "Delete" to "Remove" and made it neutral */}
                <button
                  onClick={() => dispatch(deleteProduct(p.id))}
                  className="font-poppins text-sm font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}