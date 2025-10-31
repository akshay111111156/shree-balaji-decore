"use client";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-950 flex flex-col items-center justify-center p-6 relative">
      
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="text-white font-semibold text-lg px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ⬅ Back
        </Link>
      </div>

      {/* Main Container */}
      <div className="bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-2xl max-w-6xl w-full flex overflow-hidden border border-blue-600/30">
        
        {/* Left Side - Logo */}
        <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-10">
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-black via-gray-900 to-blue-900 shadow-2xl flex items-center justify-center border-4 border-blue-500">
            <Image
              src="/images/logoo.png"
              alt="Company Logo"
              width={280}
              height={280}
              className="object-contain rounded-full"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-blue-400 mb-6 drop-shadow-lg">About Us</h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Welcome to <span className="font-semibold text-blue-400">Shree Balaji Decore</span>!
            We specialize in premium <strong className="text-white">Louvres, Acrylic Sheets, and Modern Interior Solutions</strong>.
            Our mission is to bring style, durability, and creativity to your spaces. With years of experience in
            <strong className="text-white"> decor and design</strong>, we provide quality products trusted by thousands of customers.
            From home interiors to commercial projects, our goal is to deliver excellence with every product.
          </p>

          <p className="mt-6 text-lg text-gray-300 italic">
            ✨ Quality, Trust, and Innovation — that’s what defines us.
          </p>
        </div>
      </div>
    </div>
  );
}
