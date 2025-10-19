export interface TodosProps {
  todos: GetTodo[];
  setTodos: React.Dispatch<React.SetStateAction<GetTodo[]>>;
  onEdit: (todo: GetTodo) => void;
}

export interface AddData {
  title: string;
  classification: string;
  dueDate: string;
}

export interface GetTodo {
  _id: string;
  title: string;
  classification: string;
  dueDate: string;
}
