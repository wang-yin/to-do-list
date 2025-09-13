import { Request, Response } from "express";
import { createTodo } from "../models/todo_model";

export const create = async (req: Request & { user?: { userId: string } }, res: Response) => {
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
