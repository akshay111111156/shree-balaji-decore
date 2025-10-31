"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Catalog() {
  const router = useRouter();

  const catalogs = [
    { title: "Acrylic Sheets", img: "/catalog/logoo.png", pdf: "/catalog/catalog1.pdf" },
    { title: "Louvers Design", img: "/catalog/logoo.png", pdf: "/catalog/catalog2.pdf" },
    { title: "Wall Panels", img: "/catalog/logoo.png", pdf: "/catalog/catalog3.pdf" },
  ];

  return (
    <div className="min-h-screen bg-[#efeff8] text-black py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Buttons */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition"
          >
            ← Back
          </button>

          <a
            href="/catalog/all_catalogs.zip"
            download
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            ⬇ Download All
          </a>
        </div>

        {/* Title Box */}
        <div className="flex justify-center mb-10">
          <div className="border-4 border-blue-700 rounded-xl px-8 py-3 bg-white shadow-md">
            <h1 className="text-4xl font-bold text-black text-center">
              Our Catalogs
            </h1>
          </div>
        </div>

        {/* Catalog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {catalogs.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition overflow-hidden border border-gray-300"
            >
              <a
                href={cat.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover"
                />
              </a>

              {/* Title + Download Button */}
              <div className="p-4 flex items-center justify-between bg-white text-black">
                <span className="text-lg font-semibold">{cat.title}</span>
                <a
                  href={cat.pdf}
                  download
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition"
                >
                  ⬇ Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
