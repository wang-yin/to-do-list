"use client"

import Navbar from "@/components/layout/Navbar";
import Todos from "@/components/todos";
import TodoFilter from "@/components/filters/TodoFilter";
import DarkLightToggle from "@/components/buttons/DarkLightToggle";
import { FiPlus } from "react-icons/fi";
import AddEditModal from "@/components/forms/AddEditModal/AddEditModal"
import { useState, useEffect } from "react";
import { GetTodo } from "@/src/type/todo";
import { getTodo, updateTodo } from "@/src/services/todo";


export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState<GetTodo[]>([])
  const [mode, setMode] = useState<"新增" | "修改">("新增");
  const [selectedTodo, setSelectedTodo] = useState<GetTodo | null>(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
      const fetchTodos = async () => {
        try {
          const data = await getTodo();
          setTodos(data)
        } catch (err) {
          console.error(err);
        }
      }
      fetchTodos();
    }, [])


  const handleEdit = (todo: GetTodo) => {
    setMode("修改");
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  const filteredTodos = todos.filter((todo) => {
    if (!filter || filter === "all") return true;
    if (filter === "已完成") return todo.completed === true;
    if (filter === "未完成") return todo.completed === false;
    if (["工作", "學習", "生活"].includes(filter)) return todo.classification === filter;
    return true;
  });

  const toggleComplete = async(id: string, currentStatus: boolean) => {
    try {
      console.log("前端傳送完成與否")
      const updated = await updateTodo(id, { completed: !currentStatus });
      setTodos(prev => prev.map(todo => todo._id === id ? { ...todo, completed: updated.completed } : todo)
      )
    } catch (err) {
      console.error("切換完成狀態失敗：", err);
    }
  }

    
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[linear-gradient(100deg,#d4f1ff,#ffffff)] dark:bg-[linear-gradient(100deg,#575656,#062e3f)] ">
        <Navbar />
        <div className="flex-1 px-5">
          <div className="flex justify-between">
            <button 
              className="flex items-center border mt-5 px-2 gap-1 rounded-sm cursor-pointer md:text-lg dark:bg-green-600 dark:text-white" 
              onClick={() => {
                setMode("新增");
                setSelectedTodo(null);
                setIsModalOpen(true);
              }}
            >
              <FiPlus />
              新增
            </button>
            <TodoFilter onFilterChange={setFilter}/>
          </div>
              
          <div className="mt-5 flex-1 border flex flex-col gap-5 overflow-y-auto dark:bg-gray-500">
            <Todos todos={filteredTodos} setTodos={setTodos} onEdit={handleEdit} onToggleComplete={toggleComplete}/>
            
          </div>
        </div>
        <DarkLightToggle />
      </div>
      {isModalOpen && (
        <AddEditModal
          mode={mode}
          onClose={() => setIsModalOpen(false)}
          setTodos={setTodos}
          initialData={selectedTodo}
        />
      )}
    </>
  );
}
