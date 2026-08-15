import { useApi } from "~/shared/api";
import {
  type CreateProductPayload,
  type CreateProductResponse,
} from "../model/types";

export const createProduct = (payload: CreateProductPayload) =>
  useApi<CreateProductResponse>("/product/create", {
    method: "POST",
    body: payload,
  });
