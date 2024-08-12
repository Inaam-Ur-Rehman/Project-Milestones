import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import Employee from "./models/Employee.js";
import http from "http";
import app from "./app/app.js";


// Create the server

const server = http.createServer(app);
const PORT = 3001;

// const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://mydata:Lh27AfZvJb0yaryv@milestone.fnfk0px.mongodb.net/employee"
);

app.post("/register", (req, res) => {
  Employee.create(req.body)
  .then((employees) => res.json(employees))
  .catch(err=> res.json(err))
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
