import React from 'react';

export default function Attractions() {
  return (
    <>
        <div className='bg-amber-100 container max-w-none w-full text-center mx-auto p-6 '>
            <h1 className='text-4xl shadow-* text-shadow-md font-medium p-2 text-amber-600 '>Explore Attractions & Activities</h1>
            <div className='mx-auto justify-center p-4 w-210'>
                <p className='text-xl font-light mb-4'>Browse through must-see landmarks, museums, natural wonders, and local experiences. Find detailed information including opening hours, duration, and best times to visit.</p>
            </div>
                
            <input
                type='text'
                placeholder='🔍 Search attractions by name, city, or country...'
                className='w-full flex p-2 bg-amber-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-blye-500'
                />
        </div>
    </>
  );
}
