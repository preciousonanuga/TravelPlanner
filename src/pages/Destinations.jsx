import React, { useState } from 'react';
import { getAccessToken } from '../api/api';
import DestinationCard from '../components/DestinationCard'; // <-- Import the card

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const token = await getAccessToken();
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(
        `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${encodeURIComponent(searchTerm)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setDestinations(data.data || []);
    } catch (error) {
      setDestinations([]);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-2">
      <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-white/80 rounded-2xl shadow-2xl shadow-blue-100 p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 mb-4 text-center">
          Search Travel Destinations
        </h1>
        <div className="flex items-center rounded-full bg-blue-50 border border-gray-300 shadow-inner max-w-xl mx-auto px-2 py-1 gap-2 mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="🔍 Enter city or destination..."
            className="flex-grow bg-transparent p-3 focus:outline-none rounded-full"
          />
          <button
            className="bg-blue-600 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-full transition"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        {/* Result grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(dest => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
          {!loading && destinations.length === 0 && (
            <p className="text-center text-gray-400 col-span-full">No destinations found.</p>
          )}
        </div>
      </div>
    </div>
  );
}