import Notice from "../../backend/models/Notice.js";

export const handler = async (event, context) => {
  console.log("Received event body:", event.body);

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Request body is empty" }),
      };
    }

    const requestBody = JSON.parse(event.body);
    const { text, author } = requestBody;

    if (!text || !author) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid request data" }),
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
