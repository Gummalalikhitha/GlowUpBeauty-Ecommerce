// src/pages/About.js
import React from 'react';
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="intro">Welcome to <strong>GlowUpBeauty</strong> – Your Beauty, Our Passion!</p>
      <div className="about-content">
        <div className="section">
          <h2>Our Mission</h2>
          <p>We aim to deliver high-quality, cruelty-free, and affordable cosmetics that enhance every individual's confidence and style.</p>
        </div>
        <div className="section">
          <h2>Our Vision</h2>
          <p>To become a globally trusted cosmetic brand that empowers people to express their unique beauty with clean and ethical products.</p>
        </div>
        <div className="section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>100% Vegan & Cruelty-Free</li>
            <li>Dermatologically Tested Products</li>
            <li>Affordable Luxury for Everyone</li>
            <li>Fast Shipping & Easy Returns</li>
          </ul>
        </div>
      </div>
    </div>


  );
};

export default About;
