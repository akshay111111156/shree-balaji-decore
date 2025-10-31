"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TwoDHome() {
  const [activeTab, setActiveTab] = useState("Shortlist");
  const [activeSub, setActiveSub] = useState("All");
  const [selectedSwatch, setSelectedSwatch] = useState<string | null>(null);

  const categories = [
    { name: "Shortlist", color: "bg-red-900" },
    { name: "Abstract Patterns", color: "bg-pink-600" },
    { name: "Woodgrains", color: "bg-yellow-700" },
    { name: "Stones", color: "bg-gray-300" },
    { name: "Solids", color: "bg-red-500" },
  ];

  const subCategories: Record<string, string[]> = {
    Shortlist: ["All", "Wallpaper", "Fabric", "Others"],
    "Abstract Patterns": ["All", "Weave", "Herringbone", "Artiste Collection"],
    Woodgrains: ["All", "Matte", "Glossy"],
    Stones: ["All", "Marble", "Granite"],
    Solids: ["All", "Basic", "Premium"],
  };

  const swatches: Record<
    string,
    { image: string; code: string; sub: string }[]
  > = {
    Shortlist: [
      { image: "/images/swatches/sw1.jpg", code: "5829 SU", sub: "Wallpaper" },
      { image: "/images/swatches/sw2.jpg", code: "1553 MI", sub: "Fabric" },
      { image: "/images/swatches/sw3.jpg", code: "4395 SU", sub: "Others" },
    ],
    "Abstract Patterns": [
      { image: "/images/swatches/ap1.jpg", code: "3513 SU", sub: "Weave" },
      { image: "/images/swatches/ap2.jpg", code: "159 LU", sub: "Herringbone" },
      { image: "/images/swatches/ap3.jpg", code: "5829 SU", sub: "Artiste Collection" },
    ],
    Woodgrains: [
      { image: "/images/swatches/w1.jpg", code: "W101", sub: "Matte" },
      { image: "/images/swatches/w2.jpg", code: "W202", sub: "Glossy" },
      { image: "/images/swatches/w3.jpg", code: "W303", sub: "Matte" },
    ],
    Stones: [
      { image: "/images/swatches/s1.jpg", code: "S101", sub: "Marble" },
      { image: "/images/swatches/s2.jpg", code: "S202", sub: "Granite" },
      { image: "/images/swatches/s3.jpg", code: "S303", sub: "Marble" },
    ],
    Solids: [
      { image: "/images/swatches/so1.jpg", code: "9001", sub: "Basic" },
      { image: "/images/swatches/so2.jpg", code: "9002", sub: "Premium" },
      { image: "/images/swatches/so3.jpg", code: "9003", sub: "Basic" },
    ],
  };

  const filteredSwatches =
    activeSub === "All"
      ? swatches[activeTab]
      : swatches[activeTab].filter((s) => s.sub === activeSub);

  // Pick either selected swatch OR default bedroom.png
  const mainImage = selectedSwatch
    ? selectedSwatch
    : "/images/bedroom.png";

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#e5e1dd] min-h-screen p-6 flex flex-col items-center">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold text-gray-800 leading-snug">
            Shree Balaji <br /> Decore
          </h2>
        </div>
        <div className="bg-gray-400 rounded-lg p-4 w-full flex flex-col items-center gap-4">
          {[{ href: "/twoD/office", label: "OFFICE", img: "/images/office.png" },
          { href: "/twoD/bedroom", label: "BEDROOM", img: "/images/bedroom.png" },
          { href: "/twoD/kitchen", label: "KITCHEN", img: "/images/kitchen.png" },
          { href: "/twoD/living", label: "LIVING ROOM", img: "/images/living.png" },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="flex flex-col items-center text-white transition hover:text-red-500">
              <Image src={item.img} alt={item.label} width={70} height={60} className="object-contain" />
              <span className="font-semibold text-sm mt-2">{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative bg-white flex justify-center items-center">
        {/* Center Image */}
        <div className="relative w-[850px] h-[550px] rounded-lg overflow-hidden shadow-md flex justify-center items-center bg-gray-100">
          <Image src={mainImage} alt="Visualizer" fill className="object-fit" />
        </div>

        {/* Right Palette */}
        <div className="absolute right-8 top-20 w-72 bg-gray-200 rounded-lg shadow-xl p-4">
          {/* Top Tabs with Circle */}
          <div className="flex gap-4 mb-4 text-sm font-medium text-gray-700">
            {categories.map((cat, i) => (
              <div
                key={i}
                onClick={() => {
                  setActiveTab(cat.name);
                  setActiveSub("All");
                  setSelectedSwatch(null); // reset if changing tab
                }}
                className={`flex flex-col items-center cursor-pointer ${activeTab === cat.name ? "text-red-600" : ""
                  }`}
              >
                <div
                  className={`w-6 h-6 rounded-full mb-1 ${cat.color} ${activeTab === cat.name ? "ring-2 ring-red-500" : ""
                    }`}
                ></div>
                <span className="text-xs text-center">{cat.name}</span>
              </div>
            ))}
          </div>

          {/* Sub Tabs */}
          <div className="flex flex-wrap gap-2 mb-4 text-xs">
            {subCategories[activeTab].map((sub, i) => (
              <span
                key={i}
                onClick={() => {
                  setActiveSub(sub);
                  setSelectedSwatch(null); // reset on sub change
                }}
                className={`px-2 py-1 rounded-full cursor-pointer shadow ${activeSub === sub ? "bg-red-400 text-white" : "bg-white hover:bg-gray-300"
                  }`}
              >
                {sub}
              </span>
            ))}
          </div>

          {/* Swatches with Images */}
          <div className="grid grid-cols-3 gap-4">
            {filteredSwatches.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedSwatch(s.image)}
              >
                <div className="w-14 h-14 rounded-md overflow-hidden shadow-md">
                  <Image src={s.image} alt={s.code} width={56} height={56} className="object-cover w-full h-full" />
                </div>
                <span className="text-xs mt-1">{s.code}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
