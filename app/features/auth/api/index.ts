import { useApi } from "~/shared/api";
import type {
  LoginPayload,
  SignUpPayload,
  LogoutPayload,
  LogoutResponse,
  AuthResponse,
} from "../model/types";

export const login = (payload: LoginPayload) =>
  useApi<AuthResponse>("/auth/login", { method: "POST", body: payload });

export const signup = (payload: SignUpPayload) =>
  useApi<AuthResponse>("/auth/signup", { method: "POST", body: payload });

export const logout = (payload: LogoutPayload) =>
  useApi<LogoutResponse>("/auth/logout", { method: "POST", body: payload });
