"use client"

import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import EditTodoModal from "@/components/forms/AddEditModal/AddEditModal"
import { useState } from "react";
import { deleteTodo } from "@/src/services/todo";
import { TodosProps, GetTodo } from "@/src/type/todo";

export default function Todos({ todos, setTodos, onEdit, onToggleComplete }: TodosProps) {
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
            {todo.completed ? 
              <MdOutlineCheckCircleOutline 
                className="cursor-pointer text-lg md:text-xl lg:text-2xl"
                onClick={() => onToggleComplete(todo._id, todo.completed)}
              /> : <MdOutlineRadioButtonUnchecked 
                className="cursor-pointer text-lg md:text-xl lg:text-2xl"
                onClick={() => onToggleComplete(todo._id, todo.completed)} 
              />}
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
