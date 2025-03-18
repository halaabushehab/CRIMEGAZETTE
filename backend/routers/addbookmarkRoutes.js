const express = require("express");
const router = express.Router();
const addbookmarkController = require("../controllers/addbookmarkController");

// Bookmark an article
router.post("/bookmark-article/:id", addbookmarkController.addbookmark);

module.exports = router;
