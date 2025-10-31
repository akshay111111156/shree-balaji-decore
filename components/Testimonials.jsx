"use client";

import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
    const reviews = [
        { name: "John Doe", feedback: "Excellent quality products and great service!", image: "/images/user1.jpg" },
        { name: "Sarah Lee", feedback: "Loved the acrylic sheets, highly recommend!", image: "/images/user2.jpg" },
        { name: "Michael Smith", feedback: "Great team and very professional.", image: "/images/user3.jpg" },
        { name: "Emily Johnson", feedback: "The products exceeded my expectations.", image: "/images/user4.jpg" },
        { name: "David Wilson", feedback: "Fast delivery and great packaging.", image: "/images/user5.jpg" },
        { name: "Sophia Brown", feedback: "Amazing quality and long-lasting.", image: "/images/user6.jpg" },
        { name: "Chris Evans", feedback: "Affordable and premium quality.", image: "/images/user7.jpg" },
        { name: "Olivia Martinez", feedback: "Customer service was fantastic!", image: "/images/user8.jpg" },
    ];

    const [currentSet, setCurrentSet] = useState(0);
    const [animate, setAnimate] = useState(false);
    const sectionRef = useRef(null);

    // Loop testimonials every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prev) => (prev === 0 ? 1 : 0));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Trigger animation on scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setAnimate(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const visibleReviews = reviews.slice(currentSet * 4, currentSet * 4 + 4);

    return (
        <section ref={sectionRef} className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-start">

                {/* Left - Testimonials */}
                <div key={currentSet} className={`${animate ? "animate-slide-left" : ""} pl-6`}>
                    <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
                    <div className="space-y-8">
                        {visibleReviews.map((review, index) => (
                            <div key={index} className="flex items-start">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div className="ml-6">
                                    <p className="text-lg font-bold text-gray-800 italic mb-2">
                                        "{review.feedback}"
                                    </p>
                                    <h3 className="text-base font-semibold">{review.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right - Leave Your Opinion */}
                <div
                    className={`bg-white rounded-lg shadow-md p-6 w-full max-w-lg ${animate ? "animate-slide-right" : ""
                        }`}
                >
                    <h3 className="text-2xl font-bold mb-4">Leave Your Opinion</h3>
                    <p className="text-gray-600 mb-4">
                        Share your experience with our acrylic sheets and louver products.
                    </p>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Your Feedback"
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .animate-slide-left {
    animation: slideLeft 2.5s ease-out;
  }
  .animate-slide-right {
    animation: slideRight 2.5s ease-out;
  }
`}</style>

        </section>
    );
}
