import React from "react";
import { useState } from "react";
import "./Calculations.css";

function Calculations() {
  //Result for breaker
  const [Volts, setMessage] = useState("");
  const [Watts, setMessage2] = useState("");
  const [result, setResult] = useState("");
  const [isShown, setIsShown] = useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log("value is: ", event.target.value);
  };
  const handleChange2 = (event2) => {
    setMessage2(event2.target.value);
    console.log("value2 is: ", event2.target.value);
  };

  const calculate = (e) => {
    setResult(Watts / Volts);
    e.preventDefault();
    setIsShown(true);
  };
  return (
    <div className="box">
      <div className="column">
        <a href="/">
          <button className="secondButton h3">HOME</button>
        </a>
        <h1 className="h1">CALCULATE</h1>
        {isShown && (
          <div className="box labels h3">
            Η επιθυμιτή ασφάλεια {result} A
          </div>
        )}
        <form className="column">
          <input
            className="labels input h2"
            type="Text"
            id="Τάση "
            placeholder="Τάση σε Volt"
            onChange={handleChange}
            value={Volts}
            required
          />
          <input
            className="labels input h2"
            type="Text"
            id="Ισχύς"
            placeholder="Ισχύς σε Watt"
            value={Watts}
            onChange={handleChange2}
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
