import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    // Fetch destination details by ID (replace with your API logic)
    // Example: fetch from Amadeus or your backend
    // setDestination(fetchedData);
  }, [id]);

  // Mock data for demonstration
  const mock = {
    name: "Paris",
    country: "FR",
    bestTime: "April to June, September to November",
    image: "https://source.unsplash.com/800x400/?paris",
    rating: 4.7,
    description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    flights: [{ airline: "Air France", price: "$350" }],
    hotels: [{ name: "Hotel Le Meurice", price: "$200/night" }]
  };

  const data = destination || mock;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl shadow-blue-100 p-6">
        <img src={data.image} alt={data.name} className="w-full h-64 object-cover rounded-xl mb-6" />
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-blue-700">{data.name}</h1>
          <span className="bg-amber-500 text-white px-4 py-1 rounded-full font-semibold text-lg">
            ⭐ {data.rating}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <div className="mb-4">
          <span className="font-semibold text-blue-700">Best time to visit:</span>
          <span className="ml-2 text-gray-700">{data.bestTime}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-blue-700">Top Attractions:</span>
          <ul className="list-disc ml-6 text-gray-700">
            {data.attractions.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-blue-700">Flight Offers:</span>
          <ul className="list-disc ml-6 text-gray-700">
            {data.flights.map((f, i) => <li key={i}>{f.airline} - {f.price}</li>)}
          </ul>
        </div>
        <div>
          <span className="font-semibold text-blue-700">Hotel Accommodations:</span>
          <ul className="list-disc ml-6 text-gray-700">
            {data.hotels.map((h, i) => <li key={i}>{h.name} - {h.price}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}