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
import TripCard from "./components/TripCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Destinations />
      <Footer />
    </>
  );
}

export default App;
