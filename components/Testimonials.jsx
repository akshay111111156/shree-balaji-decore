"use client";

import { useEffect, useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [current, setCurrent] = useState(0);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);

  /* FETCH REVIEWS */
  useEffect(() => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setReviews(data || []));
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    if (!reviews.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [reviews]);

  /* SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !feedback) {
      alert("Please fill required fields");
      return;
    }

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, city, feedback, rating }),
    });

    const data = await res.json();
    setReviews((prev) => [data, ...prev]);

    const msg = `⭐ New Client Review

Name: ${name}
City / Profession: ${city}
Rating: ${rating} Star(s)
Feedback: ${feedback}`;

    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setName("");
    setCity("");
    setFeedback("");
    setRating(5);
  };

  const review = reviews[current];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-14 pl-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Client Reviews
          </h2>

          <p className="mt-3 text-base font-bold text-gray-600">
            ⭐ Rated <span className="text-gray-900">4.8/5</span> by 100+ customers
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* REVIEW CARD */}
          {review && (
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex mb-4">
                {Array.from({ length: review.rating || 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl lg:text-2xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-lg lg:text-xl italic text-gray-700 leading-relaxed mb-6">
                “{review.feedback}”
              </p>

              <div className="font-semibold text-gray-900 text-lg lg:text-xl">
                {review.name}
              </div>
              <div className="text-sm text-gray-500">
                {review.city}
              </div>

              <div className="flex gap-2 mt-6">
                {reviews.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2.5 w-2.5 rounded-full ${
                      i === current ? "bg-green-700" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* FORM */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
              Share Your Experience
            </h3>

            <p className="text-gray-600 mt-2 mb-6 text-sm">
              Your feedback helps us improve our products and serve you better.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
                placeholder="City / Profession (optional)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <textarea
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
                rows="4"
                placeholder="Your Feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Rate Your Experience
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-3xl ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      } hover:scale-110 transition`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition shadow-md">
                Send Feedback on WhatsApp
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              ⭐ We may feature your review on our website
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
