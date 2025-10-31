"use client";
import { useState } from "react";

export default function WhatsNew() {
  const [viewAll, setViewAll] = useState(false);

  const items = [
    { src: "/images/plain.png", alt: "456XY Acrylic Sheet", title: "456XY Acrylic Sheet", price: "Rs. 5,300.00" },
    { src: "/images/plain.png", alt: "Premium Louvers", title: "Premium Louvers", price: "Rs. 4,300.00" },
    { src: "/images/plain.png", alt: "Pearl Finish Acrylic", title: "Pearl Finish Acrylic", price: "Rs. 3,600.00" },
    { src: "/images/plain.png", alt: "Matte Finish Louvers", title: "Matte Finish Louvers", price: "Rs. 3,300.00" },
    { src: "/images/plain.png", alt: "Matte Finish Louvers", title: "Matte Finish Louvers", price: "Rs. 3,300.00" },
  ];

  return (
    <section className="py-12">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        What's New
      </h1>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">
        {viewAll ? (
          // GRID MODE (4 per row)
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden text-center"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // SCROLL MODE
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden text-center min-w-[250px] flex-shrink-0"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setViewAll(!viewAll)}
            className="px-6 py-3 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-700 transition"
          >
            {viewAll ? "SHOW LESS" : "VIEW ALL"}
          </button>
        </div>
      </div>
    </section>
  );
}
