export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  _id: string;
  name: string;
  email: string;
  password?: string;
  terms?: string;
}
