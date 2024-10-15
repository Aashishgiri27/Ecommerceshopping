const mongoose = require("mongoose");
const mongooseurl = "mongodb://localhost:27017/Prodeuct";

mongoose.connect(mongooseurl);

const db = mongoose.connection;
db.on("connected", () => {
  console.log("connected mongodb server");
});
db.on("error", () => {
  console.log("mongodb connection error");
});
db.on("disconnected", () => {
  console.log("disconnected mongodb server");
});
