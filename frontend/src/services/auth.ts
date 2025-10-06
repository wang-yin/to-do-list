import api from "../utils/api";
import { LoginData, RegisterData } from "../type/auth";

export async function login(data: LoginData) {
  const res = await api.post("/auth/login", data);
  return res.data;
}

export async function register(data: RegisterData) {
  const res = await api.post("/auth/register", data);
  return res.data;
}
