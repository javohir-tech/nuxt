import { login, signup, logout } from "../api";
import type {
  LoginPayload,
  SignUpPayload,
  LogoutResponse,
  AuthResponse,
} from "./types";

import type { ApiErrorBody } from "~/shared/types";

import type { FetchError } from "ofetch";

export const useAuth = () => {
  const access_token = useCookie<string | null>("access_token");
  const refresh_token = useCookie<string | null>("refresh_token");
  const error = ref<string | null>(null);
  const pending = ref<boolean>(false);

  // Login
  const handleLogin = async (payload: LoginPayload) => {
    pending.value = true;
    try {
      const response: AuthResponse = await login(payload);

      access_token.value = response.data.tokens.access_token;
      refresh_token.value = response.data.tokens.refresh_token;
      if (access_token.value) {
        await navigateTo("/");
      }
    } catch (err) {
      const fetchError = err as FetchError<ApiErrorBody>;
      error.value = fetchError?.data?.detail ?? "Internal Server Error";
      // console.log(error.value);
    } finally {
      pending.value = false;
    }
  };

  const handleRegister = async (payload: SignUpPayload) => {
    pending.value = true;
    try {
      const response: AuthResponse = await signup(payload);

      access_token.value = response.data.tokens.access_token;
      refresh_token.value = response.data.tokens.refresh_token;

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

  const handleLogout = async () => {
    pending.value = true;
    try {
      if (refresh_token.value) {
        console.log(refresh_token.value);
        const response: LogoutResponse = await logout({
          refresh_token: refresh_token.value,
        });
        access_token.value = null;
        refresh_token.value = null;
        await navigateTo("/auth/login");
      }
    } catch (err) {
      const fetchError = err as FetchError<ApiErrorBody>;
      error.value = fetchError.data?.detail ?? "Internal Server Error";
      console.log(error.value);
    } finally {
      pending.value = false;
    }
  };

  return {
    handleLogin,
    handleRegister,
    handleLogout,
    pending,
    error,
  };
};
