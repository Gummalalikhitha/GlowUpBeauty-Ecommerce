

import React, { useEffect, useState } from "react";
import '../styles/OrderHistory.css'; // Assuming you have some styles for this component
const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.email) return;

    fetch(`http://localhost:5000/api/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
     <div className="body">
    <div className="container mt-4">
      <h3>📜 Order History</h3>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Products</th>
              <th>Total</th>
              <th>Address</th>
              <th>Ordered On</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.orderId}</td>
                <td>
                  {order.products.map((p) => (
                    <div key={p._id}>
                      {p.name} x {p.quantity}
                    </div>
                  ))}
                </td>
                <td>₹{order.totalAmount}</td>
                <td>{order.billingDetails.address}</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default OrderHistory;
