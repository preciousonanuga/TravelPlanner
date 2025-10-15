import React from 'react';

export default function Destinations() {
  return (
    <>
      <div className='bg-amber-100 container max-w-none w-full text-center mx-auto p-10'>
        <h1 className='text-4xl p-5 text-amber-600 '>Discover Amazing Destinations</h1>
        <p >
          Search through popular destinations worldwide and add them to your personalized itinerary.
          Each destination includes top attractions, best visiting times, and local insights.
        </p>
        
        <label htmlFor='search-destination' className='bg-cyan-950'></label>
        <input
          type='text'
          value={""} 
          placeholder='Search for destinations'
          className='flex items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'
        />

      </div>

    </>
  );
}
