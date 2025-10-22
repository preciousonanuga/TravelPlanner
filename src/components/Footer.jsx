import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-6 px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
      <div>
        <h1 className="text-blue-700 text-xl font-bold mb-1">
          ✈Travel<span className="text-amber-500">Padi</span>
        </h1>
        <p className="text-gray-600 text-sm italic">
          Explore destinations, flights, and hotels — all in one place.
        </p>
      </div>
      <span className="text-gray-500 text-sm mt-4 sm:mt-0">
        &copy; 2025 TravelPadi. All rights reserved.
      </span>
    </footer>
  );
}