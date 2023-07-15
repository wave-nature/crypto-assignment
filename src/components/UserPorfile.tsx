import { FaArrowTrendUp, FaUser } from "react-icons/fa6";

export default function () {
  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const formatCurrency = new Intl.NumberFormat("en-us").format(
    getRandomNumber(15000, 50000)
  );

  return (
    <div className=" dark:bg-slate-700 bg-slate-100 rounded-xl flex flex-col gap-2 items-center p-5">
      <FaUser
        size={100}
        color={"white"}
        className="cursor-pointer border-2 p-3 rounded-full"
      />
      <p className="text-lg">Total Balance</p>
      <h3 className="font-semibold text-3xl tracking-wide ">
        ${formatCurrency}
      </h3>

      <div className="flex mt-5 gap-2 items-center justify-center">
        <button className="bg-lime-400 p-1 rounded-2xl text-sm text-black font-bold">
          12.3%
        </button>
        <button className="bg-lime-400 p-1 rounded-2xl text-sm text-black font-bold">
          <FaArrowTrendUp size={20} />
        </button>
      </div>
    </div>
  );
}
