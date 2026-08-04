import { apiClient } from "./instance";

export async function loginRequest(email: string, password: string) {
    const {data} = await apiClient.post("/auth/login" , {email , password});
    return data
}

export async function registerRequest(email : string  , password : string , userName : string){
    const {data} = await apiClient.post("/auth/register" , {email , password, userName})
    return data
}

export async function logoutRequest(){
    const {data} = await apiClient.post("/auth/logout")
    return data
}