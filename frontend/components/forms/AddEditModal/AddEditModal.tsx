import { TodoModalProps } from "./type";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineSubtitles } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function EditTodoModal({ mode, onClose }: TodoModalProps) {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div className="rounded-lg p-6 w-90 bg-white shadow-lg">
        <div className="flex justify-between mb-8">
          <h2 className="text-4xl font-bold">{mode}</h2>
          <RxCross2 className="cursor-pointer text-2xl" onClick={onClose}/>
        </div>

        <form className="flex flex-col gap-8 mb-8">
          <div className="flex text-3xl gap-2">
            <MdOutlineSubtitles />
            <input className="outline-1 outline-gray-400 rounded-sm px-2 text-lg" placeholder="title"></input>
          </div>

          <div className="flex gap-2 items-center text-2xl">
            <FaFilter />
            <select className=" border ml-1 cursor-pointer text-lg dark:bg-white">
              <option>--- 請選擇 ---</option>
              <option>工作</option>
              <option>學習</option>
              <option>生活</option>
            </select>
          </div>

          <div className="flex gap-2 items-center text-2xl">
            <FaRegCalendarAlt />
            <input className="outline-1 outline-gray-400 rounded-sm px-2 text-lg ml-1" type="date" placeholder="date"></input>
          </div>
        </form>

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-300 rounded cursor-pointer">{mode === "修改"? "儲存" : "新增"}</button>
          <button className="px-4 py-2 bg-gray-300 rounded cursor-pointer" onClick={onClose}>取消</button>
        </div>
      </div>
    </div>
  )
}