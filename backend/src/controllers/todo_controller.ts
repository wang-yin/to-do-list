import { Request, Response } from "express";
import { createTodo, getTodo } from "../models/todo_model";
import { JwtPayload } from "../types/jwt";

// 創建Todo
export const create = async (req: Request & { user?: JwtPayload }, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "未授權" });
    }
    const todo = await createTodo(req.body, req.user.userId);
    res.status(201).json(todo);
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
    res.status(200).json(allTodo);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
