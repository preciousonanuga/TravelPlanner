import React from 'react';

export default function FlightOffers() {
  return (
    <>
      <div className='bg-amber-100 min-h-screen w-full p-6'>
        <h1 className='text-4xl font-medium p-2 text-amber-600 text-center'>Find Accomodation</h1>
        <div className='mx-auto justify-center p-4 max-w-2xl'>
          <p className='text-xl font-light mb-4 text-center'>
            Discover hotels, resorts, and unique stays for your destination. Filter by amenities, price range, and location to find your perfect place to stay.
          </p>
        </div>

        <div className='bg-white text-gray-800 flex flex-col gap-6 rounded-xl border shadow-lg max-w-2xl w-full mx-auto p-4 sm:p-8'>
          {/* Card Header */}
          <div className='flex items-center mb-2'>
            <h3 className='text-lg sm:text-xl font-semibold'>Search Hotels</h3>
          </div>
          {/* Grid for fields */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>Destinations</label>
              <input type="text" className='w-full border rounded px-2 py-2' placeholder="City or Airport" />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Check-in</label>
              <input type="date" className='w-full border rounded px-2 py-2' placeholder="City or Airport" />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Check-out</label>
              <input type="date" className='w-full border rounded px-2 py-2' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Guests</label>
              <input type="number" min="1" className='w-full border rounded px-2 py-2' placeholder="1" />
            </div>
          </div>
          {/* Button */}
          <div className='flex justify-center'>
            <button className='bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg transition w-full sm:w-2/3 hover:bg-blue-500'>
              🏨 Search Hotels
            </button>
          </div>
        </div>
      </div>
    </>
  );
}