import { Router } from "express";
import { create, get, deleteTodo } from "../controllers/todo_controller";
import { authMiddleware } from "../middleware/verifyToken";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", authMiddleware, get);
router.delete("/:id", authMiddleware, deleteTodo);

export default router;
