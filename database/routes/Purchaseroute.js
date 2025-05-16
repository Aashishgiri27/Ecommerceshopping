// routes/purchaseRoute.js
const express = require("express");
const router = express.Router();
const Purchase = require("../schema/purchaseSchema");

router.post("/purchase", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newPurchase = new Purchase({
      userId,
      product: productId,
    });

    await newPurchase.save();

    res.status(201).json({ message: "Purchase confirmed successfully" });
  } catch (error) {
    console.error("Error confirming purchase:", error);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/purchases/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const purchases = await Purchase.find({ userId })
      .populate("product") // 👈 Populates product details
      .sort({ purchasedAt: -1 });

    res.status(200).json(purchases);
  } catch (error) {
    console.error("Error fetching purchases:", error);
    res.status(500).json({ message: "Failed to fetch purchases" });
  }
});
// GET /api/admin/purchases
router.get("/admin/purchases", async (req, res) => {
  try {
  const allPurchases = await Purchase.find()
  .populate("userId", "Firstname Email Mobileno")
  .populate("product")
  .sort({ purchasedAt: -1 });

    res.status(200).json(allPurchases);
  } catch (error) {
    console.error("Admin fetch error:", error);
    res.status(500).json({ message: "Failed to fetch purchases" });
  }
});





module.exports = router;
