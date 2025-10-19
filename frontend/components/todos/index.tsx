"use client"

import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { IoTime } from "react-icons/io5";
import EditTodoModal from "@/components/forms/AddEditModal/AddEditModal"
import { useState } from "react";
import { deleteTodo } from "@/src/services/todo";
import { TodosProps, GetTodo } from "@/src/type/todo";

export default function Todos({ todos, setTodos, onEdit }: TodosProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<GetTodo | null>(null);

  const handleDelete = async (todoID: string) => {
      try {
        await deleteTodo(todoID);
        alert("刪除成功！");
        setTodos((prev) => prev.filter((todo) => todo._id !== todoID));
      } catch (err) {
        console.error(err);
      }
    }

  const handleEdit = (todo: GetTodo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };
  
  return (
    <>
      {todos.map((todo) => (
        <div className="flex justify-around dark:text-white" key={todo._id}>
          <h1 className="text-2xl place-self-center md:text-3xl">{todo.title}</h1>
          <div className="flex flex-col md:text-lg">
            <p className="text-center">{todo.classification}</p>
            <p>{todo.dueDate}</p>
          </div>
          <div className="flex items-center gap-2 ">
            <IoTime className="cursor-pointer text-lg md:text-xl lg:text-2xl" />
            <AiFillEdit className="cursor-pointer text-lg md:text-xl lg:text-2xl" onClick={() => onEdit(todo)}/>
            <RiDeleteBin6Fill className="cursor-pointer text-lg md:text-xl lg:text-2xl" onClick={() => handleDelete(todo._id)}/>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <EditTodoModal
          mode="修改"
          onClose={() => setIsModalOpen(false)}
          setTodos={setTodos}
          initialData={selectedTodo}
        />
      )}
    </>
  );
}
