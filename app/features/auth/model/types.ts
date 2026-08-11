export interface LoginPayload {
  username_or_email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  username: string;
}

export interface LogoutPayload {
  refresh_token: string;
}

///////////////////////////////////////////////////////////
export interface ApiInfo {
  success: boolean;
  message: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  is_active: boolean;
  is_staff: boolean;
}

export interface Token {
  access_token: string;
  refresh_token: string;
}

export interface AuthResponse extends ApiInfo {
  data: {
    user: User;
    tokens: Token;
  };
}

export interface LogoutResponse extends ApiInfo {}

export interface RerfeshResponse extends ApiInfo {
  data: {
    tokens: {
      access_token: string;
    };
  };
}
