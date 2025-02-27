const express = require("express"); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "default_strong_secret_key_123"; // ✅ Stronger fallback

// User Signup
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, experience } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({ firstName, lastName, email, password: hashedPassword, experience });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error", error: error.message }); // ✅ Better error handling
  }
});

module.exports = router;
