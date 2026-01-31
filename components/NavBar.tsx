"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
  FaHome,
  FaCubes,
  FaBookOpen,
  FaInfoCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function NavBar() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  /* Close sidebar on outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        showSideNav &&
        sideNavRef.current &&
        !sideNavRef.current.contains(e.target as Node)
      ) {
        setShowSideNav(false);
        setShowContact(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [showSideNav]);

  const scrollToProducts = () => {
    setShowSideNav(false);
    setShowContact(false);
    setTimeout(() => {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const NavItem = ({
    label,
    href,
    icon,
    onClick,
  }: {
    label: string;
    href?: string;
    icon: React.ReactNode;
    onClick?: () => void;
  }) => (
    <li>
      {href ? (
        <Link
          href={href}
          onClick={() => {
            setShowSideNav(false);
            setShowContact(false);
            onClick?.();
          }}
          className="flex items-center gap-4 px-5 py-4 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-l-4 border-transparent hover:border-blue-600 transition"
        >
          <span className="text-lg">{icon}</span>
          {label}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="w-full flex items-center gap-4 px-5 py-4 text-left text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-l-4 border-transparent hover:border-blue-600 transition"
        >
          <span className="text-lg">{icon}</span>
          {label}
        </button>
      )}
    </li>
  );

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* BRAND */}
          <div className="text-lg md:text-xl font-extrabold tracking-wide text-gray-900">
            Shree Balaji Decore
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-1"
            >
              <FaInstagram className="text-xl text-pink-600" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-1"
            >
              <FaFacebookF className="text-xl text-blue-600" />
            </a>

            <button
              onClick={() => setShowSideNav(true)}
              aria-label="Menu"
              className="p-1"
            >
              <FaBars className="text-2xl text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {showSideNav && <div className="fixed inset-0 bg-black/40 z-40" />}

      {/* SIDEBAR */}
      <aside
        ref={sideNavRef}
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          showSideNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div className="text-lg font-bold">Menu</div>
          <button onClick={() => setShowSideNav(false)}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <ul className="divide-y">
          <NavItem label="Home" href="/" icon={<FaHome />} />
          <NavItem
            label="Products"
            icon={<FaCubes />}
            onClick={scrollToProducts}
          />
          <NavItem label="Catalog" href="/catalog" icon={<FaBookOpen />} />
          <NavItem label="About" href="/about" icon={<FaInfoCircle />} />
          <NavItem
            label="Contact"
            icon={<FaPhoneAlt />}
            onClick={() => setShowContact((p) => !p)}
          />

          {showContact && (
            <div className="mx-4 my-4 p-4 bg-gray-50 rounded-lg text-sm">
              <p className="flex gap-3 items-center font-semibold">
                <FaPhoneAlt /> +91 7002735942
              </p>
              <p className="flex gap-3 items-center font-semibold mt-2">
                <FaEnvelope /> info@shreebalajidecore.com
              </p>

              <a
                href="https://wa.me/917002735942"
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-3 bg-green-500 text-white py-2 rounded-lg font-bold"
              >
                <FaWhatsapp /> WhatsApp Chat
              </a>
            </div>
          )}
        </ul>
      </aside>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
