
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();


 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
      email, // 👈 backend expects "username", mapped from "email"
        password,
      });

      if (res.data && res.data.success) {
       
        alert("Login Successful");
      
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/cart");
    
      } else {
        setMsg(res.data.message || "Login failed.");
      }
    } catch (error) {
      setMsg("Invalid credentials or server error");
    }
  };

  return (
  <div className="login-page">
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p className="error">{msg}</p>
        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/register">Register Now</Link>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Login;