import express from "express";
import {
  getUserProfileCtrl,
  loginUserCtrl,
  registerEmployeeCtrl,
} from "../controllers/EmployeeCtrl.js";

const employeeRoute = express.Router();

employeeRoute.post("/employee/register", registerEmployeeCtrl);
employeeRoute.get("/employee/login", loginUserCtrl);
employeeRoute.get("/employee/profile",getUserProfileCtrl)

export default employeeRoute;
