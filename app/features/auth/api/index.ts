import { useApi } from "~/shared/api";
import type {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
  LogoutPayload,
  LogoutResponse,
} from "../model/types";

export const login = (payload: LoginPayload) =>
  useApi<LoginResponse>("/auth/login", { method: "POST", body: payload });

export const signup = (payload: SignUpPayload) =>
  useApi<SignUpResponse>("/auth/signup", { method: "POST", body: payload });

export const logout = (payload: LogoutPayload) =>
  useApi<LoginResponse>("/auth/logout", { method: "POST", body: payload });
