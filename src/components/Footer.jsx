import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-6 px-4 flex flex-col sm:flex-row items-center justify-between">
      <h1 className="text-blue-700 text-xl font-bold mb-2 sm:mb-0">
        ✈Travel<span className="text-amber-500">Padi</span>
      </h1>
      <span className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TravelPadi. All rights reserved.
      </span>
    </footer>
  );
}