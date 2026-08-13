import { useApi } from "~/shared/api";
import type { ProductResponse } from "../models/types";

export const getAll = () => useApi("/product", { method: "GET" });

export const getMyProducts = () =>
  useApi<ProductResponse>("/product/my_products", { method: "GET" });

export const getProducts = () =>
  useApi<ProductResponse>("/product", { method: "GET" });
