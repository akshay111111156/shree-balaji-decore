"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ViewToggleSection() {
  const [view, setView] = useState("2d");
  const router = useRouter();

 
 const content = {
  "2d": {
    title: "2D Visualizer",
    text: "Apply selected SKUs from our database onto 2D interior surfaces like office spaces, bedrooms, living rooms, bathrooms and kitchens.",
    img: "/images/plain.png",
    route: "/twoD", // ✅ direct to /twoD
  },
  "3d": {
    title: "3D Visualizer",
    text: "Visualize products in realistic 3D environments for better design decisions in various spaces.",
    img: "/images/3d-visualizer.jpg",
    route: "/threeD", // ✅ direct to /threeD
  },
};


  return (
    <section className="py-12">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-6 border border-gray-400 rounded-full px-4 py-2 mb-8 w-max mx-auto bg-white/80 backdrop-blur-sm shadow-md">
        <button
          onClick={() => setView("2d")}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            view === "2d"
              ? "bg-red-600 text-white"
              : "text-gray-700 hover:text-red-600"
          }`}
        >
          2D Visualizer
        </button>
        <button
          onClick={() => setView("3d")}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            view === "3d"
              ? "bg-red-600 text-white"
              : "text-gray-700 hover:text-red-600"
          }`}
        >
          3D Visualizer
        </button>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto">
        <div
          className="relative w-full h-[450px] bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${content[view].img})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-lg text-white">
              <h2 className="text-4xl font-bold mb-4">{content[view].title}</h2>
              <p className="mb-6 text-lg">{content[view].text}</p>
              <button
                onClick={() => router.push(content[view].route)} // 👈 dynamic route
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
