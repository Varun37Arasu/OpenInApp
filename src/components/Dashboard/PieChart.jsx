import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Data from "./data";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      padding: 200,
      labels: {
        usePointStyle: true,
        boxWidth: 20,
        padding: 25,
      },
    },
    labels: {
      usePointStyle: true,
      pointStyle: "circle",
      position: "right",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
      position: "top",
    },
  },
};

export const data = {
  //   labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  labels: ["", "", ""],
  datasets: [
    {
      label: "# of Votes",
      data: Data[0].pieChart.data,
      backgroundColor: ["#EE8484", "#F6DC7D", "#93d79a"],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgb(3, 190, 59)",
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return (
    <>
      <Pie data={data} options={options} height="15px" width="20px" />
    </>
  );
}
