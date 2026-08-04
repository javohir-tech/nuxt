import axios from "axios";

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return (
      error?.response?.data?.message ?? "Server bilan bog'lanishda xatolik"
    );
  }

  return "No'malum xatolik";
}
