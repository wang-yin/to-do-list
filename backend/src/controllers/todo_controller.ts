import { Request, Response } from "express";
import { createTodo, getTodo, deleteTodo_model, editTodo } from "../models/todo_model";
import { JwtPayload } from "../types/jwt";
import { formatDate } from "../utils/formatDate";

// 創建Todo
export const create = async (req: Request & { user?: JwtPayload }, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "未授權" });
    }
    const todo = await createTodo(req.body, req.user.userId);
    const formattedTodo = {
      ...todo.toObject(),
      dueDate: formatDate(todo.dueDate),
    };

    res.status(201).json(formattedTodo);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// 取得Todo
export const get = async (req: Request & { user?: JwtPayload }, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "未授權" });
    }
    const allTodo = await getTodo(req.user.userId);

    const formattedTodos = allTodo.map(todo => ({
      ...todo.toObject(),
      dueDate: formatDate(todo.dueDate),
    }));

    res.status(200).json(formattedTodos);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// 刪除Todo
export const deleteTodo = async (req: Request & { user?: JwtPayload }, res: Response) => {
  try {
    const todoID = req.params.id;
    if (!req.user) {
      return res.status(401).json({ message: "未授權" });
    }
    await deleteTodo_model(req.user.userId, todoID);
    res.status(200).json({ message: "刪除成功" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// 修改
export const edit = async (req: Request & { user?: JwtPayload }, res: Response) => {
  try {
    const todoID = req.params.id;
    if (!req.user) {
      return res.status(401).json({ message: "未授權" });
    }
    const updatedTodo = await editTodo(req.user.userId, todoID, req.body);
    if (!updatedTodo) {
      return res.status(404).json({ message: "找不到待辦事項" });
    }
    const formattedTodo = {
      ...updatedTodo.toObject(),
      dueDate: formatDate(updatedTodo.dueDate),
    };
    res.status(200).json(formattedTodo);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
