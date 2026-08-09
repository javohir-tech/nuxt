import { useApi } from "~/shared/api";
import type { User } from "../model/types";

export const getUserById = (id: number) => {
  console.log("Server:", import.meta.server); // true bo'lsa — server tomonda
  console.log("Client:", import.meta.client); // true bo'lsa — browser tomonda
  return useApi<User>(`/users/${id}`);
};
