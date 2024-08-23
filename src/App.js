// src/App.js

import React from "react";
import "./assets/styles/App.css";
import Landing from "./components/landing.js";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Landing />
      </header>
    </div>
  );
}

export default App;
