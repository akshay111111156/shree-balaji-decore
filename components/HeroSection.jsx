"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPhone,
  FaWhatsapp,
  FaRegEnvelope,
  FaTimes,
} from "react-icons/fa";

export default function HeroSection() {
  const images = [
    "/images/plain.png",
    "/images/logo.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  // Handle explore click
  const handleProductsClick = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  return (
    <section className="relative h-screen w-full flex overflow-hidden">
      {/* Background Image */}
      <Image
        src={images[currentIndex]}
        alt="Hero Background"
        fill
        className="object-cover transition-all duration-700 ease-in-out"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full z-20"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full z-20"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Content Section */}
      <div className="relative z-10 flex w-full">
        <div className="w-1/2"></div>
        <div className="w-1/2 flex flex-col justify-center items-start px-10 text-white">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Premium Louvers & Acrylic Sheets
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Transforming spaces with elegance and durability
          </p>

          {/* Animated Explore Button */}
          <button
            onClick={handleProductsClick}
            className="ml-20 px-6 py-3 text-lg font-semibold bg-white text-black rounded-full shadow-lg 
             transition-all duration-300 hover:scale-110 hover:bg-gray-200 animate-bounce"
          >
            Explore
          </button>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-4 top-1/4 flex flex-col gap-4 z-30">
        {/* Enquiry Form Button */}
        <button
          onClick={() => setShowForm(true)}
          className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg"
        >
          <FaRegEnvelope size={20} />
        </button>

        {/* Phone Button */}
        <a
          href="tel:7002735942"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        >
          <FaPhone size={20} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/7002735942"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>

      {/* Enquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[420px] relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              <FaTimes size={20} />
            </button>

            {/* Form */}
            <div className="p-6">
              <h2 className="text-lg font-bold mb-4">Enquire Now</h2>
              <form className="flex flex-col gap-3">
                <input type="text" placeholder="Your Name" className="border p-2 rounded" />
                <input type="text" placeholder="Phone Number" className="border p-2 rounded" />
                <input type="email" placeholder="Email Address" className="border p-2 rounded" />

                {/* State and City */}
                <div className="flex gap-2">
                  <select className="border p-2 rounded w-1/2">
                    <option>Select State</option>
                    {states.map((state) => (
                      <option key={state}>{state}</option>
                    ))}
                  </select>
                  <select className="border p-2 rounded w-1/2">
                    <option>Select City</option>
                  </select>
                </div>

                <input type="text" placeholder="Enquire For Product" className="border p-2 rounded" />
                <textarea placeholder="Message" className="border p-2 rounded"></textarea>

                <button className="bg-red-600 text-white py-2 rounded hover:bg-red-700 w-full font-semibold">
                  Send An Enquiry
                </button>
              </form>

              {/* Footer Buttons */}
              <div className="flex items-center justify-between gap-2 mt-4">
                <a
                  href="https://wa.me/9170027359422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-100 border border-green-500 text-green-700 px-4 py-2 rounded-full hover:bg-green-200 text-sm font-medium"
                >
                  <FaWhatsapp /> Talk to us
                </a>
                <a
                  href="tel:7002735942"
                  className="flex items-center gap-2 bg-red-100 border border-red-500 text-red-700 px-4 py-2 rounded-full hover:bg-red-200 text-sm font-medium"
                >
                  <FaPhone /> Instant Help - 7002735942
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
