import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnect from "../config/dbConnect.js";

import Employee from "../models/Employee.js";

dbConnect();
const app = express();

// Pass incoming Data
app.use(express.json());

//Routes
app.use("/api/v1/employees", Employee);

export default app;
