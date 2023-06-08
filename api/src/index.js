import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

require("dotenv").config();

const app = express();

// Parse JSON request bodies
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.get("/", (req, res) => {
  res.send("Welcome to the RestroomFinder API!");
});

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
