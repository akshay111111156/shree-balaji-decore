"use client";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0b1226] to-[#020617] px-4 py-10 relative">

      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-50 flex items-center gap-2 
        bg-blue-600 text-white px-5 py-2.5 rounded-full 
        text-sm font-semibold shadow-lg 
        hover:bg-blue-700 transition"
      >
        ← Back
      </Link>

      {/* Main Card */}
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl 
      border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

        {/* Logo Section */}
        <div className="flex justify-center py-10 bg-gradient-to-br from-blue-950/40 to-black/60">
          <div
            className="w-40 h-40 rounded-full border-4 border-blue-500/40 
            flex items-center justify-center bg-black shadow-xl overflow-hidden"
          >
            <Image
              src="/images/logoo.png"
              alt="Shree Balaji Decore Logo"
              width={160}
              height={160}
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 md:px-12 py-10 text-center md:text-left">

          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Shree <span className="text-blue-400">Balaji Decore</span>
          </h1>

          <p className="mt-3 text-sm md:text-base text-blue-300 font-medium">
            Acrylic Sheets • Louvers • Interior Solutions
          </p>

          <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
            We provide high-quality acrylic sheets, decorative louvers,
            and modern interior materials focused on durability,
            precision, and clean finishing.
          </p>

          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            With years of hands-on experience, we are trusted by homes,
            offices, and commercial projects for consistent quality
            and reliable workmanship.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-lg font-bold text-white">10+ Years</p>
              <p className="text-xs text-gray-400 mt-1">Experience</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-lg font-bold text-white">500+</p>
              <p className="text-xs text-gray-400 mt-1">Projects</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-lg font-bold text-white">Trusted</p>
              <p className="text-xs text-gray-400 mt-1">By Clients</p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold">
              Quality Materials
            </span>
            <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-300 text-xs font-semibold">
              Honest Work
            </span>
            <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold">
              Reliable Support
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
