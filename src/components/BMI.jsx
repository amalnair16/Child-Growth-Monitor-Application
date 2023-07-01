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

  return (
    <>
      <div>
        <label>Height (in centimeters):</label>
        <input
          type="number"
          step="0.01"
          value={height}
          onChange={(e) => setHeight(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Weight (in kilograms):</label>
        <input
          type="number"
          step="0.01"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
      <div>
        <p>Your BMI: {calculateBMI()}</p>
        <p>Status: {getBMIStatus()}</p>
      </div>
    </>
  );
};

export default BMI;
