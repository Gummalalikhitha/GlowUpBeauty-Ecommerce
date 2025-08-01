// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <Link className="navbar-brand" to="/">Beauty Blends</Link>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/wishlist">Wishlist</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/orders">Orders</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
//           </ul> 
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css"; // Make sure this file exists or adjust as needed

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <h1 className="brand">GlowUp<span style={{ color: "#ff69b4" }}>Beauty</span></h1>
//       </div>
//       <div className="navbar-center">
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/products">Products</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </div>
//       <div className="navbar-right">
//         <Link to="/account" className="icon"><i className="fas fa-user"></i></Link>
//         <Link to="/search" className="icon"><i className="fas fa-search"></i></Link>
//         <Link to="/cart" className="icon"><i className="fas fa-shopping-cart"></i></Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
// import React from "react";
// import { Link } from 'react-router-dom';
// import { FaUser, FaSearch, FaHeart,FaShoppingCart } from "react-icons/fa";
// import "../styles/Navbar.css"; // Make sure this CSS file exists or styles are added inline
// import React, { useState } from 'react'; // ✅ Make sure useState is imported

// // Inside your component:
// const [dropdownOpen, setDropdownOpen] = useState(false);

// const toggleDropdown = (state) => {
//   setDropdownOpen(state);
// };

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//          <h3 className="brand">GlowUp<span style={{ color: "#ff69b4" }}>Beauty</span></h3>
//      </div>
//       <div className="nav-links">
//         <a href="/">Home</a>
//         <a href="/products">Products</a>
//         <a href="/about">About</a>
//         <a href="/contact">Contact Us</a>
//          <div className="account-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//           <span className="account-link"><FaUser /> Account</span>
//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </div>
//           )}
//         </div>
//         <a href="#"><FaSearch /></a>
//          <a href="/wishlist"><FaHeart /></a>
//         <a href="/cart"><FaShoppingCart /></a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
 
// src/components/Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUser, FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(prev => !prev);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">GlamEssence</div>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>

//         <div className="account-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//           <span className="account-link"><FaUser /> Account</span>
//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </div>
//           )}
//         </div>

//         <Link to="#"><FaHeart /></Link>
//         <Link to="#"><FaSearch /></Link>
//         <Link to="#"><FaShoppingCart /></Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// // // Navbar.js
// import React, { useState } from "react";
// import { FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <nav className="navbar">
//       <h2 className="logo">GlowUpBeauty</h2>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact Us</Link>
//         <div className="account-dropdown" onClick={toggleDropdown}>
//           <span><FaUser /> Account ▾</span>
//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </div>
//           )}
//         </div>
//         <Link to="/wishlist"><FaHeart /></Link>
        
//         <Link to="/cart"><FaShoppingCart /></Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// // Navbar.js
// import React, { useState, useRef, useEffect } from "react";
// import { FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="navbar">
//       <h2 className="logo">GlowUpBeauty</h2>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact Us</Link>

//         <div className="account-dropdown" ref={dropdownRef}>
//           <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
//             <FaUser /> Account ▾
//           </span>
//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <Link to="/login" onClick={() => setDropdownOpen(false)}>Login</Link>
//               <Link to="/register" onClick={() => setDropdownOpen(false)}>Register</Link>
//             </div>
//           )}
//         </div>

//         <Link to="/wishlist"><FaHeart /></Link>
//         <Link to="/cart"><FaShoppingCart /></Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.js

// import React, { useState, useRef, useEffect } from "react";
// import { FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//     setDropdownOpen(false);
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="navbar">
//       <h2 className="logo">GlowUpBeauty</h2>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact Us</Link>

//         <div className="account-dropdown" ref={dropdownRef}>
//           <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
//             <FaUser /> Account ▾
//           </span>
//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <span onClick={() => handleNavigation("/login")}>Login</span>
//               <span onClick={() => handleNavigation("/register")}>Register</span>
//             </div>
//           )}
//         </div>

//         <Link to="/wishlist"><FaHeart /></Link>
//         <Link to="/cart"><FaShoppingCart /></Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// Navbar.js
// import React, { useState, useRef, useEffect } from "react";
 import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const dropdownRef = useRef(null);

  // const toggleDropdown = () => {
  //   setDropdownOpen((prev) => !prev);
  // };

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setDropdownOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">GlowUpBeauty</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>

        {/* <div className="account-dropdown" ref={dropdownRef}>
          <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
            <FaUser /> Account ▾
          </span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/login" onClick={() => setDropdownOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setDropdownOpen(false)}>Register</Link>
            </div>
          )}
        </div> */}
        <Link to="/login">Login</Link>
        <Link to="/wishlist"><FaHeart /></Link>
        <Link to="/cart"><FaShoppingCart /></Link>
        {/* <Link to="/orders" className="nav-link">MyOrders</Link> */}
        <Link to=""></Link>
        <Link to=""></Link>
        <Link to=""></Link>
      </div>
    </nav>
  );
};

export default Navbar;
