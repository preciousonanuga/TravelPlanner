// src/api.js
const AMADEUS_AUTH_URL = "https://test.api.amadeus.com/v1/security/oauth2/token";
const AMADEUS_API_URL = "https://test.api.amadeus.com/v1/reference-data/locations";

/**
 * Get a new access token from Amadeus
 */
export async function getAccessToken(clientId, clientSecret) {
  const response = await fetch(AMADEUS_AUTH_URL, {
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
}

/**
 * Fetch destinations (cities) using the token
 */
export async function getDestinations(accessToken, keyword = "paris") {
  const response = await fetch(
    ${AMADEUS_API_URL}?subType=CITY&keyword=${keyword},
    {
      headers: {
        Authorization: Bearer ${accessToken},
      },
    }
  );
  const data = await response.json();
  return data.data || [];
}

// // Getting destinations
// export async function getDestinations(destinations) {

//     const response = await fetch(apiURL, {
//         'Content-Type': 'application/json',
//         authorization: `Bearer 17|OAkvh0PYN4VRJL25blablablablablabla1704`
//     });

//     if(!response.ok) {
//         throw new Error("Server might be down for now!");
//     }
//     return response.json();
// }

// // Saving destinations
// export async function saveDestinations(MyTrips) {

//     const response = await fetch (apiURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             authorization: `Bearer 17|OAkvh0PYN4VRJL25blablablablablabla`,
//         },
//         body: JSON.stringify();

//     })
// }

