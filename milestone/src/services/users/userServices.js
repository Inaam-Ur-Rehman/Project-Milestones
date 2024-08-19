import axios from "axios";
import { BASE_URL } from "../../utils/url";

//! Login User
export const loginAPI = async ({ email, password }) => {
  const response = await axios.post(`/login`, {
    email,
    password,
  });
  //! Return a promise
  return response.data;
};
