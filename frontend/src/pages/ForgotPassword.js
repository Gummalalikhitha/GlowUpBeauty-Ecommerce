// src/pages/ForgotPassword.js
import React, { useState } from "react";
import axios from "axios";
import "../styles/Auth.css";
import { Link, useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/forgot-password", {
        email,
        newPassword,
      });

      setMsg(res.data.message);
    } catch (err) {
      setMsg("Error resetting password.");
    }
  };

  return (
      <div className="login-page">
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Registered Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
        <p className="error">{msg}</p>
          <div className="auth-links">
             <Link to=""></Link>
                  <Link to="/login">Login Now</Link>

          </div>
      </form>
    </div>
    </div>
  );
};

export default ForgotPassword;
