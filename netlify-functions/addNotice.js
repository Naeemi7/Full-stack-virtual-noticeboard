// netlify-functions/addNotice.js

import axios from "axios";

export const handler = async (event, context) => {
  try {
    const requestBody = JSON.parse(event.body);

    // Replace the URL with the appropriate backend API endpoint
    await axios.post("http://your-backend-api-url/notices/new", requestBody);

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Notice added successfully" }),
    };
  } catch (error) {
    console.error("Error adding notice:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
