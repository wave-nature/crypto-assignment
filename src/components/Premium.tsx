import { FaBitcoin, FaStar } from "react-icons/fa6";

export default function () {
  return (
    <div className="relative bg-violet-800 p-5 rounded-xl">
      <h2 className="text-2xl font-semibold tracking-wide">
        Upgrade Your Plane To <span className="text-green-400">Premium</span>
      </h2>
      <h2 className="text-2xl font-semibold tracking-wide">
        and Get Unlimted Access
      </h2>

      <button className="text-sm font-semibold px-5 bg-violet-600 p-3 rounded-lg mt-5 active:scale-95 transition">
        Upgrade Now
      </button>

      <FaBitcoin
        color="#fff"
        className="absolute right-32 z-10 top-4  w-28 h-28 rounded-full"
      />
      <FaStar
        size={28}
        className="absolute right-16 rotate-45 z-10 top-32 rounded-full"
      />
      <FaStar
        size={28}
        color="yellow"
        className="absolute right-4 z-10 top-4 rounded-full"
      />
    </div>
  );
}
