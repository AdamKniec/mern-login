import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middleware/ErrorHandling.js";
import { connectDb } from "./config/db.js";

const app = express();
connectDb();

dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Simple  server running on express");
});
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
