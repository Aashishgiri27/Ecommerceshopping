const express = require("express");
const router = express.Router()
const usermodel = require("../schema/userschema");
const userquerymodel = require("../schema/contactschema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const reviewModel = require("../schema/Review");


router.post("/product/signin", async (req, res) => {
  try {
    const { Firstname, Email, Password, Username, Mobileno } = req.body;

    // Check if email already exists
    const existingUser = await usermodel.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);

    // Save the new user
    const user = new usermodel({
      Firstname,
      Email,
      Password: hashedPassword,
      Username,
      Mobileno
    });

    const response = await user.save();
    console.log("User created securely");

    // (Optional) Create a JWT token
    const token = jwt.sign({ id: user._id, email: user.Email }, process.env.JWT_SECURE || "defaultsecret");

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: response._id,
        Email: response.Email,
        Username: response.Username
      },
      token
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.post("/product/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Find user by email
    const user = await usermodel.findOne({ Email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.Email },
      process.env.JWT_SECURE || "defaultsecret",
      { expiresIn: "7d" }
    );

    // Send user data + token
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        Email: user.Email,
        Username: user.Username,
      },
      token
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// router.get("/product/login",async(req,res)=>{
//   try{
//     let data= await usermodel.find();
//     console.log(data)
//     res.status(200).json(data)
//   }catch(error){
//     console.log("error", error);
//     res.status(500).json({ error: "soory you are not login" });
//   }  
// });


router.post("/product/messages", async (req, res) => {
  try {
    const data = req.body;
    console.log("Incoming contact message:", data); // 👈 Add this
    const user = new userquerymodel(data);
    const response = await user.save();
    res.status(200).json(response);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get('/product/messages', async (req, res) => {
  console.log("hello")
  try {
    const data = await userquerymodel.find();
    console.log("Fetched contact messages:", data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



router.post("/product/review", async (req, res) => {
  try {


     console.log("===========>1232442")
    const data = req.body;
    console.log("Incoming contact message:", data);
    const user = new reviewModel(data);
    const response = await user.save();
    res.status(200).json(response);
  } catch (error) {
    console.error("Error saving review:", error); // 👈 show full error
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});


router.get('/product/review', async (req, res) => {
  try { 
    const data = await reviewModel.find();
    console.log("Fetched contact messages:", data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router

