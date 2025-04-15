// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { useState } from "react";

// // const galleryImages = [
// //     {
// //       id: 1,
// //       imageSrc: 'https://i.pinimg.com/736x/e2/4c/f9/e24cf94afbafb86d72048898d225cab9.jpg', // استبدل برابط حقيقي
// //       alt: 'Description of image 1',
// //     },
// //     {
// //       id: 2,
// //       imageSrc: 'https://i.pinimg.com/474x/40/f3/04/40f304e61e8c1dc77860b0235affc58c.jpg',
// //       alt: 'Description of image 2',
// //     },
// //     {
// //       id: 3,
// //       imageSrc: 'https://i.pinimg.com/736x/6d/e1/8f/6de18f2cc9c402a281474d5384940e59.jpg',
// //       alt: 'Description of image 3',
// //     },
// //     {
// //       id: 4,
// //       imageSrc: 'https://i.pinimg.com/736x/4a/c7/93/4ac7933916a86834afbbbbcd5a32e56e.jpg',
// //       alt: 'Description of image 4',
// //     },
// //     {
// //       id: 5,
// //       imageSrc: 'https://i.pinimg.com/736x/04/e5/c9/04e5c91acebd4b62cdee0655775f00d6.jpg',
// //       alt: 'Description of image 5',
// //     },
// //     {
// //       id: 6,
// //       imageSrc: 'https://i.pinimg.com/736x/e3/23/02/e3230208420b59ff95079e8cb7eea444.jpg',
// //       alt: 'Description of image 6',
// //     },
// //     {
// //         id: 7,
// //         imageSrc: 'https://i.pinimg.com/236x/49/b0/75/49b075e2ff87c188ce7e77e9813d62d4.jpg',
// //         alt: 'Description of image 6',
// //       },   {
// //         id: 8,
// //         imageSrc: 'https://i.pinimg.com/736x/17/43/7c/17437c2fa2a16fb7e68e452cc4062bb8.jpg',
// //         alt: 'Description of image 6',
// //       },   
// //   ];



// // // افترض أن لديك مصفوفة من المقالات
// // const articles = [
// //     {
// //         name: "How to Protect Yourself from Online Fraud?",
// //         description:
// //           "With the rise of digital transactions, online fraud has become more widespread. Here are effective ways to protect yourself from scams and fraud on the internet.",
// //         details:
// //           "Online fraud includes various methods such as bank data theft, phishing scams, and identity fraud. It is crucial to verify websites before entering your details and never share personal information with untrusted sources. Using security software and regularly updating your passwords are key measures to minimize these risks.",
// //         imageSrc:
// //           "https://i.pinimg.com/736x/be/b5/e7/beb5e749764a677a8e19b0455ddc8a53.jpg",
// //         imageAlt: "A person using a laptop with a security warning on the screen.",
// //         date: "March 15",
// //         tags: ["Cybercrime", "Digital Security"],
// //         href: "#",
// //       },
  
// //   ];



// // const BlogDetails=()=>{

// //     // const { id } = useParams(); // الحصول على ID المقال من الرابط
// //     // const article = articles.find((item) => item.id === parseInt(id)); // البحث عن المقال
  
// //     // if (!article) {
// //     //   return <h2 className="text-center text-red-700">المقال غير موجود</h2>;
// //     // }

// // return(
// // <> 
// // <div
// //   className="relative w-full h-80 bg-cover    my-15 bg-center"
// //   style={{ backgroundImage: 'url("https://i.pinimg.com/736x/98/34/65/98346536f127a24ec131589322a1a001.jpg")' }} // Replace with actual image URL
// // >
// //   <div className="absolute inset-0 bg-black opacity-50"></div>
// //   <div className="relative flex items-center justify-center h-full">
// //     <div className="text-center text-white p-8">
// //       <h1 className="text-5xl font-bold mb-4">
// //         Stay Informed, Stay Safe
// //       </h1>
// //       <p className="text-lg mb-6">
// //         Understanding crime is the first step towards prevention. Explore our resources and empower yourself with knowledge.
// //       </p>
// //     </div>
// //   </div>
// // </div>


// // {/*  hero section  */}



// // <div className="flex" style={{ width: '90%', margin: '0 auto' }}>  {/* Sidebar */}
// //   <div className="w-1/4 p-4 bg-gray-200 rounded-l">
// //    {/* Sidebar - One third of the screen from the left */}
// // <div className="col-lg-4">
// //   <div className="bg-white shadow-sm rounded p-4 mb-4">
// //     <h5 className="font-bold mb-3" style={{ color: '#8b0d11' }}>Latest Crime News</h5>
// //     <ul className="list-unstyled">
// //       <li className="d-flex align-items-center mb-3">
// //         <img
// //           className="img-fluid"
// //           src="https://i.pinimg.com/736x/f9/04/07/f90407a76c446705e8557191afd2ee01.jpg" // Replace with real URLs
// //           alt="Crime News"
// //           style={{ width: "30%" }}
// //         />
// //         <div className="ms-3">
// //           <Link to="#" style={{ color: '#8b0d11' }}>
// //             Shocking Murder Incident in Downtown...
// //           </Link>
// //           <small className="d-block text-muted">March 10, 2023</small>
// //         </div>
// //       </li>
// //       <li className="d-flex align-items-center mb-3">
// //         <img
// //           className="img-fluid"
// //           src="https://i.pinimg.com/736x/f9/7c/b1/f97cb11bea35baac156be9236a0dff76.jpg"
// //           alt="Crime News"
// //           style={{ width: "30%" }}
// //         />
// //         <div className="ms-3">
// //           <Link to="#" style={{ color: '#8b0d11' }}>
// //             Is Stress Taking Over Your Life? A Look into Recent Crimes...
// //           </Link>
// //           <small className="d-block text-muted">March 14, 2023</small>
// //         </div>
// //       </li>
// //     </ul>
// //   </div>

// //   <div className="bg-white shadow-sm rounded p-4 mb-4">
// //     <h5 className="font-bold mb-3" style={{ color: '#8b0d11' }}>Investigation Reports</h5>
// //     <ul className="list-unstyled">
// //       <li className="d-flex align-items-center mb-3">
// //         <img
// //           className="img-fluid"
// //           src="https://static.ffx.io/images/$zoom_1%2C$multiply_0.5223%2C$ratio_1.777778%2C$width_1187%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/e15900c94bc4901c64a6405571f97f0a15e2e732" // Replace with real URLs
// //           alt="Investigation Report"
// //           style={{ width: "30%" }}
// //         />
// //         <div className="ms-3">
// //           <Link to="#" style={{ color: '#8b0d11' }}>
// //             Deep Dive into Local Crime Patterns...
// //           </Link>
// //           <small className="d-block text-muted">March 15, 2023</small>
// //         </div>
// //       </li>
// //       <li className="d-flex align-items-center mb-3">
// //         <img
// //           className="img-fluid"
// //           src="https://i.pinimg.com/736x/79/10/0d/79100d104b03dffe94e3f9942aac906c.jpg"
// //           alt="Investigation Report"
// //           style={{ width: "30%" }}
// //         />
// //         <div className="ms-3">
// //           <Link to="#" style={{ color: '#8b0d11' }}>
// //             Understanding the Rise in Cyber Crimes...
// //           </Link>
// //           <small className="d-block text-muted">March 16, 2023</small>
// //         </div>
// //       </li>
// //     </ul>
// //   </div>

// //   <div className="bg-white shadow-sm rounded p-4 mb-4">
// //     <h5 className="font-bold mb-3" style={{ color: '#8b0d11' }}>Crime Scene Photos</h5>
// //     <div className="d-flex flex-wrap">
// //       <img
// //         className="img-fluid m-1"
// //         src="https://i.pinimg.com/236x/36/7e/a6/367ea6a970a45194410ebe6dcb3e3a86.jpg" // Replace with real URLs
// //         alt="Crime Scene"
// //         style={{ width: "30%" }}
// //       />
// //       <img
// //         className="img-fluid m-1"
// //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShN-A8Zirxiiy6peIUD7qzxsHpow3lpaeJXg&s"
// //         alt="Crime Scene"
// //         style={{ width: "30%" }}
// //       />
// //       <img
// //         className="img-fluid m-1"
// //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptRhdkiD7W8F4_eX5HEobTg9IwWBThnGrhw&s"
// //         alt="Crime Scene"
// //         style={{ width: "30%" }}
// //       />
// //       {/* Add more images as needed */}
// //     </div>
// //   </div>

// //   <div className="bg-white shadow-sm rounded p-4  w-100">
// //     <h5 className="font-bold" style={{ color: '#8b0d11' }}>Newsletter</h5>
// //     <form>
// //       <div className="mb-3">
// //         <input
// //           type="email"
// //           className="form-control"
// //           placeholder="Enter your email"
// //           required
// //           style={{ backgroundColor: '#ffffff', color: '#000' }}
// //         />
// //       </div>
// //       <button type="submit" className="btn" style={{ backgroundColor: '#8b0d11', color: '#ffffff' }}>
// //         Subscribe
// //       </button>
// //     </form>
// //   </div>
// // </div>
   
// //   </div>
// //   {/* // Main Content */}
// //     <div className="col-lg-7 my-15 ml-20">
// //       <div className="col-lg-12">
// //         {articles.map((article) => (
// //           <div
// //             className="single-post mb-4"
// //             key={article.id}
// //             style={{
// //               backgroundColor: 'var(--bg-color)', // Set the background color
// //               color: 'var(--text-color)', // Set the text color
// //               borderRadius: '15px',
// //               boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
// //               padding: '20px', // Add padding for better spacing
// //             }}
// //           >
// //             <div
// //               className="feature-img"
// //               style={{
// //                 position: 'relative',
// //                 overflow: 'hidden',
// //                 borderRadius: '15px',
// //               }}
// //             >
// //               <img
// //                 src={article.imageSrc}
// //                 alt={article.imageAlt}
// //                 className="img-fluid"
// //                 style={{
// //                   width: '100%',
// //                   height: 'auto',
// //                   transition: 'transform 0.3s ease',
// //                 }}
// //                 onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
// //                 onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
// //               />
// //             </div>
// //             <div className="blog_details my-4" style={{ position: 'relative' }}>
// //             <h2
// //   className="text-3xl font-extrabold drop-shadow-lg"
// //   style={{ color: '#61090b' }}
// // >
// //   {article.name}
// // </h2>
// //               <p style={{ color: 'black' }}>{article.description}</p>
// //               <ul className=" text-2xl list-inline blog-info-link mt-3 mb-4">
// //                 <li className="list-inline-item">
// //                   <a href="#" style={{ color: '#61090b' }}>
// //                     <i className="fa fa-user"></i> {article.tags.join(', ')}
// //                   </a>
// //                 </li>
// //                 <li className="list-inline-item">
// //                   <a href="#" style={{ color: 'gray' }}>
// //                     <i className="fa fa-calendar"></i> {article.date}
// //                   </a>
// //                 </li>
// //               </ul>
// // <p className="text-xl tracking-wide" style={{ color: 'black' }}>
// //   {article.details}
// // </p>
// //             </div>
// //             {/* Add sticky section for additional content */}
// //             <div className="my-10">
// //   <h2 className="text-center text-4xl font-extrabold mb-10 text-gray-900">Gallery</h2>

// //   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //     {galleryImages.map((image, index) => (
// //       <div
// //         key={image.id}
// //         className={`relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 ${
// //           index % 2 === 0 ? "rotate-2" : "-rotate-2"
// //         } hover:scale-110`}
// //         style={{
// //           position: "relative",
// //           zIndex: index % 3 === 0 ? "10" : "1", // تداخل الصور
// //         }}
// //       >
// //         <img
// //           src={image.imageSrc}
// //           alt={image.alt}
// //           className="w-full h-full object-cover"
// //         />
// //         {/* تأثير التدرج الشفاف */}
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
// //       </div>
// //     ))}
// //   </div>
// // </div>

// //           </div>
// //         ))}
// //       </div>
// //     </div>

// // </div>



// // </>
// // )

// // }

// // export default BlogDetails
import  { useState ,useEffect} from "react";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../Context/LanguageContext";
import arabicIcon from "../assets/translation.png";
import englishIcon from "../assets/translation (1).png";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
const galleryImages = [
  {
    id: 1,
    imageSrc:
      "https://i.pinimg.com/736x/e2/4c/f9/e24cf94afbafb86d72048898d225cab9.jpg",
    alt: "Description of image 1",
  },
  {
    id: 2,
    imageSrc:
      "https://i.pinimg.com/474x/40/f3/04/40f304e61e8c1dc77860b0235affc58c.jpg",
    alt: "Description of image 2",
  },
  {
    id: 3,
    imageSrc:
      "https://i.pinimg.com/736x/6d/e1/8f/6de18f2cc9c402a281474d5384940e59.jpg",
    alt: "Description of image 3",
  },
  {
    id: 4,
    imageSrc:
      "https://i.pinimg.com/736x/4a/c7/93/4ac7933916a86834afbbbbcd5a32e56e.jpg",
    alt: "Description of image 4",
  },
  {
    id: 5,
    imageSrc:
      "https://i.pinimg.com/736x/04/e5/c9/04e5c91acebd4b62cdee0655775f00d6.jpg",
    alt: "Description of image 5",
  },
  {
    id: 6,
    imageSrc:
      "https://i.pinimg.com/736x/e3/23/02/e3230208420b59ff95079e8cb7eea444.jpg",
    alt: "Description of image 6",
  },
  {
    id: 7,
    imageSrc:
      "https://i.pinimg.com/236x/49/b0/75/49b075e2ff87c188ce7e77e9813d62d4.jpg",
    alt: "Description of image 7",
  },
  {
    id: 8,
    imageSrc:
      "https://i.pinimg.com/736x/17/43/7c/17437c2fa2a16fb7e68e452cc4062bb8.jpg",
    alt: "Description of image 8",
  },
];

const BlogDetails = () => {
  // Use the location hook to retrieve state passed from the Blog component
  const location = useLocation();
  const article = location.state?.article;
  const { i18n } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const [user, setUser] = useState(null);

  useEffect(() => {
 
    const fetchUserProfile = async () => {
      try {
        // 🔥 1️⃣ Retrieve the token from localStorage
        const token = localStorage.getItem("token");
    
        if (!token) {
          console.error("❌ No token found in localStorage");
          return;
        }
    
        // 🔥 2️⃣ Decode the token to extract user ID
        const decodedToken = jwtDecode(token); // Extracts { userId: "67d44acc1bdee5c049d5519e", iat: ..., exp: ... }
    
        if (!decodedToken.userId) {
          console.error("❌ No user ID found in token");
          return;
        }
    
        console.log("✅ Extracted User ID from token:", decodedToken.userId);
    
        // 🔥 3️⃣ Fetch user profile using token (No need to send user ID in request)
        const response = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send token in headers
            },
          }
        );
    
        console.log("✅ User profile fetched:", response.data);
        setUser(response.data.user);
      } catch (error) {
        console.error(
          "❌ Error fetching profile:",
          error.response?.data || error.message
        );
      }
    };
        fetchUserProfile();
      }, []);
 
 
 
  if (!article) {
        return (
          <h2 className="text-center text-red-700">
            {i18n.language === "ar" ? "لم يتم العثور على المقال" : "Article not found."}
          </h2>
        );
      }
     

      const [message, setMessage] = useState("");

      const handleSave = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            setMessage("يجب تسجيل الدخول لحفظ المقال!");
            alert("يجب تسجيل الدخول لحفظ المقال!");
            return;
          }
      
          const response = await fetch("http://localhost:5000/api/bookmarks/add", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ postId: article._id }),
          });
      
          const data = await response.json();
      
          if (!response.ok) {
            throw new Error(data.message || "حدث خطأ أثناء الحفظ");
          }
      
          setMessage(data.message); // ✅ تصحيح هنا (data وليس response.data)
         toast.success("blog bookmarked successfully!");
        } catch (error) {
          setMessage(error.message);
          alert(error.message);
        }
      };
      
    



  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-80 bg-cover my-15 bg-center"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/736x/98/34/65/98346536f127a24ec131589322a1a001.jpg")',
        }}
      >
      
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl font-bold mb-4">Stay Informed, Stay Safe</h1>
            <p className="text-lg mb-6">
              Understanding crime is the first step towards prevention. Explore our resources and empower yourself with knowledge.
            </p>
          </div>
        </div>
      </div>
  

       <div className="flex" style={{ width: '90%', margin: '0 auto' }}>  {/* Sidebar */}
  <div className="w-1/4 p-4 bg-gray-200 rounded-l">
   {/* Sidebar - One third of the screen from the left */}
 <div className="col-lg-4">
 <button
  className="bg-red-900 p-4 mb-4 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-green-800 transition"
  onClick={handleSave}
>
  save blog
</button>
   <div className="bg-white shadow-sm rounded p-4 mb-4">
    <h5 className="font-bold mb-3" style={{ color: '#8b0d11' }}>Latest Crime News</h5>
     <ul className="list-unstyled">
      <li className="d-flex align-items-center mb-3">
         <img
          className="img-fluid"
          src="https://i.pinimg.com/736x/f9/04/07/f90407a76c446705e8557191afd2ee01.jpg" // Replace with real URLs
          alt="Crime News"
          style={{ width: "30%" }}
        />
        <div className="ms-3">
          <Link to="#" style={{ color: '#8b0d11' }}>
            Shocking Murder Incident in Downtown...
          </Link>
          <small className="d-block text-muted">March 10, 2023</small>
        </div>
      </li>
      <li className="d-flex align-items-center mb-3">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/736x/f9/7c/b1/f97cb11bea35baac156be9236a0dff76.jpg"
          alt="Crime News"
          style={{ width: "30%" }}
        />
        <div className="ms-3">
          <Link to="#" style={{ color: '#8b0d11' }}>
            Is Stress Taking Over Your Life? A Look into Recent Crimes...
          </Link>
          <small className="d-block text-muted">March 14, 2023</small>
        </div>
      </li>
    </ul>
  </div>

  <div className="bg-white shadow-sm rounded p-4 mb-4">
    <h5 className="font-bold mb-3" style={{ color: '#8b0d11' }}>Investigation Reports</h5>
    <ul className="list-unstyled">
      <li className="d-flex align-items-center mb-3">
        <img
          className="img-fluid"
          src="https://static.ffx.io/images/$zoom_1%2C$multiply_0.5223%2C$ratio_1.777778%2C$width_1187%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/e15900c94bc4901c64a6405571f97f0a15e2e732" // Replace with real URLs
          alt="Investigation Report"
          style={{ width: "30%" }}
        />
        <div className="ms-3">
          <Link to="#" style={{ color: '#8b0d11' }}>
            Deep Dive into Local Crime Patterns...
          </Link>
          <small className="d-block text-muted">March 15, 2023</small>
        </div>
      </li>
      <li className="d-flex align-items-center mb-3">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/736x/79/10/0d/79100d104b03dffe94e3f9942aac906c.jpg"
          alt="Investigation Report"
          style={{ width: "30%" }}
        />
        <div className="ms-3">
          <Link to="#" style={{ color: '#8b0d11' }}>
            Understanding the Rise in Cyber Crimes...
          </Link>
          <small className="d-block text-muted">March 16, 2023</small>
        </div>
      </li>
    </ul>
  </div>

  <div className="bg-white shadow-sm rounded p-4 mb-4">
    <h5 className="font-bold mb-3" style={{ color: '#8b0d11' }}>Crime Scene Photos</h5>
    <div className="d-flex flex-wrap">
      <img
        className="img-fluid m-1"
        src="https://i.pinimg.com/236x/36/7e/a6/367ea6a970a45194410ebe6dcb3e3a86.jpg" // Replace with real URLs
        alt="Crime Scene"
        style={{ width: "30%" }}
      />
      <img
        className="img-fluid m-1"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShN-A8Zirxiiy6peIUD7qzxsHpow3lpaeJXg&s"
        alt="Crime Scene"
        style={{ width: "30%" }}
      />
      <img
        className="img-fluid m-1"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptRhdkiD7W8F4_eX5HEobTg9IwWBThnGrhw&s"
        alt="Crime Scene"
        style={{ width: "30%" }}
      />
      {/* Add more images as needed */}
    </div>
  </div>

  <div className="bg-white shadow-sm rounded p-4  w-80">
    <h5 className="font-bold" style={{ color: '#8b0d11' }}>Newsletter</h5>
    <form>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          required
          style={{ backgroundColor: '#ffffff', color: '#000' }}
        />
      </div>
      <button type="submit" className="btn" style={{ backgroundColor: '#8b0d11', color: '#ffffff' }}>
        Subscribe
      </button>
    </form>
  </div>
</div>
   
  </div>

        {/* Main Content */}
        <div className="col-lg-7 my-15 ml-20">
          <div className="col-lg-12">
            <div
              className="single-post mb-4"
              style={{
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)",
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                padding: "20px",
              }}
            >
              <div
                className="feature-img"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "15px",
                }}
              >
                <img
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "auto",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div
                className="blog_details my-4"
                style={{ position: "relative" }}
              >
                <h2
                  className="text-3xl font-extrabold drop-shadow-lg"
                  style={{ color: "#61090b" }}
                >
                  {article.name}
                </h2>
                <p style={{ color: "black" }}>{article.description}</p>
                <ul className="text-2xl list-inline blog-info-link mt-3 mb-4">
                  <li className="list-inline-item">
                    <a href="#" style={{ color: "#8b0d11" }}>
                      <i className="fa fa-user"></i> {article.tags.join(", ")}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" style={{ color: "gray" }}>
                      <i className="fa fa-calendar"></i> {article.date}
                    </a>
                  </li>
                </ul>
                <p className="text-xl tracking-wide" style={{ color: "black" }}>
                  {article.details}
                </p>
              </div>
              {/* Gallery Section */}
              <div className="my-10">
                <h2 className="text-center text-4xl font-extrabold mb-10 text-gray-900">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages.map((image, index) => (
                    <div
                      key={image.id}
                      className={`relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 ${
                        index % 2 === 0 ? "rotate-2" : "-rotate-2"
                      } hover:scale-110`}
                      style={{
                        position: "relative",
                        zIndex: index % 3 === 0 ? "10" : "1",
                      }}
                    >
                      <img
                        src={image.imageSrc}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;

//mmmmmmmmmmmm
// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useLanguage } from "../Context/LanguageContext";
// import arabicIcon from "../assets/translation.png";
// import englishIcon from "../assets/translation (1).png";

// // يمكنك وضع بيانات المعرض (الصور) هنا أو استيرادها من ملف خارجي
// const galleryImages = [
//   {
//     id: 1,
//     imageSrc:
//       "https://i.pinimg.com/736x/e2/4c/f9/e24cf94afbafb86d72048898d225cab9.jpg",
//     alt: "Description of image 1",
//     alt_ar: "وصف الصورة 1",
//   },
//   {
//     id: 2,
//     imageSrc:
//       "https://i.pinimg.com/474x/40/f3/04/40f304e61e8c1dc77860b0235affc58c.jpg",
//     alt: "Description of image 2",
//     alt_ar: "وصف الصورة 2",
//   },
//   // أكمل بقية عناصر المعرض إن أردت...
// ];

// const BlogDetails = () => {
//   const { i18n } = useTranslation();
//   const location = useLocation();
//   const article = location.state?.article;

//   // const { t } = useTranslation();
//   const { language, toggleLanguage } = useLanguage();

//   // إن لم يوجد مقال يتم عرض رسالة
//   if (!article) {
//     return (
//       <h2 className="text-center text-red-700">
//         {i18n.language === "ar" ? "لم يتم العثور على المقال" : "Article not found."}
//       </h2>
//     );
//   }

//   // التحقق من اللغة الحالية
//   const isArabic = i18n.language === "ar";

//   // اختيار الحقول المناسبة من الـ article
//   const displayName = isArabic ? article.name_ar : article.name;
//   const displayDescription = isArabic ? article.description_ar : article.description;
//   const displayDetails = isArabic ? article.details_ar : article.details;
//   const displayAlt = isArabic ? article.imageAlt_ar : article.imageAlt;

//   // نصوص ثابتة بالعربية والإنجليزية
//   const heroTitle = isArabic
//     ? "كن واعياً، كن آمناً"
//     : "Stay Informed, Stay Safe";
//   const heroSubtitle = isArabic
//     ? "الوعي بالجريمة هو الخطوة الأولى نحو الوقاية. استكشف مواردنا وتمكن بالمعرفة."
//     : "Understanding crime is the first step towards prevention. Explore our resources and empower yourself with knowledge.";

//   // الشريط الجانبي
//   const latestCrimeNewsHeader = isArabic ? "أحدث أخبار الجريمة" : "Latest Crime News";
//   const investigationReportsHeader = isArabic ? "تقارير التحقيق" : "Investigation Reports";
//   const crimeScenePhotosHeader = isArabic ? "صور مسرح الجريمة" : "Crime Scene Photos";
//   const newsletterHeader = isArabic ? "النشرة الدورية" : "Newsletter";
//   const subscribeText = isArabic ? "اشترك" : "Subscribe";

//   // أمثلة لعناوين الأخبار
//   const shockingNewsTitle = isArabic
//     ? "حادثة قتل صادمة في وسط المدينة..."
//     : "Shocking Murder Incident in Downtown...";
//   const shockingNewsDate = isArabic ? "10 مارس 2023" : "March 10, 2023";

//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-80 bg-cover my-15 bg-center"
//         style={{
//           backgroundImage:
//             'url("https://i.pinimg.com/736x/98/34/65/98346536f127a24ec131589322a1a001.jpg")',
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative flex items-center justify-center h-full">
//           <div className="text-center text-white p-8">
//             <h1 className="text-5xl font-bold mb-4">{heroTitle}</h1>
//             <p className="text-lg mb-6">{heroSubtitle}</p>
//           </div>
//         </div>
//       </div>

//       <div className="flex" style={{ width: '90%', margin: '0 auto' }}>
//         {/* Sidebar */}
//         <div className="w-1/4 p-4 bg-gray-200 rounded-l">
//           <div className="col-lg-4">
//             {/* Latest Crime News */}
//             <div className="bg-white shadow-sm rounded p-4 mb-4">
//               <h5 className="font-bold mb-3" style={{ color: '#8b0d11' }}>
//                 {latestCrimeNewsHeader}
//               </h5>
//               <ul className="list-unstyled">
//                 <li className="d-flex align-items-center mb-3">
//                   <img
//                     className="img-fluid"
//                     src="https://i.pinimg.com/736x/f9/04/07/f90407a76c446705e8557191afd2ee01.jpg"
//                     alt="Crime News"
//                     style={{ width: "30%" }}
//                   />
//                   <div className="ms-3">
//                     <Link to="#" style={{ color: '#8b0d11' }}>
//                       {shockingNewsTitle}
//                     </Link>
//                     <small className="d-block text-muted">{shockingNewsDate}</small>
//                   </div>
//                 </li>
//                 {/* يمكنك تكرار العناصر كما تشاء */}
//               </ul>
//             </div>

//             {/* Investigation Reports */}
//             <div className="bg-white shadow-sm rounded p-4 mb-4">
//               <h5 className="font-bold mb-3" style={{ color: '#8b0d11' }}>
//                 {investigationReportsHeader}
//               </h5>
//               <ul className="list-unstyled">
//                 <li className="d-flex align-items-center mb-3">
//                   <img
//                     className="img-fluid"
//                     src="https://static.ffx.io/images/$zoom_1%2C$multiply_0.5223%2C$ratio_1.777778%2C$width_1187%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/e15900c94bc4901c64a6405571f97f0a15e2e732"
//                     alt="Investigation Report"
//                     style={{ width: "30%" }}
//                   />
//                   <div className="ms-3">
//                     <Link to="#" style={{ color: '#8b0d11' }}>
//                       {isArabic
//                         ? "نظرة عميقة على أنماط الجريمة المحلية..."
//                         : "Deep Dive into Local Crime Patterns..."}
//                     </Link>
//                     <small className="d-block text-muted">
//                       {isArabic ? "15 مارس 2023" : "March 15, 2023"}
//                     </small>
//                   </div>
//                 </li>
//                 {/* عناصر أخرى لو أردت */}
//               </ul>
//             </div>

//             {/* Crime Scene Photos */}
//             <div className="bg-white shadow-sm rounded p-4 mb-4">
//               <h5 className="font-bold mb-3" style={{ color: '#8b0d11' }}>
//                 {crimeScenePhotosHeader}
//               </h5>
//               <div className="d-flex flex-wrap">
//                 <img
//                   className="img-fluid m-1"
//                   src="https://i.pinimg.com/236x/36/7e/a6/367ea6a970a45194410ebe6dcb3e3a86.jpg"
//                   alt="Crime Scene"
//                   style={{ width: "30%" }}
//                 />
//                 {/* أضف المزيد من الصور إن أردت */}
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div className="bg-white shadow-sm rounded p-4  w-80">
//               <h5 className="font-bold" style={{ color: '#8b0d11' }}>
//                 {newsletterHeader}
//               </h5>
//               <form>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder={isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"}
//                     required
//                     style={{ backgroundColor: '#ffffff', color: '#000' }}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn"
//                   style={{ backgroundColor: '#8b0d11', color: '#ffffff' }}
//                 >
//                   {subscribeText}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="col-lg-7 my-15 ml-20">
//           <div className="col-lg-12">
//             <div
//               className="single-post mb-4"
//               style={{
//                 backgroundColor: "var(--bg-color)",
//                 color: "var(--text-color)",
//                 borderRadius: "15px",
//                 boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//                 padding: "20px",
//               }}
//             >
//               <div
//                 className="feature-img"
//                 style={{
//                   position: "relative",
//                   overflow: "hidden",
//                   borderRadius: "15px",
//                 }}
//               >
//                 <img
//                   src={article.imageSrc}
//                   alt={displayAlt} // الحقل العربي أو الإنجليزي
//                   className="img-fluid"
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     transition: "transform 0.3s ease",
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.transform = "scale(1.05)")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.transform = "scale(1)")
//                   }
//                 />
//               </div>
//               <div
//                 className="blog_details my-4"
//                 style={{ position: "relative" }}
//               >
//                 <h2
//                   className="text-3xl font-extrabold drop-shadow-lg"
//                   style={{ color: "#61090b" }}
//                 >
//                   {displayName}
//                 </h2>
//                 <p style={{ color: "black" }}>{displayDescription}</p>
//                 <ul className="text-2xl list-inline blog-info-link mt-3 mb-4">
//                   <li className="list-inline-item">
//                     <a href="#" style={{ color: "#8b0d11" }}>
//                       <i className="fa fa-user"></i> {article.tags.join(", ")}
//                     </a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="#" style={{ color: "gray" }}>
//                       <i className="fa fa-calendar"></i> {article.date}
//                     </a>
//                   </li>
//                 </ul>
//                 <p className="text-xl tracking-wide" style={{ color: "black" }}>
//                   {displayDetails}
//                 </p>
//               </div>

//               {/* Gallery Section */}
//               <div className="my-10">
//                 <h2 className="text-center text-4xl font-extrabold mb-10 text-gray-900">
//                   {isArabic ? "المعرض" : "Gallery"}
//                 </h2>
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                   {galleryImages.map((image, index) => (
//                     <div
//                       key={image.id}
//                       className={`relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 ${
//                         index % 2 === 0 ? "rotate-2" : "-rotate-2"
//                       } hover:scale-110`}
//                       style={{
//                         position: "relative",
//                         zIndex: index % 3 === 0 ? "10" : "1",
//                       }}
//                     >
//                       <img
//                         src={image.imageSrc}
//                         alt={isArabic ? image.alt_ar : image.alt}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* /Gallery Section */}
//     <button onClick={toggleLanguage} className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white">
//         <img
//           src={language === "en" ? englishIcon : arabicIcon}
//           alt="Language Icon"
//           className="w-8 h-8"
//         />
//       </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetails;
