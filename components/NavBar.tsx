"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import LoginModal from "./LoginModal";

export default function NavBar() {
  const fullText = "Shree Balaji Decore";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef<HTMLLIElement>(null); // ✅ fixed type

  // Typing animation
  useEffect(() => {
    const typingSpeed = 120;
    const resetDelay = 1000;

    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, resetDelay);
      return () => clearTimeout(resetTimeout);
    }
  }, [index]);

  // Scroll to Products section
  const handleProductsClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Close contact dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setShowContact(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="font-bold text-blue-700 font-mono overflow-hidden whitespace-nowrap"
          style={{ minWidth: "280px", fontSize: "1.75rem" }}
        >
          {displayedText}
          <span className="border-r-2 border-blue-700 animate-pulse ml-1"></span>
        </div>

        {/* Navigation Links & Icons */}
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center space-x-3 text-gray-700 text-lg font-semibold relative -ml-6">
            <li className="hover:bg-blue-700 hover:text-white px-3 py-1 rounded transition font-bold text-xl">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-blue-700 hover:text-white px-3 py-1 rounded transition">
              <a href="#products" onClick={handleProductsClick}>
                Products
              </a>
            </li>
            <li className="hover:bg-blue-700 hover:text-white px-3 py-1 rounded transition">
              <Link href="/catalog">Catalog</Link>
            </li>
            <li className="hover:bg-blue-700 hover:text-white px-3 py-1 rounded transition">
              <Link href="/about">About</Link>
            </li>

            {/* Contact Dropdown */}
            <li className="relative" ref={contactRef}>
              <button
                onClick={() => setShowContact((prev) => !prev)}
                className="hover:bg-blue-700 hover:text-white px-3 py-1 rounded transition"
              >
                Contact
              </button>

              {showContact && (
                <div className="absolute right-0 mt-2 w-64 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-4 border border-gray-200">
                  <h3 className="text-lg font-bold text-blue-700 mb-2">
                    Contact Us
                  </h3>
                  <div className="space-y-2 text-sm text-gray-800">
                    <p className="flex items-center gap-2">
                      <FaPhoneAlt /> +91 7002735942
                    </p>
                    <p className="flex items-center gap-2">
                      <FaEnvelope /> info@shreebalajidecore.com
                    </p>
                    <a
                      href="https://wa.me/917002735942"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 font-semibold hover:underline"
                    >
                      <FaWhatsapp /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5 ml-6">
            <button
              onClick={() => setShowLogin(true)}
              className="text-2xl text-gray-700 hover:text-blue-700 transition"
            >
              <FaUser />
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-pink-600 hover:text-pink-800 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:text-blue-800 transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </nav>
  );
}
