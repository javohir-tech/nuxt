import { useApi } from "~/shared/api";
import type { CreateOrderResponse, CreateOrderPayload } from "../models/types";

export const createOrder = (payload: CreateOrderPayload) =>
  useApi<CreateOrderResponse>("/order/create", {
    method: "POST",
    body: payload,
  });
