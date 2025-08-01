import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>🎉 Payment Successful!</h1>
        <p style={styles.message}>
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <Link to="/products" style={styles.button}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#fff0f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    color: "#4CAF50",
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  message: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#e91e63",
    color: "white",
    padding: "12px 24px",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  }
};

export default PaymentSuccess;
