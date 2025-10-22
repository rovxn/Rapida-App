import { useDispatch, useSelector } from 'react-redux';
import { searchProduct, filterByCategory } from '../store/productsSlice';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';

export default function Menu() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.filtered);
  const [search, setSearch] = useState('');

  // Re-usable style, now with a neutral focus ring
  const inputStyle =
    'font-poppins bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-shadow w-full';

  return (
    // Added background color and more vertical padding for a "main content" feel
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight font-poppins">
            Explore Our Menu
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 font-poppins">
            Find your next favorite meal.
          </p>
        </div>

        {/* --- Filters --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <input
            type="text"
            placeholder="Search food by name..."
            className={`md:w-1/3 ${inputStyle}`}
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              dispatch(searchProduct(e.target.value));
            }}
          />
          <select
            className={`md:w-auto ${inputStyle}`}
            onChange={e => dispatch(filterByCategory(e.target.value))}
          >
            <option>All</option>
            <option>Pizza</option>
            <option>Burger</option>
            <option>Pasta</option>
            <option>Drink</option>
            <option>Sides</option>
            <option>Salad</option>
          </select>
        </div>

        {/* --- Product Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}