import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth_route";
import todoRoutes from "./routes/todo_route";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/todos", todoRoutes);

require("../src/config/connection_db");

export default app;
