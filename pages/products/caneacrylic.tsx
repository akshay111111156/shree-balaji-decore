import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const products = [
  {
    id: 1,
    title: "Acrylic 3D LED Letter For Promotional",
    price: "₹ 600 - ₹ 900 / Inch",
    details: {
      MOQ: "50 Running Inch",
      "Lighting Type": "LED",
      Material: "Acrylic",
      "Letter Type": "3D",
    },
    image: "/images/plain.png",
  },
  {
    id: 2,
    title: "LED Signboard Polished Acrylic 3d Letter, Color : Golden",
    price: "₹ 100 / Inch",
    details: {
      MOQ: "10 Piece",
      "Brand Name": "led signboard",
      Type: "Acrylic 3d Letter",
      Technics: "Machine Made",
    },
    image: "/images/plain.png",
  },
  {
    id: 3,
    title: "Golden Acrylic Signboard Letters",
    price: "₹ 120 / Inch",
    details: {
      MOQ: "20 Inch",
      "Brand Name": "Golden Acrylic",
      Type: "3D Letter",
      Technics: "Laser Cut",
    },
    image: "/images/plain.png",
  },
  {
    id: 4,
    title: "LCD Acrylic 3d Letter, Color : Golden",
    price: "₹ 100 / Inch",
    details: {
      MOQ: "10 Piece",
      "Brand Name": "led signboard",
      Type: "Acrylic 3d Letter",
      Technics: "Machine Made",
    },
    image: "/images/plain.png",
  },
  {
    id: 5,
    title: "LED 404 Acrylic, Color : Golden",
    price: "₹ 100 / Inch",
    details: {
      MOQ: "10 Piece",
      "Brand Name": "led signboard",
      Type: "Acrylic 3d Letter",
      Technics: "Machine Made",
    },
    image: "/images/plain.png",
  },
  {
    id: 6,
    title: "LED 405 Acrylicc 3d Letter, Color : Golden",
    price: "₹ 100 / Inch",
    details: {
      MOQ: "10 Piece",
      "Brand Name": "led signboard",
      Type: "Acrylic 3d Letter",
      Technics: "Machine Made",
    },
    image: "/images/plain.png",
  },
];

const CaneAcrylic = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // Filter products based on search query
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Intersection animations
  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll(".product-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute("data-id"));
          setVisibleItems((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) newSet.add(id);
            else newSet.delete(id);
            return newSet;
          });
        });
      },
      { threshold: 0.3 }
    );
    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, [filteredProducts]);

  const getAnimationClass = (index: number) => {
    if (index % 3 === 0) return "slide-in-left";
    if (index % 3 === 1) return "slide-in-top";
    return "slide-in-right";
  };

  const openEnquiry = (productName: string) => {
    setSelectedProduct(productName);
    setShowEnquiry(true);
    setSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      message: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:akshaykumar151656@gmail.com?subject=Enquiry for ${selectedProduct}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AState: ${formData.state}%0D%0ACity: ${formData.city}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
    setSuccess(true);
    setTimeout(() => setShowEnquiry(false), 2500);
  };

  return (
    <section
      style={{
        padding: 20,
        maxWidth: 1500,
        margin: "0 auto",
        backgroundColor: "#111328",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
  <div
  style={{
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    height: 60,
  }}
>
  {/* Back Button (fixed to left) */}
  <button
    onClick={() => router.back()}
    style={{
      position: "absolute",
      left: 40, // adjust spacing from left edge
      padding: "10px 18px",
      backgroundColor: "#222b45",
      color: "white",
      border: "none",
      borderRadius: 6,
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    ← Back
  </button>

  {/* Centered Title */}
  <h1
    style={{
      fontWeight: "900",
      fontSize: "2rem",
      color: "#e0e7ff",
      textAlign: "center",
      margin: 0,
    }}
  >
    Cane Acrylic
  </h1>

  {/* Search Input (fixed to right) */}
  <input
    type="text"
    placeholder="Search products..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    style={{
      position: "absolute",
      right: 40, // adjust spacing from right edge
      padding: "10px 16px",
      borderRadius: 6,
      border: "1px solid #4f46e5",
      backgroundColor: "#1c2340",
      color: "white",
      outline: "none",
      width: 220,
    }}
  />
</div>

      {/* Product grid */}
      <div
        ref={containerRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {filteredProducts.length === 0 ? (
          <p style={{ textAlign: "center", color: "#a5b4fc" }}>
            No matching products found.
          </p>
        ) : (
          filteredProducts.map((product, index) => {
            const isVisible = visibleItems.has(product.id);
            const animationClass = getAnimationClass(index);

            return (
              <div
                key={product.id}
                data-id={product.id}
                className={`product-card ${
                  isVisible ? animationClass : "hidden"
                }`}
                style={{
                  backgroundColor: "#1c2340",
                  borderRadius: 8,
                  padding: 16,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 250,
                    overflow: "hidden",
                    borderRadius: 6,
                    cursor: "pointer",
                  }}
                  onClick={() => setModalImage(product.image)}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <h2 style={{ fontSize: 18, fontWeight: 900, color: "#a5b4fc" }}>
                  {product.title}
                </h2>
                <p style={{ fontWeight: "bold", color: "#c7d2fe" }}>
                  {product.price}
                </p>

                <table style={{ width: "100%", fontSize: 14, color: "#d1d5db" }}>
                  <tbody>
                    {Object.entries(product.details).map(([key, val]) => (
                      <tr key={key}>
                        <td
                          style={{
                            paddingRight: 8,
                            whiteSpace: "nowrap",
                            width: "35%",
                            fontWeight: 600,
                            color: "#a5b4fc",
                          }}
                        >
                          {key}:
                        </td>
                        <td>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
                  <button
                    style={{
                      flex: 1,
                      padding: "8px 12px",
                      border: "1px solid #a5b4fc",
                      background: "transparent",
                      color: "#a5b4fc",
                      borderRadius: 4,
                      cursor: "pointer",
                    }}
                  >
                    📞 View Mobile
                  </button>

                  <button
                    style={{
                      flex: 1,
                      padding: "6px 10px",
                      background: "#7c3aed",
                      border: "none",
                      color: "white",
                      borderRadius: 4,
                      cursor: "pointer",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                    }}
                    onClick={() => openEnquiry(product.title)}
                  >
                    ✉ Send Inquiry
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: 30,
              borderRadius: 10,
              width: "90%",
              maxWidth: 500,
              color: "white",
              boxShadow: "0 0 30px rgba(124,58,237,0.6)",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowEnquiry(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 14,
                background: "transparent",
                color: "#f87171",
                border: "none",
                fontSize: 22,
                cursor: "pointer",
              }}
            >
              ✖
            </button>
            <h2
              style={{
                textAlign: "center",
                marginBottom: 20,
                color: "#a78bfa",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
            >
              Enquiry for:  
              <span style={{ color: "#fbbf24" }}> {selectedProduct}</span>
            </h2>

            {success ? (
              <p style={{ textAlign: "center", color: "#4ade80" }}>
                ✅ Inquiry sent successfully!
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {["name", "email", "phone", "state", "city"].map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={
                      field.charAt(0).toUpperCase() + field.slice(1)
                    }
                    required
                    value={formData[field as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field]: e.target.value,
                      })
                    }
                    style={{
                      padding: "10px 12px",
                      borderRadius: 6,
                      border: "1px solid #4f46e5",
                      backgroundColor: "#111827",
                      color: "white",
                      outline: "none",
                    }}
                  />
                ))}
                <textarea
                  placeholder="Message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  style={{
                    padding: "10px 12px",
                    borderRadius: 6,
                    border: "1px solid #4f46e5",
                    backgroundColor: "#111827",
                    color: "white",
                    outline: "none",
                    resize: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "10px 14px",
                    backgroundColor: "#7c3aed",
                    border: "none",
                    borderRadius: 6,
                    color: "white",
                    fontWeight: 600,
                    cursor: "pointer",
                    marginTop: 4,
                  }}
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .hidden {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .slide-in-left {
          animation: slideInFromLeft 1.2s forwards;
        }
        .slide-in-top {
          animation: slideInFromTop 1.2s forwards;
        }
        .slide-in-right {
          animation: slideInFromRight 1.2s forwards;
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CaneAcrylic;
