"use client";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white font-semibold text-sm rounded-full shadow-md hover:bg-pink-700 transition-all duration-300 ease-in-out z-50" // Added z-50 to ensure it appears above other content
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
