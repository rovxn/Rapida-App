import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OrderDetails() {
  const { id } = useParams();
  const order = useSelector((state) =>
    state.orders.all.find((o) => o.id.toString() === id)
  );

  if (!order) {
    return (
      <div className="pt-28 text-center bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
          Order not found
        </p>
        <Link
          to="/orders"
          className="text-peach-600 hover:text-peach-700 dark:text-peach-400 dark:hover:text-peach-300 font-medium transition"
        >
          ← Back to Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 min-w-screen mx-auto px-4 md:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 transition">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          Order #{order.id}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {order.date}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
          <span className="font-medium">Delivery Address:</span> {order.address}
        </p>

        <div className="bg-gray-50 dark:bg-gray-700/40 rounded-xl p-4 transition">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300"
            >
              <span>{item.name}</span>
              <span className="font-medium">₹{item.price}</span>
            </div>
          ))}

          <div className="mt-4 flex justify-between text-base font-semibold text-gray-800 dark:text-gray-100">
            <span>Total</span>
            <span>₹{order.total}</span>
          </div>
        </div>

        <Link
          to="/orders"
          className="mt-6 inline-block text-peach-600 hover:text-peach-700 dark:text-peach-400 dark:hover:text-peach-300 font-medium transition"
        >
          ← Back to Orders
        </Link>
      </div>
    </div>
  );
}
