"use client"

import Navbar from "@/components/layout/Navbar";
import Todos from "@/components/todos";
import TodoFilter from "@/components/filters/TodoFilter";
import DarkLightToggle from "@/components/buttons/DarkLightToggle";
import { FiPlus } from "react-icons/fi";
import AddTodoModal from "@/components/forms/AddEditModal/AddEditModal"
import { useState } from "react";


export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[linear-gradient(100deg,#d4f1ff,#ffffff)] dark:bg-[linear-gradient(100deg,#575656,#062e3f)] ">
        <Navbar />
        <div className="flex-1 px-5">
          <div className="flex justify-between">
            <button className="flex items-center border mt-5 px-2 gap-1 rounded-sm cursor-pointer md:text-lg dark:bg-green-600 dark:text-white" onClick={() => setIsModalOpen(true)}>
              <FiPlus />
              新增
            </button>
            <TodoFilter />
          </div>

          <div className="mt-5 flex-1 border flex flex-col gap-5 overflow-y-auto dark:bg-gray-500">
            <Todos />
            <Todos />
            <Todos />
            <Todos />
            <Todos />
            <Todos />
            <Todos />
            <Todos />
            <Todos />
            <Todos />
          </div>
        </div>
        <DarkLightToggle />
      </div>
      {isModalOpen && <AddTodoModal mode="新增" onClose={() => setIsModalOpen(false)}/>}
    </>
  );
}
