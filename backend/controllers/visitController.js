const Visit = require("../models/Visit");

// ✅ زيادة عدد الزيارات
const incrementVisit = async (req, res) => {
  try {
    let visit = await Visit.findOne();
    if (!visit) {
      visit = new Visit({ visitCount: 1 });
    } else {
      visit.visitCount += 1;
    }
    await visit.save();
    res.json({ visitCount: visit.visitCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ جلب عدد الزيارات
const getVisitCount = async (req, res) => {
  try {
    const visit = await Visit.findOne();
    res.json({ visitCount: visit ? visit.visitCount : 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { incrementVisit, getVisitCount };
