import { login } from "../api";
import type { LoginPayload, LoginResponse } from "./types";

export const useAuth = () => {
  const handleLogin = async (payload: any) => {
    const response = await login(payload);
    console.log(response);
  };

  return { login: handleLogin };
};
