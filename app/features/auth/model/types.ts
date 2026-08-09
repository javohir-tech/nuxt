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

export interface SignUpPayload {
  email: string;
  password: string;
  username: string;
}

export interface SignUpResponse {
  message: string;
  user: {
    id: number;
    username: string;
    email: string;
    access_token: string;
    refresh_token: string;
  };
}
