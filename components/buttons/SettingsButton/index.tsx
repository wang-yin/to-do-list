"use client";

import { TfiAlignJustify } from "react-icons/tfi";
import { useRouter } from "next/navigation";

export default function SettingsButton() {
  const state: boolean = true;
  const router = useRouter();
  const handleAuthButtonClick = () => {
    if (state) {
      router.push("auth/login");
    }
  };
  return (
    <button
      className="absolute right-5 top-3 border-1 rounded-sm flex items-center p-1 cursor-pointer sm:p-1.5 md:p-2 dark:bg-white"
      onClick={handleAuthButtonClick}
    >
      {state ? "登入" : <TfiAlignJustify size={20} />}
    </button>
  );
}
