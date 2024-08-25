import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import employeeRoute from "./Router/employeeRoute.js";
import dotenv from "dotenv";
import multer from "multer";
import csv from "csvtojson";
import Product from "./models/Product.js";

dotenv.config();

const upload = multer();

const app = express();
const PORT = process.env.PORT || 3001;

// Configure CORS
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/", employeeRoute);

app.get("/", (req, res) => {
  res.send("CORS is working!");
});

app.post("/upload-csv", upload.single("file"), (req, res) => {
  const file = req.file;

  csv()
    .fromString(file.buffer.toString())
    .then((json) => {
      // skip headers and Serial number column
      json.shift();
      json.forEach((element) => {
        delete element["S.N."];
      });

      Product.insertMany(json)
        .then(() => {
          return res.status(200).json("File uploaded successfully");
        })
        .catch((err) => {
          return res.status(400).json(err);
        });
    });
});

// Connect to MongoDB
mongoose
  .connect(
    // "mongodb+srv://mydata:Lh27AfZvJb0yaryv@milestone.fnfk0px.mongodb.net/employee"
    "mongodb://localhost:27017/employee"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
