import React from "react";
import "./Calculations.css";

function Calculations() {
  return (
    <div className="">
      <a href="/">
        <button className="secondButton h3">HOME</button>
      </a>
      <div className="box container">
        <h1 className="h1">CALCULATE</h1>
        <form className="column">
          <input
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
            type=""
            id="Ισχύς"
            placeholder="Ισχύς"
            required
          />
          <button className="mainButton h3">Υπολογισμός</button>
        </form>
      </div>
    </div>
  );
}
export default Calculations;
