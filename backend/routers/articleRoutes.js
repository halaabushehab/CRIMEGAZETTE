const express = require("express");
const router = express.Router();
const {
  getArticles,
  getArticlesByIdjenan,
  acceptArticle,
  rejectArticle,
  createArticle,
  getArticleById,
  addCommentToArticle,
  getArticleComments,
  getArticleAuthorComments,
  getArticlesJenan,
  getSavedArticles,
  getLatestReadingForUser,
  deleteUserComment,
  // getTop5Articles
} = require("../controllers/articleController");
const upload = require("../config/multer");

router.get("/getA", getArticles);
router.get("/get", getArticlesJenan);
router.get("/get/:id", getArticlesByIdjenan);
router.put("/accept", acceptArticle);
router.put("/reject", rejectArticle);

router.post("/add-articles", upload.single("featuredImage"), createArticle);
router.get("/get-articles/:id", getArticleById);
router.post("/addComents-articles/:id/comments", addCommentToArticle);
router.get("/getComment-articles/:id/comments", getArticleComments);
router.get("/user-comments", getArticleAuthorComments);
router.get("/saved-articles", getSavedArticles);
router.get("/latest-reading", getLatestReadingForUser);
router.delete("/delete-article/:articleId/:commentId", deleteUserComment);

module.exports = router;
