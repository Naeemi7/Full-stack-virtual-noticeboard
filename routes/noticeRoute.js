import express from "express";
import {
  clearNotice,
  createNotice,
  getAllNotice,
} from "../controllers/noticeControllers.js";

const router = express.Router();

router.get("/all", getAllNotice);
router.post("/new", createNotice);
router.delete("/clear", clearNotice);

export default router;
