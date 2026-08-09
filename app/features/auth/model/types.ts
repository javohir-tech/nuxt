export interface token_data {
  access_token: string;
  refresh_token: string;
}

export interface LoginResponse {
  message: string;
  success: boolean;
  data: token_data;
}

export interface LoginPayload {
  username_or_email: string;
  password: string;
}
