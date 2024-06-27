import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const BASE_URL = "https://api.cdek.ru/v2";

const handler: Handler = async (event, context) => {
  const login = process.env.CDEK_LOGIN as string;
  const secret = process.env.CDEK_PASS as string;

  try {
    const requestData = {
      ...event.queryStringParameters,
      ...(event.body ? JSON.parse(event.body) : {}),
    };

    if (!requestData.action) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "X-Service-Version": "3.10.2",
        },
        body: JSON.stringify({ message: "Action is required" }),
      };
    }

    const authToken = await getAuthToken(login, secret);

    let response;

    switch (requestData.action) {
      case "offices":
        response = await getOffices(authToken, requestData);
        break;
      case "calculate":
        response = await calculate(authToken, requestData);
        break;
      default:
        return {
          statusCode: 400,
          headers: {
            "Content-Type": "application/json",
            "X-Service-Version": "3.10.2",
          },
          body: JSON.stringify({ message: "Unknown action" }),
        };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "X-Service-Version": "3.10.2",
      },
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "X-Service-Version": "3.10.2",
      },
      body: JSON.stringify({ message: error.message }),
    };
  }
};

const getAuthToken = async (login: string, secret: string) => {
  const response = await fetch(`${BASE_URL}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: login,
      client_secret: secret,
    }),
  });

  const data = await response.json();

  if (!data.access_token) {
    throw new Error("Server not authorized to CDEK API");
  }

  return data.access_token;
};

const getOffices = async (authToken: string, requestData: any) => {
  const response = await fetch(`${BASE_URL}/deliverypoints?${new URLSearchParams(requestData)}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`,
      "X-App-Name": "widget_pvz",
    },
  });
  return response.json();
};

const calculate = async (authToken: string, requestData: any) => {
  const response = await fetch(`${BASE_URL}/calculator/tarifflist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`,
      "X-App-Name": "widget_pvz",
    },
    body: JSON.stringify(requestData),
  });
  return response.json();
};

export { handler };
