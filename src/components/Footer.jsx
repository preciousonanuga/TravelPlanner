import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100 border-t border-gray-200 mt-12 py-6 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        <h1 className="text-blue-700 text-2xl font-extrabold mb-2 sm:mb-0">
          ✈ Travel<span className="text-amber-500">Padi</span>
        </h1>

        <p className="text-gray-600 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-700">TravelPadi</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
