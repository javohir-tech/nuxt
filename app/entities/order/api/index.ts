import { useApi } from "~/shared/api";
import type { ResponseMyOrders } from "../models/types";

export const getMyOrders = () =>
  useApi<ResponseMyOrders>("/order", {
    method: "GET",
  });
