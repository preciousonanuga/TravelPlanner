import React from 'react';
import DestinationCard from '../components/DestinationCard';

export default function Destinations() {
  return (
    <>
      <div className='bg-amber-100 container max-w-none w-full text-center mx-auto p-6 '>
        <h1 className='text-4xl shadow-* text-shadow-md font-medium p-2 text-amber-600 '>Discover Amazing Destinations</h1>
        <div className='mx-auto justify-center p-4 w-210'>
          <p className='text-xl font-light mb-4'>Search through popular destinations worldwide and add them to your personalized itinerary. Each destination includes top attractions, best visiting times, and local insights.</p>
        </div>
        
        <input
          type='text'
          placeholder='🔍 Search for destinations...'
          className='w-full flex p-2 bg-amber-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-blye-500'
        />

        <DestinationCard />
      </div>

    </>
  );
}