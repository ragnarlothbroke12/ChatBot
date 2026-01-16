import axios from "axios";

const API_URL = "http://localhost:3000/api/chat";

// Send message
export const sendMessage = async (agentId, message, token) => {
  const res = await axios.post(
    `${API_URL}/send`,
    { agentId, message },
    {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
      withCredentials: true,
    }
  );
  return res.data;
};

// Get chat history
export const getChat = async (agentId, token) => {
  const res = await axios.get(`${API_URL}/get/${agentId}`, {
    headers: { Authorization: token ? `Bearer ${token}` : "" },
    withCredentials: true,
  });
  return res.data;
};
