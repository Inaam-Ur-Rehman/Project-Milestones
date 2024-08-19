import express from "express";
import {
  getUserProfileCtrl,
  loginUserCtrl,
  registerEmployeeCtrl,
  updateUserProfileCtrl,
  getAllUsersCtrl,
} from "../controllers/EmployeeCtrl.js";
import { isLoggedIn } from "../Middleware/isLogggedIn.js";
import { isAdmin } from "../Middleware/isAdmin.js";

const employeeRoute = express.Router();

employeeRoute.post("/register", registerEmployeeCtrl);
employeeRoute.post("/login", loginUserCtrl);
employeeRoute.get("/profile", isLoggedIn, getUserProfileCtrl);
employeeRoute.put("/profile", isLoggedIn, updateUserProfileCtrl);
employeeRoute.get("/users", isLoggedIn, isAdmin, getAllUsersCtrl);

export default employeeRoute;
