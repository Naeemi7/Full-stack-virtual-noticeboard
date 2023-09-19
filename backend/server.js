import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import noticeRoute from "./routes/noticeRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const corsOption = {
  origin: "*", // You might want to restrict this to specific origins in a production environment.
  methods: ["HEAD", "GET", "POST", "PATCH", "DELETE"],
};

app.use(cors(corsOption));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

app.use("/notices", noticeRoute);

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
  console.log(`Visit http://localhost:${port} in your browser`);
});
