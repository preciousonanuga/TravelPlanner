import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Attractions from '../pages/Attractions'
import Destinations from '../pages/Destinations'
import FlightOffers from '../pages/Flights'
import Hotels from '../pages/Hotels'
import Itineraries from '../pages/Itineraries'
import MyTrips from '../pages/MyTrips'
import ExplorePage from '../components/ExplorePage'
import DestinationCard from '../components/DestinationCard'
import TripCard from '../components/TripCard'
import Footer from '../components/Footer'

export default function Navbar() {
  return (
    <Router>
      <nav className="flex items-center justify-between px-3 py-6 mb-5 bg-white shadow sm: md:">
        <h1 className='text-blue-600 text-2xl font-bold'>✈Travel<span className='text-amber-500'>Padi</span></h1>
      </nav>
      
      <div className='justify-center flex w-250 gap-4 bg-amber-500 px-0.5 py-3 mx-auto rounded-4xl w hover:bg-blue-700 scale-80 hover:scale-85 transition-transform'>
          <Link to="/" className="text-blue-800 font-extrabold px-4 py-3 rounded-2xl hover:bg-amber-500 hover:text-white">🔍Destinations</Link>
          <Link to="/attractions" className="text-blue-800 font-extrabold px-4 py-3 rounded-2xl hover:bg-amber-500 hover:text-white">🏙Attractions</Link>
          <Link to="/flights" className="text-blue-800 font-extrabold px-4 py-3 rounded-2xl hover:bg-amber-500 hover:text-white">🛫Flights</Link>
          <Link to="/hotels" className="text-blue-800 font-extrabold px-4 py-3 rounded-2xl hover:bg-amber-500  hover:text-white">🏨Hotels</Link>
          <Link to="/itineraries" className="text-blue-800 font-extrabold px-4 py-3 rounded-2xl hover:bg-amber-500 hover:text-white">📆Itineraries</Link>
          <Link to="/mytrips" className="text-blue-800 font-extrabold size- px-4 py-3 rounded-2xl hover:bg-amber-500 hover:text-white">💾My Trips</Link>
      </div>

      <Routes>
        <Route path="/" element={<Destinations />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/flights" element={<FlightOffers />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/mytrips" element={<MyTrips />} />
      </Routes>

      
    </Router>
  );
}
