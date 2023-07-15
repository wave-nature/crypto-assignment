import { FaSistrix, FaBell, FaUser } from "react-icons/fa6";

export default function () {
  return (
    <header className=" h-12 flex items-center justify-between">
      <div>
        <h2 className="text-xl tracking-wide">
          Welcome Back, <span className="font-extrabold">Vivek!</span>
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex gap-2 dark:bg-slate-700 bg-slate-100 rounded-lg py-2.5 px-3">
          <FaSistrix size={24} color="white" />
          <input
            type="text"
            className="border-0 outline-none bg-transparent placeholder:dark:text-white"
            placeholder="Search"
          />
        </div>

        <div className="relative">
          <div className="bg-purple-800 w-2 h-2 rounded-full absolute right-0.5"></div>
          <FaBell size={24} color={"#888"} className="cursor-pointer" />
        </div>
        <FaUser size={24} color={"#888"} className="cursor-pointer" />
      </div>
    </header>
  );
}
