import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";


const LineChart = () => {
  const [age, setAge] = useState(6);
  const [weight, setWeight] = useState(7.5);
  const [length, setLength] = useState(70);
  const chartRef = React.createRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [age],
        datasets: [
          {
            label: "Weight",
            data: [weight],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: false,
          },
          {
            label: "Length",
            data: [length],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Age (months)",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Weight and Length",
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [age, weight, length]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
      <div>
        <label>Age (months):</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Weight:</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default LineChart;
