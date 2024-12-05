import axios from "axios";
import { signOutUser } from "./apiClient";

export const isUserSignedIn = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get(
        "https://raudlatulirfancalligraphy.com/backend/user",
        {
          headers: {
            Authorization: `${token}`,
          },
        },
      );
      return response.data.user;
    } catch (error) {
      localStorage.removeItem("token");
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        await signOutUser();
      }
      console.error("Error fetching user:", error);
    }
  }
  return null;
};
