import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { IoTime } from "react-icons/io5";

export default function Todos() {
  return (
    <div className="flex justify-around dark:text-white">
      <h1 className="text-2xl place-self-center md:text-3xl">hello</h1>
      <div className="flex flex-col md:text-lg">
        <p className="text-center">日常</p>
        <p>2025/08/21</p>
      </div>
      <div className="flex items-center gap-2 ">
        <IoTime className="cursor-pointer text-lg md:text-xl lg:text-2xl" />
        <AiFillEdit className="cursor-pointer text-lg md:text-xl lg:text-2xl" />
        <RiDeleteBin6Fill className="cursor-pointer text-lg md:text-xl lg:text-2xl" />
      </div>
    </div>
  );
}
