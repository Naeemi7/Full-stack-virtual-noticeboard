// netlify-functions/clearNotices.js

import axios from "axios";

export const handler = async (event, context) => {
  try {
    // Replace the URL with the appropriate backend API endpoint
    await axios.delete("http://your-backend-api-url/notices/clear");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "All notices cleared successfully" }),
    };
  } catch (error) {
    console.error("Error clearing notices:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
