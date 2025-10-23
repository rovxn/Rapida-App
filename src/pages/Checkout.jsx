import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // --- Reusable Themed Styles ---
  const primaryButtonBase = 
    `inline-block w-full bg-gray-900 text-white px-8 py-3 rounded-lg 
     font-poppins font-semibold text-center
     hover:bg-gray-700 shadow-lg hover:shadow-xl 
     dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200
     transition-all duration-300 transform hover:-translate-y-0.5`;

  const primaryButtonLink = `${primaryButtonBase} ${''}`; // For <Link>
  const primaryButtonStyle = `${primaryButtonBase} ${''}`; // For <button>
  // ---

  const handleOrder = () => {
    // No need to check cart.length, as the button won't render if cart is empty
    setOrderPlaced(true);
    dispatch(clearCart());
  };

  if (orderPlaced) {
    return (
      // --- ORDER PLACED (Success) STATE ---
      <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight font-poppins mb-4">
              🎉 Order Placed Successfully!
            </h2>
            <p className="font-poppins text-lg text-gray-600 dark:text-gray-300 mb-10">
              Thank you for ordering with Rapida.
            </p>
            <Link to="/menu" className={primaryButtonLink}>
              Back to Menu
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    // --- CHECKOUT PAGE ---
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight font-poppins text-center mb-16">
          Checkout
        </h2>

        <div className="max-w-xl mx-auto">
          {cart.length === 0 ? (
            // --- EMPTY STATE ---
            <div className="text-center">
              <p className="font-poppins text-lg text-gray-500 dark:text-gray-400 mb-8">
                You have no items in your cart to check out.
              </p>
              <Link to="/menu" className={primaryButtonLink}>
                Browse Our Menu
              </Link>
            </div>
          ) : (
            // --- CHECKOUT SUMMARY ---
            <>
              {/* Order Summary Card */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 font-poppins">
                  Order Summary
                </h3>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center p-6 font-poppins"
                    >
                      <span className="text-gray-800 dark:text-gray-200">
                        {item.name}{' '}
                        <span className="text-gray-500 dark:text-gray-400">
                          × {item.quantity}
                        </span>
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Total & Place Order Card */}
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-poppins text-gray-600 dark:text-gray-400">Total Price:</span>
                  <h3 className="font-poppins text-3xl font-extrabold text-gray-900 dark:text-white">
                    ₹{total.toFixed(2)}
                  </h3>
                </div>
                
                <button
                  onClick={handleOrder}
                  className={primaryButtonStyle}
                >
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}