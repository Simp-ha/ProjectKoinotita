import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="column">
      <h1 className="h1">A Job Presentation</h1>
      <a href="/calculation">
        <button className="secondButton h3">Calculator</button>
      </a>
      <a href="/game">
        <button className="secondButton h3">Game</button>
      </a>
      <a href="/mgame">
        <button className="secondButton h3">Buzzer</button>
      </a>
    </div>
  );
}
export default Home;
