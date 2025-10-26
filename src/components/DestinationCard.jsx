import React from "react";
import { Link } from "react-router-dom";

export default function DestinationCard({ dest }) {
  const rating = (Math.random() * 2 + 3).toFixed(1); // Random 3.0–5.0 rating

  // Create keywords safely (skip undefined/null)
  const keywords = [
    dest.name || "",
    dest.address?.countryName || "",
    "tourism",
    "landmark",
    "skyline",
    "nature",
    "travel",
  ]
    .filter(Boolean)
    .join(",");

  // Random signature to force unique images from Unsplash
  const cacheBuster = Math.floor(Math.random() * 1000000);
  const imageUrl = `https://source.unsplash.com/800x600/?${encodeURIComponent(
    keywords
  )}&sig=${cacheBuster}`;

  return (
    <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
        <img
          src={imageUrl}
          alt={dest.name || "Destination"}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";
          }}
        />
        <div className="absolute top-2 left-2 bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-md shadow">
          ⭐ {rating}
        </div>
        <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-md">
          🌍 {dest.address?.countryCode || "N/A"}
        </div>
      </div>

      <div className="flex flex-col flex-grow justify-between p-4 text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
          {dest.name}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          {dest.detailedName || dest.address?.countryName || "Beautiful place"}
        </p>
        <div className="mt-4">
          <Link
            to={`/destinations/${dest.id}`}
            state={{ dest, imageUrl }}
            className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
