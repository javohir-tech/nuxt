import type { CreateProductPayload } from "./types";
import { createProduct } from "../api";
import {FetchError} from "ofetch"
import { type ApiErrorBody } from "~/shared/types";

export default function useCreateProduct() {
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  async function create(payload : CreateProductPayload) {
    loading.value = true
    try {
        const response = await createProduct(payload)
        if(response.success){
            alert(response.message)
        }
    } catch (err) {
        const fetchError =err as  FetchError<ApiErrorBody>
        error.value = fetchError.data?.detail ?? "Internal Server Error"
        alert(error.value)
    }finally{
        loading.value = false
    }
  }

  return {loading , error , create}
}
