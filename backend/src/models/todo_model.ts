import Todo from "./schema/TodoSchema";
import { TodoInput } from "../types/todo";

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
