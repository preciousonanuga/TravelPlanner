import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Attractions from "./pages/Attractions";
import Destinations from "./pages/Destinations";
import FlightOffers from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Itineraries from "./pages/Itineraries";
import MyTrips from "./pages/MyTrips";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailsPage from "./components/DetailsPage";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow px-4 sm:px-8 lg:px-16 py-8">
          <Routes>
            <Route path="/" element={<Destinations />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DetailsPage />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/flights" element={<FlightOffers />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/itineraries" element={<Itineraries />} />
            <Route path="/mytrips" element={<MyTrips />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}


export default App;
