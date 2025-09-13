import { Router } from "express";
import { create, get } from "../controllers/todo_controller";
import { authMiddleware } from "../middleware/verifyToken";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", authMiddleware, get);

export default router;
