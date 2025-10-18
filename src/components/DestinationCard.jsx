import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DestinationCard() {
  return (
    <>
      <div>
        <div className='container mx-auto w-full flex flex-wrap flex-row p-4 gap-1'>
          <div className='shadow-lg mx-auto w-64'></div>
        </div>
      </div>
    </>
  );
}



export function AmadeusDestinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchAmadeusData = async () => {
      try {
        // 1️⃣ Get access token
        const tokenResponse = await fetch(
          "https://test.api.amadeus.com/v1/security/oauth2/token",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              grant_type: "client_credentials",
              client_id: "YOUR_CLIENT_ID",
              client_secret: "YOUR_CLIENT_SECRET",
            }),
          }
        );

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // Use token to fetch travel destinations
        const response = await fetch(
          "https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=paris",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = await response.json();
        setDestinations(data.data || []);
      } catch (err) {
        console.error("Error fetching Amadeus data:", err);
      }
    };

    fetchAmadeusData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {destinations.map((dest) => (
        <div
          key={dest.id}
          className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[45%] lg:w-[30%] flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          {/* Image placeholder */}
          <div className="relative overflow-hidden">
            <img
              src={https://source.unsplash.com/400x250/?${dest.name}}
              alt={dest.name}
              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute top-2 right-2 bg-black text-white text-sm font-semibold px-3 py-1 rounded-md opacity-80">
              🌍 {dest.address?.countryCode}
            </div>
          </div>

          <div className="flex flex-col flex-grow justify-between p-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {dest.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {dest.detailedName || "Beautiful travel destination"}
            </p>

            <div className="mt-4 flex justify-center">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}