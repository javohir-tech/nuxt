import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 100000,
});

apiClient.interceptors.request.use((config) => {
  if (import.meta.client) {
    const token = useCookie("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
    }

    return Promise.reject(error);
  },
);
