import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlist } from '../store/wishlistSlice';
import { addToCart } from '../store/cartSlice';

export default function Wishlist() {
  const wishlist = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="pt-24 max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map(p => (
            <div key={p.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-lg" />
              <div className="mt-2 flex justify-between items-center">
                <h4 className="font-medium">{p.name}</h4>
                <span>₹{p.price}</span>
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => dispatch(addToCart(p))}
                  className="flex-1 bg-peach-600 text-white px-3 py-1 rounded"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => dispatch(toggleWishlist(p))}
                  className="text-red-500 border border-red-500 px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
