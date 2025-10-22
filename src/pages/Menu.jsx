import { useDispatch, useSelector } from 'react-redux';
import { searchProduct, filterByCategory } from '../store/productsSlice';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';

export default function Menu() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.filtered);
  const [search, setSearch] = useState('');

  // Re-usable style for inputs, matching the target's aesthetic
  const inputStyle =
    'font-poppins bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow';

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <input
            type="text"
            placeholder="Search food..."
            className={`w-full md:w-1/3 ${inputStyle}`}
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              dispatch(searchProduct(e.target.value));
            }}
          />
          <select
            className={`w-full md:w-auto ${inputStyle}`}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}