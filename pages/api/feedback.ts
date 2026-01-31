import type { NextApiRequest, NextApiResponse } from "next";

let feedbackStore = [
  {
    id: 1,
    name: "Rajesh Patel",
    city: "Interior Contractor, Surat",
    feedback:
      "Excellent acrylic quality and timely delivery. Finishing was perfect for our showroom.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rakesh Shah",
    city: "Signage Manufacturer, Ahmedabad",
    feedback:
      "Very good acrylic sheets. Rates are reasonable and quality is consistent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Pooja Mehta",
    city: "Interior Designer, Mumbai",
    feedback:
      "Designer look and premium quality. Clients were very happy.",
    rating: 4,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json(feedbackStore);
  }

  if (req.method === "POST") {
    const { name, city, feedback } = req.body;

    if (!name || !feedback) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const newFeedback = {
      id: Date.now(),
      name,
      city,
      feedback,
      rating: 5,
    };

    feedbackStore.unshift(newFeedback);

    res.status(200).json(newFeedback);
  }
}
