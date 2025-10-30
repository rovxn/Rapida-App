import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OrderDetails() {
  const { id } = useParams();
  const order = useSelector(state =>
    state.orders.all.find(o => o.id.toString() === id)
  );

  if (!order) {
    return (
      <div className="pt-24 text-center">
        <p>Order not found</p>
        <Link to="/orders" className="text-peach-600">Back to Orders</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Order #{order.id}</h2>
      <p className="text-sm text-gray-500 mb-2">{order.date}</p>
      <p className="text-sm mb-4">Delivery Address: {order.address}</p>

      <div className="bg-white rounded-lg p-4 shadow-md">
        {order.items.map((item) => (
          <div key={item.id} className="flex justify-between py-2 border-b text-sm">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
        <div className="mt-3 font-semibold flex justify-between">
          <span>Total</span>
          <span>₹{order.total}</span>
        </div>
      </div>

      <Link to="/orders" className="mt-4 inline-block text-peach-600">← Back to Orders</Link>
    </div>
  );
}
