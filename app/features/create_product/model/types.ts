import { type Product } from "~/entities/product";

export interface CreateProductPayload {
    name : string ;
    price : number ;
}


export interface CreateProductResponse {
    success : boolean ;
    message : string ;
    data : Product
}