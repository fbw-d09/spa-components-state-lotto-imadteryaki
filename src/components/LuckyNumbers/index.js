import React, { useState } from "react";
import "./LuckyNumbers.css";

const LuckyNumbers = () => {
  const [luckyNumbers, setLuckyNumbers] = useState([]);

  const generateLuckyNumbers = () => {
    const numbers = [];
    while (numbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    const randomSingleNumber = Math.floor(Math.random() * 10) + 1;
    if (!numbers.includes(randomSingleNumber)) {
      numbers.push(randomSingleNumber);
    }
    setLuckyNumbers(numbers);
  };

  const resetNumbers = () => {
    setLuckyNumbers([]);
  };

  return (
    <div className="container">
      <h1 className="title">Lotto 6 / 49</h1>

      <div className="number-wrapper">
        <h2 className="sub-title">Generated Lucky Numbers:</h2>
        <div className="numbers">
          {luckyNumbers.map((number, index) => (
            <div
              key={index}
              className={`number-circle ${index === luckyNumbers.length - 1 ? 'last-number' : ''}`}
            >
              {number}
            </div>
          ))}
        </div>
      </div>

      <div className="button-wrapper">
        <button className="button generate-button" onClick={generateLuckyNumbers}>
          Show me lucky numbers
        </button>
        <button className="button reset-button" onClick={resetNumbers}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default LuckyNumbers;
