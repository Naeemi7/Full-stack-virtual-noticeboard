const connectToDatabase = require("./dbConnection.js");

const Notice = require("./Notice.js");

const dotenv = require("dotenv");

dotenv.config();
const handler = async (event, context) => {
  try {
    await connectToDatabase();
    console.log("Fetching notices from database...");
    const allNotice = await Notice.find();
    console.log("Fetched notices:", allNotice);

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

module.exports = { handler };
