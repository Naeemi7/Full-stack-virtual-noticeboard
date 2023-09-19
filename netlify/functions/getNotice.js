import Notice from "../../backend/models/Notice.js"; // Adjust the path as needed

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
