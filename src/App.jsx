import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Attractions from './pages/Attractions'
import Destinations from './pages/Destinations'
import FlightOffers from './pages/Flights'
import Hotels from './pages/Hotels'
import Itineraries from './pages/Itineraries'
import MyTrips from './pages/MyTrips'
import Navbar from './components/Navbar'
import ExplorePage from './components/ExplorePage'
import DestinationCard from './components/DestinationCard'
import TripCard from './components/TripCard'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <nav className="flex items-center justify-between p-4 bg-white shadow">
        <h1 className='text-blue-500 text-2xl font-bold'>✈Travel<span className='text-amber-500'>Padi</span></h1>
        <div className='flex gap-4 bg-amber-500 p-1 rounded-4xl hover:bg-amber-700 scale-80 hover:scale-85 transition-transform'>
          <Link to="/" className=" px-4 py-3 rounded-2xl hover:bg-amber-600">🔍Destinations</Link>
          <Link to="/attractions" className="px-4 py-3 rounded-2xl hover:bg-amber-600">🏙Attractions</Link>
          <Link to="/flights" className="px-4 py-3 rounded-2xl hover:bg-amber-600">🛫Flights</Link>
          <Link to="/hotels" className="px-4 py-3 rounded-2xl hover:bg-amber-600">🏨Hotels</Link>
          <Link to="/itineraries" className="px-4 py-3 rounded-2xl hover:bg-amber-600">📆Itineraries</Link>
          <Link to="/mytrips" className="px-4 py-3 rounded-2xl hover:bg-amber-600">💾My Trips</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Destinations />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/flights" element={<FlightOffers />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/mytrips" element={<MyTrips />} />
      </Routes>
    </Router>
  )
}

export default App
