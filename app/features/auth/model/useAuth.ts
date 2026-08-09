import { login, signup } from "../api";
import type {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
} from "./types";

export const useAuth = () => {
  const access_token = useCookie<string>("access_token");

  // Login
  const handleLogin = async (payload: LoginPayload) => {
    const response: LoginResponse = await login(payload);

    access_token.value = response.data.access_token;

    if (access_token.value) {
      await navigateTo("/");
    }
  };

  const handleRegister = async (payload: SignUpPayload) => {
    try {
      const response: SignUpResponse = await signup(payload);

      access_token.value = response.user.access_token;

      if (access_token.value) {
        await navigateTo("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { login: handleLogin, signup: handleRegister };
};
