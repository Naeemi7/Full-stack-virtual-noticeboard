import { StatusCodes } from "http-status-codes";
import Notice from "../models/Notice.js";

export const getAllNotice = async (req, res) => {
  try {
    const allNotice = await Notice.find();

    if (!allNotice || allNotice.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "No Notices Found" });
    }

    return res.status(StatusCodes.OK).json(allNotice);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};

export const createNotice = async (req, res) => {
  const { text, author } = req.body;
  try {
    const newNotice = await Notice.create({ text, author });

    return res
      .status(StatusCodes.CREATED)
      .json({ message: "New Notice created", newNotice });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error Found", error: error.toString() });
  }
};

export const clearNotice = async (req, res) => {
  try {
    const deletedNotice = await Notice.deleteMany();

    if (!deletedNotice.deletedCount || deletedNotice.deletedCount === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Notice not found" });
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "The Notice is cleared", deletedNotice });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};
