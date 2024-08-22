import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnect from "../config/dbConnect.js";
import employeeRoute from "../Router/employeeRoute.js";
import {
  globalErrorHandler,
  notFound,
} from "../Middleware/globalErrorHandler.js";
import cors from "cors";

// dbConnect
dbConnect();
const app = express();

// Pass incoming Data
app.use(express.json());

//Routes
app.use("/", employeeRoute);

//err middleware
app.use(notFound);
app.use(globalErrorHandler);
export default app;
