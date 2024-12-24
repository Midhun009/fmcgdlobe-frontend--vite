import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/user/     ",
  headers: {
    "Content-Type": "application/json",
  },
});

// Example API request for login
export const loginUser = (username, password) => {
  return api.post("login/", { username, password });
};


export const getUserProfile = (token) => {
  return api.get("profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Example API request for logout
export const logoutUser = () => {
  return api.post("logout/");
};

export default api;
