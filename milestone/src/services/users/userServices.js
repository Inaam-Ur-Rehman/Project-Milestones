import axios from "axios";
import { BASE_URL } from "../../utils/url";

//! Login User
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
