import React, { useState, useEffect } from "react";

const ArticlesPage = () => {
  // Example data for categories and articles
  const categories = [
    "الجرائم الإلكترونية",
    "السرقات",
    "جرائم القتل",
    "الجرائم الاقتصادية",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [articles, setArticles] = useState([]);

  // Simulate fetching articles based on category
  useEffect(() => {
    // Example articles data (replace this with API call)
    const articlesData = [
      {
        id: 1,
        title: "جرائم السرقات في المدينة",
        category: "السرقات",
        content: "تفاصيل حول السرقات الأخيرة",
      },
      {
        id: 2,
        title: "أحدث التطورات في جرائم القتل",
        category: "جرائم القتل",
        content: "قصة جريمة قتل في الحي",
      },
      {
        id: 3,
        title: "كيف تحمي نفسك من الجرائم الإلكترونية؟",
        category: "الجرائم الإلكترونية",
        content: "نصائح لتفادي الجرائم الإلكترونية",
      },
    ];

    if (selectedCategory) {
      setArticles(
        articlesData.filter((article) => article.category === selectedCategory)
      );
    } else {
      setArticles(articlesData);
    }
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        أحدث المقالات عن الجرائم
      </h1>

      {/* Category Filter */}
      <div className="mb-6 text-center">
        <span className="text-lg text-gray-700">اختر التصنيف: </span>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="ml-2 px-4 py-2 border rounded-md shadow-sm text-gray-700"
        >
          <option value="">كل التصنيفات</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Articles List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {article.content.substring(0, 100)}...
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                قراءة المزيد
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            لا توجد مقالات حالياً في هذا التصنيف.
          </p>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
