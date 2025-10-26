import React, { useState } from 'react';
import { getAccessToken } from '../api/api';
import DestinationCard from '../components/DestinationCard';

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    // 🧭 Prevent empty searches
    if (!searchTerm.trim()) {
      setError('Please enter a destination name.');
      setDestinations([]);
      return;
    }

    setLoading(true);
    setError('');

    const token = await getAccessToken();
    if (!token) {
      setError('Failed to get access token. Please try again.');
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

      // 🧩 Defensive check to avoid crashes
      if (Array.isArray(data.data)) {
        setDestinations(data.data);
        if (data.data.length === 0) {
          setError('No destinations found.');
        }
      } else {
        setDestinations([]);
        setError('Unexpected response format from API.');
      }
    } catch (error) {
      console.error('Search error:', error);
      setError('Failed to fetch destinations.');
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

        {/* Search bar */}
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
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Searching...
              </span>
            ) : (
              'Search'
            )}
          </button>
        </div>

        {/* Error or info messages */}
        {error && (
          <p className="text-center text-red-500 text-sm mb-4">{error}</p>
        )}

        {/* Results grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(dest => (
            <DestinationCard key={dest.id || dest.iataCode} dest={dest} />
          ))}

          {!loading && !error && destinations.length === 0 && (
            <p className="text-center text-gray-400 col-span-full">
              No destinations found yet. Try searching for a city 🌍
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
