import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQty, decreaseQty } from '../store/cartSlice';
import { toggleWishlist } from '../store/wishlistSlice';
import { FiHeart } from 'react-icons/fi';
import { toast } from 'react-hot-toast'; // Make sure you're using react-hot-toast

export default function ProductCard({ product, onEdit, onDelete }) {
  const dispatch = useDispatch();

  // Get cart item to show quantity
  const itemInCart = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );
  const quantity = itemInCart ? itemInCart.quantity : 0;

  // ✅ Wishlist state
  const wishlist = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  // --- Event Handlers ---
  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleIncrease = () => {
    dispatch(increaseQty(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQty(product.id));
  };

  // ✅ Wishlist toggle
  const handleWishlist = () => {
    dispatch(toggleWishlist(product));
    toast.success(
      isWishlisted
        ? `${product.name} removed from wishlist`
        : `${product.name} added to wishlist`
    );
  };

  // --- Styles ---
  const qtyButtonStyle = `
    w-1/3 h-10 flex items-center justify-center 
    border border-gray-300 dark:border-gray-600 rounded-lg 
    font-semibold text-xl text-gray-700 dark:text-gray-300 
    hover:bg-gray-100 dark:hover:bg-gray-700 
    transition-colors duration-200`;

  const addButtonFull = `
    w-full bg-gray-900 text-white px-5 py-2.5 rounded-lg 
    font-poppins font-semibold text-sm h-10
    hover:bg-gray-700 dark:bg-white dark:text-gray-900 
    dark:hover:bg-gray-200
    transition-all duration-300 transform`;

  return (
    <div
      className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg overflow-hidden
                 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 
                 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
    >
      {/* ❤️ Wishlist Button */}
      <button
        onClick={handleWishlist}
        className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
          isWishlisted
            ? 'bg-red-100 text-red-500 hover:bg-red-200'
            : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
        }`}
      >
        <FiHeart
          size={18}
          className={isWishlisted ? 'fill-red-500' : 'fill-none'}
        />
      </button>

      {/* Product Info */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg w-full h-48 object-cover mb-5"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-poppins">
          {product.name}
        </h3>
        <p className="mt-2 font-poppins text-gray-600 dark:text-gray-400">
          ₹{product.price} • {product.category}
        </p>
      </div>

      {/* Action Area */}
      <div className="mt-4">
        {onEdit && onDelete ? (
          // Admin buttons
          <div className="flex justify-end gap-4">
            <button
              onClick={() => onEdit(product)}
              className="font-poppins text-sm font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="font-poppins text-sm font-semibold text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              Delete
            </button>
          </div>
        ) : quantity === 0 ? (
          // Add to Cart
          <button onClick={handleAdd} className={addButtonFull}>
            Add to Cart
          </button>
        ) : (
          // Quantity Stepper
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={handleDecrease}
              className={qtyButtonStyle}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="font-poppins font-semibold text-lg text-gray-900 dark:text-white">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className={qtyButtonStyle}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
