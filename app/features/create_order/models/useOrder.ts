import type { CreateOrderPayload, CreateOrderResponse } from "./types";
import { createOrder } from "../api";
import type { Product } from "~/entities/product";

export default function useOrder() {
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  async function create_order(payload: CreateOrderPayload) {
    try {
      const response: CreateOrderResponse = await createOrder(payload);
      interface ProductCartItem extends Product {
        count: number;
      }
      const cart_productes = useLocalStorage<ProductCartItem[]>(
        "cart_productes",
        [],
      );
      cart_productes.value = cart_productes.value.filter(
        (p) => p.id !== payload.product_id,
      );
      console.log(response.message);
    } catch (error) {
      console.log(error);
    }
  }

  return { loading, error, create_order };
}
