const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  Firstname: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  Username: {
    type: String,
    required: true,
    unique: true
  },
  Mobileno: {
    type: Number,
    required: true
  },
  cart: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
      quantity: { type: Number, default: 1 }
    }
  ]
},{
  timestamps:true,
}
);

const usermodel = mongoose.model("User", userschema);
module.exports = usermodel;








  