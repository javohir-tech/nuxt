import type { CreateOrderPayload, CreateOrderResponse } from "./types";
import { createOrder } from "../api";

export default function useOrder() {
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  async function create_order(payload: CreateOrderPayload) {
    try {
      const response: CreateOrderResponse = await createOrder(payload);
      console.log(response.message);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  return {loading , error , create_order}
}
