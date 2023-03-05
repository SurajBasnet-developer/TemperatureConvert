import React, { useState } from "react";

const Temperature = () => {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  const FahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    setCelsius((e.target.value - 32) * (5 / 9));
  };

  const CelsiusChange = (e) => {
    setCelsius(e.target.value);
    setFahrenheit(e.target.value * (9 / 5) + 32);
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <div>
        <label>Fahrenheit</label>
        <input
          type="text"
          id="fahrenheit"
          value={fahrenheit}
          onChange={FahrenheitChange}
        />
      </div>
      <div>
        <label>Celsius</label>
        <input
          type="text"
          id="celsius"
          value={celsius}
          onChange={CelsiusChange}
        />
      </div>
    </div>
  );
};
export default Temperature;
