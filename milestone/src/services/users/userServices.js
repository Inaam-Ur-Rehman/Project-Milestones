import axios from "axios";
import { BASE_URL } from "../../utils/url";
//! -------------
//! Login User
//! -------------
export const loginAPI = async ({ email, password }) => {
  const response = await axios.post(
    `${BASE_URL}/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );
  //! Return a promise
  return response.data;
};

// ! ----------------
// ! Register User
// ! ----------------
export const registerAPI = async ({ username, email, password }) => {
  const response = await axios.post(
    `${BASE_URL}/register`,
    {
      username,
      email,
      password,
    },
    { withCredentials: true }
  );
  //! Return a promise
  return response.data;
};
