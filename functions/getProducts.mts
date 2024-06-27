import { Handler } from "@netlify/functions";

const API_ENDPOINT = "https://goshamartynovich.retailcrm.ru/api/v5/store/products";
const API_KEY = "itjKrlcN8pDq2cMNtsipVTqzO3cNQhvM";

const handler: Handler = async (event, context) => {
  try {
    const response = await fetch(`${API_ENDPOINT}?apiKey=${API_KEY}`);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // Add this line
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};

export { handler };
