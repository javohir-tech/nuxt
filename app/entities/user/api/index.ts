import { useApi } from "~/shared/api";
import type { User } from "../model/types";

export const getUser = () =>
  useApi<{ data: User }>("/auth/me", { method: "GET" });
