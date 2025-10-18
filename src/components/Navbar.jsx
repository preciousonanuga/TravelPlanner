import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Attractions from "../pages/Attractions";
import Destinations from "../pages/Destinations";
import FlightOffers from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Itineraries from "../pages/Itineraries";
import MyTrips from "../pages/MyTrips";
import ExplorePage from "./DetailsPage";
import DestinationCard from "../components/DestinationCard";
import TripCard from "../components/TripCard";
import Footer from "../components/Footer";

export default function Navbar() {
  useEffect(() => {
    document.body.className = "bg-amber-100";
  });

  return (
    <Router>
      <div className="flex items-center justify-between px-3 py-6 mb-5 shadow sm: md:">
        <h1 className="text-blue-700 text-2xl font-bold">
          ✈Travel<span className="text-amber-500">Padi</span>
        </h1>
      </div>

      <div className="justify-center flex w-320 gap-8 tracking-wider leading-tight bg-amber-500 px-0.5 py-3 mx-auto rounded-4xl w hover:bg-blue-400 scale-70 hover:scale-65 transition-transform">
        <Link
          to="/"
          className="text-xl text-blue-800 font-bold px-4 py-3 rounded-3xl hover:bg-amber-500 hover:text-white"
        >
          🔍 Destinations
        </Link>
        <Link
          to="/attractions"
          className="text-xl text-blue-800 font-bold px-4 py-3 rounded-3xl hover:bg-amber-500 hover:text-white"
        >
          🏙 Attractions
        </Link>
        <Link
          to="/flights"
          className="text-xl text-blue-800 font-bold px-4 py-3 rounded-3xl hover:bg-amber-500 hover:text-white"
        >
          🛫 Flights
        </Link>
        <Link
          to="/hotels"
          className="text-xl text-blue-800 font-bold px-4 py-3 rounded-3xl hover:bg-amber-500 hover:text-white"
        >
          🏨 Hotels
        </Link>
        <Link
          to="/itineraries"
          className="text-xl text-blue-800 font-bold px-4 py-3 rounded-3xl hover:bg-amber-500 hover:text-white"
        >
          📆 Itineraries
        </Link>
        <Link
          to="/mytrips"
          className="text-xl text-blue-800 font-bold size- px-4 py-3 rounded-3xl hover:bg-amber-500 hover:text-white"
        >
          💾 My Trips
        </Link>
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
