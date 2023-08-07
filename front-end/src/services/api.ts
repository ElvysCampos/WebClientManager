import axios from "axios";

const api = axios.create({
  baseURL: "https://web-client-manager.onrender.com",
  timeout: 5000,
});

export default api;
