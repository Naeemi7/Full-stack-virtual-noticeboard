const connectToDatabase = require("./dbConnection.js");

const Notice = require("./Notice.js");

const dotenv = require("dotenv");

dotenv.config();
const handler = async (event, context) => {
  try {
    await connectToDatabase();
    const deletedNotice = await Notice.deleteMany();

    if (!deletedNotice.deletedCount || deletedNotice.deletedCount === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Notice not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "The Notice is cleared", deletedNotice }),
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
