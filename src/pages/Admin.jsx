import { useDispatch, useSelector } from 'react-redux';
// Make sure to import `addProduct` and `deleteProduct` (and `updateProduct` if you have it)
import { addProduct, deleteProduct } from '../store/productsSlice'; 
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Admin() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.all);
  const [form, setForm] = useState({ id: null, name: '', price: '', category: '' });
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState('');

  // Standard neutral input style
  const inputStyle =
    'font-poppins bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-shadow w-full';

  // --- THIS IS THE FIX ---
  // Changed single quotes ' to backticks `
  const buttonStyle = `
    bg-gray-900 text-white px-5 py-3 rounded-lg font-poppins font-semibold 
    hover:bg-gray-700 shadow-md dark:bg-white dark:text-gray-900 
    dark:hover:bg-gray-200 transition-all duration-300 w-full md:w-auto
  `;
  // --- END OF FIX ---

  const validate = () => {
    if (!form.name.trim() || !form.price || !form.category.trim()) {
      setError('All fields are required!');
      return false;
    }
    if (isNaN(form.price) || form.price <= 0) {
      setError('Price must be a valid positive number!');
      return false;
    }
    setError('');
    return true;
  };
  
  const resetForm = () => {
    setForm({ id: null, name: '', price: '', category: '' });
    setEditMode(false);
    setError('');
  };

  const handleAdd = () => {
    if (!validate()) return;
    dispatch(addProduct({ id: Date.now(), ...form, image: '/images/default.jpg' }));
    resetForm();
  };

  const handleEdit = (prod) => {
    setEditMode(true);
    setForm(prod);
    window.scrollTo(0, 0); // Scroll to top to see the form
  };

  const handleUpdate = () => {
    if (!validate()) return;
    
    // Your current logic:
    dispatch(deleteProduct(form.id));
    dispatch(addProduct(form)); // This creates a new ID, you might want an updateProduct action
    
    resetForm();
  };

  return (
    // Standard page wrapper
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      {/* Added pt-16 to account for fixed navbar height */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Standard page heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight font-poppins text-center mb-16">
          Admin Dashboard
        </h2>

        {/* Form Area */}
        <div className="flex flex-col md:flex-row items-end gap-4 mb-8">
          <div className="w-full">
            <label className="block text-sm font-poppins text-gray-600 dark:text-gray-400 mb-1">Name</label>
            <input
              placeholder="Product Name"
              className={inputStyle}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-poppins text-gray-600 dark:text-gray-400 mb-1">Price</label>
            <input
              placeholder="Price"
              type="number"
              className={inputStyle}
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-poppins text-gray-600 dark:text-gray-400 mb-1">Category</label>
            <input
              placeholder="Category"
              className={inputStyle}
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>
          
          {!editMode ? (
            <button onClick={handleAdd} className={buttonStyle}>
              Add
            </button>
          ) : (
            <button onClick={handleUpdate} className={buttonStyle}>
              Update
            </button>
          )}
        </div>

        {/* Themed Error Message */}
        {error && (
          <p className="text-red-600 dark:text-red-500 font-poppins text-center mb-8 font-semibold">
            {error}
          </p>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onEdit={handleEdit}
                onDelete={(id) => dispatch(deleteProduct(id))}
              />
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center col-span-full font-poppins text-lg">
              No products added yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}