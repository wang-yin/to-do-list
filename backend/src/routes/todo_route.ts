import { Router } from "express";
import { create, get, deleteTodo, edit } from "../controllers/todo_controller";
import { authMiddleware } from "../middleware/verifyToken";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", authMiddleware, get);
router.delete("/:id", authMiddleware, deleteTodo);
router.patch("/:id", authMiddleware, edit);

export default router;
