import Notice from "../../backend/models/Notice.js"; // Adjust the path as needed

export const handler = async (event, context) => {
  try {
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
