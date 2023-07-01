import React, { useState } from "react";

const BMI = () => {
  const [height, setHeight] = useState(109);
  const [weight, setWeight] = useState(18);

  const calculateBMI = () => {
    const bmi = weight / ((height / 100) * (height / 100));
    return bmi.toFixed(2);
  };

  const getBMIStatus = () => {
    const bmi = calculateBMI();

    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f2f2f2",
  };

  const formStyle = {
    width: "300px",
    padding: "20px",
    background: "white",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    marginBottom: "10px",
    padding: "5px",
    fontSize: "16px",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    width: "100%",
  };

  const resultStyle = {
    marginTop: "20px",
    fontSize: "18px",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <div>
          <label>Height (in centimeters):</label>
          <input
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            style={inputStyle}
          />
        </div>
        <div>
          <label>Weight (in kilograms):</label>
          <input
            type="number"
            step="0.01"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            style={inputStyle}
          />
        </div>
        <div>
          <button onClick={calculateBMI} style={buttonStyle}>
            Calculate BMI
          </button>
        </div>
        <div style={resultStyle}>
          <p>Your BMI: {calculateBMI()}</p>
          <p>Status: {getBMIStatus()}</p>
        </div>
      </form>
    </div>
  );
};

export default BMI;
