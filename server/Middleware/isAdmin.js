import Employee from "../models/Employee.js";

export const isAdmin = async (req, res, next) => {
  //! Find the login user
  const user = await Employee.findById(req.userAuthId);
  //! Check user if Admin?
  if (!user.isAdmin) {
    return res.status(401).json({
      status: "Failed",
      message: "Unauthorized, Access Denied, Admin only",
    });
  }
  return next();
};
