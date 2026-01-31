"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Plain Acrylic Sheets",
    subtitle: "Clear · Durable · Multiple Thickness",
    href: "/products?category=acrylic",
    image: "/images/plain.png",
  },
  {
    title: "Cane Acrylic Sheets",
    subtitle: "Decorative · Premium · Stylish Finish",
    href: "/products?category=acrylic",
    image: "/images/cane.png",
  },
  {
    title: "Solid Colour Acrylic",
    subtitle: "Glossy · Matte · Custom Shades",
    href: "/products?category=solid",
    image: "/images/solid.png",
  },
  {
    title: "Designer Louvers",
    subtitle: "Modern · Interior & Exterior Use",
    href: "/products?category=louvers",
    image: "/images/marble.png",
  },
  {
    title: "Corian Sheet",
    subtitle: "Premium · Seamless · Long-Lasting",
    href: "/products?category=solid",
    image: "/images/corien.png",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      {/* SECTION HEADING */}
      <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-12">
        Explore Our Product Range
      </h2>

      {/* PRODUCT LIST */}
      <div
        className="
          mx-auto
          max-w-lg
          md:max-w-4xl
          lg:max-w-6xl
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
        "
      >
        {products.map((product, index) => (
          <Link
            key={index}
            href={product.href}
            className="
              flex items-center gap-5
              bg-white rounded-2xl
              px-5 py-5
              shadow-sm hover:shadow-md
              transition-all
            "
          >
            {/* IMAGE */}
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
              <Image
                src={product.image}
                alt={product.title}
                width={90}
                height={90}
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[17px] font-extrabold text-gray-900 leading-snug">
                {product.title}
              </h3>

              <p className="text-[14px] font-medium text-gray-600 mt-1">
                {product.subtitle}
              </p>

              <span className="inline-block mt-3 bg-green-500 text-white text-[13px] font-semibold px-4 py-2 rounded-full">
                View Designs →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
