import { FaBitcoin, FaEthereum, FaLitecoinSign } from "react-icons/fa6";

export interface CryptObject {
  shortName: string;
  longName: string;
  icon: typeof FaBitcoin;
  borderColor: string;
  data: number[];
}

type CryptoType = CryptObject[];

// THIS DATA CAN BE IMPORT FROM REAL TIME API OR WS (JUST FOR DEMO PURPOSE STATIC DATA)
const CRYPTOS: CryptoType = [
  {
    shortName: "BTC",
    longName: "Bitcoin",
    icon: FaBitcoin,
    borderColor: "#f59e0b",
    data: [10000, 15000, 17000, 25000, 32000, 48000, 60000],
  },
  {
    shortName: "ETH",
    longName: "Ethereum",
    icon: FaEthereum,
    borderColor: "#71717a",
    data: [1000, 400, 4000, 16000, 25000, 26000, 31000],
  },
  {
    shortName: "LTC",
    longName: "Lite Coin",
    icon: FaLitecoinSign,
    borderColor: "#3b82f6",
    data: [65, 59, 80, 81, 56, 55, 40],
  },
];
export default CRYPTOS;
