import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/api",
});

export const uploadPdf = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return api.post("/pdf/upload", formData);
};

export const parsePdf = (id) => {
  return api.post("/pdf/parse/" + id);
};

export const getDocuments = () => {
  return api.get("/doc/list");
};

export const generateDoc = (data) => {
  return api.post("/ai/generate", data);
};

export const analyzeDoc = (text) => {
  return api.post("/ai/analyze", { text });
};

export default api;