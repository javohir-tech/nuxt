import { login } from "../api";
import type { LoginPayload, LoginResponse } from "./types";

export const useAuth = () => {
  const access_token = useCookie<string>("access_token");

  // Login
  const handleLogin = async (payload: LoginPayload) => {
    const response: LoginResponse = await login(payload);

    access_token.value = response.data.access_token;

    if (access_token) {
      await navigateTo("/");
    }
  };

  return { login: handleLogin };
};
