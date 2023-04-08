import "./Buzzer.css";
import { useState } from "react";
function Buzzer() {
  const [winner, setWinner] = useState("");
  const A = (e) => {
    setWinner("A");
    e.preventDefault();
  };
  const B = (e) => {
    if (B) setWinner("B");
    e.preventDefault();
  };

  return (
    <div className="column">
      <a href="/">
        <button className="secondButton h3">HOME</button>
      </a>
      {winner}
      <div className="container">
        <button className="ButtonA" onClick={A}>
          A
        </button>
        <button className="ButtonB" onClick={B}>
          B
        </button>
      </div>
    </div>
  );
}
export default Buzzer;
