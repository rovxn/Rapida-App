import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addOrder } from '../store/ordersSlice';
import { clearCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  const [address, setAddress] = useState('');
  const savedAddresses = JSON.parse(localStorage.getItem('foodieAddresses')) || [];
  const [newAddress, setNewAddress] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!address && !newAddress) return alert('Please select or enter an address');
    const orderAddress = newAddress || address;
    const total = cart.reduce((sum, i) => sum + i.price, 0);
    dispatch(addOrder({ items: cart, address: orderAddress, total }));
    dispatch(clearCart());
    alert('Order placed successfully!');
    navigate('/orders');
  };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSaveAddress = () => {
    if (!newAddress) return;
    const updated = [...savedAddresses, newAddress];
    localStorage.setItem('foodieAddresses', JSON.stringify(updated));
    setNewAddress('');
    alert('Address saved!');
  };

  return (
    <div className="pt-28 min-w-screen mx-auto px-4 md:px-8 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Checkout
      </h2>

      {/* Address Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8 border border-gray-100 dark:border-gray-700 transition">
        <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
          Select Delivery Address
        </h3>

        {savedAddresses.length ? (
          <div className="flex flex-col gap-3">
            {savedAddresses.map((addr, i) => (
              <label
                key={i}
                className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition ${
                  address === addr
                    ? 'border-peach-500 bg-peach-50 dark:bg-peach-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <input
                  type="radio"
                  name="address"
                  value={addr}
                  checked={address === addr}
                  onChange={() => setAddress(addr)}
                  className="accent-peach-600"
                />
                <span className="text-gray-700 dark:text-gray-300">{addr}</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 dark:text-gray-500 text-sm italic mt-2">
            No saved addresses yet
          </p>
        )}

        <div className="mt-6">
          <input
            type="text"
            placeholder="Enter new address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 focus:border-peach-500 focus:ring-peach-400 outline-none p-3 rounded-lg w-full mb-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
          />
          <button
            onClick={handleSaveAddress}
            className="bg-peach-600 hover:bg-peach-700 text-white px-4 py-2 rounded-lg font-medium transition w-full sm:w-auto"
          >
            Save Address
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 transition">
        <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
          Order Summary
        </h3>

        {cart.length ? (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
              >
                <span>{item.name}</span>
                <span className="font-medium">₹{item.price}</span>
              </div>
            ))}

            <div className="mt-4 flex justify-between text-base font-semibold text-gray-800 dark:text-gray-100">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full bg-peach-600 hover:bg-peach-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
            >
              Place Order
            </button>
          </>
        ) : (
          <p className="text-gray-400 dark:text-gray-500 text-sm italic">
            Your cart is empty
          </p>
        )}
      </div>
    </div>
  );
}
