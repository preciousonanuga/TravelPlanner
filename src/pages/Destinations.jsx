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
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          <DestinationCard 
            name="Paris, France"
            description="The city of lights, known for its art, fashion, and iconic landmarks like the Eiffel Tower."
            imageUrl="https://example.com/paris.jpg"
          />
          <DestinationCard 
            name="Tokyo, Japan"
            description="A bustling metropolis blending tradition and modernity, famous for its cuisine and technology."
            imageUrl="https://example.com/tokyo.jpg"
          />
          <DestinationCard 
            name="New York City, USA"
            description="The city that never sleeps, offering world-class entertainment, dining, and cultural experiences."
            imageUrl="https://example.com/nyc.jpg"
          />
          <DestinationCard 
            name="Sydney, Australia"
            description="Known for its stunning harbor, iconic Opera House, and beautiful beaches."
            imageUrl="https://example.com/sydney.jpg"
          />
          {/* Add more DestinationCards as needed */}
        </div>
      </div>
    </>
  );
}