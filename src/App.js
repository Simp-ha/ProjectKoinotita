import "./App.css";
import Calc from "./screens/Calculations";
import Home from "./screens/Home";
import Game from "./screens/Game";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculation" element={<Calc />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
/*<header className="App-header">
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
