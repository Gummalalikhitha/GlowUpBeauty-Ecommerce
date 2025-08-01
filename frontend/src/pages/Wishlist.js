

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(data);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(item => item._id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

 const addToCart = (item) => {
  let existingCart = [];

  try {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (Array.isArray(storedCart)) {
      existingCart = storedCart;
    }
  } catch (error) {
    console.error("Cart parse error:", error);
    existingCart = [];
  }

  const alreadyInCart = existingCart.find(cartItem => cartItem._id === item._id);

  if (!alreadyInCart) {
    existingCart.push(item);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  }

  navigate('/cart');
};


  return (
    <div className="wishlist-wrapper">
      <h2 className="wishlist-title">My Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.map(item => (
          <div key={item._id} className="wishlist-card">
            <img src={item.image} alt={item.name} className="wishlist-img" />
            <div className="wishlist-info">
              <h5>{item.name}</h5>
              <p>₹{item.price}</p>
              <div className="wishlist-buttons">
                <button className="btn-remove" onClick={() => removeFromWishlist(item._id)}>Remove</button>
                <button className="btn-cart" onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
        {wishlist.length === 0 && (
          <p className="empty-text">Your wishlist is empty ✨</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
