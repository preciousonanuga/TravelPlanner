import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

export default function DetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const destination = location.state?.dest;

  // Fallback for direct visits
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-center px-4">
        <div>
          <p className="mb-4">
            Destination details unavailable. Please return to the search page.
          </p>
          <Link
            to="/destinations"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            ← Back to Search
          </Link>
        </div>
      </div>
    );
  }

  // Use passed image or generate a fresh Unsplash one
  const imageUrl =
    location.state?.imageUrl ||
    `https://source.unsplash.com/900x600/?${encodeURIComponent(
      destination.name || "travel"
    )},landmark`;

  // Mock demo info
  const mock = {
    rating: (Math.random() * 2 + 3).toFixed(1),
    bestTime: "April to September",
    attractions: [
      "Local Museum",
      "Historic Center",
      "Popular Market",
      "Beautiful Beach",
    ],
    flights: [
      { airline: "SkyJet Airlines", price: "$320" },
      { airline: "AeroFly", price: "$410" },
    ],
    hotels: [
      { name: "Grand View Hotel", price: "$150/night" },
      { name: "Sunset Resort", price: "$180/night" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <img
              src={imageUrl}
              alt={destination.name}
              className="w-full h-80 md:h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";
              }}
            />
            <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-md font-semibold">
              ⭐ {mock.rating}
            </div>
            <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-md text-sm">
              🌍 {destination.address?.countryCode || "N/A"}
            </div>
          </div>

          {/* Info Section */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-blue-700 mb-2">
                {destination.name}
              </h1>
              <p className="text-gray-600 mb-4">
                {destination.detailedName ||
                  destination.address?.countryName ||
                  "A beautiful destination worth exploring."}
              </p>

              <div className="mb-4">
                <span className="font-semibold text-blue-700">
                  Best Time to Visit:
                </span>{" "}
                <span className="text-gray-700">{mock.bestTime}</span>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-blue-700">
                  Top Attractions:
                </span>
                <ul className="list-disc ml-6 text-gray-700">
                  {mock.attractions.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-blue-700">
                  Flight Offers:
                </span>
                <ul className="list-disc ml-6 text-gray-700">
                  {mock.flights.map((f, i) => (
                    <li key={i}>
                      {f.airline} – {f.price}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-blue-700">
                  Hotel Accommodations:
                </span>
                <ul className="list-disc ml-6 text-gray-700">
                  {mock.hotels.map((h, i) => (
                    <li key={i}>
                      {h.name} – {h.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              to="/destinations"
              className="inline-block mt-6 bg-blue-600 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-full transition self-start"
            >
              ← Back to Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}