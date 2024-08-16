import Employee from "../models/Employee.js";
import bcrypt from "bcrypt";
import { json } from "express";
import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/generateToken.js";

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
  res.json({
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
    throw new Error("Invalid login Credentials");
  }

  /* return res.status(201).json({
    status: "Success",
    message: "User Login Successful",
    data: user,
     token: generateToken({
      id: user._id,
      isAdmin: user.isAdmin,
      email: user.email,
    }),
  }); */
});

//! @desc   Get user profile
//! @route  GET /employee/profile
//! @access Private

export const getUserProfileCtrl = asyncHandler(async (req, res) => {
  res.json({
    msg: "Welcome to profile page",
  });
});
