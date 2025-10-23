import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // The primary neutral button style (as a <Link>)
  const primaryButtonLink = 
    `inline-block bg-gray-900 text-white px-8 py-3 rounded-lg 
     font-poppins font-semibold text-center
     hover:bg-gray-700 shadow-lg hover:shadow-xl 
     dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200
     transition-all duration-300 transform hover:-translate-y-0.5`;

  return (
    // Standard page wrapper
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      {/* Container with padding for fixed navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Standard page heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight font-poppins text-center mb-16">
          Your Cart 🛒
        </h2>

        {cart.length === 0 ? (
          // --- EMPTY CART STATE ---
          <div className="text-center">
            <p className="font-poppins text-lg text-gray-500 dark:text-gray-400 mb-8">
              Your cart is currently empty.
            </p>
            <Link to="/menu" className={primaryButtonLink}>
              Browse Our Menu
            </Link>
          </div>
        ) : (
          // --- CART WITH ITEMS ---
          <div className="max-w-3xl mx-auto">
            
            {/* Cart Items List - styled as a card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col">
                {cart.map((item) => (
                  // CartItem already has border-b, so we just stack them
                  // Added px-6 for padding within the card
                  <div className="px-4 sm:px-6" key={item.id}>
                    <CartItem item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary & Actions */}
            <div className="mt-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                {/* Total */}
                <div>
                  <span className="font-poppins text-gray-600 dark:text-gray-400">Total Price:</span>
                  <h3 className="font-poppins text-3xl font-extrabold text-gray-900 dark:text-white">
                    ₹{total.toFixed(2)}
                  </h3>
                </div>
                
                {/* Clear Cart Button - subtle destructive action */}
                <button
                  onClick={() => dispatch(clearCart())}
                  className="font-poppins text-sm font-semibold text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  Clear Cart
                </button>
              </div>

              {/* Checkout Button - primary action */}
              <Link to="/checkout" className={`${primaryButtonLink} w-full`}>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}