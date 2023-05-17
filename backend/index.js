import express from "express";
const app = express();
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Simple  server running on expresssssss");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
