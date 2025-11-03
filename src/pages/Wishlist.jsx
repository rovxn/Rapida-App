import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlist } from '../store/wishlistSlice';
import { addToCart } from '../store/cartSlice';

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="pt-28 min-w-screen mx-auto px-4 md:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
        My Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg">No items in wishlist.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((p) => (
            <div
              key={p.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:scale-[1.01] transition-transform duration-200"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-44 object-cover rounded-t-2xl"
              />

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 truncate">
                    {p.name}
                  </h4>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold">
                    ₹{p.price}
                  </span>
                </div>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => dispatch(addToCart(p))}
                    className="flex-1 bg-peach-600 hover:bg-peach-700 text-white font-medium px-3 py-2 rounded-lg transition"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => dispatch(toggleWishlist(p))}
                    className="flex-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium px-3 py-2 rounded-lg transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
