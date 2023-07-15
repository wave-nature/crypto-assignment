"use client";
import { FC } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
import { CryptObject } from "@/data/crypto";

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

interface LineChartProps {
  coin: CryptObject;
}

const LineChart: FC<LineChartProps> = ({ coin }) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: coin.longName,
        data: coin.data,
        fill: false,
        borderColor: coin.borderColor,
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} height={100} />;
};

export default LineChart;
