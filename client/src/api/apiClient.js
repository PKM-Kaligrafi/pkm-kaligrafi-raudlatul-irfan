import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://raudlatulirfancalligraphy.com/backend",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API call failed:", error);
    if (error.response.status === 401) {
    } else if (error.response.status === 404) {
    }
    return Promise.reject(error);
  },
);

export const registerUser = async (formData) => {
  return apiClient.post("/register", formData);
};

export const loginUser = async (formData) => {
  return apiClient.post("/login", formData);
};

export const signOutUser = async () => {
  return apiClient.post("/logout");
};

export const postData = async (collectionName, data) => {
  return apiClient.post(`/data/${collectionName}`, data);
};

export const getAllData = async (collectionName) => {
  return apiClient.get(`/data/${collectionName}`);
};

export const getData = async (collectionName, id) => {
  return apiClient.get(`/data/${collectionName}/${id}`);
};

export const updateData = async (collectionName, id, data) => {
  return apiClient.put(`/data/${collectionName}/${id}`, data);
};

export const deleteData = async (collectionName, id) => {
  return apiClient.delete(`/data/${collectionName}/${id}`);
};

export default apiClient;
