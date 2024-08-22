import Employee from "../models/Employee.js";
import bcrypt from "bcrypt";
import { json } from "express";
import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/generateToken.js";
import { getTokenFromHeader } from "../utils/getTokenFromHeader.js";
import { verifyToken } from "../utils/verifyToken.js";

// @desc	Create users
// @route	POST /register
// @access	Public

export const registerEmployeeCtrl = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  //Check User Exist
  const userExist = await Employee.findOne({ email });

  if (userExist) {
    return res.json({
      msg: "User already exist",
    });
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create the user
  const user = await Employee.create({
    username,
    email,
    password: hashedPassword,
  });
  res.status(201).json({
    status: "Success",
    message: "User Registerd Successful",
    data: user,
  });
});

//! @desc Login user
//! @route Get /login
//! @access Private/Admin

export const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Please Enter Email and Password");
  }

  //! Check User Exist
  const userFound = await Employee.findOne({ email });
  if (!userFound) {
    return res.json({
      msg: "Invalid login details",
    });
  }
  //! Check Password
  if (userFound && (await bcrypt.compare(password, userFound?.password))) {
    res.json({
      status: "Success",
      message: "User login successful",
      userFound,
      token: generateToken(userFound?._id),
    });
  } else {
    res.status(401).json({
      status: "Failed",
      message: "Invalid login details",
    });
  }
});

//! @desc   Get user profile
//! @route  GET /employee/profile
//! @access Private

export const getUserProfileCtrl = asyncHandler(async (req, res) => {
  const token = getTokenFromHeader(req);
  // Verify the token
  const decodedUser = verifyToken(token);
  const user = await Employee.findById(decodedUser?.id);
  console.log(user);
  res.json({
    status: "Success",
    message: "User Profile",
    data: user,
  });
});

//! @desc   Update user profile
//! @route  PUT /employee/profile
//! @access Private

export const updateUserProfileCtrl = asyncHandler(async (req, res) => {
  const token = getTokenFromHeader(req);
  // Verify the token
  const decodedUser = verifyToken(token);
  const user = await Employee.findByIdAndUpdate(decodedUser?.id, req.body, {
    new: true,
  });
  res.json({
    status: "Success",
    message: "User Profile Updated",
    data: user,
  });
});

//! @desc   Get all users
//! @route  GET /employee
//! @access Private/Admin

export const getAllUsersCtrl = asyncHandler(async (req, res) => {
  const users = await Employee.find();
  res.json({
    status: "Success",
    message: "All Users",
    data: users,
  });
});
