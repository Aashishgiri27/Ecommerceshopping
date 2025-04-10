const cartModel = require("../schema/cartschema");

// Add to cart
router.post("/product/cart/add", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let cart = await cartModel.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

      if (itemIndex > -1) {
        // Item exists in cart, update quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // New item
        cart.items.push({ productId, quantity });
      }
      await cart.save();
    } else {
      // No cart for user, create new
      cart = await cartModel.create({
        userId,
        items: [{ productId, quantity }]
      });
    }

    res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    console.error("Cart add error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/product/cart/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const cart = await cartModel.findOne({ userId });
  
      if (!cart) return res.status(404).json({ error: "Cart not found" });
  
      res.status(200).json(cart);
    } catch (error) {
      console.error("Get cart error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  


  router.post("/product/cart/remove", async (req, res) => {
    const { userId, productId } = req.body;
  
    try {
      const cart = await cartModel.findOne({ userId });
      if (!cart) return res.status(404).json({ error: "Cart not found" });
  
      cart.items = cart.items.filter(item => item.productId.toString() !== productId);
      await cart.save();
  
      res.status(200).json({ message: "Item removed", cart });
    } catch (error) {
      console.error("Remove error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  