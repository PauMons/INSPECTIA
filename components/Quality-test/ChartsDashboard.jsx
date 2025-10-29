"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ChartsDashboard({ history = [] }) {
  if (!history.length) return null;

  const labels = history.map((h) => new Date(h.date).toLocaleString());
  const dataset = {
    labels,
    datasets: [
      {
        label: "Total",
        data: history.map((h) => h.total),
        fill: false,
      },
      {
        label: "Performance",
        data: history.map((h) => h.performance),
        fill: false,
      },
    ],
  };

  return (
    <div className="mt-4 bg-white p-4 rounded border">
      <h4 className="font-semibold mb-2">Evolución</h4>
      <Line data={dataset} />
    </div>
  );
}