import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function OrderList() {
  const orders = useSelector((state) => state.orders.all);

  return (
    <div className="pt-28 min-w-screen mx-auto px-4 md:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg">No orders yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => (
            <Link
              to={`/orders/${o.id}`}
              key={o.id}
              className="block bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition duration-200"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-100">
                    Order #{o.id}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{o.date}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    <span className="font-medium">Address:</span> {o.address}
                  </p>
                </div>
                <div className="font-semibold text-peach-600 dark:text-peach-400 text-lg">
                  ₹{o.total}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
