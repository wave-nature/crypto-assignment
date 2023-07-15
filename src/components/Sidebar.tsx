"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import {
  FaHouse,
  FaArrowTrendUp,
  FaWallet,
  FaPeopleGroup,
  FaMessage,
  FaSun,
  FaMoon,
  FaRightToBracket,
} from "react-icons/fa6";

export default function () {
  const [darkMode, setDarMode] = useState<boolean>(true);
  const [tab, setTab] = useState<string>("overview");

  useEffect(
    function () {
      if (!darkMode) {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    },
    [darkMode]
  );

  function changeTab(tab: string) {
    setTab(tab);
  }

  return (
    <aside className="border-r px-4 py-8 border-slate-700  ">
      <Link
        href="/"
        className="text-xl group font-bold uppercase text-center block "
      >
        <span className="group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:rotate-3 transition duration-700 ">
          D
        </span>
        <span className="group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-3 transition duration-700 ">
          E
        </span>
        <span className="group-hover:-translate-x-8 group-hover:-translate-y-8 group-hover:rotate-3 transition duration-700 ">
          N
        </span>
        <span className="group-hover:translate-x-8 group-hover:translate-y-8group-hover:rotate-3 transition duration-700 ">
          S
        </span>
        <span className="group-hover:-translate-x-12 group-hover:-translate-y-12 group-hover:rotate-3 transition duration-700 ">
          I
        </span>
        <span className="group-hover:translate-x-12 group-hover:translate-y-12 group-hover:rotate-3 transition duration-700 ">
          T
        </span>
        <span className="group-hover:-translate-x-14 group-hover:-translate-y-14 group-hover:rotate-3 transition duration-700 ">
          Y
        </span>
      </Link>

      <nav className="mt-12 h-5/6 flex flex-col justify-between">
        <ul className="space-y-2">
          <li
            className={`px-4 py-2.5 rounded-lg ${
              tab === "overview" && "bg-slate-100 text-black"
            } font-semibold`}
          >
            <Link
              href="/"
              className="flex items-center gap-3.5 text-md"
              onClick={changeTab.bind(null, "overview")}
            >
              <FaHouse size={18} />
              Overview
            </Link>
          </li>
          <li
            className={`px-4 py-2.5 rounded-lg ${
              tab === "trade" && "bg-slate-100 text-black"
            }  font-semibold`}
          >
            <Link
              href="/"
              className="flex items-center gap-3.5 text-md"
              onClick={changeTab.bind(null, "trade")}
            >
              <FaArrowTrendUp size={18} />
              Trade
            </Link>
          </li>
          <li
            className={`px-4 py-2.5 rounded-lg ${
              tab === "wallet" && "bg-slate-100 text-black"
            } lack font-semibold`}
          >
            <Link
              href="/"
              className="flex items-center gap-3.5 text-md"
              onClick={changeTab.bind(null, "wallet")}
            >
              <FaWallet size={18} />
              Wallet
            </Link>
          </li>
          <li
            className={`px-4 py-2.5 rounded-lg ${
              tab === "community" && "bg-slate-100 text-black"
            }  font-semibold`}
          >
            <Link
              href="/"
              className="flex items-center gap-3.5 text-md"
              onClick={changeTab.bind(null, "community")}
            >
              <FaPeopleGroup size={18} />
              Community
            </Link>
          </li>
          <li
            className={`px-4 py-2.5 rounded-lg ${
              tab === "message" && "bg-slate-100 text-black"
            }  font-semibold`}
          >
            <Link
              href="/"
              className="flex items-center gap-3.5 text-md"
              onClick={changeTab.bind(null, "message")}
            >
              <FaMessage size={18} />
              Message
            </Link>
          </li>
        </ul>

        <ul className="space-y-2 ">
          <li className="px-4 py-2.5  rounded-lg  text-white font-semibold">
            <div className="flex items-center gap-3.5 text-md">
              {darkMode ? (
                <FaSun size={18} />
              ) : (
                <FaMoon color="black" size={18} />
              )}
              <button
                onClick={() => setDarMode((prev) => !prev)}
                className="bg-purple-700 w-14 h-8 rounded-3xl relative cursor-pointer"
              >
                <div
                  className={`bg-white rounded-full h-6 w-6 top-1 ${
                    darkMode ? "left-7" : "left-1"
                  } transition-all duration-200  absolute `}
                ></div>
              </button>
            </div>
          </li>
          <li className="px-4 py-2.5  rounded-lg font-semibold">
            <Link href="/" className="flex items-center gap-3.5 text-md">
              <FaRightToBracket size={18} />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
