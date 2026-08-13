export interface Product {
  id: number;
  name: string;
  price: number;
  user_id: number;
}

export interface Status {
    success : boolean ;
    message : string
}

export interface ProductResponse extends Status{
    data : Product[]
}

