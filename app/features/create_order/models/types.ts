import type { Order } from "~/entities/order";

export interface CreateOrderResponse {
  success: boolean;
  message: string;
  data: Order;
}

export interface CreateOrderPayload {
    quantity : number ;
    product_id :number
}
