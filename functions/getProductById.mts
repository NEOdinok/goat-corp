import { Handler } from "@netlify/functions";

const API_ENDPOINT = "https://goshamartynovich.retailcrm.ru/api/v5/store/products";

const handler: Handler = async (event, context) => {
  const id = event?.queryStringParameters?.id;

  console.log("[getProductById] got id:", id);

  if (!id) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ error: "Product ID is required" }),
    };
  }

  try {
    const response = await fetch(
      `${API_ENDPOINT}?apiKey=${process.env.VITE_RETAIL_CRM_API}&filter[ids][]=${id}`,
    );
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
    console.error("Error fetching product by ID:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};

export { handler };
