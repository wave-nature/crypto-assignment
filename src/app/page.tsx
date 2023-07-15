"use client";
import { useState } from "react";

import { FaChevronDown } from "react-icons/fa6";

import AssetCards from "@/components/AssetCards";
import Header from "@/components/Header";
import Premium from "@/components/Premium";
import UserPorfile from "@/components/UserPorfile";
import LineChart from "@/components/LineChart";
import ChooseCrypto from "@/components/ChooseCrypto";
import CRYPTOS, { CryptObject } from "@/data/crypto";

export default function Home() {
  const [crypto, setCrypto] = useState<string>("BTC");

  const coin = CRYPTOS.find((c) => c.shortName === crypto) as CryptObject;

  return (
    <section className="px-4 py-8">
      <Header />
      <main className="mt-5 h-[90%] grid grid-cols-3 gap-4">
        <section className="col-span-2">
          <Premium />
          <AssetCards />

          <div className=" h-1/3 mt-12">
            <LineChart coin={coin} />
          </div>
        </section>
        <section className="space-y-5">
          <UserPorfile />
          <ChooseCrypto coin={coin} crypto={crypto} setCrypto={setCrypto} />
        </section>
      </main>
    </section>
  );
}
