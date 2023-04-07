import "./Buzzer.css";
function Buzzer() {
  return (
    <div>
      <a href="/">
        <button className="secondButton h3">HOME</button>
      </a>
      <a href="/game">
        <button className="secondButton h3">GAME</button>
      </a>
      <div className="container">
        <button className="ButtonA">A</button>
        <button className="ButtonB">B</button>
      </div>
    </div>
  );
}
export default Buzzer;
