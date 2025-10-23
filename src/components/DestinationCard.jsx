import React from 'react';
import { Link } from "react-router-dom";

export default function DestinationCard({ dest }) {
  // Mock rating (since Amadeus API doesn't provide ratings)
  const rating = (Math.random() * 2 + 3).toFixed(1); // 3.0 - 5.0

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[45%] lg:w-[30%] flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={
          dest.name
          ? `https://source.unsplash.com/400x250/?${dest.name},${dest.address?.countryCode || ""}`
          : "https://source.unsplash.com/400x250/?travel"
        }
  alt={dest.name || "Travel Destination"}
  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
/>
        {/* Rating badge */}
        <div className="absolute top-2 left-2 bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-md shadow opacity-90">
          ⭐ {rating}
        </div>
        {/* Country badge */}
        <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-md opacity-80">
          🌍 {dest.address?.countryCode}
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-between p-4">
        <h3 className="text-xl font-semibold text-gray-800">{dest.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{dest.detailedName || "Beautiful travel destination"}</p>
        <div className="mt-4 flex justify-center">
          <Link
            to={`/destinations/${dest.id}`}
            className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}