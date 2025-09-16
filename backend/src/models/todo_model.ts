import Todo from "./schema/TodoSchema";
import { TodoInput } from "../types/todo";

// 創建Todo
export const createTodo = async (data: TodoInput, userId: string) => {
  const newTodo = await Todo.create({
    title: data.title,
    classification: data.classification,
    favorite: data.favorite,
    dueDate: data.dueDate,
    user: userId,
  });
  return newTodo;
};

// 取得Todo
export const getTodo = async (userId: string) => {
  const findTodo = await Todo.find({ user: userId });
  return findTodo;
};

// 刪除Todo
export const deleteTodo_model = async (userId: string, todoId: string) => {
  const todo = await Todo.findOneAndDelete({ _id: todoId, user: userId });
  return todo;
};
