import express from "express";
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Simple backend starting point");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
