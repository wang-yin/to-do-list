import { Router } from "express";
import { create } from "../controllers/todo_controller";
import { authMiddleware } from "../middleware/verifyToken";

const router = Router();

router.post("/", authMiddleware, create);

export default router;
