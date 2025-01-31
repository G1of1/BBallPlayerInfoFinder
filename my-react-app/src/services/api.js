const apiKey = ""; // Your API Key
export const searchPlayer = async (player) =>
{
    const response = await fetch(`https://v1.basketball.api-sports.io/players?search=${player}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v1.basketball.api-sports.io",
            "x-rapidapi-key": apiKey
        }
    });

    const data = await response.json();
    return data.response;

}