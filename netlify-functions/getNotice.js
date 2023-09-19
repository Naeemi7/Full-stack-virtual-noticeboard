// netlify-functions/getNotices.js

import axios from "axios";

export const handler = async (event, context) => {
  try {
    // Replace the URL with the appropriate backend API endpoint
    const response = await axios.get("http://your-backend-api-url/notices/all");

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching notices:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
