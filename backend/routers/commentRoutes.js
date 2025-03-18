const express = require("express");
const router = express.Router();
const { removeComment } = require("../controllers/commentController"); // استدعاء الكونترولر

// مسار حذف مقال من savedArticles
router.delete("/remove-comment/:commentId", removeComment);

module.exports = router;
