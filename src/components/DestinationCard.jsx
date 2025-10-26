import React from "react";
import { Link } from "react-router-dom";

// Manual image mapping for demo
const destinationImages = {
  Paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  London: "https://images.unsplash.com/photo-1556906781-9a412a1e9b39",
  Tokyo: "https://images.unsplash.com/photo-1549693578-d683be217e58",
  Lagos: "https://images.unsplash.com/photo-1605559424843-9e02a1e6c6c7",
  Dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  "New York": "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59",
  Rome: "https://images.unsplash.com/photo-1526481280695-3c720685208b",
  Nairobi: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  "Cape Town": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc",
  Barcelona: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
};

export default function DestinationCard({ dest }) {
  const rating = (Math.random() * 2 + 3).toFixed(1);
  const imageUrl =
    destinationImages[dest.name?.trim()] ||
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full sm:w-[45%] lg:w-[30%] transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image container */}
      <div className="relative w-full aspect-[4/3]">
        <img
          src={imageUrl}
          alt={dest.name || "Travel Destination"}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />

        {/* Rating badge */}
        <div className="absolute top-2 left-2 bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-md shadow opacity-90">
          ⭐ {rating}
        </div>

        {/* Country badge */}
        {dest.address?.countryCode && (
          <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-md opacity-80">
            🌍 {dest.address.countryCode}
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between p-4 h-[150px]">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
          {dest.name}
        </h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {dest.detailedName || "Beautiful travel destination awaiting you."}
        </p>
        <div className="mt-3 flex justify-center">
          <Link
            to={`/destinations/${dest.id}`}
            state={{ dest }} // ✅ Pass the whole object
            className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
