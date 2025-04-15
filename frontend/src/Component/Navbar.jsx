import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../Context/LanguageContext";
// import arabicIcon from "../assets/translation.png";
// import englishIcon from "../assets/translation (1).png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);




  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle clicking outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    toggleLanguage();
    i18n.changeLanguage(newLang);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <div className="w-full bg-screen-red text-white py-3">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-6xl font-bold tracking-tighter">
              <span className="font-extrabold">CRIME</span>
              <span className="font-light">GAZETTE</span>
            </Link>
          </div>
          <div className="flex items-center mt-3 md:mt-0">
            <div className="hidden md:flex space-x-4 text-md font-semibold mr-6">
              {isLoggedIn ? (
                <>
                  <Link
                    to="/userprofile"
                    className="hover:bg-screen-red px-4 py-1 rounded"
                  >
                    PROFILE
                  </Link>
                  <span>|</span>
                  <button
                    onClick={handleLogout}
                    className="hover:bg-screen-red px-4 py-1 rounded"
                  >
                    LOGOUT
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="hover:bg-screen-red px-4 py-1 rounded"
                  >
                    REGISTER
                  </Link>
                  <span>|</span>
                  <Link
                    to="/login"
                    className="hover:bg-screen-red px-4 py-1 rounded"
                  >
                    SIGN IN
                  </Link>
                </>
              )}
            </div>


            {/* Language Toggle Buttons */}
            {/* <button onClick={changeLanguage}>
              <img
                src={language === "en" ? arabicIcon : englishIcon}
                alt="Language Icon"
                className="w-11 h-11 transition-transform duration-300 hover:scale-110 mr-3"
              />
            </button> */}

          </div>
        </div>
      </div>

      <div className="w-full bg-screen-dark text-white">
        <div className="container mx-auto px-4">
          <div className="md:hidden flex justify-end items-center py-3">
            <button
              ref={hamburgerRef}
              className="p-2 transition-all duration-300 focus:outline-none mt-2"
              onClick={toggleMobileMenu}
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "rotate-45 top-2" : "rotate-0 top-0"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  } top-2`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "-rotate-45 top-2" : "rotate-0 top-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="absolute right-0 w-full md:w-64 bg-screen-dark z-50 flex flex-col items-center py-4 shadow-lg transform transition-transform duration-300 ease-in-out"
              style={{ top: "calc(var(--top-nav-height, 120px))" }}
            >
              <Link
                to="/"
                className="w-full text-center py-2 text-lg font-semibold border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                HOME
              </Link>
              <Link
                to="/ArticlesPage"
                className="w-full text-center py-2 text-lg font-semibold border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                NEWS
              </Link>
              <Link
                to="/AboutUs"
                className="w-full text-center py-2 text-lg font-semibold border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                ABOUT US
              </Link>
              <Link
                to="/contact"
                className="w-full text-center py-2 text-lg font-semibold border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                CONTACT US
              </Link>
              <Link
                to="/Blog"
                className="w-full text-center py-2 text-lg font-semibold border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                BLOGS
              </Link>
              <Link
                to="/SubscriptionCardDisplay"
                className="w-full text-center py-2 text-lg font-semibold border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                GET PREMIUM
              </Link>

              {/* Improved Authentication Section */}
              <div className="w-full mt-4 px-4">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="bg-screen-red py-2 px-4 text-center">
                    <h3 className="font-bold text-white">
                      {isLoggedIn ? "ACCOUNT" : "JOIN US"}
                    </h3>
                  </div>

                  <div className="flex flex-col">
                    {isLoggedIn ? (
                      <>
                        <Link
                          to="/userprofile"
                          className="flex items-center justify-center py-3 text-white hover:bg-gray-800 transition-colors duration-200 border-b border-gray-700"
                          onClick={toggleMobileMenu}
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                          PROFILE
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout();
                            toggleMobileMenu();
                          }}
                          className="flex items-center justify-center py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            ></path>
                          </svg>
                          LOGOUT
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="flex items-center justify-center py-3 text-white hover:bg-gray-800 transition-colors duration-200 border-b border-gray-700"
                          onClick={toggleMobileMenu}
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            ></path>
                          </svg>
                          SIGN IN
                        </Link>
                        <Link
                          to="/signup"
                          className="flex items-center justify-center py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                          onClick={toggleMobileMenu}
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                            ></path>
                          </svg>
                          REGISTER
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <nav className="hidden md:flex flex-wrap items-center justify-center py-2">
            <Link
              to="/"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              HOME
            </Link>
            <Link
              to="/ArticlesPage"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              NEWS
            </Link>
            <Link
              to="/AboutUs"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              ABOUT US
            </Link>
            <Link
              to="/contact"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              CONTACT US
            </Link>
            <Link
              to="/Blog"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              BLOGS
            </Link>
            <Link
              to="/SubscriptionCardDisplay"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              GET PREMIUM
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
