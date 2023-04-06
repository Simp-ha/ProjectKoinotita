import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
