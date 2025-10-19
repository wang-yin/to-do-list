import { GetTodo } from "@/src/type/todo";

export interface TodoModalProps {
  mode: "新增" | "修改";
  onClose: () => void;
  setTodos: React.Dispatch<React.SetStateAction<GetTodo[]>>;
  initialData?: GetTodo | null;
}
