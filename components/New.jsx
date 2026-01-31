"use client";

import { useState } from "react";

export default function WhatsNew() {
  const [viewAll, setViewAll] = useState(false);

  const items = [
    {
      src: "/images/plain.png",
      tag: "JUST ARRIVED",
      title: "High-Quality Clear Acrylic Sheets",
      price: "₹ 5,300",
      unit: "",
      features: ["Multiple thickness options", "Optical clarity"],
    },
    {
      src: "/images/plain.png",
      tag: "LATEST DESIGN",
      title: "Modern Designer Louvers",
      price: "₹ 850",
      unit: "/ Sq ft",
      features: ["Custom Sizes & Colors", "Interior & Exterior Use"],
    },
    {
      src: "/images/plain.png",
      tag: "NEW",
      title: "Pearl Finish Acrylic",
      price: "₹ 3,600",
      unit: "",
      features: ["Premium finish", "Long-lasting"],
    },
    {
      src: "/images/plain.png",
      tag: "NEW",
      title: "Matte Finish Louvers",
      price: "₹ 3,300",
      unit: "",
      features: ["Modern look", "Easy maintenance"],
    },
  ];

  const visibleItems = viewAll ? items : items.slice(0, 2);

  return (
    <section className="py-14 bg-[#f6f6f4]">
      <h1 className="text-3xl font-bold text-center mb-10">
        What’s New
      </h1>

      <div className="max-w-6xl mx-auto px-4">
        {/* 🔥 ALWAYS 2 IN A ROW */}
        <div className="grid grid-cols-2 gap-6">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />

                <span className="absolute top-3 left-3 bg-green-700 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h2 className="text-[15px] font-semibold leading-snug mb-2">
                  {item.title}
                </h2>

                <p className="text-green-700 font-bold text-lg mb-3">
                  {item.price}
                  <span className="text-xs text-gray-500 ml-1">
                    {item.unit}
                  </span>
                </p>

                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  {item.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg text-sm font-semibold transition">
                  View Product →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setViewAll(!viewAll)}
            className="px-8 py-4 bg-green-800 text-white rounded-xl font-semibold text-lg hover:bg-green-900 transition"
          >
            {viewAll ? "Show Less" : "View All New Arrivals →"}
          </button>
        </div>
      </div>
    </section>
  );
}
