import { Schema, model } from "mongoose";

const noticeSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Notice = model("Notice", noticeSchema);

export default Notice;
