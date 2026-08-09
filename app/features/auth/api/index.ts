import { useApi } from "~/shared/api";
import type { LoginPayload, LoginResponse } from "../model/types";

export const login = (payload: LoginPayload) =>
  useApi<LoginResponse>("/auth/login", { method: "POST", body: payload });
