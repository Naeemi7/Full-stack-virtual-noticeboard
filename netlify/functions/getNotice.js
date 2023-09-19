// netlify-functions/getNotices.js

/* import axios from "axios";

export const handler = async (event, context) => {
  try {
    // Replace the URL with the appropriate backend API endpoint
    const response = await axios.get("http://localhost:3000/notices/all");

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
 */

import Notice from "../backend/models/Notice.js";

export const handler = async (event, context) => {
  try {
    const allNotice = await Notice.find();

    if (!allNotice || allNotice.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "No Notices Found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(allNotice),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error happened",
        error: error.toString(),
      }),
    };
  }
};
