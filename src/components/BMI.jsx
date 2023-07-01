import React, { useState } from "react";

const BMI = () => {
  const [height, setHeight] = useState(0.6);
  const [weight, setWeight] = useState(20);

  const calculateBMI = () => {
    const bmi = weight / ((height / 100) * (height / 100));
    return bmi.toFixed(2);
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
      </div>
    </>
  );
};

export default BMI;
