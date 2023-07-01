import React, { useState, useEffect } from "react";

const BMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const jsonData = localStorage.getItem("cards");
    if (jsonData) {
      const parsedCards = JSON.parse(jsonData);
      setCards(parsedCards);
      if (parsedCards.length > 0) {
        const latestCard = parsedCards[parsedCards.length - 1];
        const parsedHeight = parseFloat(latestCard.height);
        const parsedWeight = parseFloat(latestCard.weight);
        if (!isNaN(parsedHeight) && !isNaN(parsedWeight)) {
          setHeight(parsedHeight);
          setWeight(parsedWeight);
        }
      }
    }
  }, []);
  

  const calculateBMI = () => {
    const bmi = weight / ((height / 100) * (height / 100));
    return bmi.toFixed(2);
  };

  const getBMIStatus = () => {
    const bmi = calculateBMI();

    if (bmi < 18.5) {
      return {
        status: "Underweight",
        color: "red",
      };
    } else if (bmi >= 18.5 && bmi < 25) {
      return {
        status: "Normal weight",
        color: "green",
      };
    } else if (bmi >= 25 && bmi < 30) {
      return {
        status: "Overweight",
        color: "orange",
      };
    } else {
      return {
        status: "Obese",
        color: "red",
      };
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage:
      "url('https://www.cdc.gov/healthyweight/images/assessing/bmi-child-fb-600x315.jpg?_=07166')",
    backgroundSize: "cover",
  };

  const formStyle = {
    width: "400px",
    padding: "30px",
    background: "white",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    marginBottom: "10px",
    padding: "5px",
    fontSize: "18px",
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
    color: getBMIStatus().color,
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
          <p>Status: {getBMIStatus().status}</p>
        </div>
        <br />
        <div>
          {cards.map((card, index) => (
            <div key={index}>
              <h3>{card.title}</h3>
              
            </div>
          ))}
         
        </div>
         <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, similique veniam. Atque possimus inventore et asperiores exercitationem aperiam ipsam, commodi assumenda, animi vitae voluptatem, nisi libero a. Temporibus, atque vel.</div>
      </form>
    </div>
  );
};

export default BMI;
