import React from "react";
import { useState } from "react";
import "./Calculations.css";

function Calculations() {
  //Result for breaker
  const [message, setMessage] = useState("");
  const calculate = (event) => {
    setMessage(event.target.value);
    console.log("value is: ", event.target.value);
  };
  return (
    <div className="box">
      <div>
        <a href="/">
          <button className="secondButton h3">HOME</button>
        </a>
        <h1 className="h1">CALCULATE</h1>
        <form className="column">
          <output
            className="labels input h2"
            type="text"
            id="Ρεύμα"
            placeholder="Ρεύμα"
            required
          />
          <input
            className="labels input h2"
            type="Text"
            id="Τάση"
            placeholder="Τάση"
            required
          />
          <input
            className="labels input h2"
            type="Text"
            id="Ισχύς"
            placeholder="Ισχύς"
            required
          />
          <button className="mainButton h3" onClick={calculate}>
            Υπολογισμός
          </button>
        </form>
      </div>
    </div>
  );
}
export default Calculations;
