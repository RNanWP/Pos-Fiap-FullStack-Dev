import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333", // URL da sua API (ajuste se necessário)
});
