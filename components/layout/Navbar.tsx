import SettingsButton from "../buttons/SettingsButton";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center py-3 relative">
      <h1 className="text-3xl sm:text-4xl md:text-5xl dark:text-white">
        TODO-LIST
      </h1>
      <SettingsButton />
    </div>
  );
}
