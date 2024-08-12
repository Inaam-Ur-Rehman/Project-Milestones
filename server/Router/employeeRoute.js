import express from "express";
import { registerEmployeeCtrl } from "../controllers/EmployeeCtrl.js";

const employeeRoute = express.Router();

employeeRoute.post("/register", registerEmployeeCtrl);

export default employeeRoute;
