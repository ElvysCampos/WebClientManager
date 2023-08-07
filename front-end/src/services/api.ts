import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Inclua o protocolo http:// ou https://
  withCredentials: true, // Certifique-se de incluir isso se você estiver usando cookies ou autenticação com sessão
});

export default api;
