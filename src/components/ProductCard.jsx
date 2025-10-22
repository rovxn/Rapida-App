export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-lg w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-bold text-yellow-700 dark:text-yellow-500">
        {product.name}
      </h3>
      <p className="mt-2 font-poppins text-gray-600 dark:text-gray-400">
        ₹{product.price}
      </p>
    </div>
  );
}