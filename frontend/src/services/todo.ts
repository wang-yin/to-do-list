import api from "../utils/api";
import { AddData } from "../type/todo";

// 取得全部todos
export async function getTodo() {
  const res = await api.get("/api/todos");
  return res.data;
}

// 新增todo
export async function addTodo(data: AddData) {
  const res = await api.post("/api/todos", data);
  return res.data;
}

// 刪除todo
export async function deleteTodo(dataID: string) {
  const res = await api.delete(`/api/todos/${dataID}`);
  return res.data;
}

// 更改todo
export async function updateTodo(dataID: string, data: AddData) {
  const res = await api.patch(`/api/todos/${dataID}`, data);
  console.log(res.data);
  return res.data;
}
