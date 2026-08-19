import axios, { AxiosError } from "axios";
import { router } from "expo-router";

import { getAuthToken, removeAuthToken } from "@/services/auth-storage";

type ApiErrorResponse = {
  message?: string;
};

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiErrorResponse>) => {
    if (error.response) {
      const { data, status } = error.response;
      const isUnauthenticated =
        status === 401 || data?.message === "Unauthenticated.";

      if (isUnauthenticated) {
        await removeAuthToken();
        router.replace("/(auth)/login");
      }
    } else if (error.request) {
      console.error("Network error: no response received from the server.");
    } else {
      console.error("Request error:", error.message);
    }

    return Promise.reject(error);
  },
);

export default api;
