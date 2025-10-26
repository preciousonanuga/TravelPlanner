import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

export default function DetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const dest = location.state?.dest; // ✅ destination passed from DestinationCard

  // Mock data if none was passed
  const mock = {
    name: "Paris",
    country: "FR",
    bestTime: "April to June, September to November",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    rating: 4.7,
    description:
      "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    flights: [{ airline: "Air France", price: "$350" }],
    hotels: [{ name: "Hotel Le Meurice", price: "$200/night" }],
  };

  const data = dest
    ? {
        name: dest.name,
        country: dest.address?.countryCode || "N/A",
        bestTime: "Year-round", // Placeholder
        image:
          dest.imageUrl ||
          `https://images.unsplash.com/photo-1507525428034-b723cf961d3e`,
        rating: (Math.random() * 2 + 3).toFixed(1),
        description:
          dest.detailedName ||
          "A beautiful destination waiting to be explored.",
        attractions: ["Local Attractions", "Cultural Sites", "City Tours"],
        flights: [{ airline: "Sample Airline", price: "$400" }],
        hotels: [{ name: "Sample Hotel", price: "$150/night" }],
      }
    : mock;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl shadow-blue-100 p-6">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-blue-700">{data.name}</h1>
          <span className="bg-amber-500 text-white px-4 py-1 rounded-full font-semibold text-lg">
            ⭐ {data.rating}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <div className="mb-4">
          <span className="font-semibold text-blue-700">
            Best time to visit:
          </span>
          <span className="ml-2 text-gray-700">{data.bestTime}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-blue-700">Top Attractions:</span>
          <ul className="list-disc ml-6 text-gray-700">
            {data.attractions.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-blue-700">Flight Offers:</span>
          <ul className="list-disc ml-6 text-gray-700">
            {data.flights.map((f, i) => (
              <li key={i}>
                {f.airline} - {f.price}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <span className="font-semibold text-blue-700">
            Hotel Accommodations:
          </span>
          <ul className="list-disc ml-6 text-gray-700">
            {data.hotels.map((h, i) => (
              <li key={i}>
                {h.name} - {h.price}
              </li>
            ))}
          </ul>
        </div>
        <Link
          to="/destinations"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          ← Back to Search
        </Link>
      </div>
    </div>
  );
}
