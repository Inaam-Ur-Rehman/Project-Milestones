import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { loginAPI } from "../services/users/userServices";
import AlertMessage from "../../Templates/Alert/AlertMessage";
import { loginAction } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";

//! Validation
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(4, "Must be 4 characters or more")
    .required("Required"),
});

const SignInForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Dispatch
  const dispatch = useDispatch();

  //! Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: loginAPI,
    mutationKey: ["login"],
  });

  // console.log(mutateAsync.AlertMessage);

  // console.log(mutation);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    //! Validation
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // http request
      mutateAsync(values)
        .then((data) => {
          console.log(data);
          dispatch(loginAction(data));
          localStorage.setItem("authToken", data.token);
        })
        .catch((err) => console.log(err));
    },
  });

  // console.log(isError.message);
  // console.log(formik);

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-xs">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            {/* Display Message */}
            {isPending && (
              <AlertMessage type="loading" message="Login you in..." />
            )}
            {isError && (
              <AlertMessage type="isError" message={isError.message} />
            )}
            {error && <AlertMessage type="error" message={error} />}

            {isSuccess && (
              <AlertMessage type="success" message="Login Success" />
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                autoComplete="on"
                id="username"
                type="text"
                placeholder="Email"
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
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="******************"
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
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <Link to={"/register"}>New here? Register</Link>
          </form>

          <p className="text-center text-gray-500 text-xs">
            &copy;2024 Project Milestone. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
