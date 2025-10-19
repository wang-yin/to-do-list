"use client"

import { TodoModalProps } from "./type";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addTodo, updateTodo } from "@/src/services/todo"

export default function TodoModal({ mode, onClose, setTodos, initialData }: TodoModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    classification: "",
    dueDate: ""
  })

  useEffect(() => {
    if(mode === "修改" && initialData) {
      setFormData({
        title: initialData.title || "",
        classification: initialData.classification || "",
        dueDate: initialData.dueDate?.slice(0, 10) || ""
      })
    } else {
      setFormData({ title: "", classification: "", dueDate: "" });
    }
  }, [mode, initialData])

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (mode === "新增") {
        const newTodo = await addTodo(formData);
        setTodos((prev) => [...prev, newTodo]);
      } else if (mode === "修改" && initialData?._id) {
        const updated = await updateTodo(initialData._id, formData);
        setTodos((prev) =>
          prev.map((todo) => (todo._id === updated._id ? updated : todo))
        );
      }
      onClose();
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div className="rounded-lg p-6 w-90 bg-white shadow-lg">
        <div className="flex justify-between mb-8">
          <h2 className="text-4xl font-bold">{mode}</h2>
          <RxCross2 className="cursor-pointer text-2xl" onClick={onClose}/>
        </div>

        <form 
          className="flex flex-col gap-8 mb-8"
          onSubmit={handleSubmit}
        >
          <div className="flex text-3xl gap-2">
            <MdOutlineSubtitles />
            <input 
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="outline-1 outline-gray-400 rounded-sm px-2 text-lg" 
            placeholder="title"></input>
          </div>

          <div className="flex gap-2 items-center text-2xl">
            <FaFilter />
            <select 
              name="classification"
              value={formData.classification}
              onChange={handleChange}
              className=" border ml-1 cursor-pointer text-lg dark:bg-white"
            >
              <option value="">--- 請選擇 ---</option>
              <option value="工作">工作</option>
              <option value="學習">學習</option>
              <option value="生活">生活</option>
            </select>
          </div>

          <div className="flex gap-2 items-center text-2xl">
            <FaRegCalendarAlt />
            <input 
              className="outline-1 outline-gray-400 rounded-sm px-2 text-lg ml-1"
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            >
            </input>
          </div>
        </form>

        <div className="flex justify-end gap-2">
          <button
            onClick={handleSubmit} 
            className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
          >
            {mode === "修改"? "儲存" : "新增"}
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded cursor-pointer" onClick={onClose}>取消</button>
        </div>
      </div>
    </div>
  )
}