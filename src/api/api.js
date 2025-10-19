const API_BASE = "https://test.api.amadeus.com";

let accessToken = null;

const getAccessToken = async () => {
  if (accessToken) return accessToken;

  const response = await fetch(`${API_BASE}/v1/security/oauth2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_AMADEUS_CLIENT_ID,
      client_secret: import.meta.env.VITE_AMADEUS_CLIENT_SECRET,
    }),
  });

  const data = await response.json();
  accessToken = data.access_token;
  return accessToken;
};

// 🔍 Search Cities
export const searchCities = async (keyword) => {
  const token = await getAccessToken();
  const res = await fetch(
    `${API_BASE}/v1/reference-data/locations?subType=CITY&keyword=${keyword}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  return data.data || [];
};

// 🏨 Search Hotels in a City
export const searchHotels = async (cityCode) => {
  const token = await getAccessToken();
  const res = await fetch(
    `${API_BASE}/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  return data.data || [];
};

// ✈️ Search Flights (mock example, just for demo)
export const searchFlights = async (origin, destination, date) => {
  const token = await getAccessToken();
  const res = await fetch(
    `${API_BASE}/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=1&max=3`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  return data.data || [];
};
