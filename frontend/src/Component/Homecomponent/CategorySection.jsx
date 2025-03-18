import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = [
  "Awareness",
  "Murder",
  "Cybercrime",
  "Theft",
  "Fraud",
  "Kidnapping",
  "Domestic Violence",
  "Drugs",
];

const MostViewedReports = () => {
  const [selectedCategory, setSelectedCategory] = useState("Theft");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReports = async (category) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/articles/get?category=${category}`
      );

      // التأكد من جلب 3 مقالات فقط لكل فئة
      const limitedReports = response.data.slice(0, 3);

      setReports(limitedReports);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Most Viewed Reports</h2>
      </div>

      {/* قائمة الفئات */}
      <div className="flex overflow-x-auto space-x-4 mb-6 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 font-medium rounded-md border-b-2 transition-colors ${
              selectedCategory === category
                ? "bg-white text-black border-[var(--primary-color)]"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center">Loading data...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <div
              key={`${report.id}-${index}`}
              className="bg-gray-100 rounded-lg overflow-hidden"
            >
              <div className="relative">
                <span className="absolute top-3 left-3 bg-[var(--primary-color)] text-[var(--text-color)] text-xs font-bold px-2 py-1 rounded">
                  {report.category}
                </span>
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={`http://localhost:5000/${report.featuredImage}`} // جلب الصورة من البيانات
                    alt={report.title || "News thumbnail"} // تجنب خطأ alt فارغ
                    className="w-full h-full object-cover"
                    width="400"
                    height="200"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[var(--background-color)] text-lg mb-2">
                  {report.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <div className="flex items-center mr-4">
                    <span className="w-4 h-4 mr-1">🕒</span>
                    <span>{report.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-1">👁️</span>
                    <span>{report.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MostViewedReports;
