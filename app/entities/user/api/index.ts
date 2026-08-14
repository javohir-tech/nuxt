import { useApi } from "~/shared/api";
import type { User } from "../model/types";

export const getUserById = () => useApi<User>("/auth/me", { method: "GET" });
