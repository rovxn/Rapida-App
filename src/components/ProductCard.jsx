export default function ProductCard({ product }) {
  return (
    // The card itself uses dark:bg-gray-800 to contrast with the page's dark:bg-gray-900
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg overflow-hidden
                    hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 
                    dark:bg-gray-800 dark:border-gray-700 group">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-lg w-full h-48 object-cover mb-5"
      />
      
      {/* --- CONTENT --- */}
      <div>
        {/* Updated h3 to use neutral colors */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-poppins">
          {product.name}
        </h3>
        
        <p className="mt-2 font-poppins text-lg font-medium text-gray-700 dark:text-gray-300">
          ₹{product.price}
        </p>

        {/* Example "Add to Cart" button that matches the theme */}
        <button 
          className="mt-4 w-full bg-gray-900 text-white px-5 py-2.5 rounded-lg 
                    font-poppins font-semibold text-sm
                    hover:bg-gray-700 dark:bg-white dark:text-gray-900 
                    dark:hover:bg-gray-200
                    transition-all duration-300 transform "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}