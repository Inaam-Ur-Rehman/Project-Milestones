import express from "express";
import mongoose from "mongoose";
import Employee from "./models/Employee.js";
import http from "http";
import app from "./app/app.js";
import cors from "cors";

// Create the server

const server = http.createServer(app, (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
});
const PORT = process.env.PORT || 3001;

// const app = express();
// //! Cors config


// app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mydata:Lh27AfZvJb0yaryv@milestone.fnfk0px.mongodb.net/employee"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// app.use(cors());

app.post("/register", (req, res) => {
  Employee.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
