import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import Landing from "./components/landing.js";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
