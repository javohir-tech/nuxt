import { login, signup } from "../api";
import type {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
} from "./types";

import type { ApiErrorBody } from "~/shared/types";

import type { FetchError } from "ofetch";

export const useAuth = () => {
  const access_token = useCookie<string>("access_token");
  const error = ref<string | null>(null);
  const pending = ref<boolean>(false);

  // Login
  const handleLogin = async (payload: LoginPayload) => {
    pending.value = true;
    try {
      const response: LoginResponse = await login(payload);

      access_token.value = response.data.access_token;

      if (access_token.value) {
        await navigateTo("/");
      }
    } catch (err) {
      const fetchError = err as FetchError<ApiErrorBody>;
      error.value = fetchError?.data?.detail ?? "Internal Server Error";
    } finally {
      pending.value = false;
    }
  };

  const handleRegister = async (payload: SignUpPayload) => {
    pending.value = true;
    try {
      const response: SignUpResponse = await signup(payload);

      access_token.value = response.user.access_token;

      if (access_token.value) {
        await navigateTo("/");
      }
    } catch (err) {
      const fetchError = err as FetchError<ApiErrorBody>;
      error.value = fetchError.data?.detail ?? "Internal Server Error";
    } finally {
      pending.value = false;
    }
  };

  return { login: handleLogin, signup: handleRegister };
};
