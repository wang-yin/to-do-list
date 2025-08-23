import HomeHero from "@/components/sections/home/Hero";
import DarkLightToggle from "@/components/buttons/DarkLightToggle";

export default function Home() {
  return (
    <div
      className="h-screen w-screen bg-gradient-to-t dark:from-DarkBlue dark:to-VeryDarkBlue from-sky2 to-sky relative overflow-hidden "
      id="sky"
    >
      <div className="absolute top-10 right-24  w-20 h-20 rounded-full bg-amber-200 shadow-[0_0_60px_rgba(255,255,200,0.7)]"></div>

      {/* Mobile 背景 */}
      <div
        className="absolute bottom-0 w-full h-200 pointer-events-none sm:hidden"
        id="buildings"
      >
        <div className="absolute z-1 bottom-0 left-8 h-60 w-20 bg-building-pattern"></div>
        <div className="absolute flex flex-col items-center bottom-0 left-15 h-7/10 w-3/10 ">
          <div className="dark:bg-Building-1 bg-Building-3 h-50 w-4/10"></div>
          <div className="dark:bg-Building-1 bg-Building-3 h-50 w-6/10"></div>
          <div className="dark:bg-Building-1 bg-Building-3 h-50 w-8/10"></div>
          <div className="dark:bg-Building-1 bg-Building-3 h-7/10 w-full"></div>
        </div>
        <div className="absolute z-2 bottom-0 left-32 h-25 w-20 bg-building-pattern-2 "></div>
        <div className="absolute z-1 bottom-0 left-55 h-50 w-20 bg-building-pattern "></div>
        <div className="flex flex-col items-center absolute bottom-0 right-8 h-50/100 w-3/10 ">
          <div className="dark:bg-Building-1 bg-Building-3 h-1/10 w-3/10"></div>
          <div className="dark:bg-Building-1 bg-Building-3 h-5/100 w-8/10"></div>
          <div className="dark:bg-Building-1 bg-Building-3 h-85/100 w-full flex items-center justify-evenly">
            <div className="dark:bg-amber-200 dark:shadow-[0_0_60px_rgba(255,255,200,0.7)] bg-blue-100 w-18/100 h-9/10"></div>
            <div className="dark:bg-amber-200 dark:shadow-[0_0_60px_rgba(255,255,200,0.7)] bg-blue-100 w-18/100 h-9/10"></div>
            <div className="dark:bg-amber-200 dark:shadow-[0_0_60px_rgba(255,255,200,0.7)] bg-blue-100 w-18/100 h-9/10"></div>
            <div className="dark:bg-amber-200 dark:shadow-[0_0_60px_rgba(255,255,200,0.7)] bg-blue-100 w-18/100 h-9/10"></div>
          </div>
        </div>
      </div>

      {/* Table 背景 */}
      <div
        className="absolute bottom-0 w-full h-200 pointer-events-none max-sm:hidden md:hidden"
        id="buildings"
      >
        <div className="flex flex-col-reverse absolute bottom-0 w-full">
          <div className=" h-20 w-full dark:bg-Building-1 bg-emerald-700"></div>
          <div className="dark:bg-Building-2 bg-white w-2/3 h-20 flex flex-row-reverse rounded-tr-full relative">
            <div className="absolute top-5 right-8 dark:bg-amber-200 bg-black w-8 h-8 rounded-tr-full dark:shadow-[0_0_20px_rgba(255,255,200,0.6)]"></div>
            <div className="absolute top-5 right-25 w-full h-8 train-window-row"></div>
            <div className="absolute bottom-3 w-full h-1 bg-amber-600 dark:hidden"></div>
          </div>
        </div>
      </div>

      {/* Desktop 背景 */}
      <div
        className="absolute bottom-0 w-full h-200 pointer-events-none max-md:hidden"
        id="buildings"
      >
        {/* 火車 */}
        <div className="flex flex-col-reverse absolute bottom-0 w-full z-1">
          <div className=" h-20 w-full dark:bg-Building-1 bg-emerald-700"></div>
          <div className="dark:bg-Building-2 bg-white w-2/5 h-20 flex flex-row-reverse rounded-tr-full relative">
            <div className="absolute top-5 right-8 dark:bg-amber-200 bg-black w-8 h-8 rounded-tr-full dark:shadow-[0_0_20px_rgba(255,255,200,0.6)]"></div>
            <div className="absolute top-5 right-25 w-full h-8 train-window-row"></div>
            <div className="absolute bottom-3 w-full h-1 bg-amber-600 dark:hidden"></div>
          </div>
        </div>
        {/* 建築 */}
        {/* 左 */}
        <div className="absolute z-1 bottom-0 left-8 h-75 w-20 bg-building-pattern "></div>
        <div className="absolute flex flex-col items-center bottom-0 left-15 h-7/10 w-2/10 xl:w-1/10">
          <div className="dark:bg-Building-1 bg-[#aab9c4] h-40 w-4/10"></div>
          <div className="dark:bg-Building-1 bg-[#818b97] h-40 w-6/10"></div>
          <div className="dark:bg-Building-1 bg-[#696e7a] h-40 w-8/10"></div>
          <div className="dark:bg-Building-1 bg-[#696e7a] h-7/10 w-full"></div>
        </div>
        <div className="absolute z-2 bottom-0 left-32 h-25 w-20 bg-building-pattern-2 "></div>
        <div className="absolute z-1 bottom-0 left-55 h-50 w-20 bg-building-pattern "></div>
        {/* 中 */}
        <div className="flex flex-col items-center absolute bottom-0 left-1/2 h-8/10 w-1/10 max-xl:hidden">
          <div className="dark:bg-Building-1 bg-[#a4b2bb] w-full h-25"></div>
          <div className=" dark:bg-Building-1 bg-[#bfcde9] w-140/100 h-full"></div>
        </div>
        <div className="absolute bottom-0 z-1 left-46/100 h-50 w-20 bg-building-pattern max-xl:hidden"></div>
        <div className="absolute bottom-0 z-1 left-55/100 h-45/100 w-24 flex flex-col items-center max-xl:hidden">
          <div className="w-15 h-10 dark:bg-Building-2 bg-[#b48f7e]"></div>
          <div className="bg-building-pattern-3 h-full w-24"></div>
        </div>
        {/* 右 */}
        <div className="flex flex-col items-center absolute bottom-0 right-8 h-50/100 w-2/10 xl:w-15/100">
          <div className="dark:bg-Building-1 bg-[#cfc5dc] h-1/10 w-3/10 xl:w-2/10"></div>
          <div className="dark:bg-Building-1 bg-[#d8cce1] h-5/100 w-8/10 xl:w-7/10"></div>
          <div className="dark:bg-Building-1 bg-[#c4b7cd] h-85/100 w-full flex items-center justify-evenly">
            <div className="dark:bg-amber-200 dark:shadow-[0_0_60px_rgba(255,255,200,0.7)] bg-[#ebe3d7] w-18/100 h-9/10"></div>
            <div className="dark:bg-amber-200 dark:shadow-[0_0_60px_rgba(255,255,200,0.7)] bg-[#ebe3d7] w-18/100 h-9/10"></div>
            <div className="dark:bg-amber-200 dark:shadow-[0_0_60px_rgba(255,255,200,0.7)] bg-[#ebe3d7] w-18/100 h-9/10"></div>
            <div className="dark:bg-amber-200 dark:shadow-[0_0_60px_rgba(255,255,200,0.7)] bg-[#ebe3d7] w-18/100 h-9/10"></div>
          </div>
        </div>
        <div className="absolute z-1 bottom-0 right-8 h-75 w-20 bg-building-pattern "></div>
        <div className="absolute z-2 bottom-0 right-32 h-25 w-20 bg-building-pattern-2 "></div>
        <div className="absolute z-1 bottom-0 right-55 h-50 w-20 bg-building-pattern "></div>
      </div>
      <DarkLightToggle />
      <HomeHero />
    </div>
  );
}
