const connectToDatabase = require("./dbConnection.js");

const Notice = require("./Notice.js");

const dotenv = require("dotenv");

dotenv.config();
const handler = async (event, context) => {
  try {
    await connectToDatabase();
    console.log("Received event body:", event.body);
    const { text, author } = JSON.parse(event.body);
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Request body is empty" }),
      };
    }
    const newNotice = await Notice.create({
      text,
      author,
    });

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "New Notice created", newNotice }),
    };
  } catch (error) {
    console.error("Error adding notice:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
module.exports = { handler };
