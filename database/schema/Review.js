const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.Mixed, // ✅ allows storing full object
  }
}, {
  timestamps: true,
});

const reviewModel = mongoose.model('Review', reviewSchema);

module.exports = reviewModel;
