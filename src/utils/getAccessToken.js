// src/utils/getAccessToken.js
export default async function getAccessToken() {
  const clientId = import.meta.env.VITE_AMADEUS_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_AMADEUS_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error("Missing Amadeus API credentials");
    return null;
  }

  try {
    const response = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });

    const data = await response.json();
    return data.access_token;
  } catch (err) {
    console.error("Error fetching access token:", err);
    return null;
  }
}
