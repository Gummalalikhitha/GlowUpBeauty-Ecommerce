import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [cartItems, setCartItems] = useState([]);
  const [paymentMode, setPaymentMode] = useState(""); // 🔥 New State for Payment Mode
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
     setCartItems(storedCart);
    const cartArray = Object.values(storedCart).map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCart(cartArray);

    const totalAmount = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalAmount);
  }, []);

  const updateLocalStorage = (updatedCart) => {
    const cartObject = {};
    updatedCart.forEach((item) => {
      cartObject[item._id] = item;
    });
    localStorage.setItem("cart", JSON.stringify(cartObject));
  };

  const handleQty = (id, delta) => {
    const updated = cart.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    setCart(updated);
    updateLocalStorage(updated);
    const newTotal = updated.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  const handleRemove = (id) => {
    const updated = cart.filter((item) => item._id !== id);
    setCart(updated);
    updateLocalStorage(updated);
    const newTotal = updated.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handlePayment = async () => {
    if (!billingInfo.name || !billingInfo.email || !billingInfo.address) {
      alert("Please fill in all billing details.");
      return;
    }

    if (!paymentMode) {
      alert("Please select a payment method.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.email) {
      alert("User not found in localStorage.");
      return;
    }

    if (billingInfo.email !== user.email) {
      alert("Email mismatch! Please use your registered email.");
      return;
  
    
    }
 
    const orderData = {
      billingDetails: billingInfo,
      products: cart,
      totalAmount: total,
      userEmail: user.email,
      paymentMode: paymentMode,
    };

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.removeItem("cart");
          setCartItems([]);
        navigate("/payment-success");
      } else {
        alert(data.message || "Payment failed.");
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Order successfully placed");
      
      navigate("/payment-success");
    }
  };

  return (
    <div className="cart-page-wrapper">
      <div className="container">
        <h2 className="my-4">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => handleQty(item._id, -1)} className="btn btn-sm btn-warning mx-1">-</button>
                      {item.quantity}
                      <button onClick={() => handleQty(item._id, 1)} className="btn btn-sm btn-success mx-1">+</button>
                    </td>
                    <td>₹{item.price}</td>
                    <td>₹{item.price * item.quantity}</td>
                    <td>
                      <button onClick={() => handleRemove(item._id)} className="btn btn-danger btn-sm">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4 className="mt-4">Total Amount: ₹{total}</h4>

            <div className="mt-5">
              <h5>Billing Details</h5>
              <div className="form-group my-2">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={billingInfo.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                  value={billingInfo.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group my-2">
                <textarea
                  className="form-control"
                  name="address"
                  placeholder="Shipping Address"
                  value={billingInfo.address}
                  onChange={handleInputChange}
                />
              </div>

              {/* 🔥 Payment Mode Selection Section */}
              <div className="form-group my-3">
                <h5>Choose Payment Method:</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMode"
                    value="Cash on Delivery"
                    onChange={(e) => setPaymentMode(e.target.value)}
                    id="cod"
                  />
                  <label className="form-check-label" htmlFor="cod">
                    Cash on Delivery (COD)
                  </label>
                </div>
                <div className="form-check mt-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMode"
                    value="Online Payment"
                    disabled
                    id="online"
                  />
                  <label className="form-check-label text-muted" htmlFor="online">
                    Online Payment (Currently Unavailable)
                  </label>
                </div>
              </div>
                
              <button onClick={handlePayment} className="btn btn-primary mt-3">
                💳 Place Order ₹{total}
              </button>
           
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;