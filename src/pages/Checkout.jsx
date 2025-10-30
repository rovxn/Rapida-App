import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addOrder } from '../store/ordersSlice';
import { clearCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const cart = useSelector(state => state.cart.items);
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

  const handleSaveAddress = () => {
    if (!newAddress) return;
    const updated = [...savedAddresses, newAddress];
    localStorage.setItem('foodieAddresses', JSON.stringify(updated));
    setNewAddress('');
    alert('Address saved!');
  };

  return (
    <div className="pt-24 max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h3 className="font-medium mb-2">Select Delivery Address</h3>
        {savedAddresses.length ? (
          <div className="flex flex-col gap-2">
            {savedAddresses.map((addr, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="address"
                  value={addr}
                  checked={address === addr}
                  onChange={() => setAddress(addr)}
                />
                <span>{addr}</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm">No saved addresses yet</p>
        )}

        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter new address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleSaveAddress}
            className="bg-gray-900 text-white px-3 py-1 rounded"
          >
            Save Address
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="font-medium mb-2">Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between py-2 border-b text-sm">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
        <div className="mt-3 font-semibold flex justify-between">
          <span>Total</span>
          <span>₹{cart.reduce((s, i) => s + i.price, 0)}</span>
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="mt-6 bg-peach-600 hover:bg-peach-700 text-white px-5 py-2 rounded-lg"
      >
        Place Order
      </button>
    </div>
  );
}
