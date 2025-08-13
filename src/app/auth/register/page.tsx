import LoginRegisterForm from "@/components/forms/LoginRegisterForm/LoginRegisterForm";

export default function Register() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-10 md:gap-15 bg-gray-200">
      <h1 className="text-5xl font-[family-name:var(--font-quicksand)] text-gray-700 sm:text-6xl md:text-7xl">
        TODO-LIST
      </h1>
      <LoginRegisterForm authMode="register" />
    </div>
  );
}
