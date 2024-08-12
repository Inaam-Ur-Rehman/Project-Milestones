import Employee from "../models/Employee.js";

import asyncHandler from "express-async-handler";

// @desc	Create users
// @route	POST /api/v1/users/register
// @access	Public

export const registerEmployeeCtrl = asyncHandler(async (req, res) => {
  /* const { fullname, email, password } = req.body;
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
  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
  }); */
  res.json({
    status: "Success",
    message: "User Registerd Successful",
    /* data: user, */
  });
});
