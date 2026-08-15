export interface Order {
  id: number;
  product_id: number;
  order_id: number;
  quantity: number;
  price: number;
  product_name: number;
}

export interface OrderItem {
  id: number;
  status: string;
  items: Order[];
}

export interface ResponseMyOrders {
  success: true;
  message: string;
  data: OrderItem[];
}
