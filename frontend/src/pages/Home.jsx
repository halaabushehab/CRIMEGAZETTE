import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Newspaper  } from "lucide-react";
import hero from "../assets/Recording 2025-03-12 205117.mp4"; // تأكد أن اسم الملف صحيح
import CategorySection from "../Component/Homecomponent/CategorySection";
import heroVideo from "../assets/Recording 2025-03-14 140130.mp4"; // تأكد أن اسم الملف صحيح
import CrimeStatistics from "../Component/Homecomponent/Statistics";
import CrimeNewsWarning from "../Component/Homecomponent/CrimeNewsWarning"
import CybercrimeSection from "../Component/Homecomponent/CybercrimeSection"
import { CrimePodcastSection } from "../Component/Homecomponent/CrimePodcastSection"
import NewsTicker from "../Component/Homecomponent/NewsTicker ";
import TrendReports from "../Component/Homecomponent/TrendReports";
// import crimeSceneImage from "../assets/crime-scene.png"; // تأكد من المسار الصحيح للصورة
// import crimeSceneImage from "../assets/finger.jpg"; // تأكد من المسار الصحيح للصورة


// <div className="absolute right-8 bottom-8 opacity-40 w-40 h-40">
// <img
//   src={crimeSceneImage}
//   alt="Crime Scene Silhouette"
//   className="w-full h-full"
// />
// </div> 





const Home = () => {

  

  
// =============section 2

const [articlesCount, setArticlesCount] = useState(0);
const [loading, setLoading] = useState(true);

const fetchArticlesCount = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/articles/get");
    console.log("Fetched articles:", response.data); // Check the data
    setArticlesCount(response.data.length); // Set the count, not the entire array
  } catch (error) {
    console.error("Error fetching articles:", error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchArticlesCount();
}, []);
// =======================================visitor
const [visitCount, setVisitCount] = useState(0);


useEffect(() => {
  const fetchVisits = async () => {
    try {
      // ✅ تأكد أن الرقم لا يتم إعادة ضبطه
      const response = await axios.get("http://localhost:5000/api/visit/visitor");
      setVisitCount(response.data.visitCount);
      console.log("kk")
    } catch (error) {
      console.error("Error fetching visit count:", error);
    }
  };
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")

  // ✅ قم بزيادة العدد مرة واحدة فقط
  const incrementVisit = async () => {
    try {
      await axios.post("http://localhost:5000/api/visit/visitor");
     
      fetchVisits(); // جلب العدد بعد الزيادة
    } catch (error) {
      console.error("Error incrementing visit count:", error);
    }
  };

  incrementVisit();
  fetchVisits();
  
}, []); 

// statsData with the updated articlesCount
const statsData = [
  { value: "New", label: "Experience" },
  { value: visitCount, label: "Global Correspondents" },
  { value: articlesCount, label: "Investigations Covered" }, // This will now show the correct count
  { value: "24/7", label: "News Coverage" },
];

// Section to display stats
const [stats, setStats] = useState([]);

useEffect(() => {
  setStats(statsData); // Update stats after articlesCount changes
}, [articlesCount]);




  return (
    <div className="min-h-600 bg-[var(--text-color)]">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-220 bg-[var(--background-color)] text-[var(--text-color)] text-center px-4">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        >
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to make text readable */}
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--primary-colo)]"></div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto">
          {/* Red banner */}
          <div className="bg-[var(--primary-color)] py-1 px-4 mb-8 inline-block rounded">
            <p className="font-bold text-sm md:text-base">CRIME NEWS NETWORK</p>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <div className="text-6xl font-bold tracking-tighter transition-transform duration-300 hover:scale-105 hover:text-gray-200 cursor-pointer">
              <span className="font-extrabold">CRIME</span>
              <span className="font-light">GAZETTE</span>
            </div>
          
           Behind Criminal Activities
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Dedicated to providing accurate, timely, and comprehensive coverage
            of crime news from around the world.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
          <Link
  to="/ArticlesPage"
  className="flex items-center bg-[var(--primary-color)] text-white px-6 py-3 rounded hover:bg-[var(--button-hover)] transition-colors"
>
  <Newspaper  className="w-5 h-5 mr-2" />
   Latest Report
</Link>

            <button
              className="bg-white text-black px-6 py-3 rounded hover:bg-gray-300 transition-colors"
              onClick={() => window.open("/Global_Crime_Report.pdf", "_blank")}
            >
              Download Report
            </button>
          </div>
        </div>
      </div>

      {/* News Ticker */}
      <div className="p-2 text-center text-sm font-semibold animate-pulse      bg-[#b21e23] text-white">
        <NewsTicker />
      </div>

      {/* MostViewedReports  */}
      <div className="my-5  mb-20">
        <CategorySection />
        
      </div>


{/* About Us */}
<div className="relative bg-[rgba(0,0,0,0.8)] text-[var(--text-color)] p-6">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
      <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-"
        >
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
     </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-xl font-bold mb-4 border-b-2 border-[var(--primary-color)] pb-1 inline-block">About CRIMEGAZETTE</h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <p className="mb-4 text-sm">
              Crime News Network is dedicated to providing in-depth coverage of criminal 
              activities, investigations, and justice system proceedings worldwide. Our 
              mission is to inform the public about important crime-related issues while 
              maintaining the highest standards of journalistic integrity.
            </p>
            
            <p className="mb-4 text-sm">
              Our team of experienced journalists and crime analysts work tirelessly to bring 
              you accurate, timely, and comprehensive reporting on criminal cases that 
              impact our society. We believe in responsible journalism that respects the legal 
              process while keeping the public informed.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded">
                  <p className="text-[var(--primary-color)] text-3xl font-bold text-center">{stat.value}</p>
                  <p className="text-gray-400 text-xs text-center">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="bg-gray-800 rounded-lg p-4 w-full h-64 flex items-center justify-center">
              <video className="w-full h-full rounded-lg object-cover" controls>
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>








      {/* Statistics  */}
      <div className="my-20  mb-20">
        <CrimeStatistics />
      </div>
      
        {/*  CybercrimeSection */}
  <div className="my-20  mb-20">
        <CybercrimeSection />
      </div>


      {/* TrendReports  */}
      <div className="my-5  mb-30">
        <TrendReports />
      </div>

      <div className="my-5  mb-30">
        <CrimePodcastSection />
      </div>


<CrimeNewsWarning />

    </div>
  );
};

export default Home;






// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Newspaper  } from "lucide-react";
// import hero from "../assets/Recording 2025-03-12 205117.mp4"; // تأكد أن اسم الملف صحيح
// import { Play } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import hero from "../assets/Recording 2025-03-12 205117.mp4";
// import CategorySection from "../Component/Homecomponent/CategorySection";
// import CrimeStatistics from "../Component/Homecomponent/Statistics";
// import CrimeNewsWarning from "../Component/Homecomponent/CrimeNewsWarning";
// import CybercrimeSection from "../Component/Homecomponent/CybercrimeSection";
// import { CrimePodcastSection } from "../Component/Homecomponent/CrimePodcastSection";
// import NewsTicker from "../Component/Homecomponent/NewsTicker ";
// import TrendReports from "../Component/Homecomponent/TrendReports";
// import VideoModal from "../Component/Homecomponent/VideoModal"
// // import crimeSceneImage from "../assets/crime-scene.png"; // تأكد من المسار الصحيح للصورة
// // import crimeSceneImage from "../assets/finger.jpg"; // تأكد من المسار الصحيح للصورة


// // <div className="absolute right-8 bottom-8 opacity-40 w-40 h-40">
// // <img
// //   src={crimeSceneImage}
// //   alt="Crime Scene Silhouette"
// //   className="w-full h-full"
// // />
// // </div> 




// import heroVideo from "../assets/Recording 2025-03-14 140130.mp4";

// const Home = () => {
//   const { t ,i18n} = useTranslation();

//   // الحصول على عدد المقالات من الخادم
//   const [articlesCount, setArticlesCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const fetchArticlesCount = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/articles/get");
//       console.log("Fetched articles:", response.data);
//       setArticlesCount(response.data.length);
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchArticlesCount();
//   }, []);

//   // عداد الزيارات
//   const [visitCount, setVisitCount] = useState(0);
//   useEffect(() => {
//     const storedVisitCount = localStorage.getItem("visitCount");
//     if (storedVisitCount) {
//       const newVisitCount = parseInt(storedVisitCount, 10) + 1;
//       setVisitCount(newVisitCount);
//       localStorage.setItem("visitCount", newVisitCount);
//     } else {
//       setVisitCount(0);
//       localStorage.setItem("visitCount", 1);
//     }
//   }, []);

//   // بيانات الإحصائيات مع استخدام الترجمات
//   const statsData = [
//     { value: "New", label: t("home.stat_experience", "Experience") },
//     { value: visitCount, label: t("home.stat_correspondents", "Global Correspondents") },
//     { value: articlesCount, label: t("home.stat_investigations", "Investigations Covered") },
//     { value: "24/7", label: t("home.stat_news_coverage", "News Coverage") },
//   ];

//   const [stats, setStats] = useState([]);
//   useEffect(() => {
//     setStats(statsData);
//   }, [articlesCount, visitCount]);

//   return (
//     <div className="min-h-600 bg-[var(--text-color)]">
//       {/* قسم الهيرو */}
//       <div className="relative flex flex-col items-center justify-center min-h-220 bg-[var(--background-color)] text-[var(--text-color)] text-center px-4">
//         <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover opacity-50">
//           <source src={hero} type="video/mp4" />
//           {t("home.video_not_supported", "Your browser does not support the video tag.")}
//         </video>
//         <div className="absolute top-0 left-0 w-full h-full bg-[var(--primary-colo)]"></div>
//         <div className="relative max-w-3xl mx-auto">
//           <div className="bg-[var(--primary-color)] py-1 px-4 mb-8 inline-block rounded">
//             <p className="font-bold text-sm md:text-base">
//               {t("home.crime_news_network", "CRIME NEWS NETWORK")}
//             </p>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//             <div className="text-6xl font-bold tracking-tighter transition-transform duration-300 hover:scale-105 hover:text-gray-200 cursor-pointer">
//               <span className="font-extrabold">CRIME</span>
//               <span className="font-light">GAZETTE</span>
//             </div>
//             {t("home.behind_criminal_activities", "Behind Criminal Activities")}
//           </h1>
//           <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
//             {t(
//               "home.subtitle",
//               "Dedicated to providing accurate, timely, and comprehensive coverage of crime news from around the world."
//             )}
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//           <Link
//   to="/ArticlesPage"
//   className="flex items-center bg-[var(--primary-color)] text-white px-6 py-3 rounded hover:bg-[var(--button-hover)] transition-colors"
// >
//   <Newspaper  className="w-5 h-5 mr-2" />
//   Latest Report
// </Link>

//             <Link
//               to="/articles"
//               className="flex items-center bg-[var(--primary-color)] text-white px-6 py-3 rounded hover:bg-[var(--button-hover)] transition-colors"
//             >
//               <Play className="w-5 h-5 mr-2" />
//               {t("home.watch_latest_report", "Watch Latest Report")}
//             </Link>
//             <button
//               className="bg-white text-black px-6 py-3 rounded hover:bg-gray-300 transition-colors"
//               onClick={() => window.open("/Global_Crime_Report.pdf", "_blank")}
//             >
//               {t("home.download_report", "Download Report")}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* شريط الأخبار */}
//       <div className="p-2 text-center text-sm font-semibold animate-pulse bg-[#b21e23] text-white">
//         <NewsTicker />
//       </div>

//       {/* قسم التصنيفات */}
//       <div className="my-5 mb-20">
//         <CategorySection />
//       </div>

//       {/* قسم "About Us" */}
//       <div className="relative bg-[rgba(0,0,0,0.8)] text-[var(--text-color)] p-6">
//         <div className="absolute inset-0 opacity-10 flex items-center justify-center">
//           <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
//             <source src={hero} type="video/mp4" />
//             {t("home.video_not_supported", "Your browser does not support the video tag.")}
//           </video>
//         </div>
//         <div className="max-w-6xl mx-auto relative z-10">
//           <h2 className="text-xl font-bold mb-4 border-b-2 border-[var(--primary-color)] pb-1 inline-block">
//             {t("home.about_crimegazette", "About CRIMEGAZETTE")}
//           </h2>
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="md:w-1/2">
//               <p className="mb-4 text-sm">
//                 {t(
//                   "home.about_paragraph1",
//                   "Crime News Network is dedicated to providing in-depth coverage of criminal activities, investigations, and justice system proceedings worldwide. Our mission is to inform the public about important crime-related issues while maintaining the highest standards of journalistic integrity."
//                 )}
//               </p>
//               <p className="mb-4 text-sm">
//                 {t(
//                   "home.about_paragraph2",
//                   "Our team of experienced journalists and crime analysts work tirelessly to bring you accurate, timely, and comprehensive reporting on criminal cases that impact our society. We believe in responsible journalism that respects the legal process while keeping the public informed."
//                 )}
//               </p>
//               <div className="grid grid-cols-2 gap-4 mt-6">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="bg-gray-900 p-4 rounded">
//                     <p className="text-[var(--primary-color)] text-3xl font-bold text-center">{stat.value}</p>
//                     <p className="text-gray-400 text-xs text-center">{stat.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="md:w-1/2 flex items-center justify-center">
//               <div className="bg-gray-800 rounded-lg p-4 w-full h-64 flex items-center justify-center">
//                 <video className="w-full h-full rounded-lg object-cover" controls>
//                   <source src={heroVideo} type="video/mp4" />
//                   {t("home.video_not_supported", "Your browser does not support the video tag.")}
//                 </video>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* قسم الإحصائيات */}
//       <div className="my-20 mb-20">
//         <CrimeStatistics />
//       </div>

//       {/* قسم الجرائم الإلكترونية */}
//       <div className="my-20 mb-20">
//         <CybercrimeSection />
//       </div>

//       {/* قسم التقارير */}
//       <div className="my-5 mb-30">
//         <TrendReports />
//       </div>

//       {/* قسم البودكاست */}
//       <div className="my-5 mb-30">
//         <CrimePodcastSection />
//       </div>

//       <CrimeNewsWarning />
//     </div>
//   );
// };

// export default Home;

