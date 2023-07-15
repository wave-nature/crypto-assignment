import { FaBriefcase, FaChartLine, FaWallet } from "react-icons/fa6";

export default function () {
  return (
    <div className="flex justify-between gap-3 mt-12">
      <div className="bg-lime-400 text-slate-800 w-full justify-center h-32 flex flex-col items-center relative rounded-lg">
        <div className="bg-lime-400 left-1/2 -translate-x-1/2 -top-7 flex justify-center items-center absolute w-16 h-16 rounded-full">
          <FaWallet size={24} />
        </div>

        <h3 className="text-2xl font-bold">$1,234</h3>
        <p>Total Assets</p>
      </div>
      <div className="dark:bg-slate-700 bg-slate-100 w-full justify-center h-32 flex flex-col items-center relative rounded-lg">
        <div className="dark:bg-slate-700 bg-slate-100 left-1/2 -translate-x-1/2 -top-7 flex justify-center items-center absolute w-16 h-16 rounded-full">
          <FaBriefcase size={24} />
        </div>

        <h3 className="text-2xl font-bold">$2,556</h3>
        <p>Total Deposits</p>
      </div>
      <div className="dark:bg-slate-700 bg-slate-100 w-full justify-center h-32 flex flex-col items-center relative rounded-lg">
        <div className="dark:bg-slate-700 bg-slate-100 left-1/2 -translate-x-1/2 -top-7 flex justify-center items-center absolute w-16 h-16 rounded-full">
          <FaChartLine size={24} />
        </div>

        <h3 className="text-2xl font-bold">+8.6%</h3>
        <p>APY</p>
      </div>
    </div>
  );
}
