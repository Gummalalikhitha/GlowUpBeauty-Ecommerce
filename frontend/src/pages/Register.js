// 📁 src/pages/Register.js
import React, { useState } from "react";
import axios from "axios";
import "../styles/Auth.css";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://51.21.10.233:5000/api/register", form);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
      <div className="login-page">
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
           <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
     <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
        <p></p>
        <p>Already have an account? <Link to="/login">Login Now</Link></p>
      </form>
      
    </div>
    </div>
  );
};

export default Register;
