import axios from "axios";

const API = "http://localhost:3000/api/dashboard";

export const getUserStats = async () => {
  const res = await axios.get(`${API}/stats`, {
    withCredentials: true, 
  });
  return res.data;
};
