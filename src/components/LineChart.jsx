import React, { useEffect, useState, useRef } from "react";
import { Chart } from "chart.js/auto";

const LineChart = () => {
  const [age, setAge] = useState(6);
  const [weight, setWeight] = useState(7.5);
  const [length, setLength] = useState(70);

  const weightChartRef = useRef();
  const lengthChartRef = useRef();

  useEffect(() => {
    const weightChartCtx = weightChartRef.current.getContext("2d");
    const lengthChartCtx = lengthChartRef.current.getContext("2d");

    const weightChart = new Chart(weightChartCtx, {
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
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Age (months)",
              font: {
                size: 14,
                weight: "bold",
              },
            },
            ticks: {
              font: {
                size: 12,
              },
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Weight",
              font: {
                size: 14,
                weight: "bold",
              },
            },
            ticks: {
              font: {
                size: 12,
              },
            },
          },
        },
      },
    });

    const lengthChart = new Chart(lengthChartCtx, {
      type: "line",
      data: {
        labels: [age],
        datasets: [
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
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Age (months)",
              font: {
                size: 14,
                weight: "bold",
              },
            },
            ticks: {
              font: {
                size: 12,
              },
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Length",
              font: {
                size: 14,
                weight: "bold",
              },
            },
            ticks: {
              font: {
                size: 12,
              },
            },
          },
        },
      },
    });

    return () => {
      weightChart.destroy();
      lengthChart.destroy();
    };
  }, [age, weight, length]);

  return (
    <div style={{padding:'5px'}}>
    <div  style={{ display: "flex", height: "400px", border:'1px solid green' }}>
      <div style={{ width: "45%", marginRight: "5%" }}>
        <canvas ref={weightChartRef} style={{ width: "100%", height: "100%" }}></canvas>
        <div style={{ marginTop: "10px" }}>
          <label>Age (months):</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div>
          <label>Weight:</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            style={{ marginLeft: "38px" }}
          />
        </div>
      </div>
      <div style={{ width: "45%" }}>
        <canvas ref={lengthChartRef} style={{ width: "100%", height: "100%" }}></canvas>
        <div style={{ marginTop: "10px" }}>
          <label>Age (months):</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div>
          <label>Length:</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            style={{ marginLeft: "47px" }}
          />
        </div>

      </div>
    </div>
    <div 
    style={{marginTop:'10%', textAlign:'center'}}
    >
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique sit ab distinctio quis reprehenderit id fugit, ea eum eveniet mollitia tempora impedit consequatur amet enim delectus quisquam sapiente soluta?</h4>
    </div>
    </div>
  );
};

export default LineChart;