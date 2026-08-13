import { useApi } from "~/shared/api";
import type { User } from "../model/types";

export const getUserById = (id: number) => {
  return useApi<User>(`/users/${id}`);
};
