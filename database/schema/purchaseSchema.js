const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",      // singular 'User', as per usermodel
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",  // plural 'Products', as per productmodel
    required: true,
  },
  purchasedAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Purchase", purchaseSchema);
