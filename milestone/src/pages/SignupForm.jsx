import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "../services/users/userServices";
import AlertMessage from "../../Templates/Alert/AlertMessage";
import { useNavigate } from "react-router-dom";

//! Validation
const validationSchema = Yup.object({
  userName: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string()
    .min(4, "Must be 4 characters or more")
    .required("Password is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is Required"),
});

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  /* const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "mongodb+srv://mydata:Lh27AfZvJb0yaryv@milestone.fnfk0px.mongodb.net/employee",
        { userName, email, password }
      )
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }; */

  //! Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: registerAPI,
    mutationKey: ["register"],
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    //! Validation
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // http request
      mutateAsync(values)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    },
  });

  //! Redirect
  if (isSuccess) {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

            {/* Display Message */}
            {isPending && (
              <AlertMessage type="loading" message="Creating Account..." />
            )}
            {isError && (
              <AlertMessage
                type="isError"
                message={error.response.data.message}
              />
            )}
            {isSuccess && (
              <AlertMessage type="success" message="Account Created" />
            )}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your full name"
                onChange={(e) => setUserName(e.target.value)}
                {...formik.getFieldProps("userName")}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500">{formik.errors.username}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                autoComplete="on"
                id="email"
                type="email"
                placeholder="Email"
                // onChange={(e) => setEmail(e.target.value)}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="******************"
                  // onChange={(e) => setPassword(e.target.value)}
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="******************"
                  // onChange={(e) => setPassword(e.target.value)}
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="text-red-500">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <Link to={"/login"}>Already a user? Login</Link>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2024 Project Milestone. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
