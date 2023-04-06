import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Calc from "./screens/Calculations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculations" element={<Calc />} />
        </Routes>
      </div>
    </Router>
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
