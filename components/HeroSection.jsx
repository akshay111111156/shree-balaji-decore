"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaPhone,
  FaWhatsapp,
  FaRegEnvelope,
  FaTimes,
} from "react-icons/fa";

export default function HeroSection() {
  const images = ["/images/plain.png", "/images/gallery2.png"];

  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    const whatsappURL = `https://wa.me/917702126018?text=${encodeURIComponent(
      `New Enquiry 🔔
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`
    )}`;

    window.open(whatsappURL, "_blank");
    setShowForm(false);
  };

  return (
    <section className="relative w-full h-[82svh] overflow-hidden">
      {/* Background */}
      <Image
        src={images[index]}
        alt="Acrylic Sheets & Louvers"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2f2f2f]/80 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="px-6 max-w-[520px] text-white">
          {/* Heading */}
          <h1 className="text-[36px] sm:text-[48px] font-extrabold leading-tight">
            High-Quality Acrylic Sheets
            <span className="block mt-2 text-green-400">
              Custom Designer Louvers
            </span>
          </h1>

          {/* Accent line */}
          <div className="w-14 h-[3px] bg-green-500 mt-4 rounded-full" />

          {/* Description */}
          <p className="mt-4 text-[15px] text-gray-200">
            Trusted by Builders & Architects
          </p>
          <p className="mt-1 text-[13px] text-gray-300">
            Serving Since 2005 · 100+ Successful Projects
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917702126018"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full text-sm font-semibold shadow-lg w-fit"
            >
              <FaWhatsapp />
              Get Instant Quote on WhatsApp
            </a>

            {/* ✅ Correct CALL button (NOT full width) */}
            <a
              href="tel:917702126018"
              className="inline-flex items-center gap-2 bg-white text-gray-800 px-5 py-2 rounded-full text-[13px] font-medium shadow-md w-fit"
            >
              <FaPhone className="text-[13px]" />
              +91 77021 26018
            </a>
          </div>
        </div>
      </div>

      {/* Floating icons */}
<div className="absolute top-1/2 right-4 -translate-y-1/2 mt-10 z-20 flex flex-col gap-3">

        <button
          onClick={() => setShowForm(true)}
          className="w-11 h-11 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg"
        >
          <FaRegEnvelope size={15} />
        </button>

        <a
          href="tel:917702126018"
          className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg"
        >
          <FaPhone size={15} />
        </a>

        <a
          href="https://wa.me/917702126018"
          className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg"
        >
          <FaWhatsapp size={15} />
        </a>
      </div>

      {/* Enquiry Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white w-[92%] max-w-[360px] rounded-xl p-5 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-red-600"
            >
              <FaTimes />
            </button>

            <h2 className="text-lg font-bold mb-4">Send Enquiry</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input name="name" placeholder="Your Name" required className="border p-2 rounded" onChange={handleChange} />
              <input name="phone" placeholder="Phone Number" required className="border p-2 rounded" onChange={handleChange} />
              <input name="email" placeholder="Email (optional)" className="border p-2 rounded" onChange={handleChange} />
              <textarea name="message" placeholder="Your requirement" className="border p-2 rounded" onChange={handleChange} />
              <button className="bg-green-600 text-white py-2 rounded font-semibold">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
