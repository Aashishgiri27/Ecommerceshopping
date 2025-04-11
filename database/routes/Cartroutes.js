// routes/cart.js
const express = require("express");
const router = express.Router();
const cartModel = require("../schema/cartschema");
const productModel = require("../schema/productschema");

// ✅ Add item to cart
router.post("/product/cart/add", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId || quantity == null) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    let cart = await cartModel.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(
        item => item.productId.toString() === productId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }

      await cart.save();
    } else {
      cart = await cartModel.create({
        userId,
        items: [{ productId, quantity }],
      });
    }

    const populatedCart = await cartModel.findOne({ userId }).populate("items.productId");
    res.status(200).json({ message: "Item added to cart", cart: populatedCart });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Get cart by userId
router.get("/product/cart/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await cartModel.findOne({ userId }).populate("items.productId");
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    res.status(200).json(cart);
  } catch (error) {
    console.error("Get cart error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Remove item from cart
router.post("/product/cart/remove", async (req, res) => {
  const { userId, productId } = req.body;

  if (!userId || !productId) {
    return res.status(400).json({ error: "Missing userId or productId" });
  }

  try {
    const cart = await cartModel.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const initialLength = cart.items.length;
    cart.items = cart.items.filter(item => item.productId.toString() !== productId);

    if (cart.items.length === initialLength) {
      return res.status(404).json({ error: "Product not found in cart" });
    }

    await cart.save();
    const updatedCart = await cartModel.findOne({ userId }).populate("items.productId");
    res.status(200).json({ message: "Item removed from cart", cart: updatedCart });
  } catch (error) {
    console.error("Remove from cart error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
