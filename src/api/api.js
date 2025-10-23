const AMADEUS_CLIENT_ID = "12ojDlSF2FCkrXooddcjvKpPG232xcig";
const AMADEUS_CLIENT_SECRET = "FekdBbCbp1Pf0fqK";
const TOKEN_URL = "https://test.api.amadeus.com/v1/security/oauth2/token";

export async function getAccessToken() {
  try {
    const response = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: AMADEUS_CLIENT_ID,
        client_secret: AMADEUS_CLIENT_SECRET,
      }),
    });

    if (!response.ok) {
      console.error("Failed to fetch Amadeus token:", response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem("amadeus_token", data.access_token);
      return data.access_token;
    } else {
      console.error("Failed to fetch Amadeus token:", data);
      return null;
    }
  } catch (error) {
    console.error("Error fetching Amadeus token:", error);
    return null;
  }
}