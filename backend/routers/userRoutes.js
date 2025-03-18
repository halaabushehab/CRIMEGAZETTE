const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  verifyOtp,
  loginUser,
  googleLogin,
} = require("../controllers/userController");

// Create a new user
router.post("/", createUser);

// Login user
router.post("/login", loginUser);

// Google login
router.post("/google-login", googleLogin);

// Verify OTP
router.post("/verify-otp", verifyOtp);

// Get all users
router.get("/", getAllUsers);

// Get a single user by ID
router.get("/:id", getUserById);

// Edit user details
router.patch("/:id", editUser);

// Delete a user (soft delete)
router.delete("/:id", deleteUser);

module.exports = router;
