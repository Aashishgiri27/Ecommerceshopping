const express = require("express");
const router = express.Router();
const usermodel = require("../schema/userschema");
const emailSender = require("./emailsender.js");

// Temporary OTP store
const otpStore = {}; // { email: { otp, expiresAt } }



const bcrypt = require("bcrypt");

// Route: Reset Password
router.post("/resetpassword", async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const user = await usermodel.findOne({ Email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.Password = hashedPassword;
    await user.save();

    res.status(200).json({ success: true, message: "Password reset successfully ✅" });
  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route: Send OTP
router.post("/sendotp", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await usermodel.findOne({ Email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const OTP = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", OTP);

    otpStore[email] = {
      otp: OTP,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
    };

    await emailSender(email, "Welcome to Friends Collection", OTP, user.fullname);

    res.status(200).json({ success: true, message: "OTP sent to your email." });
  } catch (err) {
    console.error("OTP error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route: Verify OTP
router.post("/verifyotp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    const stored = otpStore[email];

    if (!stored) {
      return res.status(400).json({ message: "No OTP found for this email." });
    }

    if (Date.now() > stored.expiresAt) {
      delete otpStore[email];
      return res.status(400).json({ message: "OTP has expired." });
    }

    if (stored.otp !== otp) {
      return res.status(401).json({ message: "Invalid OTP." });
    }

    delete otpStore[email]; // OTP used successfully
    res.status(200).json({ success: true, message: "OTP verified successfully ✅" });
  } catch (err) {
    console.error("OTP verification error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
