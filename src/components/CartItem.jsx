import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty } from '../store/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  // Reusable style for the +/- buttons for a clean, aesthetic stepper
  const qtyButtonStyle = 
    `w-8 h-8 flex items-center justify-center 
     border border-gray-300 dark:border-gray-600 rounded-full 
     font-semibold text-gray-700 dark:text-gray-300 
     hover:bg-gray-100 dark:hover:bg-gray-700 
     transition-colors duration-200`;

  return (
    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-6">
      
      {/* Left Side: Image & Info */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-lg object-cover" // Themed: rounded-lg
        />
        <div>
          <h3 className="font-poppins font-semibold text-lg text-gray-900 dark:text-white">
            {item.name}
          </h3>
          {/* Updated price display: Show line total prominently */}
          <p className="font-poppins text-lg font-medium text-gray-800 dark:text-gray-200">
            ₹{(item.price * item.quantity).toFixed(2)}
          </p>
          <p className="font-poppins text-xs text-gray-500 dark:text-gray-500">
            (₹{item.price.toFixed(2)} × {item.quantity})
          </p>
        </div>
      </div>

      {/* Right Side: Controls */}
      <div className="flex gap-4 items-center">
        {/* Quantity Stepper */}
        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className={qtyButtonStyle}
          aria-label="Decrease quantity"
        >
          −
        </button>
        
        <span className="font-poppins font-semibold text-lg text-gray-900 dark:text-white w-8 text-center">
          {item.quantity}
        </span>
        
        <button
          onClick={() => dispatch(increaseQty(item.id))}
          className={qtyButtonStyle}
          aria-label="Increase quantity"
        >
          +
        </button>
        
        {/* Remove Button (Themed) */}
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="ml-4 text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 
                     font-bold text-2xl p-1 rounded-full hover:bg-red-100 
                     dark:hover:bg-red-900/50 transition-colors duration-200"
          aria-label="Remove item from cart"
        >
          ✕
        </button>
      </div>
    </div>
  );
}