import SelectionModeButton from "@/components/buttons/SelectionModeButton";

export default function HomeHero() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative z-100">
      <h1 className="text-5xl font-[family-name:var(--font-kaushan_script)] dark:text-white sm:text-6xl md:text-7xl">
        TODO-LIST
      </h1>
      <div className="flex flex-col justify-center h-80 gap-y-9 sm:flex-row sm:items-center sm:gap-x-6 md:w-3xl md:gap-x-15">
        <SelectionModeButton mode="訪客模式" color="red" />
        <SelectionModeButton mode="登入/註冊" color="blue" />
      </div>
    </div>
  );
}
