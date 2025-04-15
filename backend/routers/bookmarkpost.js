// const express = require("express");
// const mongoose = require("mongoose");
// const User = require("../models/User");
// const  authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// // إضافة مقال إلى المفضلة
// router.post("/add", authMiddleware, async (req, res) => {
//   try {
//     const { postId } = req.body;
//     const userId = req.user.id; // جلب ID المستخدم من التوكن

//     if (!mongoose.Types.ObjectId.isValid(postId)) {
//       return res.status(400).json({ message: "Invalid Post ID" });
//     }

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     if (user.savedArticles.includes(postId)) {
//       return res.status(400).json({ message: "Already bookmarked" });
//     }

//     user.savedArticles.push(postId);
//     await user.save();

//     res.status(200).json({ message: "Article bookmarked successfully", savedArticles: user.savedArticles });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // إزالة مقال من المفضلة
// router.post("/remove", authMiddleware, async (req, res) => {
//   try {
//     const { postId } = req.body;
//     const userId = req.user.id;

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     user.savedArticles = user.savedArticles.filter(id => id.toString() !== postId);
//     await user.save();

//     res.status(200).json({ message: "Article removed from bookmarks", savedArticles: user.savedArticles });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // جلب المقالات المحفوظة للمستخدم
// router.get("/list", authMiddleware, async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const user = await User.findById(userId).populate("savedArticles");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     res.status(200).json({ savedArticles: user.savedArticles });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware"); // ✅ تم التعديل هنا

const router = express.Router();

// ✅ إضافة مقال إلى المفضلة
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.body;
    const userId = req.user;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ message: "Invalid Post ID" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.savedArticles.includes(postId)) {
      return res.status(400).json({ message: "Already bookmarked" });
    }

    user.savedArticles.push(postId);
    await user.save();

    res.status(200).json({ 
      message: "Article bookmarked successfully", 
      savedArticles: user.savedArticles 
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ✅ إزالة مقال من المفضلة
router.post("/remove", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.body;
    const userId = req.user;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.savedArticles = user.savedArticles.filter(
      id => id.toString() !== postId
    );
    await user.save();

    res.status(200).json({ 
      message: "Article removed from bookmarks", 
      savedArticles: user.savedArticles 
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ✅ جلب المقالات المحفوظة للمستخدم
router.get("/list", authMiddleware, async (req, res) => {
  try {
    const userId = req.user;

    const user = await User.findById(userId).populate("savedArticles");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ savedArticles: user.savedArticles });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
