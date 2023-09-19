const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const noticeSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
    get: function () {
      return this._doc.date.toLocaleDateString();
    },
  },
});

const Notice = model("Notice", noticeSchema);

module.exports = Notice;
