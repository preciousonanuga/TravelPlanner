// Getting destinations
export async function getDestinations(destinations) {

    const response = await fetch(apiURL, {
        'Content-Type': 'application/json',
        authorization: `Bearer 17|OAkvh0PYN4VRJL25blablablablablabla1704`
    });

    if(!response.ok) {
        throw new Error("Server might be down for now!");
    }
    return response.json();
}

// Saving destinations
export async function saveDestinations(MyTrips) {

    const response = await fetch (apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer 17|OAkvh0PYN4VRJL25blablablablablabla`,
        },
        body: JSON.stringify();

    })
}

