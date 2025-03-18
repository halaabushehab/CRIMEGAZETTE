const User = require("../models/user");
// const Article = require("../models/article");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");


exports.addbookmark = async (req, res) => {
  try {
    const { id } = req.params; // article id

    // استخراج التوكن من هيدر Authorization
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];

    // التحقق من صحة التوكن واستخراج الـ userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    console.log("✅ Extracted User ID:", userId);

    // التحقق من صحة الـ userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Find the user and update their savedArticles array
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the article is already bookmarked
    if (user.savedArticles.includes(id)) {
      return res.status(400).json({ message: "Article already bookmarked" });
    }

    // Add the article to the savedArticles array
    user.savedArticles.push(id);
    await user.save();

    res.status(200).json({ message: "Article bookmarked successfully" });
  } catch (error) {
    console.error("Error bookmarking article:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
