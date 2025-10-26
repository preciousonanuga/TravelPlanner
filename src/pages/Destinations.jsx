import React, { useState } from "react";
import DestinationCard from "../components/DestinationCard";
import getAccessToken from "../utils/getAccessToken";

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setDestinations([]);

    try {
      const token = await getAccessToken();
      if (!token) throw new Error("No access token");

      const res = await fetch(
        `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${encodeURIComponent(
          searchTerm
        )}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      console.log("API Response:", data);

      if (Array.isArray(data.data)) {
        setDestinations(data.data);
      } else {
        setDestinations([]);
      }
    } catch (err) {
      console.error("Fetch failed:", err);
      alert("Error fetching destinations");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center mb-6">
        🌍 Search Travel Destinations
      </h1>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="e.g. London, Paris, Tokyo"
          className="border rounded-full px-5 py-3 w-full sm:w-96 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Destination Results */}
      {loading ? (
        <p className="text-center text-gray-500 mt-10">Loading...</p>
      ) : destinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center max-w-6xl mx-auto">
          {destinations.map((d) => (
            <DestinationCard key={d.id} dest={d} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          Try searching for a city to explore!
        </p>
      )}
    </div>
  );
}
