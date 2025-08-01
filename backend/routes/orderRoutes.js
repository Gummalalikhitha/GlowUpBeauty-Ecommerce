// File: routes/orderRoutes.js
const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.post('/orders', async (req, res) => {
  try {
    const { billingDetails, products, totalAmount, userEmail } = req.body;

    if (!billingDetails || !products || !totalAmount || !userEmail) {
      return res.status(400).json({ message: "Missing order details" });
    }

    const newOrder = new Order({
      billingDetails,
      products,
      totalAmount,
      userEmail,
      createdAt: new Date(),
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({ message: "Order placed", order: savedOrder });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: "Server error while placing order" });
  }
});

// Get Orders for a User
router.get('/:email', async (req, res) => {
  try {
    const orders = await Order.find({ userEmail: req.params.email });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders', error: err });
  }
});

module.exports = router;