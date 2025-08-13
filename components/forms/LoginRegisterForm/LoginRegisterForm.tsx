"use client";

import { AuthFormProps } from "./type";
import { useRouter } from "next/navigation";

export default function LoginRegisterForm({ authMode }: AuthFormProps) {
  const router = useRouter();
  return (
    <div className="p-5 shadow-xl rounded-md bg-white w-75/100 max-w-lg sm:p-6">
      <h1 className="font-[family-name:var(--font-dancing_script)] font-bold text-6xl">
        {authMode === "login" ? "Login" : "Register"}
      </h1>
      <form className="my-8 flex flex-col gap-5 sm:gap-7">
        <div className="flex gap-2">
          <input
            id="email"
            className="w-95/100 outline-1 outline-gray-400 rounded-xs px-2 py-1 sm:text-lg sm:px-3 sm:py-2 md:text-xl"
            placeholder="電子信箱"
          ></input>
        </div>
        <div className="flex gap-2">
          <input
            id="password"
            className="w-95/100 outline-1 outline-gray-400 rounded-xs px-2 py-1 sm:text-lg sm:px-3 sm:py-2 md:text-xl"
            placeholder="密碼"
          ></input>
        </div>
        {authMode === "register" && (
          <div className="flex gap-2">
            <input
              id="password"
              className="w-95/100 outline-1 outline-gray-400 rounded-xs px-2 py-1 sm:text-lg sm:px-3 sm:py-2 md:text-xl"
              placeholder="名稱"
            ></input>
          </div>
        )}
      </form>
      {authMode === "login" ? (
        <div className="flex justify-between w-95/100">
          <button
            className="w-45/100 py-2 px-5 rounded-sm bg-green-500 text-white text-xl font-semibold cursor-pointer hover:bg-green-600"
            onClick={() => router.push("register")}
          >
            註冊
          </button>

          <button className="w-45/100 py-2 px-5 outline-2 rounded-sm bg-blue-500 text-white text-xl font-semibold cursor-pointer hover:bg-blue-600">
            登入
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 w-95/100">
          <button
            className="py-2 px-5 rounded-sm bg-green-500 text-white text-xl font-semibold cursor-pointer hover:bg-green-600"
            onClick={() => router.push("register")}
          >
            註冊
          </button>
          <a
            className="flex justify-center cursor-pointer text-lg text-blue-500"
            href="/auth/login"
          >
            已經有帳號了?
          </a>
        </div>
      )}
    </div>
  );
}
