// Home.js
import React from "react";
import Navbar from "../components/Navbar"; // adjust the path based on your structure
import { useNavigate } from "react-router-dom";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">

    <style>{`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, .home-wrapper {
    font-family: 'Poppins', sans-serif;
    background-color: #fff6fb;
    color: #333;
  }

  .features-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 3rem 2rem;
    background: linear-gradient(to bottom right, #ffe4f0, #fff);
  }

  .feature-card {
    background: #fff;
    padding: 1rem;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-6px);
  }

  .feature-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  .feature-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
    color: #d81b60;
  }

  .feature-card p {
    font-size: 0.95rem;
    color: #666;
  }

  .section-title {
    text-align: center;
    margin: 3rem 0 1rem;
    font-size: 2rem;
    font-weight: 600;
    color: #d81b60;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 1.5rem;
    padding: 0 2rem;
  }

  .product-card {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0,0,0,0.06);
    transition: transform 0.2s ease;
  }

  .product-card:hover {
    transform: translateY(-5px);
  }

  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .product-card div {
    padding: 1rem;
    text-align: center;
  }

  .product-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .product-card button {
    padding: 0.4rem 1.2rem;
    background-color: #d81b60;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.3s ease;
  }

  .product-card button:hover {
    background-color: #ad1457;
  }

  .footer {
    margin-top: 3rem;
    background-color: #ffd6ea;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .footer-section {
    flex: 1;
    min-width: 180px;
    margin-bottom: 1.5rem;
  }

  .footer-section h4 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: #8e007c;
  }

  .footer-section a {
    display: block;
    color: #8e007c;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  .footer-section input {
    padding: 0.5rem;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-top: 0.5rem;
  }

  .footer-section button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #8e007c;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .footer-bottom {
    text-align: center;
    margin-top: 1rem;
    font-size: 14px;
    color: #666;
  }

  @media (max-width: 768px) {
    .features-section {
      padding: 2rem 1rem;
    }

    .product-card img {
      height: 160px;
    }
  }
`}</style>

<div className="features-section">
  <div className="feature-card">
    <img src="home2.jpg" alt="Explore Products" />
    <h3>Explore 80+ Trendy Products</h3>
    <p>From skincare to tools – we’ve got it all in one place</p>
  </div>
  <div className="feature-card">
    <img src="home1.jpg" alt="Fast Delivery" />
    <h3>Fast & Reliable Delivery</h3>
    <p>Get your favorites delivered in 1-2 days</p>
  </div>
  <div className="feature-card">
    <img src="home3.jpg" alt="Happy Customers" />
    <h3>Trusted by 10,000+ Customers</h3>
    <p>Rated 4.8+ for customer satisfaction</p>
  </div>
</div>



      {/* Week Specials */}
      <h2 className="section-title">WEEK SPECIALS</h2>
      <div className="grid">
        <div className="product-card">
          <img src="home4.jpg" alt="serum" />
          <div>
            <h3>Vitamin C Serum</h3>
            {/* <button>View Product</button> */}
            <button onClick={() => navigate('/products')}>View Product</button>

          </div>
        </div>
        <div className="product-card">
          <img src="home5.jpg" alt="cream" />
          <div>
            <h3>Night Glow Cream</h3>
            {/* <button>View Product</button> */}
            <button onClick={() => navigate('/products')}>View Product</button>

          </div>
        </div>
        <div className="product-card">
          <img src="Eye1.jpg" alt="mascara" />
      
          <div>
            <h3>Waterproof Mascara</h3>
            {/* <button>View Product</button> */}
    <button onClick={() => navigate('/products')}>View Product</button>

          </div>
        </div>
      </div>

      <h2 className="section-title">CATEGORIES</h2>
<div className="grid">
  {[
    {
      name: "Hair",
      image: "home6.jpg"
    },
    {
      name: "Face",
      image: "home7.jpg"
    },
    {
      name: "Lips",
      image: "home8.jpg"
    },
    {
      name: "Eyes",
      image: "home9.jpg"
    },
    {
      name: "Body",
      image: "home10.jpg"
    },
    {
      name: "Fragrance",
      image: "home11.jpg"
    },
    {
      name: "Nails",
      image: "home12.jpg"
    },
    {
      name: "Tools",
      image: "home13.jpg"
    }
  ].map((cat) => (
    <div className="product-card" key={cat.name}>
      <img src={cat.image} alt={cat.name} />
      <div>
        <h3>{cat.name}</h3>
        <button onClick={() => navigate('/products')}>Shop Now</button>
      </div>
    </div>
  ))}
  
</div>


      {/* Footer */}
      <div className="footer">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Extra Links</h4>
          <a href="/login">My Account</a>
          <a href="/cart">My Cart</a>
          <a href="/orders">My Order</a>
          <a href="/wishlist">Wishlist</a>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="#"><FaFacebook /> Facebook</a>
          <a href="#"><FaTwitter /> Twitter</a>
          <a href="#"><FaInstagram /> Instagram</a>
          <a href="#"><FaPinterest /> Pinterest</a>
          <a href="#"><FaLinkedin /> Linkedin</a>
          <a href="#"><FaGithub /> Github</a>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe For Latest Updates</p>
          <input type="email" placeholder="enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Created by <b>Gummala Likhitha</b> | All Rights Reserved */}
                E-commerce Cosmetics Shopping <b>GlowUpBeauty</b> | All Rights Reserved
      </div>
    </div>
  );
};

export default HomePage;
