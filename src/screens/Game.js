import "./Game.css";
import Board from "./Board";
import "../App.css";

function Game() {
  return (
    <div className="game">
      <a href="/">
        <button className="secondButton h3">HOME</button>
      </a>
      <h1 className="App-h1">
        <span className="App-orange">LIGHTS</span>{" "}
        <span className="App-blue">OUT</span>
      </h1>
      <Board size={5} chanceLightStartsOn={0.25} />
    </div>
  );
}

export default Game;
