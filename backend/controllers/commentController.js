const User = require("../models/user");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// حذف مقال من savedArticles للمستخدم
const removeComment = async (req, res) => {
  try {
    // استخراج التوكن من هيدر Authorization
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];

    // التحقق من صحة التوكن واستخراج الـ userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    // console.log("✅ Extracted User ID:", userId);

    // التحقق من صحة الـ userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const { commentId } = req.params;

    // التحقق من صحة الـ commentId
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
      return res.status(400).json({ message: "Invalid article ID" });
    }

    // العثور على المستخدم بناءً على userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // التحقق من وجود commentId في savedArticles
    if (!user.comments.includes(commentId)) {
      return res
        .status(404)
        .json({ message: "Article not found in saved articles" });
    }

    // تسجيل savedArticles قبل الحذف
    console.log("User's comment before removal:", user.comments);

    // حذف الـ commentId من savedArticles
    // user.savedArticles.pull(commentId);
user.comments = user.comments.filter(
  (id) => id.toString() !== commentId
);

    await user.save();

    // تسجيل savedArticles بعد الحذف
    console.log("User's savedArticles after removal:", user.comments);

    return res
      .status(200)
      .json({ message: "comment removed from saved articles" });
  } catch (error) {
    console.error("Error removing comment:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = { removeComment };
