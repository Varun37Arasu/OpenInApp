// import React, { useEffect, useRef, useState } from "react";
// import Chart from "chart.js/auto";
// import Data from "./data";

// const LineChart = ({ data }) => {
//   const chartRef = useRef(null);
//   const chartInstanceRef = useRef(null);
//   const initialData = JSON.parse(localStorage.getItem("data")).lineGraph;
//   console.log(initialData);

//   useEffect(() => {
//     if (chartInstanceRef.current) {
//       chartInstanceRef.current.destroy(); // destroy previous chart instance
//     }

//     const myChartRef = chartRef.current.getContext("2d");
//     chartInstanceRef.current = new Chart(myChartRef, {
//       type: "line",
//       data: {
//         datasets: [
//           {
//             label: Data[0].lineGraph.labels,
//             data: Data[0].lineGraph.data.map((data) => data),
//             borderColor: "rgb(255, 99, 132)",
//             backgroundColor: "rgba(255, 99, 132, 0.5)",
//           },
//           //   {
//           //     label: "Dataset 2",
//           //     data: labels.map(() =>
//           //       faker.datatype.number({ min: -1000, max: 1000 })
//           //     ),
//           //     borderColor: "rgb(53, 162, 235)",
//           //     backgroundColor: "rgba(53, 162, 235, 0.5)",
//           //   },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           legend: {
//             display: false,
//           },
//         },
//       },
//     });

//     return () => {
//       chartInstanceRef.current.destroy(); // clean up on unmount
//     };
//   }, [data]);

//   return (
//     <div className="w-full h-full px-8 py-4 overflow-hidden box-border">
//       <canvas ref={chartRef} className="h-[100%] w-[100%]" />
//     </div>
//   );
// };

// export default LineChart;import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import Data from "./data";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Line Chart",
//     },
//   },
// };

// const labels = Data[0].lineGraph.labels;

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: Data[0].lineGraph.data1,
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//       tension: 0.4,
//     },
//     {
//       label: "Dataset 2",
//       data: Data[0].lineGraph.data2,
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//       tension: 0.4,
//     },
//   ],
// };

// export default function LineChart() {
//   return (
//     <>
//       <Line options={options} data={data} />
//       <div></div>
//     </>
//   );
// }
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import Data from "./data";
import styles from "./Dashboard.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        boxWidth: 20,
      },
    },
    labels: {
      usePointStyle: true,
      pointStyle: "circle",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
      position: "top-left",
    },
  },
  scales: {
    x: {
      offset: false,
      grid: {
        display: false,
        drawOnChartArea: false,
        lineWidth: 0,
        tickMarkLength: 15,
      },
    },
    y: {
      min: 0,
      max: 500,
      ticks: {
        // forces step size to be 50 units
        stepSize: 100,
        maxTicksLimit: 10,
      },
      grid: {
        display: true,
        tickMarkLength: 15,

        // drawOnChartArea: true,
      },
    },
  },
  chartArea: {
    backgroundColor: "white",
  },
};

const labels = Data[0].lineGraph.labels;

export const data = {
  labels,
  datasets: [
    {
      label: "User",
      data: Data[0].lineGraph.data1,
      tension: 0.4,
      borderColor: "rgb(53, 235, 111)",
      backgroundColor: "rgb(53, 235, 111,0.5)",
    },
    {
      label: "Guest",
      data: Data[0].lineGraph.data2,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.4,
    },
  ],
};

export default function LineChart({ width, height }) {
  const deviceWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <>
      {deviceWidth <= 450 ? (
        <Line options={options} data={data} height={height} width={width} />
      ) : (
        <Line options={options} data={data} height="35px" width="150px" />
      )}
    </>
  );
}
