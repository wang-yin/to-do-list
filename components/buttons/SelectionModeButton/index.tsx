"use client";

import { SelectionModeButtonProps } from "@/components/buttons/SelectionModeButton/type";
import { useRouter } from "next/navigation";
const colorMap = {
  red: {
    bg: "bg-red-400",
    hoverText: "hover:text-red-400",
    borderColor: "border-red-400",
  },
  blue: {
    bg: "bg-blue-400",
    hoverText: "hover:text-blue-400",
    borderColor: "border-blue-400",
  },
};
export default function SelectionModeButton({
  mode,
  color,
}: SelectionModeButtonProps) {
  const { bg, hoverText, borderColor } = colorMap[color];
  const router = useRouter();
  return (
    <button
      className={`${bg} ${borderColor} border py-5 px-15 text-xl rounded-xl text-white cursor-pointer hover:bg-white ${hoverText} sm:text-2xl md:text-3xl`}
      onClick={() => router.push(mode === "訪客模式" ? "todos" : "auth/login")}
    >
      {mode}
    </button>
  );
}
