import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function OrderList() {
  const orders = useSelector(state => state.orders.all);

  return (
    <div className="pt-24 max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(o => (
            <Link
              to={`/orders/${o.id}`}
              key={o.id}
              className="block bg-white rounded-lg shadow-md p-4 hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Order #{o.id}</p>
                  <p className="text-sm text-gray-400">{o.date}</p>
                  <p className="text-sm text-gray-600 mt-1">Address: {o.address}</p>
                </div>
                <div className="font-semibold text-peach-600">₹{o.total}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
