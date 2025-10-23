import React, { useState } from 'react';

const FILTERS = [
  "All",
  "Landmarks",
  "Museums",
  "Nature",
  "Religious",
  "Entertainment",
];

export default function Attractions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleSearch = () => {
    // Replace this with your actual search logic
    console.log(`Searching for: "${searchTerm}" in category: "${selectedFilter}"`);
    // Example: fetchAttractions(searchTerm, selectedFilter);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-2">
      <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-white/80 rounded-2xl shadow-2xl shadow-blue-100 p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 mb-4 text-center">
          Explore Attractions & Activities
        </h1>
        <div className="mx-auto mb-6 max-w-2xl">
          <p className="text-base sm:text-lg lg:text-xl font-light text-gray-700 text-center">
            Browse through must-see landmarks, museums, natural wonders, and local experiences. Find detailed information including opening hours, duration, and best times to visit.
          </p>
        </div>
        {/* Search bar and button */}
        <div className="flex items-center rounded-full bg-amber-50 border border-gray-300 shadow-inner max-w-xl mx-auto px-2 py-1 gap-2 mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="🔍 Search attractions by name, city, or country..."
            className="flex-grow bg-transparent p-3 focus:outline-none rounded-full"
          />
          <button
            className="bg-blue-600 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-full transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {/* Filter flexbox */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {FILTERS.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full font-medium transition
                ${selectedFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-amber-500 text-amber-700 hover:bg-amber-400'}
              `}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        {/* Results would go here */}
      </div>
    </div>
  );
}