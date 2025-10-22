import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "bg-gradient-to-b from-white via-gray-50 to-gray-100";
  }, []);

  const navLinks = [
    { path: "/", label: "🔍 Destinations" },
    { path: "/attractions", label: "🏙 Attractions" },
    { path: "/flights", label: "🛫 Flights" },
    { path: "/hotels", label: "🏨 Hotels" },
    { path: "/itineraries", label: "📆 Itineraries" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar (Logo and MyTrips) */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        <h1 className="text-blue-700 text-2xl font-extrabold">
          ✈ Travel<span className="text-amber-500">Padi</span>
        </h1>
        <Link
          to="/mytrips"
          className="text-base sm:text-lg bg-blue-100 text-blue-700 font-medium px-4 py-2 rounded-full hover:bg-amber-500 hover:text-white transition-all shadow-sm"
        >
          💾 My Trips
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 py-3 bg-blue-500">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm sm:text-lg font-semibold px-4 py-2 rounded-3xl transition-all duration-200 ${
              location.pathname === link.path
                ? "bg-amber-500 text-white shadow-md"
                : "text-blue-50 hover:bg-blue-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
