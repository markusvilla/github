const express = require('express');
const Cart = require('../models/Cart');

const router = express.Router();

router.get('/:userId',async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('products.productId');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/:userId', async (req, res) => {
  const { products } = req.body;
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId: req.params.userId },
      { $set: { products } },
      { new: true, upsert: true }
    );
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
