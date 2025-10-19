export interface TodosProps {
  todos: GetTodo[];
  setTodos: React.Dispatch<React.SetStateAction<GetTodo[]>>;
  onEdit: (todo: GetTodo) => void;
  onToggleComplete: (id: string, currentStatus: boolean) => void;
}

export interface AddData {
  title?: string;
  classification?: string;
  dueDate?: string;
  completed?: boolean;
}

export interface GetTodo {
  _id: string;
  title: string;
  classification: string;
  dueDate: string;
  completed: boolean;
}
