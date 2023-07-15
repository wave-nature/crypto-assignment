"use client";

import { CryptObject } from "@/data/crypto";
import { FC } from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface ChooseCryptoProps {
  crypto: string;
  setCrypto: (crypto: string) => void;
  coin: CryptObject;
}

const ChooseCrypto: FC<ChooseCryptoProps> = ({
  crypto,
  setCrypto,
  coin,
}): React.ReactNode => {
  const [tab, setTab] = useState<string>("buy");
  const [cryptoDropdown, setCryptoDropdown] = useState<boolean>(false);
  function toggleCryptoDropdown() {
    setCryptoDropdown((prev) => !prev);
  }

  const [amount, setAmount] = useState<string>("");

  return (
    <div className=" dark:bg-slate-700 bg-slate-100 rounded-xl p-5 space-y-5">
      <div className="flex items-center gap-2 justify-center">
        <button
          className={`px-4 py-1 ${
            tab === "buy"
              ? "dark:bg-white bg-slate-500 text-white dark:text-slate-800"
              : "border "
          } rounded-2xl text-sm font-bold `}
          onClick={() => setTab("buy")}
        >
          Buy
        </button>
        <button
          className={`px-4 py-1 ${
            tab === "sell"
              ? "dark:bg-white bg-slate-500 text-white dark:text-slate-800"
              : "border "
          } rounded-2xl text-sm font-bold `}
          onClick={() => setTab("sell")}
        >
          Sell
        </button>
        <button
          className={`px-4 py-1 ${
            tab === "exchange"
              ? "dark:bg-white bg-slate-500 text-white dark:text-slate-800"
              : "border "
          } rounded-2xl text-sm font-bold `}
          onClick={() => setTab("exchange")}
        >
          Exchange
        </button>
      </div>

      <div>
        <label htmlFor="">Coin</label>

        <div
          className="dark:bg-slate-800 bg-slate-800 text-white p-2 rounded-lg flex justify-between items-center relative cursor-pointer"
          onClick={toggleCryptoDropdown}
        >
          <span>{crypto}</span>
          <FaChevronDown size={16} />

          <div
            className={`absolute top-12 left-0 dark:bg-slate-900 bg-slate-600  w-full p-3 rounded-lg space-y-2  ${
              cryptoDropdown
                ? "translate-y-0 opacity-100 visible"
                : "translate-y-8 opacity-0 invisible"
            } transition duration-200`}
          >
            <div
              className={`py-2 ${
                crypto === "BTC" && "bg-slate-700"
              } hover:dark:bg-slate-700 hover:bg-slate-200 cursor-pointer rounded-md px-3`}
              onClick={() => setCrypto("BTC")}
            >
              BTC
            </div>
            <div
              className={`py-2 ${
                crypto === "ETH" && "bg-slate-700"
              } hover:dark:bg-slate-700 hover:bg-slate-200 cursor-pointer rounded-md px-3`}
              onClick={() => setCrypto("ETH")}
            >
              ETH
            </div>{" "}
            <div
              className={`py-2 ${
                crypto === "LTC" && "bg-slate-700"
              } hover:dark:bg-slate-700 hover:bg-slate-200 cursor-pointer rounded-md px-3`}
              onClick={() => setCrypto("LTC")}
            >
              LTC
            </div>
          </div>
        </div>
      </div>

      <div>
        <label>Amount</label>
        <input
          type="number"
          className="px-3 py-2 bg-slate-800 rounded-md w-full text-white font-semibold"
          placeholder="$1000"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center">
        <span>Total</span>
        <span className="font-semibold text-xl">
          ${new Intl.NumberFormat("en-us").format(+amount)}
        </span>
      </div>

      <button className="active:scale-95 transition dark:bg-slate-100 dark:text-slate-800 bg-slate-800 text-slate-100 font-semibold text-base w-full px-3 py-2 rounded-xl">
        Buy {coin.longName}
      </button>
    </div>
  );
};

export default ChooseCrypto;
