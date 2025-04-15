const express = require("express");
const router = express.Router();
const { incrementVisit, getVisitCount } = require("../controllers/visitController");

// ✅ API لزيادة عدد الزيارات
router.post("/visitor", incrementVisit);

// ✅ API لجلب عدد الزيارات
router.get("/visitor", getVisitCount);

module.exports = router;