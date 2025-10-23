export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    // Standard themed card wrapper
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg overflow-hidden
                    hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 
                    dark:bg-gray-800 dark:border-gray-700">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-lg w-full h-48 object-cover mb-5"
      />
      
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-poppins">
          {product.name}
        </h3>
        
        <p className="mt-2 font-poppins text-gray-600 dark:text-gray-400">
          ₹{product.price} • {product.category}
        </p>

        {/* --- Conditional Button Section --- */}
        {onEdit && onDelete ? (
          // ADMIN: Show Edit/Delete buttons
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={() => onEdit(product)}
              className="font-poppins text-sm font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Edit
            </button>
            {/* Red is kept for "destructive" action, which is a common UX pattern */}
            <button
              onClick={() => onDelete(product.id)}
              className="font-poppins text-sm font-semibold text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              Delete
            </button>
          </div>
        ) : (
          // MENU: Show "Add to Cart" button
          <button 
            className="mt-4 w-full bg-gray-900 text-white px-5 py-2.5 rounded-lg 
                      font-poppins font-semibold text-sm
                      hover:bg-gray-700 dark:bg-white dark:text-gray-900 
                      dark:hover:bg-gray-200
                      transition-all duration-300 transform"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}